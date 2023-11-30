import supertest from "supertest";
import app from "../app";

describe("analyse", () => {
  describe("if the analysis_token is missing", () => {
    it("should return a 400", async () => {
      const { body } = await supertest(app).get("/analyse").expect(400);
      expect(body).toEqual({ error: "Analysis token is required" });
    });
  });
  describe("if analysis_token is present ", () => {
    it("should return a 200 and the token count", async () => {
      const string = "the quick, lazy dog, the";

      const query = {
        search_query: "The quick brown fox jumps over the lazy dog",
      };
      await supertest(app)
        .post("/search")
        .set("content-type", "application/json")
        .send(query);

      const { body, statusCode } = await supertest(app)
        .get("/analyse")
        .query({ analysis_token: string });

      expect(statusCode).toBe(200);
      expect(body).toEqual({
        results: { "the quick": 1, "lazy dog": 1, the: 2 },
        time: expect.any(String), 
      });
    });
  });
});

import supertest from "supertest";
import app from "../app";
import { words } from "../controllers/searchController";

describe("search", () => {
  describe("add search_query route", () => {
    describe("if the search_query is empty", () => {
      it("should return a 400", async () => {
        const query = {
          search_query: "",
        };

        const {statusCode, body} = await supertest(app)
          .post("/search")
          .set("content-type", "application/json")
          .send(query)

          expect(statusCode).toBe(400)

        expect(body).toEqual({ error: "The search query cannot be empty." });
      });
    });
    describe("if the search_query is present", () => {
      it("should return a 201 and add the search_query to the words array", async () => {
        const query = {
          search_query: "The quick brown fox jumps over the lazy dog",
        };
        await supertest(app)
          .post("/search")
          .set("content-type", "application/json")
          .send(query)
          .expect(201);

        expect(words).toContain(query.search_query);
      });
    });
  });
});

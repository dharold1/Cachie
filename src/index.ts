import { config } from "dotenv";
import app from "./app";

// const morgan =Morgan()
config();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

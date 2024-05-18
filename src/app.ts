import express, { Request, Response } from "express";
import dotenv from "dotenv";
import employeerRouter from "./routes/employeeRouter"

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/here", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 


app.use('api',employeerRouter)

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});

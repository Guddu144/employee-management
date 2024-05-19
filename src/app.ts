import express, { Request, Response } from "express";
import dotenv from "dotenv";
import employeeRouter from "./routes/employee"
import employeerRouter from "./routes/employeer"

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 


app.use('/api/employee',employeeRouter)
app.use('/api/employeer',employeerRouter)

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});

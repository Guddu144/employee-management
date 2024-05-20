import express, { Request, Response } from "express";
import dotenv from "dotenv";
import employeeRouter from "./routes/employee"
import employeerRouter from "./routes/employeer"
import userRouter from "./routes/user"
import checkSession from "./middleware/check-session";
import errorHandler from "./middleware/handle-error";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path'

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.use('/api/employee',checkSession,employeeRouter)
app.use('/api/employeer',checkSession,employeerRouter)
app.use('/api/user',userRouter)
app.use(errorHandler)

const swaggerDocument = YAML.load(path.join(__dirname, './swagger/swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});

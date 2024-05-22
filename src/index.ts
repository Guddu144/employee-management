import express, { Request, Response } from "express";
import dotenv from "dotenv";
import ApiRouter from "./routes/index"
import errorHandler from "./middleware/handle-error";
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from "./swagger_output.json";
import './routes/excel-upload/bulk-upload-worker'

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.get("/", (_request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.use('/api',ApiRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
app.use(errorHandler)


app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});

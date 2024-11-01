import express from "express";
import userRoutes from "./routes/users.js"
import empresaRoutes from "./routes/empresa.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/users", userRoutes);

app.use("/", empresaRoutes);
app.use("/empresa", empresaRoutes);

app.listen(8800);
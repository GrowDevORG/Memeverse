import express from "express"

import userRouter from "./routes/UserRoutes"


const app = express();

app.use(express.json());

app.use("/api/v1/users",userRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
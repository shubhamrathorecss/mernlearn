import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route";
import blogRouter from "./routes/blog-route";

const app = express();

app.use(express.json());
app.use("/api/users", router);
app.use("/api/blogs", blogRouter);

mongoose
  .connect(
    "mongodb+srv://shubhamrathore7567:9PwcloYXvWs9ZuME@cluster0.jal7ece.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log(
      "Connected to the database and now listning on http://localhost:5000"
    );
  })
  .catch((err) => {
    console.log(err);
  });

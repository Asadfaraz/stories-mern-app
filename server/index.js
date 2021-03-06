import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

// initializing app using express
const app = express();

// using body-parser as middlware to parse the text from user into json before giving it to handler
// app.use(bodyParser.json({ limit: "30mb", extended: true })); *BODY PARSER IS DEPRECATED*
// USE THIS INSTEAD OF BODY PARSER NOW
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
// using cors as middlware to Cross-Origin Resource Sharing
app.use(cors());

// post route from routes folder
app.use("/posts", postRoutes);

// connectin url from mongo db --- This will later moved to secret file before deploying ---
// mongodb+srv://storiesapp:storiesapp@cluster0.w7rk2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const CONNECTION_URL = "*****";

// assigning port to listen to server
const PORT = process.env.PORT || 5000;

// Now connecting to the mongodb using mongoose
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Sever is running on Port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));

// final step is setting the mongoose
mongoose.set("useFindAndModify", false);

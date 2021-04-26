import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  // getting data from mongo db via mongoose model
  try {
    console.log(req.url);
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Creating post
export const createPost = async (req, res) => {
  //  Creating post to mongoose
  const post = req.body;
  console.log("Post: ", post);
  const newPost = new postMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPosts = (req, res) => {
  console.log(req.method, req.url);
  res.send("This Works!!!");
};

import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.static("views/partials"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/start", (req, res) => {
  res.render("start.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.post("/post", (req, res) => {
  let postTitle = req.body.postTitle;
  let postContent = req.body.postContent;
  const postObj = {
    title: postTitle,
    content: postContent,
  };
  console.log(postObj);
  res.render("start.ejs");
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});

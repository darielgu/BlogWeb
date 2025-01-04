import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.static("views/partials"));
app.set("view engine", "ejs");
let postTitle
let postContent
let posts = [];



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/start", (req, res) => {
  res.render("start.ejs", {
    posts:posts
  });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.post("/post", (req, res) => {
  postTitle = req.body.postTitle;
  postContent = req.body.postContent;
  const postObj = {
    title: postTitle,
    content: postContent,
  };
  posts.push(postObj)
  res.redirect("/start");
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});

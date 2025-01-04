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
app.get("/remove",(req,res)=>{
  res.render("remove.ejs")
})

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
app.post("/remove", (req,res)=>{
  let titleToRemove = req.body.titleToRemove;
  let textToEdit = req.body.textToEdit;
  const postIndex = posts.findIndex(p => p.title === titleToRemove); // finding where the post object is in the posts array

  if (postIndex >= 0) { //If postOBJ index is not negative
    if (textToEdit === "") { // if there is no text field just completely remove
        // Remove the post
        posts.splice(postIndex, 1);
    } else {
        // Edit the post content
        posts[postIndex].content = textToEdit; // else just change text content
    }
}
res.redirect("/start")
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});
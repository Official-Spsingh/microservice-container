const express = require("express");
const cors = require('cors')
const connection = require("./connection");
const postModel = require("./models/postModel");
const app = express();
const POSTS_PORT = 8002
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get("/getPosts", async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json(posts);
    } catch (e) {
        console.log(e);
    }
});

app.get("/getPostById/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postModel.findById(id);
        res.json(post);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.delete("/deletePostById/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postModel.findById(id);
        await post.remove();
        res.json("deleted");
    } catch (e) {
        res.status(500).send(e);
    }
});

app.put("/updatePostById/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const post = await postModel.findByIdAndUpdate(id, { title, content });
        res.json(post);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.post("/addPost", async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = await postModel.create({
            title,
            content,
        });
        res.json(newPost);
    } catch (e) {
        res.status(500).send(e);
    }
});
app.listen(POSTS_PORT, () => {
    console.log("Listening at port " + POSTS_PORT);
});
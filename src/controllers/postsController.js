const Post = require('../models/Posts');

module.exports = {
    async createPost(req, res) {
        try {
            const { } = req.body;
            const post = await Post.create({});
            return res.status(201).json(post);
        } catch (err) {
            return res.status(500).json("Unable to register Post. This err is :" + err.message);
        }
    },
    async findAllPosts(req, res) {
        try {

            const posts = await Post.findAll();
            
            return res.status(200).json(posts);

        } catch (err) {
            return res.status(500).json("Unable to find Posts. This err is :" + err.message);
        }
    },
    async findPostByID(req, res) {
        try {

            const { _id } = req.params;
            const post = await Post.findOne({ _id });

            if (!post) {
                return res.status(200).json({ message: 'Post not Found!' });
            }

            return res.status(200).json(post);

        } catch (err) {
            return res.status(500).json("Unable to find Post. This err is :" + err.message);
        }
    },
    async DeletePost(req, res) {
        try {
            return res.status(200).json("Methd not implemented");
        } catch (err) {
            return res.status(500).json("Unable to delete Post. This err is :" + err.message);
        }
    }
}


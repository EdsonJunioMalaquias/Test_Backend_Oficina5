const Post = require('../models/Post');

module.exports = {
    async createPost(req, res) {
        try {
            const { title, body, userId } = req.body;
            const post = await Post.create({ title, body, userId });
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
            const post = await Post.findByPk(_id);
            if (!post) {
                return res.status(404).json({ message: 'Post not Found!' });
            }

            return res.status(200).json(post);

        } catch (err) {
            return res.status(500).json("Unable to find Post. This err is :" + err.message);
        }
    },
    async DeletePost(req, res) {
        try {

            const { _id } = req.params;
            const post = await Post.findByPk(_id);
            if (!post) {
                return res.status(404).json({ message: 'Post not Found!' });
            }
            await post.destroy({ where: { id: _id } })
            return res.status(204).json("Post Removido com sucesso");

        } catch (err) {
            return res.status(500).json("Unable to find Post. This err is :" + err.message);
        }
    },
    
}


module.exports = {
    getPosts(req,res){
        console.log('getPosts launched')
        res.status(200).send(req.store.posts)
    },

    createPost(req,res){
        console.log('createPost launched')
        let newPost = req.body
        req.store.posts.push(newPost)
        res.status(204).send('new post created')
    },

    updatePost(req,res){
        console.log('updatePost launched')
        let newPost = req.body
        let postId = req.params.postId
        console.log('postId is',postId)
        if (postId){
            console.log('in if section')
            req.store.posts[postId] = newPost
            res.status(204).send(`post with id ${postId} updated`)
        } else if(!postId){
            console.log('in else section')
            res.status(300).send('no post found for updating')
        }
    },

    deletePost(req,res){
        console.log('deletePosts launched')
        let postId = req.params.postId
        if (postId){
            if (!req.store.posts[postId]){
                res.status(400).send('postId out of range')
            }else{
                req.store.posts.splice(req.store.posts[postId], 1)
                res.status(204).send(`the post with id ${postId} removed from store.`)
            }
        } else if (!postId){
            res.status(400).send('no postId declared')
        }
    },

}

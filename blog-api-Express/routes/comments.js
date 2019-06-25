module.exports = {
    getComments(req,res){
        let postId = req.params.postId
        let comments = req.store.posts[postId].comments
        res.status(200).send(req.store.posts[postId].comments)
    },

    postComments(req,res){
        let newComment = req.body.newComment
        let postId = req.params.postId
        if(postId){
            if(!req.store.posts[postId]){
                res.status(400).send('postId out of range')
            } else {
                req.store.posts[postId].comments.push(newComment)
                res.status(204).send(`new comment for post with id ${postId} created`)
            }
        } else{
            res.status(400).send('no postId declared for adding comment')
        }
    },

    updateComment(req,res){
        let newComment = req.body.newComment
        let postId = req.params.postId
        let commentId = req.params.commentId
        //let target = req.store.posts[postId].comments[commentId]//It is another approach to check if target is truthy but it cannot help in finding the root of possible errors
        if(postId){
            if(!req.store.posts[postId]){
                res.status(400).send('postId out of range')
            } else {
                if(commentId){
                    if(!req.store.posts[postId].comments[commentId]){
                        res.status(400).send('commentId out of range')
                    } else{
                        req.store.posts[postId].comments[commentId] = newComment
                        res.status(204).send(`the comment with id ${commentId} in post with id ${postId} updated`)
                    }
                }else{
                    res.status(401).send('no commentId declared')
                }
            }
        } else{
            res.status(400).send('no postId declared')
        }
    },

    deleteComment(req,res){
        console.log('launch deleteComment')
        let postId = req.params.postId
        let commentId = req.params.commentId
        let target = req.store.posts[postId].comments[commentId]//It is another approach to check if target is truthy but it cannot help in finding the root of possible errors
        console.log(`postId: ${postId}, commentId: ${commentId}, target: ${target}`)
        if(postId){
            if(!req.store.posts[postId]){
                res.status(400).send('postId out of range')
            } else {
                if(commentId){
                    if(!req.store.posts[postId].comments[commentId]){
                        res.status(400).send('commentId out of range')
                    } else{
                        req.store.posts[postId].comments.splice(target,1)
                        res.status(204).send(`the comment with id ${commentId} in post with id ${postId} updated`)
                    }
                }else{
                    res.status(401).send('no commentId declared')
                }
            }
        } else{
            res.status(400).send('no postId declared')
        }
    },

}

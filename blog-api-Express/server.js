const logger = require('morgan')
const bodyParser = require('body-parser')

const errorHandler = require('errorhandler')
let callbacks = require('./routes/index.js')
const express = require('express')
const app = express()

let routes = require('./routes')

let store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you donâ€™t know what is ES6, itâ€™s a new JavaScript implementation.',
    comments: [
      {text: 'Cruelâ€¦..var { house, mouse} = No type optimization at all'},
      {text: 'I think youâ€™re undervaluing the benefit of â€˜letâ€™ and â€˜constâ€™.'},
      {text: '(p1,p2)=>{ â€¦ } ,i understand this ,thank you !'}
    ]
  }
]
}

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(logger('dev'))
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
}
//app.use(errorHandler())
app.use((req,res,next)=>{//THIS IS CALLED DECORATION
    req.store = store
    next()
})


app.get('/',(req,res)=>res.send('welcome to blog-api'))

app.get('/posts', callbacks.postsRoutes.getPosts)//(req,res)=> callbacks.postsRoutes.getPosts(req,res))
app.post('/posts', callbacks.postsRoutes.createPost)//(req,res)=> callbacks.postsRoutes.createPost(req,res))
app.put('/posts/:postId', callbacks.postsRoutes.updatePost) //(req,res)=> callbacks.postsRoutes.updatePost(req,res))
app.delete('/posts/:postId', callbacks.postsRoutes.deletePost)//(req,res)=> callbacks.postsRoutes.deletePost(req,res))

app.get('/posts/:postId/comments', callbacks.commentsRoutes.getComments)//(req,res)=>callbacks.commentsRoutes.getComments(req,res))
app.post('/posts/:postId/comments', callbacks.commentsRoutes.postComments)//(req,res)=>callbacks.commentsRoutes.postComments(req,res))
app.put('/posts/:postId/comments/:commentId', callbacks.commentsRoutes.updateComment) //(req,res)=>callbacks.commentsRoutes.updateComment(req,res))
app.delete('/posts/:postId/comments/:commentId', callbacks.commentsRoutes.deleteComment)//(req,res)=>callbacks.commentsRoutes.deleteComment(req,res))

app.listen(3000)

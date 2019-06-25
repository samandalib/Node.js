Module 2 Assignment Lab: RESTful Blog API

The assignment lab for this module is to build a RESTful Blog API. Unlike the tutorial labs, there will be no step by step instructions but all of the information you need to know should be in the modules. Please attempt to solve the assignment lab on your own before viewing the solution.

Assignment Instructions
Most often, servers have complex logic and business relations. This lab will solidify your Express skills and also allow you to practice splitting routes into multiple files for better code organization. The goal is to have a very small main file (server.js) which will allow you to work easily on very large Express projects.

Start with an RESTful Express API server by creating a new project and installing Express middleware which you think you'll need (the minimum is body-parser). Then, implement an Express application which has the following REST API endpoints:

GET and POST /posts
PUT and DELETE /posts/:postId/
GET and POST /posts/:postId/comments
PUT and DELETE /posts/:postId/comments/commentId
Some hints and constraints for the lab:

Create a folder named routes.
Implement all /posts routes in routes/posts.js and all /posts/:postId/comments routes in routes/comments.js.
Use module.exports to export the functions created for posts and comments
Use require to import posts and comments functions
Create routes/index.js which imports and exports posts.js and comments.js so they can be used with require('routes') in server.js
The removal of a blog post must remove all its comments.
Use an in-memory store with the structure similar to this:

let store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
      text: 'Cruel…..var { house, mouse} = No type optimization at all',
      text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
      text: '(p1,p2)=>{ … } ,i understand this ,thank you !'      
    ]
    }
  ]
}

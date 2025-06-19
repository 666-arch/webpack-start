const { getBlogPost } = require("./data");
console.log("hello world");
console.log(getBlogPost())
import "./style.css"
const blogs = getBlogPost();
const ul = document.createElement('ul');
blogs.forEach(blog=>{
    const li = document.createElement('li');
    li.innerText = blog
    ul.appendChild(li)
})
document.body.appendChild(ul)
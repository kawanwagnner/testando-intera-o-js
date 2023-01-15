const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#posts-container');

// Get id from URL

const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

const postPage = document.querySelector('#post')
const postContainer = document.querySelector('#post-container')
const commentsContainer = document.querySelector('#comment-form')

// Get all posts 

async function getAllPosts() {
    const response = await fetch(url);
    
    console.log(response);

    const data = await response.json();

    console.log(data);
    
    loadingElement.classList.add("hide");
    
    data.map((posts) => {
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.innerText = posts.title;
        body.innerText = posts.body;
        link.innerText = "Ler";
        link.setAttribute("href", `/post.html?=${posts.title}`);
        
        postsContainer.appendChild(title);
        postsContainer.appendChild(body);
        postsContainer.appendChild(link);
    })
}

// Get individual post
async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([
      fetch(`${url}/${id}`),
      fetch(`${url}/${id}/comments`),
    ]);
  
    const dataPost = await responsePost.json();
  
    const dataComments = await responseComments.json();
  
    loadingElement.classList.add("hide");
    postPage.classList.remove("hide");
}

if (!postId) {
    getAllPosts()
} else {
    getPost(postId)
}
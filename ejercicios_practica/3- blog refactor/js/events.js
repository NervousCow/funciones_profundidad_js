"use strict";

function addPostsEvents() {

  const posts = document.getElementsByClassName("post");

  for (const post of posts) {
    post.classList.add("closed");

    post.addEventListener("mouseover", () => {
      
      post.classList.remove("closed");
      
      post.classList.add("open");
    });

    post.addEventListener("mouseout", () => {
      // Agregamos la clase de cerrado
      post.classList.add("closed");
      // Quitamos la clase de abierto
      post.classList.remove("open");
    });
  }
}
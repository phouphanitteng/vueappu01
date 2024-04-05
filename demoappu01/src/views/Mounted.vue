<template>
    <div>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      // Fetch data from an API when the component is mounted
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }
  }
  </script>
  
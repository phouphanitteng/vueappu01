<template>
  <div>
    <ul id="data">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <div id="loader"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    var show = document.getElementById("data");
    var loader = document.getElementById("loader");
    show.style.display = "none";
    loader.style.display = "block";
    // Fetch data from an API when the component is mounted
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.posts = data;
        show.style.display = "block";
        loader.style.display = "none";
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  },
};
</script>
<style>
#loader {
  position: absolute;
  left: 40%;
  top: 50%;
  z-index: 1;
  width: 100px;
  height: 100px;
  margin: -76px 0 0 -76px;
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

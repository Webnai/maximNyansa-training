<template>
  <div class="background-container">
    <h1>All Posts</h1>
    <div v-for="post in allPosts" :key="post.id">
      <div class="post-container">
        <div>
          <img src="profile-pic.jpeg" class="profile-pic" />
        </div>
        <div>
          <div class="each-post">
            <div class="post-info">
              <div class="username">willy</div>
              <div class="post-options">close</div>
            </div>
          </div>
          <div class="each-post">
            <div class="post-content">
              <h2 class="post-title">{{ post.title }}</h2>
              <p class="post-text">{{ post.content }}</p>
            </div>
          </div>
          <div class="each-post">
            <div class="post-interact">
              <div class="likes">❤️{{ post.likes.length }}</div>
              <div class="comment">✍️comments</div>
              <div class="share">🌍Share</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      allPosts: ''
    }
  },

  created() {
    axios
      .get('http://localhost:3000/user/posts')
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

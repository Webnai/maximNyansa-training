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
              <div class="username">{{ post.user.username }}</div>
              <div class="post-options">❌</div>
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
import jwtDecode from 'jwt-decode'
export default {
  data() {
    return {
      allPosts: [],
      userId: '',
      deletingLike: ''
    }
  },
  computed: {
    // liked(){
    //     return
    // }
  },
  created() {
    const token = localStorage.getItem('token')
    const user_id = jwtDecode(token).id
    this.userId = user_id
    axios
      .get('http://localhost:3000/post', { headers: { token } })
      .then((res) => {
        console.log(res)
        this.allPosts = res.data.allPost
        console.log(this.allPosts);
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    likePost(postId, likes) {
      const token = localStorage.getItem('token')
      const hasLiked = this.liked(likes)
      if (hasLiked) {
        axios
          .delete(`http://localhost:3000/like/${this.deletingLike}`, { headers: { token } })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      } else {
        axios
          .post('http://localhost:3000/like', { post_id: postId }, { headers: { token } })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      }
      this.deletingLike = ''
    },
    liked(likes) {
      let isLiked = likes.find((like) => {
        if (like.user.id == this.userId) {
          return true
        } else {
          return false
        }
      })
      if (isLiked) {
        this.deletingLike = isLiked.id
        return true
      } else {
        this.deletingLike = ''
        return false
      }
    }
  }
}
</script>
<style>
.background-container {
  background-attachment: fixed;
  margin: 0;
}
h1 {
  color: white;
  margin: 0;
}
.post-container {
  /* background:rgba(255, 255, 255, 0.5); */
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 500px;
  display: flex;
  overflow-wrap: break-word;
  margin-left: 40%;
  margin-bottom: 30px;
  min-height: min-content;
}
.each-post {
  /* background-color: #fff; */
  width: 400px;
}

.profile-pic {
  width: 100px;
  border-radius: 50px;
  margin-top: 15px;
  margin-right: 10px;
}

.post-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  color: gray;
  /* background-color: #fff; */
}

.post-title {
  margin: 0;
}

.post-content {
  margin-top: 0;
}

.post-interact {
  display: flex;
  justify-content: space-between;
}

.container {
  min-height: 100dvh;
  width: 100%;
}

.liked {
  background-color: blue;
  color: #fff;
}
</style>

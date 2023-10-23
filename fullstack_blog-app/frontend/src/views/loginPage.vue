<template>
    <div class="background-container">
    </div>
    <div class="login-container">
        
  
        <form v-if="state === 'register'" @submit.prevent="handleRegister">
          <h2>{{  title }}</h2>
          <!-- Registration form fields -->
          <div class="form-group">
            <div class="input-field">
              <img class="form-icons" src="username.svg">
              <input placeholder="Username" v-model="data.username" type="text" id="username" name="username" required>
            </div>
          </div>

          <div class="form-group">
            <div class="input-field">
              <img class="form-icons" src="email.svg">
            <input placeholder="Email" v-model="data.email" type="email" id="email" name="email" required>
            </div>  
          </div>

          <div class="form-group">
            <div class="input-field">
              <img class="form-icons" src="password.svg">
              <input placeholder="password" v-model="data.password" type="password" id="password" name="password" required>
            </div>  
          </div>

          <div class="form-group">
            <input type="submit" value="Register">
          </div>

          <div class="login-alter">
            <h3 v-if="state=== 'register'">Have an account? <a @click="toggle('login')" style="color: blue; cursor: pointer">Login</a></h3>
            <h3 v-else>Don't have an account? <a @click="toggle('register')" style="color: blue; cursor: pointer">Register</a></h3>
          </div>

        </form>
  
        <form v-else @submit.prevent="handleLogin">
          <h2>{{ title }}</h2>
          <!-- Login form fields -->
          <div class="form-group">
            <div class="input-field">
              <img class="form-icons" src="email.svg">
            <input placeholder="Email" v-model="data.email" type="email" id="email" name="email" required>
            </div>  
          </div>

          <div class="form-group">
            <div class="input-field">
              <img class="form-icons" src="password.svg">
              <input placeholder="password" v-model="data.password" type="password" id="password" name="password" required>
            </div>  
          </div>

          <div class="form-group">
            <input type="submit" value="Login">
          </div>

          <div class="toggle-btn">
            <h3 v-if="state=== 'register'">Have an account? <a @click="toggle('register')" style="color: blue; cursor: pointer">Login</a></h3>
            <h3 v-else>Don't have an account? <a @click="toggle('register')" style="color: blue; cursor: pointer">Register</a></h3>
          </div>
        </form>
  

        <!-- <div><h3><a href="/allPosts">allpost</a></h3></div> -->

      </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        data: {
          username: '',
          email: '',
          password: '',
        },
        state: 'register',
      };
    },
    computed: {
      title() {
        return this.state === 'login' ? 'Login' : 'Register';
      },
    },
    methods: {
      handleLogin() {
        // Handle login form submission
        axios.post("http://localhost:3000/user/login", this.data)
          .then((res) => {
            localStorage.setItem('token', res.data.token);
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      handleRegister() {
        // Handle registration form submission
        axios.post("http://localhost:3000/user", this.data)
          .then((res) => {
            localStorage.setItem('token', res.data.token);
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      toggle(newState) {
        this.state = newState;
      },
    },
  };
  </script>
  
  <style>
    .background-container{
      font-family: Arial, sans-serif;
      color: black;
      background-image: url('background3.png');
      background-size: cover; 
      background-position: center;
      
      /* filter: blur(5px);  */
      z-index: -1;
      background-repeat: no-repeat;
      height: 100vh;
    }

    .login-container {
      background:rgba(255, 255, 255, 0.5);
      padding: 20px;
      border-radius: 60px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 450px;
      position: absolute;
      top: 35%;
      left: 40%;
      margin-top: -50px;
      margin-left: -50px;
    }
  
    .login-container h2 {
        text-align: center;
    }
  
    .form-group {
        margin: 20px 0;
    }
  
    .form-group label {
        display: block;
        margin-bottom: 5px;
    }
  
    .form-group input {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background:rgba(255, 255, 255, 0.5);
    }

    .input-field {
      display: flex;
      margin-left: 20px;
    }

    .form-icons {
      width: 30px;
      height: 30px;
      display: flex
    }
  
    .form-group input[type="submit"] {
        background: #10281D;
        color: #fff;
        cursor: pointer;
        width: 300px;
        font-weight: bold;
        border-radius: 20px;
        margin-left: 95px;
    }
  
    .form-group input[type="submit"]:hover {
        background: #1f533c;
        color: #fff;
    }

    .login-alter {
      display: flex;
      align-items: center;
    }

    h3{
      display: flex;
      margin: 0;
      padding-left: 7rem;
      color: rgb(69, 65, 65);
      font-size: 15px;
    }
  </style>
  
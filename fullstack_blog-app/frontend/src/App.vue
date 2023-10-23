
import router from './router';
<template>
  <div class="background-container">
    <router-view></router-view> 
  </div>
</template>
<style>
body {
  margin: 0;
}
.background-container{
  font-family: Arial, sans-serif;
  color: black;
  background-image: url('background3.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center center; 
  /* filter: blur(5px);  */
  z-index: -1;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
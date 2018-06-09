<template>
  <div id="app">
     <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    
    <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
    <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

body {
    background: rgb(233, 233, 233);
    font-family:Arial, Helvetica, sans-serif;
  }
  html, body {
    height: calc(100% - 50px);
  }

  #app {
    background: #fff;
    width: 50%;
    padding: 30px;
    border-radius: 10px;
    margin: 50px auto 0 auto;
    height: calc(60% - 50px);
    
  }

  .page {
    position: fixed;
    width: inherit;
  }
</style>

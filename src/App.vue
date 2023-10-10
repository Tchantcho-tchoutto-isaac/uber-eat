<template>
 <div id="app">
<router-view></router-view>
 </div>
</template>

<script>
export default { 
  name: 'App',
  components: { 
   }
  
}
</script>

<style>
@import url('./style/reset.CSS');
@import url('https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

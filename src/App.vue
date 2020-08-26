<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    现在是北京时间：{{time}}
    <button @click="fetch">请求</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      time: null,
    };
  },
  mounted() {
    setInterval(() => {
      this.time = new Date().toISOString();
    }, 1000);
  },
  methods: {
    fetch() {
      alert('hello world');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

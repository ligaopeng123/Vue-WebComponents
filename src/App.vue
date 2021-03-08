<template>
  <div id="app">
    <user-card v-if="show" image="https://semantic-ui.com/images/avatar2/large/kristy.png"
               name="User Name"
               email="yourmail@some-email.com"
    ></user-card>

      <user-card
              image="https://semantic-ui.com/images/avatar2/large/kristy.png"
              name="test"
              email="yourmail@some-email.com"
      ></user-card>

    <button @click="onclick">
      测试
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    }
  },
  name: 'App',
  mounted() {

  },
  methods: {
    // 测试web组件生命周期
    onclick() {
      this.show = !this.show;
    }
  }
}
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

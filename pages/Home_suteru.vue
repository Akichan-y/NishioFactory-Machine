<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1>Creating Beautiful Charts Using Vue.js Wrappers For Chart.js</h1>
        <ul>
          <li><router-link to="/chartjs">vue-chartjs</router-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.hero {
  width: 100%;
  height: 10%;
}
.container {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
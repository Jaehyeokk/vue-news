<template>
  <div class="app-header">
    <div class="container">
      <h1 class="title">
        <a href="/">HACKER NEWS</a>
      </h1>
      <ul class="menu-list">
        <li :class="'menu-item'">
          <router-link to="/news">NEWS</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/jobs">JOBS</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/ask">ASK</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-header {
  background-color: #333;
}
.container {
  display: flex;
  align-content: center;
  padding: 10px 20px;
}

.title a {
  display: inline-block;
  padding: 5px 15px;
  margin-right: 30px;
  font-weight: 900;
  color: #f0b90b;
}

.menu-list {
  display: flex;
}

.menu-item {
  position: relative;
}

.menu-item::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 2px;
  height: 50%;
  background-color: #aaa;
  transform: translateY(-50%);
}

.menu-item:first-child::after {
  background-color: transparent;
}

.menu-item a {
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
}

.menu-item a:hover,
.menu-item a.router-link-active {
  color: #f0b90b;
}
</style>

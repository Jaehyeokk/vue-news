<template>
  <div class="news-header">
    <div class="container">
      <h1 class="logo">
        <a href="/">
          Hacker News
        </a>
      </h1>
      <nav class="main-menu">
        <ul class="main-menu-list">
          <li class="main-menu-item">
            <router-link to="/news">
              News
            </router-link>
          </li>
          <li class="main-menu-item">
            <router-link to="/jobs">
              Jobs
            </router-link>
          </li>
          <li class="main-menu-item">
            <router-link to="/ask">
              Ask
            </router-link>
          </li>
        </ul>
      </nav>
      <button class="mobile-menu-btn">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.news-header {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #333;
}
.container {
  display: flex;
  align-items: center;
  width: 1080px;
  padding: 0 20px;
}
.logo a {
  font-size: 20px;
  color: #fff;
  margin-right: 30px;
  color: #f0b90b;
  text-decoration: none;
}
.main-menu-list {
  display: flex;
}

.main-menu-item a {
  padding: 5px 15px;
  color: #fff;
  text-decoration: none;
}

.main-menu-item .router-link-active {
  color: #f0b90b;
}

.mobile-menu-btn {
  display: none;
  padding: 10px;
  border: none;
  font-size: 20px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .container {
    justify-content: space-between;
  }

  .main-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style>

<template>
  <div class="news-header">
    <div class="container">
      <h1 class="logo">
        <router-link to="/">
          Hacker News
        </router-link>
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
      <button class="mobile-menu-btn" @click="openMobileNav">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div v-if="mobile_nav" class="mobile-menu">
      <button class="mobile-close-btn" @click="openMobileNav">
        <i class="fas fa-times"></i>
      </button>
      <ul class="mobile-menu-list">
        <li class="mobile-menu-item">
          <router-link to="/news">
            News
          </router-link>
        </li>
        <li class="mobile-menu-item">
          <router-link to="/jobs">
            Jobs
          </router-link>
        </li>
        <li class="mobile-menu-item">
          <router-link to="/ask">
            Ask
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile_nav: false,
    };
  },
  methods: {
    openMobileNav() {
      this.mobile_nav = !this.mobile_nav;
    },
  },
};
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

/* desktop-menu */
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

/* mobile-menu */
.mobile-menu-btn {
  display: none;
  padding: 10px;
  border: none;
  font-size: 20px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #333;
}

.mobile-close-btn {
  position: absolute;
  right: 20px;
  top: 8px;
  padding: 10px;
  border: none;
  font-size: 22px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
}

.mobile-menu-list {
  padding: 60px 20px 20px;
}

.mobile-menu-item a {
  display: inline-block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
}

.mobile-menu-item .router-link-active {
  color: #f0b90b;
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

  .mobile-menu {
    transform: translateX(0);
  }
}
</style>

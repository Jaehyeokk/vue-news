<template>
  <div class="user-info-wrap">
    <div class="user-info-icon">
      <i class="fas fa-user"></i>
    </div>
    <div class="user-info-text">
      <div class="user-info">
        <slot name="user">
          <!--  -->
        </slot>
      </div>
      <div class="user-info">
        <slot name="created">
          <!--  -->
        </slot>
      </div>
      <div class="user-info">
        <slot name="karma">
          <!--  -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-info-wrap {
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.user-info-icon {
  font-size: 50px;
  color: #333;
  margin-right: 10px;
}

.user-info-text {
  font-size: 14px;
  line-height: 1.3;
}

.user-info-text a {
  color: #222;
}
.user-info-text a:hover {
  color: #f0b90b;
  text-decoration: underline;
}
</style>

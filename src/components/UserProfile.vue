<template>
  <div class="user-info-wrap">
    <div class="user-avatar">
      <slot name="avatar">
        <!--  -->
      </slot>
    </div>
    <div class="user-info">
      <p>
        <span class="user-name">
          <slot name="name">
            <!--  -->
          </slot>
        </span>
      </p>
      <p class="user-karma">
        <slot name="karma">
          <!--  -->
        </slot>
      </p>
      <p class="user-created">
        <slot name="created">
          <!--  -->
        </slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-info-wrap {
  display: flex;
}

.user-avatar {
  font-size: 52px;
  margin-right: 20px;
}

.user-info p {
  font-size: 14px;
  line-height: 1.3;
}

.user-name {
  font-weight: 700;
}
</style>

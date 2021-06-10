<template>
  <div>
    NewsView
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";
export default {
  created() {
    fetchNewsList()
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>

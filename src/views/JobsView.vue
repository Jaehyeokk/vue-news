<template>
  <div>
    JobsView
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";
export default {
  created() {
    fetchJobsList()
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

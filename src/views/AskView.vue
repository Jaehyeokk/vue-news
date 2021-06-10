<template>
  <div>
    AskView
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";
export default {
  created() {
    fetchAskList()
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

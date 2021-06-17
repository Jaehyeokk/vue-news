<template>
  <div class="container">
    <h2 class="view-title">
      Ask
    </h2>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
};
</script>

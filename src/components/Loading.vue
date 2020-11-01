<template>
  <div class="spinner">
    <img :src="loadingImg" alt="Loading..." />
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      loadingImg:
        "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",
    };
  },
};
</script>

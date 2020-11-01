<template>
  <div class="text-center hero">
    <img class="mb-3 app-logo" :src="heroLogo" alt="Vue logo" width="120" />
    <h1 class="mb-4">Vue Sample Project</h1>
    <p class="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://auth0.com/docs/quickstart/spa/vuejs"
      >
        Vue
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      heroLogo: "https://cdn.auth0.com/blog/auth0-vue-sample/assets/logo.png",
    };
  },
};
</script>

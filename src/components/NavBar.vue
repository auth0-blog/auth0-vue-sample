<template>
  <div class="nav-container mb-3">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <div class="navbar-brand logo"></div>
        <MainNav></MainNav>
      </div>
    </nav>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";

export default {
  name: "NavBar",
  components: { MainNav },
};
</script>

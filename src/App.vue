<template>
  <Loading v-if="$auth.isLoading" />
  <div v-else id="app" class="d-flex flex-column h-100">
    <template>
      <NavBar />
      <div class="container flex-grow-1">
        <div class="mt-5">
          <router-view />
        </div>
      </div>
      <Footer />
    </template>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default {
  components: {
    Loading,
    Footer,
    NavBar,
  },
};
</script>

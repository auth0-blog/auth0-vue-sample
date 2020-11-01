<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link to="/" class="nav-link"> Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/profile" class="nav-link">Profile</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/external-api" class="nav-link">
        External API
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MainNav",
};
</script>

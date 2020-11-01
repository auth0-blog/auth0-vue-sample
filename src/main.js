import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Import the Auth0 configuration and plugin
import { domain, clientId, audience } from "../auth_config.json";
import { Auth0Plugin } from "@/auth/auth0-plugin";

import "./assets/css/styles.css";

// Install the authentication plugin
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

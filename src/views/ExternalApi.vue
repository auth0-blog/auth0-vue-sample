<template>
  <div>
    <h1>External API</h1>
    <p>
      You use will use a button to call an external API using an access token,
      and the API will validate it using the API's audience value.
      <strong>This route should be private</strong>.
    </p>
    <div
      class="btn-group mt-5"
      role="group"
      aria-label="External API Requests Examples"
    >
      <button type="button" class="btn btn-primary" @click="callApiEndpoint">
        Get Public Message
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="callApiSecuredEndpoint"
      >
        Get Private Message
      </button>
    </div>

    <div v-if="apiMessage" class="mt-5">
      <h6 class="muted">Result</h6>
      <div class="container-fluid">
        <div class="row">
          <code class="col-12 text-light bg-dark p-4">
            {{ JSON.stringify(apiMessage, null, 2) }}
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { serverUrl } from "../../auth_config.json";
export default {
  name: "Api",
  data() {
    return {
      apiMessage: null,
    };
  },
  methods: {
    async callApiEndpoint() {
      try {
        const response = await fetch(
          `${serverUrl}/api/messages/public-message`,
        );

        const json = await response.json();
        this.apiMessage = json.message;
      } catch (e) {
        this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
      }
    },
    async callApiSecuredEndpoint() {
      const accessToken = await this.$auth.getTokenSilently();

      try {
        const response = await fetch(
          `${serverUrl}/api/messages/protected-message`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        const json = await response.json();
        this.apiMessage = json.message;
      } catch (e) {
        console.log(e);
        this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
      }
    },
  },
};
</script>

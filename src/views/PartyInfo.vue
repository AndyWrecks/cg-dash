<template>
  <div class="home">
    <PartyInfo msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import PartyInfo from "@/components/PartyInfo.vue";

export default {
  name: "Home",
  components: {
    PartyInfo
  }
};
</script>

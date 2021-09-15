<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item v-for="navItem in navItems" :key="navItem.navID" link>
        <v-list-item-avatar>
          <v-img :src="navItem.imgURL" :alt="navItem.navID+'-nav-image'"/>
        </v-list-item-avatar>
        {{navItem.navTitle}}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'sectionNav',
  props: {
    navItems: {
      type: Array
    }
  }
});
</script>

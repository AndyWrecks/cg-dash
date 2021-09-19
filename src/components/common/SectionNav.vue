<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item v-for="navItem in navItems" v-bind:class="{active: navItem.navID === activeId}" :key="navItem.navID" link v-on:click="clicked(navItem.navID)">
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
    },
    activeId: String
  },
  methods: {
    clicked: function (clickEventTargetId: string) {
      this.$emit('clicked', clickEventTargetId);
    }
  }
});
</script>

<style lang="scss">
.active {
  background-color: lightgray;
}
</style>


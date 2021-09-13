<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item v-for="navItem in navItems" :key="navItem.navData.navID" link>
        <v-list-item-avatar>
          <v-img :src="navItem.navData.imgURL" :alt="navItem.navData.navID+'-nav-image'"/>
        </v-list-item-avatar>
        {{navItem.navData.navTitle}}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue, {PropType} from "vue";

export default Vue.extend({
  name: 'sectionNav',
  props: {
    navItems: {
      type: Array
    }
  }
});
</script>

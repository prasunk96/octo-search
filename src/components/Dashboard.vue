<template>
    <div class="dadhBoardContainer">
        <SideBar />
        <MainBody />
    </div>
</template>
<script>
import SideBar from '../components/SideBar.vue';
import MainBody from '../components/MainBody.vue';
import { mapActions, mapState } from "vuex";

export default {
    components: {
        SideBar,
        MainBody
    },
  computed: {
    ...mapState([
      'userProfile'
    ])
  },
  methods: {
    ...mapActions([
      'fetchUserProfile'
    ])
  },
  mounted() {
    this.fetchUserProfile();
  }
}
</script>
<style>
.dadhBoardContainer {
    display: grid;
    grid-template-columns: 3fr 9fr;
    background: var(--navy-blue);
    height: 100vh;
}
</style>

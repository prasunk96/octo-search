<template>
  <Loader v-if="isLoading" />
    <div v-else class="dadhBoardContainer">
        <SideBar />
        <MainBody />
    </div>
</template>
<script>
import SideBar from '../components/SideBar.vue';
import MainBody from '../components/MainBody.vue';
import { mapActions, mapState } from "vuex";
import Loader from '../components/loader.vue';

export default {
    components: {
        SideBar,
        MainBody,
        Loader
    },
  computed: {
    ...mapState([
      'isLoading'
    ])
  },
  methods: {
    ...mapActions([
      'fetchUserProfile'
    ])
  },
  mounted() {
    this.fetchUserProfile(this.$route.params);
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

@media (min-width: 320px) {
  .dadhBoardContainer {
    grid-template-columns: 1fr;
    height: 100%;
  }
}

@media (min-width: 768px) {
  .dadhBoardContainer {
      grid-template-columns: 4fr 8fr;
      height: 100vh;
  }
}

@media (min-width: 1024px) {
    .dadhBoardContainer {
      grid-template-columns: 3fr 9fr;
      height: 100vh;
  }
}
</style>

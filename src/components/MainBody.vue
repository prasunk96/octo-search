<template>
    <section class="mainBody">
        <RepoCard v-for="item in repos" :repo="item" :key="item.node_id" />
    </section>
</template>
<script>
import { mapGetters } from "vuex";
import RepoCard from './RepoCard.vue';

export default {
    components: {
        RepoCard
    },
    computed: mapGetters([
        'repos'
])
}
</script>
<style>
.mainBody {
    height: 100%;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    padding: 15px;
    background: var(--navy-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
}
</style>
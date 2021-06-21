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
    height: 100vh;
    width: 100%;
    overflow: scroll;
    padding: 15px;
    background: var(--navy-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
}

@media (min-width: 320px) {
    .mainBody {
        height: 100%;
        overflow: hidden;
    }
}
@media (min-width: 768px) {
    .mainBody {
        height: 100vh;
        overflow: scroll;
        overflow-x: hidden;
    }
}
@media (min-width: 1024px) {
    .mainBody {
        height: 100vh;
        overflow: scroll;
        overflow-x: hidden;
    }
}
</style>
<template>
    <section class="mainBody">
        <RepoCard v-for="item in repos" :repo="item" :key="item.node_id" />
        <div class="buildWith">
            <h5>Built with</h5>
            <ul>
                <li><a href="https://v3.vuejs.org/guide/introduction.html" target="_blank" rel="noopener noreferrer">Vue</a></li>
                <li><a href="https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api" target="_blank" rel="noopener noreferrer">GitHub API</a></li>
                <li><a href="https://vuex.vuejs.org/guide/" target="_blank" rel="noopener noreferrer">Vuex</a></li>
                <li><a href="https://router.vuejs.org/guide/#html" target="_blank" rel="noopener noreferrer">Vue Router</a></li>
            </ul>
        </div>
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

.buildWith {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 1;
    flex-basis: 100%;
}

.buildWith h5 {
    margin: 0px;
    padding: 0px;
    margin-right: 10px;
    color: var(--some-grey)
}

.buildWith ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0px;
}

.buildWith ul li {
    margin: 0px 10px;
    color: var(--some-grey);
}

.buildWith ul li::before {
    content: "» ";
}

.buildWith ul li a {
    font-size: clamp(16px, 1vw, 20px);
    font-weight: 500;
    text-decoration: none;
    color: var(--mustard-yellow);
    transition: all 0.2s ease-in-out 0s;
    font-family: var(--font-mono);
}

.buildWith ul li a:hover {
    text-decoration: underline;
}

@media (min-width: 320px) {
    .mainBody {
        height: 100%;
        overflow: hidden;
    }
    .buildWith {
        flex-direction: column;
    }

    .buildWith ul {
        flex-direction: column;
    }
    .buildWith ul li::before {
        content: "";
    }
}
@media (min-width: 768px) {
    .mainBody {
        height: 100vh;
        overflow: scroll;
        overflow-x: hidden;
    }
    .buildWith {
        flex-direction: row;
    }

    .buildWith ul {
        flex-direction: row;
    }
    .buildWith ul li::before {
        content: "» ";
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
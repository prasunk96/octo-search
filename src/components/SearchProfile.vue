<template>
    <div class="searchUserPage">
        <div class="logo">
            <img :src="github" alt="githubIcon" />
            <h1>Octo Search</h1>
        </div>
        <div class="inputContianer">
            <input class="serchUserInput" placeholder="username" type="text" @change="(event) => setCurrentSearchedUser(event.target.value)" :value="currentUser" />
            <button class="searchUserButton" @click="handleLoadDashboard">Search</button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import github from '../assets/githubOriginal.svg';

export default {
    data () {
        return {
            github
        }
    },
    computed: {
        ...mapGetters([
            'currentUser',
        ])
    },
    methods: {
        ...mapActions([
            'fetchUserProfile',
            'setCurrentSearchedUser',
            'handleLoadDashboard'
        ])
    }
}
</script>
<style>
.searchUserPage {
    height: 100vh;
    width: 100%;
    background: var(--navy-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.logo {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo img {
    height: 70px;
    width: 70px;
    margin-right: 20px;
}

.logo h1 {
    margin: 0px;
    font-weight: 600px;
    color: var(--mustard-yellow);
}

.inputContianer {
    height: 50px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

.serchUserInput {
    height: inherit;
    flex: 1;
    flex-basis: 80%;
    border-radius: 5px;
    outline: none;
    font-size: clamp(14px, 3vw, 20px);
    padding: 10px;
    background: var(--some-grey);
    color: var(--navy-blue);
}

.searchUserButton {
    height: inherit;
    flex: 1;
    flex-basis: 20%;
    margin-left: 10px;
    background: var(--mustard-yellow);
    outline: none;
    border: none;
    border-radius: 5px;
}

.searchUserButton:hover {
    background: var(--mustar-yellow-other);
}

@media (max-width: 767px) {
    .inputContianer {
        width: 250px;
        height: 40px;
    }
    .logo img {
        height: 50px;
        width: 50px;
        margin-right: 15px;
    }

    .logo h1 {
        font-size: 25px;
        margin: 0px;
        font-weight: 600px;
        color: var(--mustard-yellow);
    }

    .serchUserInput {
        flex: 1;
        flex-basis: 80%;
        font-size: clamp(12px, 2vw, 16px);
    }

    .searchUserButton {
        height: inherit;
        flex-basis: 20%;
    }
}
</style>
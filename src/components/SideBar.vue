<template>
    <section class="sidebar">
        <div class="profileImage">
            <img :src='avatarUrl' alt="avatar" />
        </div>
        <div class="sidebarItem fullName">
            <h1>{{ fullName }}</h1>
        </div>
        <div class="sidebarItem userName">
            <h2>
                <a :href="html_url" target="_blank" rel="noopener noreferrer">
                    {{ `@${userName}` }}
                </a>
            </h2>
        </div>
        <div class="sidebarItem margin" style="font-size: 14px;">{{ company }}</div>
        <div class="sidebarItem margin" style="font-size: 14px;">{{ location }}</div>
        <div class="sidebarItem margin" style="font-size: 14px;">{{ joined }}</div>
        <div class="gitHubDetails">
            <div class="sidebarItem frostMirrorCard">
                <p class="count">{{ repositoriesCount }}</p>
                <p>REPOSITORIES</p>
            </div>
            <div class="sidebarItem frostMirrorCard">
                <p class="count">{{ followers }}</p>
                <p>FOLLOWERS</p>
            </div>
            <div class="sidebarItem frostMirrorCard">
                <p class="count">{{ following }}</p>
                <p>FOLLOWING</p>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    computed: mapGetters([
        'fullName',
        'avatarUrl',
        'userName',
        'company',
        'location',
        'joined',
        'repositoriesCount',
        'followers',
        'following',
        'html_url'
    ])
}
</script>
<style>
.sidebar {
    height: 100vh;
    padding: 10px;
    background: var(--mustard-yellow);
    border-right: 1px solid var(--some-grey-faded);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    color: var(--navy-blue);
    overflow: hidden;
}

.sidebarItem {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    flex-direction: column;
}

.profileImage {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 1rem;
    border: 0.3rem solid var(--navy-blue);
    border-radius: 100%;
    width: 100px;
    height: 100px;
}

.profileImage img {
    width: 100%;
    border-radius: 100%;
    max-width: 100%;
    vertical-align: middle;
}

.gitHubDetails {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

.frostMirrorCard {
    background: var(--navy-blue-faded);
    color: var(--just-white);
    margin: 5px 0px;
    border-radius: 4px;
    backdrop-filter: blur(5px);
    padding: 10px 5px;
}

.frostMirrorCard p {
    padding: 0px;
    margin-bottom: 0px;
    font-size: 12px;
}

.count {
    font-size: 18px !important;
    margin: 0px;
}

.fullName {
    font-weight: 500;
}

.fullName h1 {
    font-size: 18px;
    margin-bottom: 0px;
    font-weight: 600;
}

.userName a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: var(--anchor-color);
    transition: all 0.2s ease-in-out 0s;
    font-family: var(--font-mono);
}

.userName a:hover {
    text-decoration: underline;
}

.margin {
    margin-bottom: 5px;
}
</style>
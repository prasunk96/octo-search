import { createStore } from 'vuex'
import axios from 'axios';
import moment from 'moment';
import { router } from '../routes/router';

export const store = createStore({
    state: {
        userProfile: {},
        userRepos: [],
        error: {},
        currentSearchedUser: '',
        isLoading: false
    },
    mutations: {
        UserProfile (state, data) {
            state.userProfile = data;
        },
        userRepos (state, data) {
            state.userRepos = data;
        },
        error (state, error) {
            state.error = error;
        },
        currentSearchedUser (state, username) {
            state.currentSearchedUser = username;
        },
        isLoading (state, value) {
            state.isLoading = value;
        }
    },
    getters: {
        fullName: state => state.userProfile.name,
        avatarUrl: state => state.userProfile.avatar_url,
        userName: state => state.userProfile.login,
        company: state => state.userProfile.company,
        location: state => state.userProfile.location,
        joined: state => moment(state.userProfile.created_at).format('LL'),
        repositoriesCount: state => state.userProfile.public_repos,
        followers: state => state.userProfile.followers,
        following: state => state.userProfile.following,
        html_url: state => state.userProfile.html_url,
        repos_url: state => state.userProfile.repos_url,
        repos: state => state.userRepos,
        currentUser: state => state.currentSearchedUser
    },
    actions: {
        fetchUserProfile ({ dispatch, commit }, username) {
            const url = `https://api.github.com/users/${username.username}`;
            axios.get(url).then((res) => {
                commit('UserProfile', res.data);
                const reposUrl = res.data.repos_url;
                return axios.get(reposUrl)
            }).then((res) => {
                dispatch('cleanUserReposData', res.data);
            }).catch((err) => {
                console.log(err);
                commit('error', err);
            })
        },
        setCurrentSearchedUser ({ commit }, username) {
            commit('currentSearchedUser', username)
        },
        cleanUserReposData ({ commit }, repos) {
            const cleanedRepoData = repos.map(item => {
                return {
                    id: item.id,
                    language: item.language,
                    name: item.name,
                    node_id: item.node_id,
                    size: item.size,
                    url: item.html_url,
                    stars: item.stargazers_count,
                    description: item.description
                }
            });
            commit('userRepos', cleanedRepoData);
            commit('isLoading', false);
        },
        handleLoadDashboard({ commit, state }) {
            commit('isLoading', true);
            router.push({ name: 'dashboard', params: { username: state.currentSearchedUser } });
        }
    }
})
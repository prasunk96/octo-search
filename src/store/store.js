import { createStore } from 'vuex'
import axios from 'axios';
import moment from 'moment';

export const store = createStore({
    state: {
        userProfile: {},
        error: {}
    },
    mutations: {
        UserProfile (state, data) {
            state.userProfile = data;
        },
        error (state, error) {
            state.error = error;
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
        html_url: state => state.userProfile.html_url


    },
    actions: {
        fetchUserProfile ({ commit }) {
            const url = 'https://api.github.com/users/prasunk96';
            axios.get(url).then((res) => {
                console.log(res.data);
                commit('UserProfile', res.data);
            }).catch((err) => {
                console.log(err);
                commit('error', err);
            })
        }
    }
})
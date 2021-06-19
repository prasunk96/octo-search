<template>
  <div class="repoCard">
    <div class="repoName">
      <img :src="repoSVG" />
      <h1>{{ repo.name }}</h1>
    </div>
    <p>{{ repo.description }}</p>
    <h3 class="language">{{ repo.language }}</h3>
    <div class="metaDetails">
      <div class="repoStars"><img :src="starSVG" /> {{ repo.stars }}</div>
      <div>{{ repo.size }} KB</div>
      <div class="transitionClass" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <a :href="repo.url" target="_blank" rel="noopener noreferrer">
          <!-- <img :src="newTabSVG" /> -->
          <svg style="width:20px;height:20px;" viewBox="0 0 24 24">
            <path
                class="transitionClass"
              :fill="`${isMouseOver ? '#FCA311' : '#14213D'}`"
              d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import repoSVG from "../assets/repoSVG.svg";
import starSVG from "../assets/starSVG.svg";
import newTabSVG from "../assets/newTabSVG.svg";

export default {
  data() {
    return {
      repoSVG,
      starSVG,
      newTabSVG,
        isMouseOver: false
    };
  },
  props: {
    repo: Object,
  },
  methods: {
      handleMouseEnter() {
          this.isMouseOver = true;
      },
      handleMouseLeave() {
          this.isMouseOver = false;
      }
  }
};
</script>
<style>
.repoCard {
  background: var(--just-white);
  height: clamp(250px, 10vh, 300px);
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  flex: 1;
  flex-basis: 30%;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 200ms;
}

.repoCard:hover {
  background: #e9e9e9;
}

.repoCard p {
  margin: 0px;
  padding: 0px;
  font-size: clamp(12px, 1vw, 14px);
}

.language {
  background-color: var(--navy-blue-faded);
  padding: 5px;
  border-radius: 3px;
  font-size: clamp(12px, 1vw, 14px);
  color: var(--just-white);
}

.metaDetails {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
}

.repoName {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
}

.repoName h1 {
  font-size: clamp(14px, 3vw, 18px);
  margin: 0px;
}

.repoName img {
  height: 15px;
  widows: 15px;
  margin-right: 5px;
  margin-top: 3px;
}

.repoStars {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
}

.repoStars img {
  height: 15px;
  widows: 15px;
  margin-right: 5px;
}

.transitionClass {
    transition: all 200ms;
}

</style>

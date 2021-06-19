<template>
  <OctoDashboard />
</template>

<script>
import OctoDashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    OctoDashboard
  }
}
</script>

<style>
#app {
  font-family: var(--font-fam);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100vh;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  widows: 100%;
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0px;
    margin-bottom: 1rem;
    font-weight: 500;
}

:root {
  --just-black: #000000;
  --navy-blue: #14213D;
  --anchor-color: #000dffed;
  --navy-blue-faded: #14213de5;
  --mustard-yellow: #FCA311;
  --some-grey: #E5E5E5;
  --some-grey-faded: #e5e5e51b;
  --just-white: #FFFFFF;
  --font-fam: Inter, system, -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Arial, sans-serif;
  --font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
}
</style>

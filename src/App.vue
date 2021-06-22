<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
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

@media (min-width: 320px) {
  body {
    overflow: auto;
  }
}

* {
  box-sizing: border-box;
  transition: all 300ms;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #fca311 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background:transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #fca311;
    border-radius: 10px;
    border: none;
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
  --mustar-yellow-other: #fca311d6;
  --some-grey: #E5E5E5;
  --some-grey-faded: #e5e5e51b;
  --just-white: #FFFFFF;
  --font-fam: Inter, system, -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Arial, sans-serif;
  --font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
}
</style>

<template>
  <v-app id="app">
    <v-content>
      <v-fade-transition>
        <router-view/>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<style>
#app {
  font-family: 'Acme', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

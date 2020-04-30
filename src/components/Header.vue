<template>
  <div>
    <v-toolbar
      dark
      :src="require('../assets/header.jpg')"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title id="title" class="font-weight-bold">Lalibrairie</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="$router.push('/')">mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<style scoped>
#title {
  font-family: 'Fredoka One', cursive;
}
</style>

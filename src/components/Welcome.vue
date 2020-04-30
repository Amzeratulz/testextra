<template>
  <div>
    <v-img :src="require('../assets/welcome.jpg')"
    fluid
    id="background">
    <v-row>
      <v-col cols="5"></v-col>
      <v-col sm="7">
        <p id="text">{{ msg }}</p>
        <br>
        <p id="subtext">{{subMsg}}</p>
        <br>
        <v-btn large min-width="200" color="primary" @click="$router.push('/dashboard')">Go..</v-btn>
      </v-col>
    </v-row>
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    subMsg: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes example {
  0%   {opacity: 0;}
  100% {opacity: 100;}
}
#background {
  height: 100vh;
  width: 100%;
  animation-name: example;
  animation-duration: 1.5s;
}
#text {
  margin-top: 30%;
  font-weight: bold;
  font-size: 3rem;
  color: GreenYellow;
  animation-name: example;
  animation-duration: 4s;
}
#subtext {
  font-weight: bold;
  font-size: 2rem;
  color: GreenYellow;
  animation-name: example;
  animation-duration: 4s;
}
</style>

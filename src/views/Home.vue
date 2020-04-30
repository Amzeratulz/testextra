<template>
  <div class="home">
    <Welcome subMsg="Let us know what you think.." msg="Welcome to Our Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>

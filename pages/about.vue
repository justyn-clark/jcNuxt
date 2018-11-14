<template>
  <section class="container">
    <div>
      <h1 class="title">{{ name }}</h1>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return { name: 'About' }
  }
}
</script>

<style lang="scss">

</style>

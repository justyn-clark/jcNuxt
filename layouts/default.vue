<template>
  <div>
    <Logo />
    <Nav />
    <nuxt/>
  </div>
</template>
<script>
  import Logo from '~/components/Logo.vue'
  import Nav from '~/components/Nav.vue'
  export default {
    components: {
      Logo,
      Nav
    }
  }
</script>

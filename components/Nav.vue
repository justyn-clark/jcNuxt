<template>
  <nav class="nav">
    <nuxt-link
      class="button--grey"
      to="/">Home
    </nuxt-link>
    <nuxt-link
      class="button--grey"
      to="/about">About
    </nuxt-link>
    <nuxt-link
      class="button--grey"
      to="/contact">Contact
    </nuxt-link>
    <nuxt-link
      class="button--grey"
      to="/portfolio">Portfolio
    </nuxt-link>
    <a
      href="https://github.com/justyn-clark/jcNuxt"
      target="_blank"
      class="button--grey">GitHub</a>
  </nav>
</template>
<script>
  export default {
    name: 'Nav',
  }
</script>

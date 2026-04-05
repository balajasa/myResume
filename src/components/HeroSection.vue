<template>
  <div class="hero-section">
    <h1 class="hero-title">
      Hi, I'm Liberes<br />
      A Developer.
    </h1>
    <p class="hero-description">
      熱愛創造有趣的數位體驗，從網頁到遊戲都難不倒我
    </p>
  </div>
</template>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.hero-section
  position: relative
  z-index: 10
  margin: 0 auto
  padding: 3rem 1.25rem
  max-width: 1152px
  text-align: center

  @media (min-width: 768px)
    padding: 4rem 2rem

.hero-title
  margin-bottom: 1.5rem
  font-weight: 900
  font-size: 3.5rem
  line-height: 1

  @media (min-width: 768px)
    margin-bottom: 2rem
    font-size: 5.5rem

.hero-description
  margin: 0 auto
  max-width: 42rem
  color: $color-text-secondary
  font-size: 1rem

  @media (min-width: 768px)
    font-size: 1.125rem

</style>

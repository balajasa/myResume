<template>
  <div class="hero-section">
    <h1 class="hero-title">
      Hi,<br />
      A Developer.
    </h1>
    <p class="hero-description">
      熱愛創造有趣的數位體驗，從網頁到遊戲都難不倒我。
    </p>
  </div>
</template>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.hero-section
  position: relative
  z-index: 10
  max-width: 1152px
  margin: 0 auto
  padding: 2rem 2rem 5rem
  text-align: center

.hero-title
  font-size: 4.5rem
  font-weight: 900
  line-height: 1
  margin-bottom: 2rem

  @media (min-width: 768px)
    font-size: 8rem

.hero-description
  font-size: 1.125rem
  max-width: 42rem
  margin: 0 auto
  color: $color-text-secondary
</style>
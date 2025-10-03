<template>
  <div id="about" class="about-section">
    <h2 class="section-title">
      About Me.
    </h2>
    <div class="about-content">
      <div class="about-photo">
        photo
      </div>
      <div class="about-text">
        <p class="about-paragraph">
          我是一個熱愛創造的前端工程師，專注於 Angular 和 Cocos 開發。
        </p>
        <p class="about-paragraph">
          喜歡做有趣的互動體驗，從網頁應用到遊戲開發都有涉獵。
        </p>
        <p class="about-paragraph">
          目前擔任前端工程師，也持續探索新技術和創意專案。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.about-section
  position: relative
  z-index: 10
  max-width: 64rem
  margin: 0 auto
  padding: 4rem 2rem

.section-title
  font-size: 3rem
  font-weight: 900
  margin-bottom: 3rem
  text-align: center

  @media (min-width: 768px)
    font-size: 3.75rem

.about-content
  display: flex
  flex-direction: column
  gap: 2rem
  align-items: center

  @media (min-width: 768px)
    flex-direction: row
    align-items: flex-start

.about-photo
  width: 12rem
  height: 12rem
  border-radius: 50%
  flex-shrink: 0
  display: flex
  align-items: center
  justify-content: center
  color: white
  font-size: 0.875rem
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
  background: $gradient-purple

.about-text
  flex: 1

.about-paragraph
  font-size: 1.125rem
  margin-bottom: 1rem
  line-height: 1.6
  color: $color-text-secondary

  &:last-child
    margin-bottom: 0
</style>
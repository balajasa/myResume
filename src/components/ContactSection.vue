<template>
  <div id="contact" class="contact-section">
    <h2 class="section-title">
      Get In Touch.
    </h2>
    <div class="contact-content">
      <div class="contact-links">
        <a href="mailto:balajasasa@gamil.com" class="contact-link">Email</a>
        <a href="#" class="contact-link">GitHub</a>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.contact-section
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

.contact-content
  text-align: center
  display: flex
  flex-direction: column
  gap: 1rem

.contact-description
  font-size: 1.125rem
  color: $color-text-secondary

.contact-links
  display: flex
  justify-content: center
  gap: 1.5rem
  font-size: 1.125rem

.contact-link
  color: $color-text-primary
  text-decoration: none
  transition: opacity 0.2s ease

  &:hover
    opacity: 0.6
</style>
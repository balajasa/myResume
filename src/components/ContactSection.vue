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
  margin: 0 auto
  padding: 3rem 1.25rem
  max-width: 64rem

  @media (min-width: 768px)
    padding: 4rem 2rem

.section-title
  margin-bottom: 3rem
  text-align: center
  font-weight: 900
  font-size: 2rem

  @media (min-width: 768px)
    font-size: 3.75rem

.contact-content
  display: flex
  flex-direction: column
  text-align: center

  gap: 1rem

.contact-description
  color: $color-text-secondary
  font-size: 1.125rem

.contact-links
  display: flex
  justify-content: center
  font-size: 1.125rem

  gap: 1.5rem

.contact-link
  color: $color-text-primary
  text-decoration: none
  transition: opacity 0.2s ease

  &:hover
    opacity: 0.6
</style>

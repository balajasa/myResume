<template>
  <div class="portfolio-page">
    <!-- Stars -->
    <div v-for="star in stars" :key="star.id" class="star" :style="{
      left: `${star.left}%`,
      top: `${star.top}%`,
      animationDelay: `${star.delay}s`
    }">
      <svg width="32" height="32" viewBox="0 0 24 24" class="star-svg">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>
    </div>

    <!-- Navigation -->
    <nav class="navigation">
      <div class="nav-blur">
        <a href="#work" class="nav-link">Work</a>
        <span class="nav-divider">/</span>
        <a href="#skills" class="nav-link">Skills</a>
        <span class="nav-divider">/</span>
        <a href="#about" class="nav-link">About</a>
        <span class="nav-divider">/</span>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
    </nav>

    <!-- Sections -->
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />

    <!-- Footer -->
    <footer class="footer">
      © 2025 Liberes.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ContactSection from '@/components/ContactSection.vue';

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
}

const stars = ref<Star[]>([]);

onMounted(() => {
  const newStars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3
  }));
  stars.value = newStars;
});
</script>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.portfolio-page
  color: $color-text-primary
  background: $bg-main-gradient
  min-height: 100vh
  position: relative
  overflow: hidden

.star
  position: absolute
  animation: pulse 2s infinite

.star-svg
  fill: $color-white
  opacity: 0.7

.navigation
  position: relative
  z-index: 10
  padding-top: 2rem
  display: flex
  justify-content: center

.nav-blur
  backdrop-filter: blur(10px)
  background-color: $bg-nav
  display: flex
  align-items: center
  gap: 1rem
  padding: 0.75rem 1.5rem
  border-radius: 9999px
  font-size: 0.875rem
  font-weight: 500

.nav-link
  color: $color-text-primary
  text-decoration: none
  transition: opacity 0.2s ease

  &:hover
    opacity: 0.6

.nav-divider
  color: $color-text-placeholder

.footer
  position: relative
  z-index: 10
  max-width: 1152px
  margin: 0 auto
  padding: 2rem
  margin-top: 4rem
  text-align: center
  font-size: 0.875rem
  border-top: 1px solid $color-border
  color: $color-text-secondary

@keyframes pulse
  0%, 100%
    opacity: 0.7
  50%
    opacity: 1
</style>
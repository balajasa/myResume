<template>
  <div id="skills" class="skills-section">
    <h2 class="section-title">
      Skills & Tools.
    </h2>
    <div class="skills-grid">
      <div v-for="(skill, idx) in skills" :key="idx" class="skill-card">
        <div :class="['skill-icon', skill.colorClass]">
          {{ skill.icon }}
        </div>
        <div class="skill-content">
          <h3 class="skill-title">
            {{ skill.title }}
          </h3>
          <div class="skill-items">
            <div v-for="(item, i) in skill.items" :key="i" class="skill-item">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SkillCategory {
  title: string;
  icon: string;
  colorClass: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    colorClass: 'bg-gradient-navy',
    items: ['Angular', 'Vue', 'TypeScript', 'SASS / Tailwind CSS', 'Responsive Design']
  },
  {
    title: 'Game Dev',
    icon: '🎮',
    colorClass: 'bg-gradient-brown',
    items: ['Cocos Creator (8+ Games)', 'CSS Animation (10+ Games)', 'Canvas']
  },
  {
    title: 'Dev Tools',
    icon: '🛠️',
    colorClass: 'bg-gradient-caramel',
    items: ['Git / GitHub', 'Angular CLI/ Vite / Webpack', 'Cypress', 'Google Analytics 4']
  },
  {
    title: 'Collaboration & Design',
    icon: '👥',
    colorClass: 'bg-gradient-olive',
    items: ['Agile / Scrum', 'Jira', 'Figma']
  }
];
</script>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.skills-section
  position: relative
  z-index: 10
  margin: 0 auto
  padding: 3rem 1.25rem
  max-width: 1152px

  @media (min-width: 768px)
    padding: 4rem 2rem

.section-title
  margin-bottom: 3rem
  text-align: center
  font-weight: 900
  font-size: 2rem

  @media (min-width: 768px)
    font-size: 3.75rem

.skills-grid
  display: grid

  grid-template-columns: 1fr
  gap: 1.5rem

  @media (min-width: 768px)
    grid-template-columns: repeat(2, 1fr)

.skill-card
  display: flex
  align-items: flex-start
  padding: 2rem
  border-radius: 1.5rem
  background-color: white
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
  transition: box-shadow 0.3s ease

  gap: 1.5rem

  &:hover
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

.skill-icon
  display: flex
  align-items: center
  flex-shrink: 0
  justify-content: center
  width: 4rem
  height: 4rem
  border-radius: 50%
  font-size: 1.5rem

.skill-content
  flex: 1

.skill-title
  margin-bottom: 0.75rem
  color: $color-text-primary
  font-weight: 700
  font-size: 1.5rem

.skill-items
  display: flex
  flex-direction: column

  gap: 0.375rem

.skill-item
  color: $color-text-secondary
  font-size: 0.875rem

// Icon background classes
.bg-gradient-navy
  background: rgba($gradient-navy, 0.5)

.bg-gradient-brown
  background: rgba($gradient-brown, 0.5)

.bg-gradient-olive
  background: rgba($gradient-olive, 0.5)

.bg-gradient-caramel
  background: rgba($gradient-caramel, 0.5)
</style>

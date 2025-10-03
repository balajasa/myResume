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
    colorClass: 'bg-gradient-blue',
    items: ['Angular', 'Vue', 'TypeScript', 'SASS / Tailwind CSS', 'Responsive Design']
  },
  {
    title: 'Game Dev',
    icon: '🎮',
    colorClass: 'bg-gradient-purple',
    items: ['Cocos Creator (5+ Games)', 'CSS Animation (10+ Games)', 'Canvas API']
  },
  {
    title: 'Dev Tools',
    icon: '🛠️',
    colorClass: 'bg-gradient-yellow',
    items: ['Git / GitHub', 'Angular CLI/ Vite / Webpack', 'Cypress']
  },
  {
    title: 'Collaboration & Design',
    icon: '👥',
    colorClass: 'bg-gradient-green',
    items: ['Agile / Scrum', 'Jira', 'Figma']
  }
];
</script>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.skills-section
  position: relative
  z-index: 10
  max-width: 1152px
  margin: 0 auto
  padding: 4rem 2rem

.section-title
  font-size: 3rem
  font-weight: 900
  margin-bottom: 3rem
  text-align: center

  @media (min-width: 768px)
    font-size: 3.75rem

.skills-grid
  display: grid
  grid-template-columns: 1fr
  gap: 1.5rem

  @media (min-width: 768px)
    grid-template-columns: repeat(2, 1fr)

.skill-card
  background-color: white
  border-radius: 1.5rem
  padding: 2rem
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
  display: flex
  align-items: flex-start
  gap: 1.5rem
  transition: box-shadow 0.3s ease

  &:hover
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

.skill-icon
  width: 4rem
  height: 4rem
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  font-size: 1.5rem
  flex-shrink: 0

.skill-content
  flex: 1

.skill-title
  font-size: 1.5rem
  font-weight: 700
  margin-bottom: 0.75rem
  color: $color-text-primary

.skill-items
  display: flex
  flex-direction: column
  gap: 0.375rem

.skill-item
  font-size: 0.875rem
  color: $color-text-secondary

// Gradient classes
.bg-gradient-blue
  background: $gradient-blue

.bg-gradient-purple
  background: $gradient-purple

.bg-gradient-green
  background: $gradient-green

.bg-gradient-yellow
  background: $gradient-yellow
</style>
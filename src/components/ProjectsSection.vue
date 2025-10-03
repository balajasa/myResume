<template>
  <div id="work" class="projects-section">
    <h2 class="section-title">
      Featured Projects.
    </h2>
    <div class="projects-grid">
      <div v-for="(project, idx) in projects" :key="idx" :class="['project-card', project.colorClass]">
        <div class="project-header">
          <div class="project-tag">{{ project.tag }}</div>
        </div>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-preview">
          <img v-if="project.image" :src="project.image" :alt="project.title" class="preview-image" />
          <div v-else class="preview-placeholder">
            專案預覽
          </div>
        </div>
        <div class="project-footer">
          <div class="tech-tags">
            <span v-for="(tech, techIdx) in project.techs" :key="techIdx" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <a :href="project.demoUrl" target="_blank" rel="noopener noreferrer" class="demo-button">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProjectItem {
  title: string;
  colorClass: string;
  tag: string;
  description: string;
  techs: string[];
  image?: string;
  demoUrl: string;
}

const projects: ProjectItem[] = [
  {
    title: 'CSS Animation',
    colorClass: 'bg-gradient-orange',
    tag: 'Angular',
    description: '',
    techs: ['Angular', 'CSS3', 'TypeScript'],
    image: 'src/assets/img/project/whatsnextstop.jpg',
    demoUrl: 'https://example.com/demo1'
  },
  {
    title: 'CSS Animation2',
    colorClass: 'bg-gradient-blue',
    tag: 'Angular',
    description: '',
    techs: ['Angular', 'SCSS', 'Animation'],
    image: '',
    demoUrl: 'https://example.com/demo2'
  },
  {
    title: 'CocosGame Project',
    colorClass: 'bg-gradient-purple',
    tag: 'COCOS',
    description: '',
    techs: ['Cocos Creator', 'JavaScript', 'Game Dev'],
    image: '',
    demoUrl: 'https://example.com/demo3'
  },
  {
    title: `What's Next Stop`,
    colorClass: 'bg-gradient-teal',
    tag: 'VUE',
    description: '',
    techs: ['Vue 3', 'TypeScript', 'API'],
    image: '',
    demoUrl: 'https://balajasa.github.io/whatsnextstop/'
  },
  {
    title: 'Gengar Dashboard',
    colorClass: 'bg-gradient-orange',
    tag: 'VUE',
    description: '',
    techs: ['Vue 3', 'Chart.js', 'Dashboard'],
    image: '',
    demoUrl: 'https://example.com/demo5'
  },
];
</script>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.projects-section
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

.projects-grid
  display: grid
  grid-template-columns: 1fr
  gap: 2rem

  @media (min-width: 768px)
    grid-template-columns: repeat(2, 1fr)

.project-card
  border-radius: 1.5rem
  padding: 2rem
  min-height: 420px
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
  display: flex
  flex-direction: column

.project-header
  display: flex
  justify-content: space-between
  align-items: flex-start
  margin-bottom: 1rem

.project-tag
  font-size: 0.75rem
  color: rgba(255, 255, 255, 0.6)
  font-weight: 500

.project-title
  font-size: 1.875rem
  font-weight: 700
  color: white
  margin-bottom: 0.75rem

.project-description
  color: rgba(255, 255, 255, 0.85)
  font-size: 0.9rem
  line-height: 1.6
  margin-bottom: 1.25rem

.project-preview
  border-radius: 0.75rem
  overflow: hidden
  margin-bottom: 1.25rem
  flex-grow: 1
  display: flex
  align-items: center

.preview-image
  width: 100%
  height: 100%
  object-fit: cover
  display: block

.preview-placeholder
  background-color: rgba(255, 255, 255, 0.9)
  border-radius: 0.75rem
  height: 10rem
  display: flex
  align-items: center
  justify-content: center
  font-size: 0.875rem
  color: $color-text-placeholder
  width: 100%

.project-footer
  display: flex
  justify-content: space-between
  align-items: center
  gap: 1rem
  flex-wrap: wrap

.tech-tags
  display: flex
  gap: 0.5rem
  flex-wrap: wrap

.tech-tag
  font-size: 0.75rem
  color: rgba(255, 255, 255, 0.7)
  background-color: rgba(255, 255, 255, 0.1)
  padding: 0.25rem 0.75rem
  border-radius: 9999px
  font-weight: 500

.demo-button
  display: inline-block
  background-color: rgba(255, 255, 255, 0.9)
  color: $color-text-primary
  padding: 0.5rem 1rem
  border-radius: 0.5rem
  text-decoration: none
  font-size: 0.875rem
  font-weight: 600
  transition: all 0.2s ease
  border: 1px solid rgba(255, 255, 255, 0.2)
  white-space: nowrap

  &:hover
    background-color: white
    transform: translateY(-1px)
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)

// Gradient classes
.bg-gradient-purple
  background: $gradient-purple

.bg-gradient-teal
  background: $gradient-teal

.bg-gradient-orange
  background: $gradient-orange

.bg-gradient-blue
  background: $gradient-blue
</style>
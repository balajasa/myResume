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
    title: 'Cocos Creator 遊戲專案',
    colorClass: 'bg-gradient-brown',
    tag: 'Game',
    description: '使用 Cocos Creator 開發遊戲',
    techs: ['Cocos Creator', 'TypeScript'],
    image: 'src/assets/img/project/cocos.jpg',
    demoUrl: '#'
  },
  {
    title: 'Angular 遊戲客端網頁',
    colorClass: 'bg-gradient-forest',
    tag: 'Angular',
    description: '線上遊戲平台前端介面，提供流暢的遊戲體驗',
    techs: ['Angular', 'SASS', 'TypeScript'],
    image: '',
    demoUrl: '#'
  },
  {
    title: 'Angular 遊戲平台後台',
    colorClass: 'bg-gradient-navy',
    tag: 'Angular',
    description: '遊戲平台管理系統，整合控管系統的監控介面',
    techs: ['Angular', 'Angular Material', 'TypeScript'],
    image: '',
    demoUrl: '#'
  },
  {
    title: `What's Next Stop 旅遊紀錄網站`,
    colorClass: 'bg-gradient-rust',
    tag: 'Vue',
    description: '紀錄我的旅遊網站，並有整合互動地圖、行程管理，且旅行中的趣味小遊戲',
    techs: ['Vue 3', 'Pinia', 'TypeScript', 'Firebase'],
    image: 'src/assets/img/project/whatsnextstop.jpg',
    demoUrl: 'https://balajasa.github.io/whatsnextstop/'
  },
  {
    title: 'Smeargle - 地圖元件庫',
    colorClass: 'bg-gradient-forest',
    tag: 'Vue Library',
    description: '專為旅遊紀錄網站打造的 Vue 3 元件庫，提供世界旅遊地圖、行程規劃等元件',
    techs: ['Vue 3', 'TypeScript', 'Leaflet'],
    image: 'src/assets/img/project/smeargle.jpg',
    demoUrl: '#'
  },
  {
    title: '旅遊紀錄網站 - 後台管理系統',
    colorClass: 'bg-gradient-navy',
    tag: 'Vue',
    description: '使用 Firebase 建立的後台管理系統，實現即時資料同步與身份驗證機制',
    techs: ['Vue 3', 'Firebase', 'TypeScript'],
    image: 'src/assets/img/project/gengar.jpg',
    demoUrl: 'https://balajasasa.gitlab.io/gengar/'
  },
  {
    title: 'komala - 商務管理系統',
    colorClass: 'bg-gradient-rust',
    tag: 'Vue',
    description: '簡易商務管理系統，提供報價單、請款單編寫功能，並支援 PDF 匯出，簡易 CMS 管理系統',
    techs: ['Vue 3', 'TypeScript', 'Firebase', 'HTML2PDF'],
    image: 'src/assets/img/project/komala.jpg',
    demoUrl: 'https://komala-c3f862.gitlab.io/'
  },
  {
    title: '艾爾加科技 企業形象網站',
    colorClass: 'bg-gradient-forest',
    tag: 'Angular',
    description: 'RWD 響應式企業官網，採用現代化設計語言與流暢的使用者體驗',
    techs: ['Angular', 'SASS', 'TypeScript', 'RWD'],
    image: 'src/assets/img/project/agle.jpg',
    demoUrl: 'https://balajasa.github.io/agle/'
  },
  {
    title: '111年台日電商交流研討會 活動網站',
    colorClass: 'bg-gradient-navy',
    tag: 'Event Site',
    description: '台日電商交流研討會官方活動網站，呈現議程、講者介紹與活動資訊，並支援多裝置瀏覽。',
    techs: ['HTML', 'CSS', 'JavaScript', 'RWD'],
    image: 'src/assets/img/project/tjabc.jpg',
    demoUrl: 'https://balajasa.github.io/tjabc_2022/'
  }
];
</script>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.projects-section
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

.projects-grid
  display: grid

  grid-template-columns: 1fr
  gap: 2rem

  @media (min-width: 768px)
    grid-template-columns: repeat(2, 1fr)

.project-card
  display: flex
  flex-direction: column
  padding: 2rem
  min-height: 420px
  border-radius: 1.5rem
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

.project-header
  display: flex
  align-items: flex-start
  justify-content: space-between
  margin-bottom: 1rem

.project-tag
  color: rgba(255, 255, 255, 0.6)
  font-weight: 500
  font-size: 0.75rem

.project-title
  margin-bottom: 0.75rem
  color: white
  font-weight: 700
  font-size: 1.25rem

  @media (min-width: 768px)
    font-size: 1.875rem

.project-description
  margin-bottom: 1.25rem
  color: rgba(255, 255, 255, 0.85)
  font-size: 0.9rem
  line-height: 1.6

.project-preview
  display: flex
  overflow: hidden
  align-items: center
  flex-shrink: 0
  margin-bottom: 1.25rem
  height: 12rem
  border-radius: 0.75rem

.preview-image
  display: block
  width: 100%
  height: 100%

  object-fit: cover
  object-position: top

.preview-placeholder
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  border-radius: 0.75rem
  background-color: rgba(255, 255, 255, 0.9)
  color: $color-text-placeholder
  font-size: 0.875rem

.project-footer
  display: flex
  align-items: center
  flex-wrap: wrap
  justify-content: space-between

  gap: 1rem

.tech-tags
  display: flex
  flex-wrap: wrap

  gap: 0.5rem

.tech-tag
  padding: 0.25rem 0.75rem
  border-radius: 9999px
  background-color: rgba(255, 255, 255, 0.1)
  color: rgba(255, 255, 255, 0.7)
  font-weight: 500
  font-size: 0.75rem

.demo-button
  display: inline-block
  padding: 0.5rem 1rem
  border: 1px solid rgba(255, 255, 255, 0.2)
  border-radius: 0.5rem
  background-color: rgba(255, 255, 255, 0.9)
  color: $color-text-primary
  text-decoration: none
  white-space: nowrap
  font-weight: 600
  font-size: 0.875rem
  transition: all 0.2s ease

  &:hover
    background-color: white
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
    transform: translateY(-1px)

// Gradient classes
.bg-gradient-brown
  background: $gradient-brown

.bg-gradient-forest
  background: $gradient-forest

.bg-gradient-rust
  background: $gradient-rust

.bg-gradient-navy
  background: $gradient-navy
</style>

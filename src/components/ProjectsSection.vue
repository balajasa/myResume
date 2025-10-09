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
    colorClass: 'bg-gradient-purple',
    tag: 'Game',
    description: '使用 Cocos Creator 開發的 2D 遊戲，包含物理引擎與精靈動畫系統',
    techs: ['Cocos Creator', 'TypeScript', 'Game Dev'],
    image: '',
    demoUrl: '#'
  },
  {
    title: 'Angular 遊戲客端網頁',
    colorClass: 'bg-gradient-teal',
    tag: 'Angular',
    description: '線上遊戲平台前端介面，提供流暢的遊戲體驗與即時互動功能',
    techs: ['Angular', 'SASS', 'TypeScript'],
    image: '',
    demoUrl: '#'
  },
  {
    title: 'Angular 遊戲平台後台',
    colorClass: 'bg-gradient-teal',
    tag: 'Angular',
    description: '遊戲平台管理系統，整合控管系統的監控介面',
    techs: ['Angular', 'Angular Material', 'TypeScript'],
    image: '',
    demoUrl: '#'
  },
  {
    title: 'Canvas 賽車遊戲',
    colorClass: 'bg-gradient-teal',
    tag: 'Canvas',
    description: '使用原生 Canvas API 打造的賽車遊戲，實現碰撞偵測與流暢動畫效果',
    techs: ['Canvas API', 'TypeScript', 'SASS'],
    image: '',
    demoUrl: '#'
  },
  {
    title: 'CSS Animation 展示',
    colorClass: 'bg-gradient-purple',
    tag: 'CSS',
    description: '純 CSS 動畫效果集合，展示各種進階動畫技巧與互動效果',
    techs: ['CSS3', 'SASS', 'Animation'],
    image: '',
    demoUrl: '#'
  },
  {
    title: `What's Next Stop 旅遊紀錄網站`,
    colorClass: 'bg-gradient-orange',
    tag: 'Vue',
    description: '全功能旅遊規劃平台，整合互動地圖、行程管理、拍照隨機顯示貓咪、今晚吃什麼？等趣味小遊戲',
    techs: ['Vue 3', 'Pinia', 'TypeScript', 'Firebase', 'Google Analytics 4'],
    image: 'src/assets/img/project/whatsnextstop.jpg',
    demoUrl: 'https://balajasa.github.io/whatsnextstop/'
  },
  {
    title: 'Smeargle - 旅遊元件庫',
    colorClass: 'bg-gradient-purple',
    tag: 'NPM Package',
    description: '專為旅遊紀錄網站打造的 Vue 3 元件庫，提供世界旅遊地圖、行程規劃等元件',
    techs: ['Vue 3', 'TypeScript', 'Leaflet'],
    image: '',
    demoUrl: '#'
  },
  {
    title: '旅遊紀錄網站 - 後台管理系統',
    colorClass: 'bg-gradient-blue',
    tag: 'Vue',
    description: '使用 Firebase 建立的後台管理系統，實現即時資料同步與身份驗證機制',
    techs: ['Vue 3', 'Firebase', 'TypeScript'],
    image: '',
    demoUrl: 'https://balajasasa.gitlab.io/gengar/'
  },
  {
    title: 'komala - 商務管理系統',
    colorClass: 'bg-gradient-blue',
    tag: 'Vue',
    description: '簡易商務管理系統，提供報價單、請款單編寫功能，並支援 PDF 匯出，簡易進銷存管理及客戶管理',
    techs: ['Vue 3', 'TypeScript', 'Firebase', 'HTML2PDF'],
    image: '',
    demoUrl: 'https://komala-c3f862.gitlab.io/'
  },
  {
    title: '艾爾加科技 企業形象網站',
    colorClass: 'bg-gradient-orange',
    tag: 'Angular',
    description: 'RWD 響應式企業官網，採用現代化設計語言與流暢的使用者體驗',
    techs: ['Angular', 'SASS', 'TypeScript', 'RWD'],
    image: '',
    demoUrl: '#'
  },
  {
    title: '熊嗨娛樂城 iOS App',
    colorClass: 'bg-gradient-blue',
    tag: 'iOS',
    description: '原生 iOS 應用開發，提供流暢的使用者體驗與完整的娛樂平台功能',
    techs: ['Swift', 'UIKit', 'iOS'],
    image: '',
    demoUrl: '#'
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

<template>
  <div class="experience-section">
    <h2 class="section-title">
      Experience.
    </h2>
    <div class="experience-list">
      <div v-for="(exp, idx) in experience" :key="idx" class="experience-item">
        <div class="experience-tags">
          <span class="tag tag-company">{{ exp.company }}</span>
          <span class="tag tag-period">{{ exp.year }}</span>
        </div>
        <div class="experience-role">{{ exp.role }}</div>
        <div class="experience-desc">{{ exp.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  desc: string;
}

const experience: ExperienceItem[] = [
  { year: '2020 - ＮＯＷ', company: '凡谷興業有限公司', role: '前端工程師', desc: '負責 Vue.js 專案開發與維護，參與產品功能規劃與 UI/UX 優化，提升網站效能與使用者體驗。' },
  { year: '2019 - 2019', company: '國立清華大學 服務創新與分析研究中心', role: '網頁資訊分析員', desc: '' },
  { year: '2017 - 2019', company: '嘉聯實業股份有限公司', role: '行銷企劃', desc: '' },
  { year: '2015 - 2017', company: '玉美研究股份有限公司', role: '電子商務企劃', desc: '' },
  { year: '2013 - 2015', company: '基甸企業有限公司', role: '電子商務企劃', desc: '' },
];
</script>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.experience-section
  position: relative
  z-index: 10
  max-width: 62.5rem
  margin: 0 auto
  padding: 4rem 2rem

.section-title
  font-size: 4rem
  font-weight: 900
  margin-bottom: 4rem
  text-align: center
  line-height: 1

  @media (min-width: 768px)
    font-size: 6rem

.experience-list
  display: flex
  flex-direction: column
  gap: 3rem

.experience-item
  display: flex
  flex-direction: column
  gap: 1rem
  padding-left: 2rem
  position: relative

  // 左側的線條
  &::before
    content: ''
    position: absolute
    left: 0
    top: 1.5rem
    bottom: -1.5rem
    width: 2px
    background: rgba($color-text-primary, 0.1)

  &:last-child::before
    display: none

  // 左側的圓點
  &::after
    content: ''
    position: absolute
    left: -4px
    top: 1.5rem
    width: 10px
    height: 10px
    border-radius: 50%
    background: #16a085

  @media (max-width: 768px)
    padding-left: 1.5rem

.experience-tags
  display: flex
  flex-wrap: wrap
  gap: 0.75rem
  align-items: center

  @media (max-width: 768px)
    flex-direction: column
    align-items: flex-start

.tag
  display: inline-block
  padding: 0.5rem 1.25rem
  border-radius: 9999px
  color: white
  font-size: 0.875rem
  font-weight: 500
  white-space: nowrap

.tag-company
  background: $gradient-blue

.tag-period
  background: $gradient-purple
  font-size: 0.8rem

.experience-role
  font-size: 1.25rem
  font-weight: 600
  color: $color-text-primary
  margin-top: 0.25rem

.experience-desc
  font-size: 0.95rem
  color: $color-text-secondary
  line-height: 1.6
  max-width: 37.5rem
</style>

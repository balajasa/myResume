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
  { year: '2020 - ＮＯＷ', company: '凡谷興業有限公司', role: '前端工程師', desc: '負責遊戲平台前後台前端開發，使用 Angular 與 Vue 3 建構多個產品介面，並維護 Cocos Creator 遊戲專案。' },
  { year: '2019 - 2019', company: '國立清華大學 服務創新與分析研究中心', role: '網頁資訊分析員', desc: '協助研究中心進行網頁資料蒐集與分析，整理並彙整資訊以支援研究計畫產出。' },
  { year: '2017 - 2019', company: '嘉聯實業股份有限公司', role: '行銷企劃', desc: '規劃與執行品牌行銷活動，負責數位內容產製與社群媒體經營，協助提升品牌知名度。' },
  { year: '2015 - 2017', company: '玉美研究股份有限公司', role: '電子商務企劃', desc: '負責電商平台營運規劃，包含商品上架管理、促銷活動企劃及訂單流程優化。' },
  { year: '2013 - 2015', company: '基甸企業有限公司', role: '電子商務企劃', desc: '參與電商平台建置與日常營運，協助制定銷售策略並追蹤業績數據。' },
];
</script>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.experience-section
  position: relative
  z-index: 10
  margin: 0 auto
  padding: 3rem 1.25rem
  max-width: 62.5rem

  @media (min-width: 768px)
    padding: 4rem 2rem

.section-title
  margin-bottom: 3rem
  text-align: center
  font-weight: 900
  font-size: 2rem
  line-height: 1

  @media (min-width: 768px)
    font-size: 3.75rem

.experience-list
  display: flex
  flex-direction: column

  gap: 3rem

.experience-item
  position: relative
  display: flex
  flex-direction: column
  padding-left: 2rem

  gap: 1rem

  // 左側的線條
  &::before
    position: absolute
    top: 1.5rem
    bottom: -1.5rem
    left: 0
    width: 2px
    background: rgba($color-text-primary, 0.1)
    content: ''

  &:last-child::before
    display: none

  // 左側的圓點
  &::after
    position: absolute
    top: 1.5rem
    left: -4px
    width: 10px
    height: 10px
    border-radius: 50%
    background: #16a085
    content: ''

  @media (max-width: 768px)
    padding-left: 1.5rem

.experience-tags
  display: flex
  align-items: center
  flex-wrap: wrap

  gap: 0.75rem

  @media (max-width: 768px)
    align-items: flex-start
    flex-direction: column

.tag
  display: inline-block
  padding: 0.4rem 1.1rem
  border-radius: 9999px
  white-space: nowrap
  font-weight: 500
  font-size: 0.875rem

.tag-company
  background: #dce8f5
  color: #2c4a6e

.tag-period
  background: #ede5dc
  color: #5c4a3a
  font-size: 0.8rem

.experience-role
  margin-top: 0.25rem
  color: $color-text-primary
  font-weight: 600
  font-size: 1.25rem

.experience-desc
  max-width: 37.5rem
  color: $color-text-secondary
  font-size: 0.95rem
  line-height: 1.6

</style>

<template>
  <div id="about" class="about-section">
    <h2 class="section-title">
      About Me.
    </h2>
    <div class="about-content">
      <div class="about-photo">
        photo
      </div>
      <div class="about-text">
        目前擔任前端工程師，專注於 Cocos Creator 遊戲專案開發，累積超過五年的前端經驗與多款遊戲製作經歷。
        主要負責遊戲客端的互動邏輯、畫面表現與效能優化，並與後端工程師、美術與企劃緊密合作，確保整體遊戲體驗的流暢與一致。

        在遊戲開發部分，熟悉 Cocos Creator 的節點管理、動畫系統與資源載入流程，能獨立開發遊戲 UI、特效與轉場演出。

        除了使用 Cocos，也使用 Angular 開發 html5 遊戲及客端網頁，運用 CSS Animation、Canvas API 等前端技術。
        並製作後台管理系統的前端開發，使用 Angular Material 製作管理介面，協助團隊控管遊戲狀態。

        曾主導專案遊戲的 E2E 自動化測試流程，使用 Cypress 結合 Gusher 進行資料驗證，有效提升專案穩定性與開發效率。

        工作之餘，使用Vue開發個人專案，如：旅遊紀錄網站、旅遊紀錄網站後台、元件庫、公司進銷存管理、文件輸入PDF轉換系統，並研究需求技術(d3.js、Leaflet.js、HTML2PDF)、前端自動化工具，持續實踐新技術。
        我相信遊戲開發不僅是技術的堆疊，更是整合創意與體驗的藝術，期望未來能持續打造兼具娛樂性與完成度的互動作品。
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.about-section
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

.about-content
  display: flex
  flex-direction: column
  gap: 2rem
  align-items: center

  @media (min-width: 768px)
    flex-direction: row
    align-items: flex-start

.about-photo
  width: 12rem
  height: 12rem
  border-radius: 50%
  flex-shrink: 0
  display: flex
  align-items: center
  justify-content: center
  color: white
  font-size: 0.875rem
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
  background: $gradient-purple

.about-text
  flex: 1

.about-paragraph
  font-size: 1.125rem
  margin-bottom: 1rem
  line-height: 1.6
  color: $color-text-secondary

  &:last-child
    margin-bottom: 0
</style>

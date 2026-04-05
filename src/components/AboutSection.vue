<template>
  <div id="about" class="about-section">
    <h2 class="section-title">
      About Me.
    </h2>
    <div class="about-content">
      <div class="about-photo">
        <img src="@/assets/img/portfolio/myphoto.jpg" alt="my photo" class="photo-img" />
      </div>
      <div class="about-text">
        <p class="about-paragraph">
          目前擔任前端工程師，具備五年以上前端開發經驗，累積多款遊戲與 Web 專案實務。
          主要專注於客端互動邏輯、畫面表現與效能優化。能無縫與後端、美術及企劃團隊跨部門協作，確保產品從開發到上線都能維持穩定且一致的使用者體驗。
        </p>
        <p class="about-paragraph">
          在遊戲開發領域，熟悉 Cocos Creator 的節點管理、動畫系統與資源載入流程。能獨立包辦 UI、特效與轉場演出，
          並在實作過程中兼顧程式結構與效能表現，使專案能穩定運行於不同裝置。
        </p>
        <p class="about-paragraph">
          在 Web 前端方面，具備 Angular 與 Vue 的實戰經驗，曾開發 HTML5 遊戲、前端網頁及後台管理系統，並運用 CSS Animation、Canvas 等技術實現互動效果。
          並使用建置具備高度易用性的後台系統，協助團隊進行日常系統與遊戲狀態的管理與維護。
        </p>
        <p class="about-paragraph">
          工作之餘，也保持對技術的強烈好奇心，持續以 Vue 開發個人旅遊足跡網站，並嘗試新技術，如使用 d3.js、Leaflet.js 串接互動地圖，以及開發元件庫與文件轉換工具（HTML2PDF）。
          這些實作不僅讓我持續擴充自己的技術武器庫，嘗試各類不同技術應用的行動力。
        </p>
        <p class="about-paragraph">
          我相信，最迷人的產品體驗，往往來自於最穩定的技術底層與持續不斷的細節優化。
          期望未來能在不同類型的專案中發揮前端與遊戲開發經驗，為團隊提供可靠且長期的技術支援。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '@/styles/variables' as *

.about-section
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

.about-content
  display: flex
  align-items: center
  flex-direction: column

  gap: 2rem

  @media (min-width: 768px)
    align-items: flex-start
    flex-direction: row

.about-photo
  overflow: hidden
  flex-shrink: 0
  width: 8rem
  height: 8rem
  border: 6px solid $gradient-brown
  border-radius: 50%
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

  @media (min-width: 768px)
    width: 12rem
    height: 12rem

.photo-img
  width: 100%
  height: 100%

  object-fit: cover

.about-text
  flex: 1

.about-paragraph
  margin-bottom: 1rem
  color: $color-text-secondary
  font-size: 0.95rem
  line-height: 1.6

  @media (min-width: 768px)
    font-size: 1.125rem

  &:last-child
    margin-bottom: 0
</style>

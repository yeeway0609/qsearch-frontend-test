# QSearch 前端工程師實習生筆試題目 2023

## Q1: 在調整 CSS 格式時，如何盡可能不用 !important ，來覆寫原有樣式？

A: 首先要釐清 CSS 權重的概念，權重大小的排序為 !important > inline style > ID 選擇器 > 類別選擇器 > 元素選擇器  > *，權重較高的選擇器會覆蓋掉權重較小選擇器的樣式。另外若是權重相同，但是較後寫的樣式也會覆蓋先寫的樣式。因此假設說有4個項目都用“類別選擇器”套用了紅色的樣式，我們可以將其中一個項目用“id選擇器”來將他變成藍色的：
```
<ul>
  <li class="red">item 1</li>
  <li class="red">item 2</li>
  <li id="blue" class="red">item 3</li>
  <li class="red">item 4</li>
</ul>

.red {
  color: red;
}

#blue {
  color: blue;
}
```


## Q2: 為何 JS 開發會需要用到 Framework，像是 Angular, React, Vue.js … 等？

A: 我認為以下幾點是需要使用框架開發的原因：
- 提高開發效率： 框架本身提供了許多方便的工具或 API 可以使用，例如 React 本身就有 Hooks API 可以方便開發人員進行狀態管理、數據綁定或是渲染畫面的等等。也有第三方套件例如 React router 可以方便的進行路由管理已開發單頁式應用。此外也會整合測試、程式碼檢查、資源打包...等等的工具，讓開發者可以快速上手。
- 模組化開發： 我們都知道網頁頁面上面有許多元素像是 navbar、sidebar、footer，等等，而當開發人員在撰寫程式碼時，為了避免重複撰寫一樣的程式碼便採用了「元件化開發」的概念。使用框架開發的優點便是能夠方便的使用元件化的方式進行開發。
- 良好的開發架構：通常框架會提供良好的開發典範讓開發者遵循使用，這樣在多人合作時有助於許多開發工程師可以遵循一套標準進行開發，減少維護與溝通的成本。

## Q3: 實作：請利用「素材1 icon或emoji」及「素材2 yt.json」，做出以下HTML版面 (將於實際面試時Demo)。
終端機輸入：
```
cd qsearch-frontend-test
npm i
npm run dev
```
或是：
```
cd qsearch-frontend-test
bun i
bun run dev
```

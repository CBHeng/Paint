# Draw
[目前實作連結](https://cbheng.github.io/draw/)

> 一個類似小畫家 - 前端之刻意練習 !

## Why can I do ?  <br />
把 Javascript 使用更扎實，自我刻意練習的 Side Project，。<br />
刻意練習重點:
* 盡量使用 Javascript ES6
* 使用 HTML5 Canvas
* 不使用JS框架，理解 "設計模式" 為主。
* 程式碼中盡量保持 DRY (Don't repeat yourself) 的初衷

## Design Idea
小畫家的 *工具* 圍繞著 *畫板* 做繪畫動作, 我的想法
*  畫板上，使用者可能會在畫板上使用到手勢(例如:拖移)與動作(例如:選取)，做成核心Lifecycle API，大多依照畫板DOM鼠標事件來做設計。
*  工具上，可以不必再思考如何重繪，專注於工具數據上在畫板上的顯示(例如:座標更新、路徑紀錄、顏色)。
*  簡言 : Canvas負責不斷重繪畫面，工具管理自身數據與物件自身如何繪畫。

## Paint Tool in Canvas Core Api
繪畫核心使用requestAnimationFrame, 不間斷的重繪整個畫板, 不間斷更新畫板上的物件狀態與相關屬性
* drawSelectStyle
  > 物件類工具才會使用的API，如果物件正被選取，該如何繪畫預設選取樣式
* draw
  > 工具本身如何繪畫  

## Paint Tool in Canvas Lifecycle API
Sample： src/js/Module/Tools/Pen.js 普通的筆
Sample： src/js/Module/Tools/Circle.js 圓形物件
1. init === your tool dom click
   > 單點選工具之動作, 大致用來做初始化數據或是在畫板上初始化物件 <br />
2. start or select === mousedown
   > 1. 如果工具類別是＂pen＂筆刷類，使用 start, 比起物件類單純許多，就是畫板點擊當下的動作。
   > 2. 如果工具類別是＂obj＂物件類，使用 select, 在畫板上鼠標點擊時, 會依照工具自定義的選取機制(selectRule),　來決定select是否執行, 所以selectRule是在select之前執行。 
3. move === mousemove
   > 拖移時，大致上會跟start做物件移動搭配, 或是數據儲存更新。
4. stop === mouseup
   > 拖移結束，大致也是數據儲存更新。

## Features
V0.0.1 
1. 畫筆功能
2. 畫物件功能
3. 工具之數據儲存功能

## 還在思考的設計點
1. Canvas stores 到底要直接儲存完整的tool class, 還是tool class 再切一個data api呢?
   >  靈感來自vue.js。
2. tool 是否使用es6 class, 還是用 object {} 來做設定 ?
   >  主要在canvas addCurrentToolToStore 這邊的api, 覺得有點綁手綁腳, 應該要將stores改成數據結構, 而我目前是直接使用複製當前的Tool class到stores陣列內。

## 建議
很歡迎其他提供更好的做法與想法。

## By the way
之前有做過一個類似專案，Canvas 物件拖移客製化 [ 手機殼塗鴉 ]，只是當時那份專案類似Demo性質，只是到後來專案不了了之 (汗顏 - W - lll)。
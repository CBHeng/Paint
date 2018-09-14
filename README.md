# Draw Paint
> [Demo](https://cbheng.github.io/draw/)

## Why can I do ?
> 加強 Javascript ，刻意練習。
- 使用 Javascript ES6
- 使用 HTML5 Canvas
- DRY (Don't repeat yourself)
- Desgin pattarn

## Canvas Core Desgin
> 小畫家的 `工具` 圍繞著 `畫板` 做繪畫動作
-  畫板核心 `Core Api`
    - 繪畫 : 使用requestAnimationFrame不斷重繪畫面
    - Canvas.js - core
-  畫板提供工具修改物件狀態的`Lifecycle API`，`Lifecycle API`依照`鼠標事件`與`使用者可能需要的操作`來做設計API。
    - Canvas.js - coreEventTool
-  工具專注於`物件數據`上的操作 - (例如:座標更新、路徑紀錄、顏色)。
    - Pen.js
    - Circle.js

## Paint Tool in Canvas Core Api
- `drawSelectStyle`
  - 物件類 -> 如果物件正被選取，該如何繪畫`物件預設選取樣式`
  - 筆刷類 -> 無法使用
- `draw`
  - 工具物件如何繪畫  
- 參考範例
  - Pen.js
  - Circle.js

## Paint Tool in Canvas Lifecycle API

- `init` === envent `click` in `tool dom`
   - 點選工具之初始動作 -> 大致用來初始化數據和畫板上初始化物件。
- `start` or `select` === event `mousedown` in canvas
   - start -> 是筆刷類工具的操作, 使用者在畫板鼠標(mousedown)的事件動作。
   - select -> 是物件類工具的操作, 使用者在畫板鼠標(mousedown)的事件動作，需要另外定義選取機制(selectRule)。
       - `selectRule` -> 用來決定物件的選取機制，可以說是工具在畫板上選取物件的演算法。
           - selectRule 會在 canvas core 內執行，依照每個物件的工具型別，來執行目前每個物件選取機制。
           - selectRule 後， 搭配 drawSelectStyle，來完成物件的選取效果。
- `move` === event `mousemove` in canvas
    - 畫板上，鼠標移動時，數據該如何實作，大致上會跟 start 或是 select 搭配。
        - 筆刷類 -> `鼠標拖移，數據如何儲存或更新。`
        - 物件類 -> `物件拖移時，物件數據如何更新。`
- `stop` === event `mouseup` in canvas
    - 畫板上，鼠標放開時，數據該如何實作，大致上會跟 move 搭配。
- 參考範例
     - Pen.js
     - Circle.js

## 還在思考的設計點
1. Canvas stores 到底要直接儲存完整的tool class, 還是tool class 再切一個data api呢?
   >  靈感來自vue.js。
2. tool 是否使用es6 class, 還是用 object {} 來做設定 ?
   >  主要在canvas addCurrentToolToStore 這邊的api, 覺得有點綁手綁腳, 應該要將stores改成數據結構, 而我目前是直接使用複製當前的Tool class到stores陣列內。

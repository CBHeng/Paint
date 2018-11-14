# Paint Canvas
實作小畫家，與 Canvas繪圖 有何不同 ? 
* 易擴充的工具 ( Tool )
* 工具開發，更聚焦數據的變化
* Canvas Tool API 規範

## Demo

[點我->實際範例 ](https://cbheng.github.io/draw/)

使用 PaintJS Module，來初始化小畫家基本工具，PaintJS Module只對Canvas dom、Tool dom 來做初始化。

<font color=#eeeeee size=1>備註: PaintJS Module 不包含 UI Layout 的製訂，需自行調整 UI Layout。</font>

## How to use PaintJS Module ?
* `Canvas` 是 `PaintJS 核心`
* `Pen 、 Circle` 是 PaintJS 的`附屬工具`。
``` javascript
import { Canvas, Pen, Circle } from './Paint/Paint.js'
 
let canvas = new Canvas({
    el: '#Paint',
    tools: {
        pen: Pen,
        circle: Circle
    }
})
```

## Canvas Config API
|名稱|屬性|必填|說明|
|----|-----|----|----|
|`el`|String|Y|只需要 `HTML DOM tag name`，將會以目標名稱自動綁定畫板DOM。|
|`tools`|Object|Y|物件放置`要使用的工具`，自行定義`物件屬性的名稱`。<br />實際單一工具 ( 例如:Pen... ) 將會有客製 API 介紹。|

## Tool Config API

|名稱|屬性|必填|說明|
|----|-----|----|----|
|`dom`|DOM|Y|`工具的DOM`，實際運作綁定 click event。|
|`data`|Callback|Y|此工具繪畫物件，自己需要的數據。<br />必須 `return` 數據，數據必須`物件格式`。|
|`draw`|Callback|Y|此工具繪畫出來的物件，如何使用數據呈現 ? <br /><br />其他參數: `canvas`|
|`drawSelectStyle`|Callback|N|此 API 用來`定義選取後"預設樣式"`該`如何繪畫`。<br>工具產生出來的物件，會有選取預設樣式。<br /><br />其他參數: (`canvas`,`event`)|
|`init`|Callback|N|此API 發生在工具DOM `點選事件 (click event)`上。<br /><br />其他參數: (`canvas`,`event`)|
|`start`|Callback|Y|前提 `init 已觸發`之後。<br />此API 發生在，畫板DOM `鼠標點選 (mousedown event)` 上。<br /><br />其他參數: (`canvas`,`event`)|
|`move`|Callback|Y|前提 `start 已觸發`之後。<br />此API 發生在，畫板DOM `鼠標移動 (mousemove event)` 上。<br /><br />其他參數: (`canvas`,`event`)|
|`stop`|Callback|Y|前提 `move 已觸發`之後。<br />此API 發生在，畫板DOM `鼠標停止 (mouseup event)` 上。<br/>結束後，`物件數據`會將由`核心`自動儲存。<br /><br />其他參數: (`canvas`,`event`)|
|`mouseStyle`|String|N|鼠標圖示路徑。<br />點選工具後，會改變畫板的鼠標圖示。|

## Tool API Example Pen.js
下面為 Pen.js 畫筆 的 [Source code](https://github.com/CBHeng/draw/tree/master/src/js/Paint/tools/Pen.js)，可以搭配上面 `Tool Config API`。

``` javascript

export default {
    dom: document.querySelector('#pen'),
    mouseStyle: "src/image/mouse/pen.png",
    data(canvas) {
        return {
            initialPoint: {
                x: 0,
                y: 0
            },
            path:[],
        }
    },

    init(canvas, event) {

    },

    start(canvas, event) {
        this.initialPoint = {
            x: event.offsetX,
            y: event.offsetY
        }
    },

    move() {
        this.path.push({
            x: event.offsetX,
            y: event.offsetY
        })
    },

    stop(canvas,event) {

    },

    draw(canvas, event) {
        canvas.ctx.moveTo(this.initialPoint.x, this.initialPoint.y);
        
        this.path.forEach( point => {
            canvas.ctx.lineTo(point.x, point.y);
        })
    }
}
```





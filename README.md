# image-click-area-setting-tool

[日本語はこちら](#日本語) | [English is here](#english)

# english

`image-click-area-setting-tool` is a JavaScript package for creating interactive click areas within container elements and handling events triggered by clicking on those areas. This tool allows you to generate a row*col click area at the top of the DOM in a given DOM, and provide a callback function to handle the click by specifying event data.

## Features

- Click inside the specified container to create a region.
- Occurs custom event handling when the region is clicked.
- In debug mode, clickable areas are displayed as border lines, and you can check the index value of each area by clicking.

## Installation

Install the package using npm:

```bash
npm install image-click-area-setting-tool
```
## Usage
### Importing the Tool
```javascript
import { createClickAreas } from  'image-click-area-setting-tool';
```
### Defining Event Data and Callback
Create the index value of the click location, the event name to occur, and a callback function to handle the click event.:

```javascript
const handleClick = (event) => {
  switch (event) {
    case 'start':
      alert('start event clicked');
      break;
    default:
      console.log('event not found:', event);
  }
};

export const clickEventData = [
  { index: 519, event: 'start' },
  { index: 520, event: 'start' },
  { index: 521, event: 'start' },
  // ... add more events as needed
];
```
### Creating Click Areas
Create the click areas dynamically using createClickAreas:

```javascript
const rows = 15;
const cols = 50;

const imageContainer = document.getElementById('imageContainer');

createClickAreas(rows, cols, imageContainer, clickEventData, handleClick, false);
```

## CSS
CSS to generate click area on DOM container:
```css
.click-area {
  position: absolute;
  box-sizing: border-box;
}

.click-area-debug {
  border: 1px solid red;
}

.click-area-style {
  cursor: pointer;
}
```


### API
`createClickAreas(rows, cols, container, eventItems, callback, debug)`

- `rows` (number): The number of rows for the click areas grid.
- `cols` (number): The number of columns for the click areas grid.
- `container` (HTMLElement): The container element in which to create the click areas.
- `eventItems` (ClickEventType): An array of objects with the index of the click area and the name of the event to occur.
- `callback` (function): The function to handle click events.
- `debug` (boolean, optional): Enable debug mode to visually display the clickable areas with borders.

### Example
Below is a full example of how to use the tool:

```javascript
import { createClickAreas } from 'image-click-area-setting-tool';

const handleClick = (event) => {
  switch (event) {
    case 'start':
      alert('start event clicked');
      break;
    default:
      console.log('event not found:', event);
  }
};

const clickEventData: ClickEventType = [
  { index: 519, event: 'start' },
  { index: 520, event: 'start' },
  // ... add more events as needed
];

const rows = 15;
const cols = 50;

const imageContainer = document.getElementById('imageContainer');

createClickAreas(rows, cols, imageContainer, clickEventData, handleClick, false);
```

```HTML
<div id="windowContainer" class="d-flex justify-content-center align-items-center">
    <div id="imageContainer" class="d-flex justify-content-center flex-column image-container">

    <img id="sampleImage" src="./your/image/path" alt="Full Width Image" loading="lazy">
    </div>
</div>
```

### Setting Click Area
Setting the debug option to true will launch the debug mode.
In debug mode, the click area is visualized.
![debug_image](https://raw.githubusercontent.com/FumitakaMurakami/image-click-area-setting-tool/refs/heads/main/assets/img/debug_mode.png)

You can check the index value by clicking on each element.
![debug_image_clicked](https://raw.githubusercontent.com/FumitakaMurakami/image-click-area-setting-tool/refs/heads/main/assets/img/debug_mode_clicked.png)

Once you have decided where you want the click event to occur, record it in ClickEventType array.
Record the click area that causes the event and associate the name of the event that occurs.
```javascript
const clickEventData: ClickEventType = [
  { 
    index: 328, // Setting index number on click area.
    event: 'start' // Setting causes the event name.
  },
  // ... add more events as needed
];
```

Once you have set the event occurrence location, set the event associated with the specified event name.
```javascript
const handleClick = (event) => {
  switch (event) {
    case 'start':
      alert('start event clicked');
      break;
    default:
      console.log('event not found:', event);
  }
};
```

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Contributing
Feel free to contribute to this project by submitting a pull request or opening an issue.
https://github.com/FumitakaMurakami/image-click-area-setting-tool

# 日本語

`image-click-area-setting-tool` は、コンテナ要素内にインタラクティブなクリック領域を作成し、それらの領域をクリックすることによってトリガーされるイベントを処理するための JavaScript パッケージです。このツールを使用すると、指定のDOMコンテナにrow*colのクリック領域をDOM上部に生成し、イベントデータを指定することでクリックを処理するコールバック関数を提供できます。

## image-click-area-setting-toolの特徴

- 指定したコンテナ内にクリック領域を作成します。
- 領域がクリックされたときのカスタムイベント処理を発火。
- デバッグモードでクリック可能な領域をボーダーラインで表示し、クリックすることで各領域のindex値を確認できます。

## インストール

パッケージをインストールする npm:

```bash
npm install image-click-area-setting-tool
```
## 使用法
### インポート
```javascript
import { createClickAreas } from  'image-click-area-setting-tool';
```
### イベントデータとコールバックの定義
クリック箇所のindex値と発火するイベント名、クリックイベントを処理するコールバック関数を作成します。:

```javascript
const handleClick = (event) => {
  switch (event) {
    case 'start':
      alert('start event clicked');
      break;
    default:
      console.log('event not found:', event);
  }
};

export const clickEventData = [
  { index: 519, event: 'start' },
  { index: 520, event: 'start' },
  { index: 521, event: 'start' },
  // ... add more events as needed
];
```
### クリックエリアを生成
createClickAreas を使用して、クリック領域を動的に作成します。

```javascript
const rows = 15;
const cols = 50;

const imageContainer = document.getElementById('imageContainer');

createClickAreas(rows, cols, imageContainer, clickEventData, handleClick, false);
```

## CSS
DOMコンテナー上にクリックエリアを生成するためのCSS:
```css
.click-area {
  position: absolute;
  box-sizing: border-box;
}

.click-area-debug {
  border: 1px solid red;
}

.click-area-style {
  cursor: pointer;
}
```


### API
`createClickAreas(rows, cols, container, eventItems, callback, debug)`

- `rows` (数値): クリック領域グリッドの行数。
- `cols` (数値): クリック領域グリッドの列数。
- `container` (HTMLElement): クリック領域を作成するコンテナ要素。
- `eventItems` (ClickEventType): クリックエリアのインデックスと発火するイベント名のオブジェクトの配列。
- `callback` (コールバック関数): クリックイベントを処理する関数。
- `debug` (ブール値、オプション): デバッグモードを有効にします。

### サンプル
以下がサンプルコード:

```javascript
import { createClickAreas } from 'image-click-area-setting-tool';

const handleClick = (event) => {
  switch (event) {
    case 'start':
      alert('start event clicked');
      break;
    default:
      console.log('event not found:', event);
  }
};

const clickEventData: ClickEventType = [
  { index: 519, event: 'start' },
  { index: 520, event: 'start' },
  // ... add more events as needed
];

const rows = 15;
const cols = 50;

const imageContainer = document.getElementById('imageContainer');

createClickAreas(rows, cols, imageContainer, clickEventData, handleClick, false);
```

```HTML
<div id="windowContainer" class="d-flex justify-content-center align-items-center">
    <div id="imageContainer" class="d-flex justify-content-center flex-column image-container">

    <img id="sampleImage" src="./your/image/path" alt="Full Width Image" loading="lazy">
    </div>
</div>
```

### クリックエリアの設定法
デバッグオプションをtrueに設定すると、デバッグモードが起動します。
デバッグモードでは、クリック領域が視覚化されます。
![debug_image](https://raw.githubusercontent.com/FumitakaMurakami/image-click-area-setting-tool/refs/heads/main/assets/img/debug_mode.png)

各要素をクリックするとインデックス値を確認できます。
![debug_image_clicked](https://raw.githubusercontent.com/FumitakaMurakami/image-click-area-setting-tool/refs/heads/main/assets/img/debug_mode_clicked.png)

クリックイベントを発火させる場所を決定したら、ClickEventType配列に記述します。
イベントを引き起こすクリック領域を記録し、発生したイベントの名前を紐づけます。
```javascript
const clickEventData: ClickEventType = [
  { 
    index: 328, // Setting index number on click area.
    event: 'start' // Setting causes the event name.
  },
  // ... add more events as needed
];
```

イベントの発生場所を設定したら、指定したイベント名に関連付けられたイベントの処理内容を設定します。
```javascript
const handleClick = (event) => {
  switch (event) {
    case 'start':
      alert('start event clicked');
      break;
    default:
      console.log('event not found:', event);
  }
};
```

### ライセンス
このプロジェクトは MIT ライセンスに基づいてライセンスされています。詳細については、LICENSEファイルを参照してください。

### コントリビュート
プルリクエストを送信したり、問題をオープンしたりして、お気軽にこのプロジェクトに貢献してください。
https://github.com/FumitakaMurakami/image-click-area-setting-tool
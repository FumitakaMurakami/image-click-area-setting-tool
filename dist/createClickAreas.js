"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClickAreas = void 0;
const createClickAreas = (rows, cols, container, eventItems, callback, debug = false) => {
    container.querySelectorAll('.click-area').forEach(area => area.remove());
    const widthPercent = 100 / cols;
    const heightPercent = 100 / rows;
    let index = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const clickArea = document.createElement('div');
            clickArea.classList.add('click-area');
            clickArea.style.width = `${widthPercent}%`;
            clickArea.style.height = `${heightPercent}%`;
            clickArea.style.top = `${i * heightPercent}%`;
            clickArea.style.left = `${j * widthPercent}%`;
            clickArea.setAttribute('data-index', `${index}`);
            // クリックイベントリスナーを追加
            (function (index) {
                let events = null;
                const linkItem = eventItems.find(item => item.index === index);
                if (debug)
                    clickArea.classList.add('click-area-debug');
                if (linkItem) {
                    events = linkItem.event;
                    clickArea.classList.add('click-area-style');
                }
                clickArea.addEventListener('click', () => {
                    if (events) {
                        callback(events);
                        clickArea.classList.add('click-area-style');
                    }
                    else {
                        if (debug)
                            alert(`index number: ${index}`);
                    }
                });
            })(index);
            container.appendChild(clickArea);
            index++;
        }
    }
};
exports.createClickAreas = createClickAreas;

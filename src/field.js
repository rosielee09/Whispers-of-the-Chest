'use strict';
import * as sound from './sound.js';


const TREASURE_SIZE = 80;
export const ItemType = Object.freeze({
    mermaid: 'mermaid',
    treasure: 'treasure',
})

export class Field {
  constructor(mermaidCount, treasureCount) {
    this.mermaidCount = mermaidCount;
    this.treasureCount = treasureCount;

    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', this.onClick);
  }

  init() {
    this.field.innerHTML = '';
    this.fieldRect = this.field.getBoundingClientRect();
    this._addItem('treasure', this.treasureCount, 'assets/treasure.svg');
    this._addItem('mermaid', this.mermaidCount, 'assets/mermaid.png');
  }

  setClickListener(onItemClick){
    this.onItemClick = onItemClick;
  }

   _addItem (className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - TREASURE_SIZE;
    const y2 = this.fieldRect.height - TREASURE_SIZE;
  
    for(let i = 0; i < count; i++){
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  onClick = event => {
    const target = event.target;
    if(target.matches('.treasure')){
      target.remove();      
      sound.playTreasure();    
      this.onItemClick && this.onItemClick(ItemType.treasure);
      } else if(target.matches('.mermaid')){
      this.onItemClick && this.onItemClick(ItemType.mermaid);
    }
  }
}


function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}

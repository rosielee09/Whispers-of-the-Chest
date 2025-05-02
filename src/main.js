'use strict';
import PopUp from './popup.js';
import {GameBuilder,  Reason}  from './game.js';
import * as sound from './sound.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(13)
  .withMermaidCount(17)
  .withTreasureCount(17)
  .build();

game.setGameStopListener((reason)=>{
  
  let message;
  switch(reason){
    case Reason.cancel:
      message = 'Oops..Replay ❓';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'You collected all treasure 💰';
      sound.playwin();
      break;
    case Reason.lose:
      message = 'You lost! The mermaid captured you 🧜‍♀️🏴‍☠️';
      sound.playTreasure();
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(()=>{
  game.start(); 
});

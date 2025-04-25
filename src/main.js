'use strict';
import PopUp from './popup.js';
import {GameBuilder,  Reason}  from './game.js';
import * as sound from './sound.js';



const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(13)
  .withFshCount(17)
  .withGarbageCount(17)
  .build();

game.setGameStopListener((reason)=>{
  
  let message;
  switch(reason){
    case Reason.cancel:
      message = 'Oops..Replay ❓';
      sound.alertSound();
      break;
    case Reason.win:
      message = 'You collected all treasure 💰';
      sound.winSound();
      break;
    case Reason.lose:
      message = 'Too slow! The mermaid stole your treasures! 🧜‍♀️🏴‍☠️';
      sound.treasureSound();
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(()=>{
  game.start(); 
});
"use strict";

const treasureSound = new Audio("./sound/treasure_click.mp3");
const alertSound = new Audio("./sound/alert.wav");
const bgSound = new Audio("./sound/background.mp3");
const mermaidSound = new Audio("./sound/mermaid_click.mp3");
const winSound = new Audio("./sound/game_win.mp3");

export function playTreasure() {
  playSound(treasureSound);
}

export function playMermaid() {
  playSound(mermaidSound);
}

export function playAlert() {
  playSound(alertSound);
}

export function playBackground() {
  playSound(bgSound);
}

export function StopBackground() {
  stopSound(bgSound);
}

export function playwin() {
  playSound(winSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

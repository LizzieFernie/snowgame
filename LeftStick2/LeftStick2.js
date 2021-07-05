/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeftStick2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("left_stick", "./LeftStick2/costumes/left_stick.png", {
        x: 258,
        y: 102
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}

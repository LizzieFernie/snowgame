/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hat2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("hat", "./Hat2/costumes/hat.png", { x: 352, y: 274 })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}

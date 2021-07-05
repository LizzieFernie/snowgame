/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Snowmanface2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("snowmanface", "./Snowmanface2/costumes/snowmanface.png", {
        x: 400,
        y: 291
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}

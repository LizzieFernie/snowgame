/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RightHand2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("right_hand", "./RightHand2/costumes/right_hand.svg", {
        x: 92.60572855661425,
        y: 148.00607913246523
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}

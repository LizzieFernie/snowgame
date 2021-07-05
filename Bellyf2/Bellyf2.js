/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bellyf2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bellyf", "./Bellyf2/costumes/bellyf.png", {
        x: 191.5,
        y: 183
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "bellyf" },
        this.whenIReceiveBellyf
      )
    ];
  }

  *whenIReceiveBellyf() {
    this.broadcast("bellyShow");
  }
}

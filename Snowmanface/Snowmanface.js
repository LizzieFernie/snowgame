/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Snowmanface extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("snowmanface", "./Snowmanface/costumes/snowmanface.png", {
        x: 400,
        y: 291
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "snowmanface" },
        this.whenIReceiveSnowmanface
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSnowmanface() {
    this.visible = true;
  }
}

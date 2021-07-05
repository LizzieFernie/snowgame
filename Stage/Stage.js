/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blue Sky 2", "./Stage/costumes/Blue Sky 2.svg", {
        x: 239.89170000000007,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.belly = 1;
    this.vars.hat = 1;
    this.vars.face = 1;
    this.vars.scarf = 0;
    this.vars.tillscarfcollected = 1;
    this.vars.done = 2;
      *whenGreenFlagClicked() {
    this.costume = "Blue Sky 2";
    //this.broadcast("switch");
  }
  }
}

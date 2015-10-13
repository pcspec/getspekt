"use strict";

import {PieceEntity} from "./entity/PieceEntity.es";
import {TowerEntity} from "./entity/TowerEntity.es";
import {SpecFactory} from "./factory/SpecFactory.es";

const Raphael = require("raphael");
let s = Raphael("svg-spec", 1200, 800);

function renderRect(coords) {
  var {x, y, w, h} = coords;
  s.rect(x, y, w, h);
}

function renderText(coords, text) {
  var {x, y, ...size} = coords;
  s.text(x, y, text)
}

let
  tower,
  system,
  cpu
;

system = new SpecFactory();
system.name = "system";
tower = new TowerEntity("system");
tower.global = {x: 350, y: 150, w: 300, h: 350};
system.addPiece(tower);

cpu = new PieceEntity("cpu");
cpu.tower = {x: 400, y: 200, w: 50, h: 50};
cpu.model = {x: 50, y: 50, w:50, h: 50};
system.addPiece(cpu);
//old
let coords = new Coords();
coords.tower = {x: 350, y: 150, w: 300, h: 350};
renderRect(coords.tower);

// cpu
let cpu = {};
cpu = piece({x: 400, y: 200, w: 50, h: 50}, cpu);
cpu = anchor(
  image(
    label(
      icon(
        {x: 50, y: 50, w:50, h: 50},
        cpu
      )
    )
  ), coords.tower
);
renderRect(cpu.tower);
renderRect(cpu.icon);
renderRect(cpu.image);
renderText(cpu.name, "CPU");
s.path(cpu.anchor);

// mobo
let mobo = {};
mobo = piece({x: 370, y: 180, w: 150, h: 250}, mobo);
mobo = icon({x: 50, y: 250, w:50, h: 50}, mobo);
mobo = label(mobo);
mobo = image(mobo);
mobo = anchor(mobo, coords.tower);
renderRect(mobo.tower);
renderText(mobo.name, "MOBO");
renderRect(mobo.image);
renderRect(mobo.icon);
s.path(mobo.anchor);

// ram
let ram = {};
ram = piece({x: 480, y: 200, w: 20, h: 150}, ram);
ram = icon({x: 700, y:450, w: 50, h:50}, ram);
ram = label(ram);
ram = image(ram);
ram = anchor(ram, coords.tower, true);
renderRect(ram.tower);
renderText(ram.name, "RAM");
renderRect(ram.image);
renderRect(ram.icon);
s.path(ram.anchor);

// cgu
let cgu = {};
cgu = piece({x: 370, y: 350, w: 100, h: 10}, cgu);
cgu = icon({x: 50, y:450, w: 50, h:50}, cgu);
cgu = label(cgu);
cgu = image(cgu);
cgu = anchor(cgu, coords.tower);
renderRect(cgu.tower);
renderText(cgu.name, "CGU");
renderRect(cgu.image);
renderRect(cgu.icon);
s.path(cgu.anchor);

// alim
let alim = {};
alim = piece({x: 350, y: 450, w: 100, h: 50}, alim);
alim = icon({x: 450, y:550, w: 50, h:50}, alim);
alim = label(alim);
alim = image(alim);
alim = anchor(alim, coords.tower, true);
renderRect(alim.tower);
renderText(alim.name, "ALIM");
renderRect(alim.image);
renderRect(alim.icon);
s.path(alim.anchor);

//storage
let storage = {};
storage = piece({x: 550, y: 150, w: 100, h: 150}, storage);
storage = icon({x: 700, y:250, w: 50, h:50}, storage);
storage = label(storage);
storage = image(storage);
storage = anchor(storage, coords.tower, true);
renderRect(storage.tower);
renderText(storage.name, "STORAGE");
renderRect(storage.image);
renderRect(storage.icon);
s.path(storage.anchor);

console.log(coords);
console.log(cpu);
console.log(mobo);
console.log(ram);
console.log(alim);

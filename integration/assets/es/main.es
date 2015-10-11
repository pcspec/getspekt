"use strict";
const Raphael = require("raphael");

import {Coords} from "./tower/coords.es";
import {piece} from "./piece/piece.es";
import {anchor} from "./piece/anchor.es";
import {icon} from "./piece/icon.es";
import {image} from "./piece/image.es";
import {label} from "./piece/label.es";


function renderRect(coords) {
  var {x, y, w, h} = coords;
  s.rect(x, y, w, h);
}
function renderText(coords, text) {
  var {x, y, ...size} = coords;
  s.text(x, y, text)
}

let s = Raphael("svg-spec", 800, 600);

let coords = new Coords();
coords.tower = {x: 350, y: 150, w: 300, h: 350};
renderRect(coords.tower);

// cpu
let cpu = {};
cpu = piece({x: 400, y: 200, w: 50, h: 50}, cpu);
cpu = icon({x: 50, y: 50, w:50, h: 50}, cpu);
cpu = label(cpu);
cpu = image(cpu);
cpu = anchor(cpu, coords.tower);
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
ram = icon({x: 50, y:450, w: 50, h:50}, ram);
ram = label(ram);
ram = image(ram);
ram = anchor(ram, coords.tower);
renderRect(ram.tower);
renderText(ram.name, "RAM");
renderRect(ram.image);
renderRect(ram.icon);
s.path(ram.anchor);

console.log(coords);
console.log(cpu);
console.log(mobo);
console.log(ram);

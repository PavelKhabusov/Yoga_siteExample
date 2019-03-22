window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let tabs = require('./parts/tabs.js'),
      form = require('./parts/form.js'),
      scroll = require('./parts/scroll.js'),
      calc = require('./parts/calc.js'),
      slider = require('./parts/slider.js'),
      timer = require('./parts/timer.js'),
      modal = require('./parts/modal.js');
  tabs();
  form();
  scroll();
  calc();
  slider();
  timer();
  modal();
});
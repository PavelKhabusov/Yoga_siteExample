import tabs from './parts/tabs';
import form from './parts/form';
import scroll from './parts/scroll';
import calc from './parts/calc';
import slider from './parts/slider';
import timer from './parts/timer';
import modal from './parts/modal';
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
window.addEventListener('DOMContentLoaded', function() {
  
  'use strict';

  tabs();
  form();
  scroll();
  calc();
  slider();
  timer();
  modal();
});
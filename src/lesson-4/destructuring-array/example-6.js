'use strict';

const cars = ['Skoda'];

const [ firstAuto, secondAuto = 'Ford' ] = cars;

console.log('firstAuto', firstAuto); // firstAuto Skoda
console.log('secondAuto', secondAuto); // secondAuto Ford

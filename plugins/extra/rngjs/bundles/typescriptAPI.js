(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../../default/typescript/typescriptAPI/TypeScriptAPIPlugin.d.ts" />

SupCore.system.registerPlugin("typescriptAPI", "rng", {
    defs: "/**\r\n * Seedable random number generator functions.\r\n * @version 1.0.0\r\n * @license Public Domain\r\n *\r\n * @example\r\n * var rng = new RNG('Example');\r\n * rng.random(40, 50);  // =>  42\r\n * rng.uniform();       // =>  0.7972798995050903\r\n * rng.normal();        // => -0.6698504543216376\r\n * rng.exponential();   // =>  1.0547367609131555\r\n * rng.poisson(4);      // =>  2\r\n * rng.gamma(4);        // =>  2.781724687386858\r\n */\r\ndeclare class RNG {\r\n\r\n  /**\r\n   * Create a new random number generator with optional seed. If the\r\n   * provided seed is a function (i.e. Math.random) it will be used as\r\n   * the uniform number generator.\r\n   * @param seed An arbitrary object used to seed the generator.\r\n   * @constructor\r\n   */\r\n  constructor(seed?: string);\r\n\r\n  /**\r\n   * @returns {number} Uniform random number between 0 and 255.\r\n   */\r\n  nextByte(): number;\r\n\r\n  /**\r\n   * @returns {number} Uniform random number between 0 and 1.\r\n   */\r\n  uniform(): number;\r\n\r\n  /**\r\n   * Produce a random integer within [n, m).\r\n   * @param {number} [n=0]\r\n   * @param {number} m\r\n   *\r\n   */\r\n  random(n?: number, m?: number): number;\r\n\r\n  /**\r\n   * Generates numbers using this.uniform() with the Box-Muller transform.\r\n   * @returns {number} Normally-distributed random number of mean 0, variance 1.\r\n   */\r\n  normal(): number;\r\n\r\n  /**\r\n   * Generates numbers using this.uniform().\r\n   * @returns {number} Number from the exponential distribution, lambda = 1.\r\n   */\r\n  exponential(): number;\r\n\r\n  /**\r\n   * Generates numbers using this.uniform() and Knuth's method.\r\n   * @param {number} [mean=1]\r\n   * @returns {number} Number from the Poisson distribution.\r\n   */\r\n  poisson(mean?: number): number;\r\n\r\n  /**\r\n   * Generates numbers using this.uniform(), this.normal(),\r\n   * this.exponential(), and the Marsaglia-Tsang method.\r\n   * @param {number} a\r\n   * @returns {number} Number from the gamma distribution.\r\n   */\r\n  gamma(a: number): number;\r\n\r\n  /**\r\n   * Accepts a dice rolling notation string and returns a generator\r\n   * function for that distribution. The parser is quite flexible.\r\n   * @param {string} expr A dice-rolling, expression i.e. '2d6+10'.\r\n   * @param {RNG} rng An optional RNG object.\r\n   * @returns {Function}\r\n   */\r\n  static roller(expr: string, rng?: RNG): number;\r\n}\r\n",
    code: ""
});

},{}]},{},[1]);

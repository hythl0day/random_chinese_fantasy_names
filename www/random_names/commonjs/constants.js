"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoneCategories = exports.sexValues = exports.rarityValues = exports.rarityNames = exports.rarityLevels = exports.rarityColors = exports.creatureCategoryNames = exports.creatureCategory = void 0;
var sexValues = [{
  text: '随机',
  value: null
}, {
  text: '女',
  value: true
}, {
  text: '男',
  value: false
}];
exports.sexValues = sexValues;
var rarityColors = {
  common: '#CCCCCC',
  uncommon: '#222A35',
  rare: '#00A6A9',
  epic: '#804DC8',
  legendary: '#C5C660',
  mythic: '#F28234',
  exotic: '#C65043'
};
exports.rarityColors = rarityColors;
var rarityLevels = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic', 'exotic'];
exports.rarityLevels = rarityLevels;
var rarityValues = {
  common: 1.0,
  // common 灰
  uncommon: 0.35,
  // uncommon 白
  rare: 0.15,
  // rare 蓝
  epic: 0.075,
  // epic 紫
  legendary: 0.03,
  // legendary 橙
  mythic: 0.012,
  // mythic 金
  exotic: 0.005 // exotic 虹

};
exports.rarityValues = rarityValues;
var rarityNames = {
  common: '凡品',
  uncommon: '良品',
  rare: '上品',
  epic: '极品',
  legendary: '秘宝',
  mythic: '灵宝',
  exotic: '古宝'
};
exports.rarityNames = rarityNames;
var creatureCategory = ['plant', 'worm', 'fish', 'beast', 'bird', 'reptile', 'insect'];
exports.creatureCategory = creatureCategory;
var creatureCategoryNames = {
  plant: '草木',
  worm: '赢虫',
  fish: '鱼',
  beast: '兽',
  bird: '鸟',
  reptile: '爬虫',
  insect: '甲虫'
};
exports.creatureCategoryNames = creatureCategoryNames;
var zoneCategories = ['land', 'water', 'void'];
exports.zoneCategories = zoneCategories;
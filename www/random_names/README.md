# 仙侠小说专有名词随机生成器

<a title="NPM" href="https://www.npmjs.com/package/random_chinese_fantasy_names" ><img src="https://img.shields.io/npm/v/random_chinese_fantasy_names" /></a>

随机生成仙侠风格的人名、法号、功法、秘籍、法宝、门派、国家、地点、大陆。

尚在开发中的功能包括：材料、丹药……

## 在线版本

[https://hetu.dev/random-names/](https://hetu.dev/random-names/)

## NPM Package

### 安装

```
npm i random_chinese_fantasy_names
```

### 导入

```javascript
import { getName } from 'random_chinese_fantasy_names';
```

### Common js module:

```javascript
const { getName } = require('random_chinese_fantasy_names/commonjs');
```

### 接口

```javascript
// 人名
export function getName(number, isFemale, style, familyName, middleCharacter)

// 法号
export function getDao(number, isFemale, title, firstCharacter)

// 功法
export function getSkill(number, length, kind, prefix, postfix)

// 秘籍
export function getBook(number, length, prefix, kind, postfix)

// 法宝
export function getTalisman(number, kind)

// 门派
export function getClan(number, kind)

// 国家
export function getNation(number, kind)

// 地点
export function getLocation(number, kind)

// 大陆
export function getContinent(number, kind)

```

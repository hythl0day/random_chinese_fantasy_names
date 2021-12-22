# 仙侠小说专有名词随机生成器

随机生成人名、法号、功法、秘籍等。

目前项目还未完工，正在开发法宝、材料、丹药、地名、门派名的生成。

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
// 获取人名
export function getName(number, isFemale, style, familyName, middleCharacter)

// 获取法号
export function getDao(number, isFemale, title, firstCharacter)

// 获取功法
export function getSkill(number, length, kind, prefix, postfix)

// 获取秘籍
export function getBook(number, length, prefix, kind, postfix)

// 获取法宝
export function getTalisman(number, kind)
```

# 仙侠小说专有名词随机生成器

<a title="NPM" href="https://www.npmjs.com/package/random_chinese_fantasy_names" ><img src="https://img.shields.io/npm/v/random_chinese_fantasy_names" /></a>

随机生成仙侠风格的人名、法号、功法、秘籍、生灵、材料、丹药、法宝、门派、国家、地点、大陆。

## 在线版本

[https://hetu.dev/random-names/](https://hetu.dev/random-names/)

## NPM Package

### 安装

```
npm i random_chinese_fantasy_names
```

### 导入

```javascript
import { getName } from "random_chinese_fantasy_names";
```

### Common js module:

```javascript
const { getName } = require("random_chinese_fantasy_names/commonjs");
```

### 接口

number 是生成数量，必填，其他的参数可以省略，如果省略会进行随机。

```typescript
/**
 * 人名样式
 */
type nameStyleType = "single" | "double" | "combine";

/**
 * 稀有度
 */
type rarityType =
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary"
  | "mythic"
  | "exotic";

/**
 * 人名
 */
export function getName(
  number: number,
  options?: {
    isFemale?: boolean;
    style?: nameStyleType;
    familyName?: string;
    middleCharacter?: string;
  }
): string[];

/**
 * 法号
 */
export function getDao(
  number: number,
  options?: {
    isFemale?: boolean;
    title?: string;
    firstCharacter?: string;
  }
): {
  name: string;
  rarity: rarityType;
}[];

/**
 * 功法
 */
export function getSkill(
  number: number,
  options?: {
    length?: number;
    kind?: string;
    prefix?: string;
    numfix?: string;
  }
): {
  name: string;
  rarity: rarityType;
}[];

/**
 * 秘籍
 */
export function getBook(
  number: number,
  options?: {
    length?: number;
    prefix?: string;
    mainkind?: string;
    postkind?: string;
    postfix?: string;
  }
): {
  name: string;
  rarity: rarityType;
}[];

/**
 * 生灵
 */
export function getCreature(
  number: number,
  options?: {
    category?: string;
    rarity?: string;
  }
): {
  name: string;
  rarity: rarityType;
  category: string;
}[];

/**
 * 材料
 */
export function getMaterial(
  number: number,
  options?: {
    kind?: string;
    rarity?: string;
    postfix?: string;
  }
): {
  name: string;
  rarity: rarityType;
}[];

/**
 * 法宝
 */
export function getTalisman(
  number: number,
  options?: {
    kind?: string;
    rarity?: string;
    postfix?: string;
  }
): {
  name: string;
  rarity: rarityType;
}[];

/**
 * 丹药
 */
export function getAlchemy(
  number: number,
  kind?: string
): {
  name: string;
  rarity: rarityType;
}[];

/**
 * 门派
 */
export function getClan(number: number, kind: string): string[];

/**
 * 国家
 */
export function getNation(
  number: number,
  kind?: string
): {
  name: string;
  rarity: rarityType;
}[];

/**
 * 地点
 */
export function getLocation(
  number: number,
  kind?: string
): {
  name: string;
  rarity: rarityType;
}[];

/**
 * 大陆
 */
export function getZone(
  number: number,
  kind?: string
): {
  name: string;
  rarity: rarityType;
}[];
```

## 返回数据示例

```javascript
[
  "易尤厚",
  "墨岂艺",
  "路瑛闵",
  "董年昕",
  "诸葛之霖",
  "夏侯朝闲",
  "常崇皓",
  "申司翼",
  "欧阳佳",
  "陈奇璐",
][
  ({ name: "秘亨", rarity: "common" },
  { name: "寂善子", rarity: "uncommon" },
  { name: "建临", rarity: "common" },
  { name: "本信", rarity: "common" },
  { name: "阳莲子", rarity: "uncommon" },
  { name: "恭泰", rarity: "common" },
  { name: "善方", rarity: "common" },
  { name: "法常子", rarity: "uncommon" },
  { name: "立道", rarity: "common" },
  { name: "荣章道姑", rarity: "uncommon" })
][
  ({ name: "玄冰导引术", rarity: "common" },
  { name: "守天花雨内功", rarity: "uncommon" },
  { name: "照天御剑术", rarity: "common" },
  { name: "摘星飞渡枪", rarity: "uncommon" },
  { name: "戮龙紫霞六阴气", rarity: "rare" },
  { name: "灵鳌气", rarity: "common" },
  { name: "千钧灵宝莲华神术", rarity: "rare" },
  { name: "紫微步", rarity: "common" },
  { name: "三危金蛇神法", rarity: "uncommon" },
  { name: "太元枪", rarity: "common" })
][
  ({ name: "《定风棍》", rarity: "common" },
  { name: "《静禅功》", rarity: "common" },
  { name: "《十一路大洞虚棍》", rarity: "common" },
  { name: "《白虹大赤一气擒拿手》", rarity: "rare" },
  { name: "《无相诛天困仙指》", rarity: "rare" },
  { name: "《素银太祖遁术》", rarity: "uncommon" },
  { name: "《小逍遥轻功》", rarity: "common" },
  { name: "《离梦三才爪》", rarity: "uncommon" },
  { name: "《凤凰神行法》", rarity: "common" },
  { name: "《分神荡魔凌云御剑术真典》", rarity: "legendary" })
][
  ({ name: "碧野芝", rarity: "uncommon", category: "plant" },
  { name: "无上蚯蚓", rarity: "rare", category: "worm" },
  { name: "合欢野猫", rarity: "legendary", category: "beast" },
  { name: "暗魔鲸", rarity: "uncommon", category: "fish" },
  { name: "黑玄鳄", rarity: "uncommon", category: "reptile" },
  { name: "白仙蜥蜴", rarity: "uncommon", category: "reptile" },
  { name: "伏虎棘", rarity: "rare", category: "plant" },
  { name: "万花暗虫", rarity: "epic", category: "insect" },
  { name: "无妄草", rarity: "rare", category: "plant" },
  { name: "黑灵竹", rarity: "uncommon", category: "plant" })
][
  ({ name: "墨魔钻", rarity: "uncommon" },
  { name: "普贤古果", rarity: "rare" },
  { name: "碧宝金", rarity: "uncommon" },
  { name: "烟雨玄参", rarity: "rare" },
  { name: "碧魔玉", rarity: "uncommon" },
  { name: "四海神浆", rarity: "rare" },
  { name: "金霞古丝", rarity: "rare" },
  { name: "碧古金", rarity: "uncommon" },
  { name: "碧宝液", rarity: "uncommon" },
  { name: "紫仙岩", rarity: "uncommon" })
][
  ({ name: "百灵茶", rarity: "common" },
  { name: "百毒酒", rarity: "common" },
  { name: "抱元酒", rarity: "common" },
  { name: "守拙丸", rarity: "common" },
  { name: "两界药", rarity: "common" },
  { name: "青焰精散", rarity: "rare" },
  { name: "雷电神茶", rarity: "legendary" },
  { name: "游身酒", rarity: "uncommon" },
  { name: "御龙散", rarity: "common" },
  { name: "五气丸", rarity: "uncommon" })
][
  ({ name: "太元真罩", rarity: "exotic" },
  { name: "绝魔石锁", rarity: "epic" },
  { name: "化影印", rarity: "rare" },
  { name: "白水晶针（仿制品）", rarity: "uncommon" },
  { name: "封仙鼓", rarity: "rare" },
  { name: "潇湘矛", rarity: "rare" },
  { name: "护神金戟", rarity: "epic" },
  { name: "灰竹钟（赝品）", rarity: "uncommon" },
  { name: "乌骨链", rarity: "uncommon" },
  { name: "灵丹弓（赝品）", rarity: "rare" })
][
  ("灭魔轩",
  "绝神客栈",
  "青焰门",
  "雷电观",
  "化影苑",
  "燕子斋",
  "混元山庄",
  "混元宫",
  "乘风寨",
  "戮龙洞")
][
  ({ name: "滨国", rarity: "common" },
  { name: "越国", rarity: "common" },
  { name: "永国", rarity: "common" },
  { name: "岚国", rarity: "common" },
  { name: "玲珑部落", rarity: "uncommon" },
  { name: "满国", rarity: "common" },
  { name: "虎首联盟", rarity: "rare" },
  { name: "抚国", rarity: "common" },
  { name: "万刃国", rarity: "uncommon" },
  { name: "丽国", rarity: "common" })
][
  ({ name: "诛妖水", rarity: "uncommon" },
  { name: "并阴市", rarity: "common" },
  { name: "灵洞", rarity: "common" },
  { name: "混天堡", rarity: "uncommon" },
  { name: "梁坞", rarity: "common" },
  { name: "永阳林", rarity: "common" },
  { name: "离别观", rarity: "uncommon" },
  { name: "惠湖", rarity: "common" },
  { name: "万里峰", rarity: "uncommon" },
  { name: "狐岐观", rarity: "rare" })
][
  ({ name: "浮玉大陆", rarity: "rare" },
  { name: "单洲", rarity: "common" },
  { name: "琼洲", rarity: "common" },
  { name: "安洲", rarity: "common" },
  { name: "容洲", rarity: "common" },
  { name: "滨洲", rarity: "common" },
  { name: "谯明界", rarity: "rare" },
  { name: "德洲", rarity: "common" },
  { name: "无踪洋", rarity: "uncommon" },
  { name: "固洲", rarity: "common" })
];
```

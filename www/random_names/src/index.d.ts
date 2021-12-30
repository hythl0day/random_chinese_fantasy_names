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
export function getContinent(
  number: number,
  kind?: string
): {
  name: string;
  rarity: rarityType;
}[];

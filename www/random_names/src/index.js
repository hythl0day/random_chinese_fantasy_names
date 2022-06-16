import { creatureCategory, rarityValues, zoneCategories } from './constants.js';
import commonNames from '../data/shared/common.json';
import strangeNames from '../data/shared/strange.json';
import colorPrefix from '../data/shared/color.json';
import spiritPrefix from '../data/shared/spirit.json';
import family from '../data/name/family.json';
import female from '../data/name/female.json';
import male from '../data/name/male.json';
import middle from '../data/name/middle.json';
import dao from '../data/dao/dao.json';
import daoTitleMale from '../data/dao/title_male.json';
import daoTitleFemale from '../data/dao/title_female.json';
import skill from '../data/skill/skill.json';
import skillPrefix from '../data/skill/prefix.json';
import skillNumfix from '../data/skill/numfix.json';
import bookPrefix from '../data/book/prefix.json';
import book from '../data/book/book.json';
import bookPostfix from '../data/book/postfix.json';
import talisman from '../data/talisman/talisman.json';
import talismanMaterial from '../data/talisman/material.json';
import talismanPostfix from '../data/talisman/postfix.json';
import clan from '../data/organization/clan.json';
import nation from '../data/organization/nation.json';
import place from '../data/place/place.json';
import placePrefix from '../data/place/prefix.json';
import placePostfix from '../data/place/postfix.json';
import location from '../data/place/location.json';
import zone from '../data/place/zone.json';
import material from '../data/material/material.json';
import materialPostfix from '../data/material/postfix.json';
import creature from '../data/creature/creature.json';
import creaturePrefix from '../data/creature/prefix.json';
import strangeCreature from '../data/creature/strange.json';
import alchemy from '../data/alchemy/alchemy.json';

export {
  sexValues,
  rarityValues,
  rarityColors,
  rarityLevels,
  rarityNames,
  creatureCategory,
  creatureCategoryNames,
  zoneCategories,
} from './constants.js';

export {
  skill as skillKind,
  skillPrefix,
  skillNumfix,
  book as bookKind,
  clan as clanKind,
  nation as nationKind,
  placePrefix,
  placePostfix,
  location as locationKind,
  alchemy as alchemyKind,
};

export const daoTitles = [
  ...new Set([
    ...daoTitleMale.uncommon,
    ...daoTitleMale.epic,
    ...daoTitleMale.legendary,
    ...daoTitleMale.mythic,
    ...daoTitleMale.exotic,
    ...daoTitleFemale.uncommon,
    ...daoTitleFemale.rare,
    ...daoTitleFemale.epic,
    ...daoTitleFemale.legendary,
    ...daoTitleFemale.mythic,
    ...daoTitleFemale.exotic,
  ]),
];

export const bookPrefixes = [
  ...bookPrefix.epic,
  ...bookPrefix.legendary,
  ...bookPrefix.mythic,
  ...bookPrefix.exotic,
];

export const talismanKind = [
  ...talisman.common,
  ...talisman.uncommon,
  ...talisman.rare,
  ...talisman.epic,
  ...talisman.legendary,
  ...talisman.mythic,
  ...talisman.exotic,
];

export const materialKind = [
  ...material.common,
  ...material.uncommon,
  ...material.rare,
  ...material.epic,
  ...material.legendary,
  ...material.mythic,
  ...material.exotic,
];

export const materialPostfixes = [
  ...materialPostfix.broken,
  ...materialPostfix.handmade,
];

export const talismanPostfixes = [
  ...talismanPostfix.broken,
  ...talismanPostfix.handmade,
];

export const zoneKind = [...zone.land, ...zone.water, ...zone.void];

export const bookPostfixes = [...bookPostfix.uncommon, ...bookPostfix.rare];

function _getRarity(max) {
  let rarity;
  let value = Math.random() * (max || 1.0);
  if (value < rarityValues.exotic) {
    rarity = 'exotic';
  } else if (value < rarityValues.mythic) {
    rarity = 'mythic';
  } else if (value < rarityValues.legendary) {
    rarity = 'legendary';
  } else if (value < rarityValues.epic) {
    rarity = 'epic';
  } else if (value < rarityValues.rare) {
    rarity = 'rare';
  } else if (value < rarityValues.uncommon) {
    rarity = 'uncommon';
  } else {
    rarity = 'common';
  }
  return { rarity, value };
}

const _kParenthesisLeft = '（';
const _kParenthesisRight = '）';

const _kBookLeft = '《';
const _kBookRight = '》';

const _kLinkWord = '之';

const common = [
  ...commonNames.dao,
  ...commonNames.element,
  ...commonNames.creature,
  ...commonNames.thing,
  ...commonNames.color,
  ...commonNames.place,
  ...commonNames.adj,
  ...commonNames.number,
  ...commonNames.gesture,
  ...commonNames.action,
];

export function getName(number, options) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let theFamilyName;
    if (options?.familyName) {
      theFamilyName = options.familyName;
    } else {
      let familyIndex = Math.floor(Math.random() * family.length);
      theFamilyName = family[familyIndex];
    }
    let f = options?.isFemale ?? Math.floor(Math.random() * 10) % 2 == 0;
    let namesOfASex = f ? female : male;
    let r = Math.random();
    let s = options?.style;
    if (!s) {
      s = r < 0.33333333 ? 'single' : r < 0.66666666 ? 'double' : 'combine';
    }
    let name = '';
    if (s == 'single') {
      if (options?.middleCharacter) {
        name = options.middleCharacter;
      } else {
        let nameIndex = Math.floor(Math.random() * namesOfASex.length);
        name = namesOfASex[nameIndex];
      }
    } else if (s == 'double') {
      let theMiddleCharacter;
      if (options?.middleCharacter) {
        theMiddleCharacter = options.middleCharacter;
      } else {
        let nameIndex = Math.floor(Math.random() * namesOfASex.length);
        theMiddleCharacter = namesOfASex[nameIndex];
      }
      let nameIndex = Math.floor(Math.random() * namesOfASex.length);
      let theLastCharacter = namesOfASex[nameIndex];
      name = theMiddleCharacter + theLastCharacter;
    } else {
      let theMiddleCharacter;
      if (options?.middleCharacter) {
        theMiddleCharacter = options.middleCharacter;
      } else {
        let nameIndex = Math.floor(Math.random() * middle.length);
        theMiddleCharacter = middle[nameIndex];
      }
      let nameIndex = Math.floor(Math.random() * namesOfASex.length);
      let theLastCharacter = namesOfASex[nameIndex];
      name = theMiddleCharacter + theLastCharacter;
    }
    names.push(theFamilyName + name);
  }
  return names;
}

export function getDao(number, options) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let theFirstCharacter;
    if (options?.firstCharacter) {
      theFirstCharacter = options.firstCharacter;
    } else {
      let nameIndex1 = Math.floor(Math.random() * dao.length);
      theFirstCharacter = dao[nameIndex1];
    }
    let nameIndex2 = Math.floor(Math.random() * dao.length);
    let name = theFirstCharacter + dao[nameIndex2];
    let titleGroup =
      options?.isFemale ?? Math.floor(Math.random() * 10) % 2 == 0
        ? daoTitleFemale
        : daoTitleMale;
    let t = options?.title || '';
    let rarity = 'common';
    if (!t) {
      rarity = _getRarity().rarity;
      if (rarity == 'exotic') {
        t =
          titleGroup.exotic[
            Math.floor(Math.random() * titleGroup.exotic.length)
          ];
      } else if (rarity == 'mythic') {
        t =
          titleGroup.mythic[
            Math.floor(Math.random() * titleGroup.mythic.length)
          ];
      } else if (rarity == 'legendary') {
        t =
          titleGroup.legendary[
            Math.floor(Math.random() * titleGroup.legendary.length)
          ];
      } else if (rarity == 'epic') {
        t = titleGroup.epic[Math.floor(Math.random() * titleGroup.epic.length)];
      } else if (rarity == 'rare') {
        t = titleGroup.rare[Math.floor(Math.random() * titleGroup.rare.length)];
      } else if (rarity == 'uncommon') {
        t =
          titleGroup.uncommon[
            Math.floor(Math.random() * titleGroup.uncommon.length)
          ];
      }
    } else {
      if (
        daoTitleFemale.exotic.includes(t) ||
        daoTitleMale.exotic.includes(t)
      ) {
        rarity = 'exotic';
      } else if (
        daoTitleFemale.mythic.includes(t) ||
        daoTitleMale.mythic.includes(t)
      ) {
        rarity = 'mythic';
      }
      if (
        daoTitleFemale.legendary.includes(t) ||
        daoTitleMale.legendary.includes(t)
      ) {
        rarity = 'legendary';
      }
      if (daoTitleFemale.epic.includes(t) || daoTitleMale.epic.includes(t)) {
        rarity = 'epic';
      }
      if (daoTitleFemale.rare.includes(t) || daoTitleMale.rare.includes(t)) {
        rarity = 'rare';
      }
      if (
        daoTitleFemale.uncommon.includes(t) ||
        daoTitleMale.uncommon.includes(t)
      ) {
        rarity = 'uncommon';
      }
    }
    names.push({ name: name + t, rarity });
  }
  return names;
}

const _kNumberBeginSupplement = '路';
const _kNumberEndSupplement = '式';

function _getSkillName(length, kind, prefix, numfix) {
  let l = length || 1;
  let rarity = 'common';
  if (!length) {
    let r = _getRarity();
    if (r.value < rarityValues.rare) {
      l = 3;
    } else if (r.value < rarityValues.uncommon) {
      l = 2;
    }
    rarity = r.rarity;
  } else {
    if (length > 2) {
      rarity = 'rare';
    } else if (length > 1) {
      rarity = 'uncommon';
    }
  }
  let name = '';
  for (let i = 0; i < l; ++i) {
    name += common[Math.floor(Math.random() * common.length)];
  }
  let pre = prefix || '';
  if (!pre && Math.random() < rarityValues.epic) {
    pre = skillPrefix[Math.floor(Math.random() * skillPrefix.length)];
  }
  let n = numfix || '';
  if (!n && Math.random() < rarityValues.epic) {
    n = skillNumfix[Math.floor(Math.random() * skillNumfix.length)];
  }
  let k = kind || skill[Math.floor(Math.random() * skill.length)];
  if (Math.random() < 0.5) {
    name = (n != '' ? n + _kNumberBeginSupplement : '') + pre + name + k;
  } else {
    if (k.length > 1) {
      name = pre + name + k + (n != '' ? n + _kNumberEndSupplement : '');
    } else {
      name = pre + name + n + k;
    }
  }
  return { name, rarity };
}

export function getSkill(number, options) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = _getSkillName(
      options?.length,
      options?.kind,
      options?.prefix,
      options?.numfix
    );
    names.push(name);
  }
  return names;
}

export function getBook(number, options) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let skillname = _getSkillName(options?.length, options?.mainkind);
    let rarity = skillname.rarity;
    let pre = options?.prefix || '';
    if (!pre) {
      if (rarity == 'exotic') {
        pre =
          bookPrefix.exotic[
            Math.floor(Math.random() * bookPrefix.exotic.length)
          ];
      } else if (rarity == 'mythic') {
        pre =
          bookPrefix.mythic[
            Math.floor(Math.random() * bookPrefix.mythic.length)
          ];
      } else if (rarity == 'legendary') {
        pre =
          bookPrefix.legendary[
            Math.floor(Math.random() * bookPrefix.legendary.length)
          ];
      } else if (rarity == 'epic') {
        pre =
          bookPrefix.epic[Math.floor(Math.random() * bookPrefix.epic.length)];
      }
    }
    let pk = options?.postkind || '';
    if (pre && !pk) {
      pk = book[Math.floor(Math.random() * book.length)];
    }
    let post = options?.postfix || '';
    if (!post) {
      let r1 = Math.random();
      let r2 = Math.random();
      if (r1 < rarityValues.rare && r2 < rarityValues.rare) {
        post =
          _kParenthesisLeft +
          bookPostfix.rare[
            Math.floor(Math.random() * bookPostfix.rare.length)
          ] +
          _kParenthesisRight;
      } else if (r1 < rarityValues.uncommon && r2 < rarityValues.uncommon) {
        post =
          _kParenthesisLeft +
          bookPostfix.uncommon[
            Math.floor(Math.random() * bookPostfix.uncommon.length)
          ] +
          _kParenthesisRight;
      }
    } else {
      post = _kParenthesisLeft + post + _kParenthesisRight;
    }
    names.push({
      name: _kBookLeft + skillname.name + pre + pk + post + _kBookRight,
      rarity: rarity,
    });
  }
  return names;
}

const commonCreatureNames = [
  ...commonNames.dao,
  ...commonNames.element,
  ...commonNames.thing,
  ...commonNames.color,
  ...commonNames.number,
  ...commonNames.action,
];

export function getCreature(number, options) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let pre =
      commonCreatureNames[
        Math.floor(Math.random() * commonCreatureNames.length)
      ];
    let c = colorPrefix[Math.floor(Math.random() * colorPrefix.length)];
    let s = creaturePrefix[Math.floor(Math.random() * creaturePrefix.length)];
    let cat = options?.category;
    let k = '';
    if (!cat) {
      cat =
        creatureCategory[Math.floor(Math.random() * creatureCategory.length)];
    }
    k = creature[cat][Math.floor(Math.random() * creature[cat].length)];
    let r = options?.rarity || _getRarity(rarityValues.uncommon).rarity;
    if (r == 'exotic') {
      name =
        strangeCreature[Math.floor(Math.random() * strangeCreature.length)];
    } else if (r == 'mythic') {
      name = pre + c + s + k;
    } else if (r == 'legendary') {
      name = pre + s + k;
    } else if (r == 'epic') {
      name = pre + c + k;
    } else if (r == 'rare') {
      name = pre + k;
    } else if (r == 'uncommon') {
      name = c + s + k;
    } else if (r == 'common') {
      name = c + k;
    }
    names.push({ name, rarity: r, category: cat });
  }
  return names;
}

const _kAge1 = '百年';
const _kAge10 = '千年';
const _kAge100 = '万年';

export function getMaterial(number, options) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let age = '';
    let pre = common[Math.floor(Math.random() * common.length)];
    let c = colorPrefix[Math.floor(Math.random() * colorPrefix.length)];
    let s = spiritPrefix[Math.floor(Math.random() * spiritPrefix.length)];
    let k = options?.kind;
    let r = options?.rarity || _getRarity(rarityValues.uncommon).rarity;
    if (r == 'exotic') {
      let t = [
        ...material.exotic,
        ...material.mythic,
        ...material.legendary,
        ...material.epic,
        ...material.rare,
        ...material.uncommon,
        ...material.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      age = _kAge100;
      name = age + pre + c + s + k;
    } else if (r == 'mythic') {
      let t = [
        ...material.mythic,
        ...material.legendary,
        ...material.epic,
        ...material.rare,
        ...material.uncommon,
        ...material.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      age = _kAge10;
      name = age + pre + c + s + k;
    } else if (r == 'legendary') {
      let t = [
        ...material.legendary,
        ...material.epic,
        ...material.rare,
        ...material.uncommon,
        ...material.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      age = _kAge1;
      name = age + pre + c + s + k;
    } else if (r == 'epic') {
      let t = [
        ...material.epic,
        ...material.rare,
        ...material.uncommon,
        ...material.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = pre + c + s + k;
    } else if (r == 'rare') {
      let t = [...material.rare, ...material.uncommon, ...material.common];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = pre + s + k;
    } else if (r == 'uncommon') {
      let t = [...material.uncommon, ...material.common];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = c + s + k;
    } else if (r == 'common') {
      k ??= material.common[Math.floor(Math.random() * material.common.length)];
      name = c + k;
    }
    let post = options?.postfix || '';
    if (!post) {
      let r1 = Math.random();
      let r2 = Math.random();
      if (r1 < rarityValues.rare && r2 < rarityValues.rare) {
        post =
          _kParenthesisLeft +
          materialPostfix.broken[
            Math.floor(Math.random() * materialPostfix.broken.length)
          ] +
          _kParenthesisRight;
      } else if (r1 < rarityValues.uncommon && r2 < rarityValues.uncommon) {
        post =
          _kParenthesisLeft +
          materialPostfix.handmade[
            Math.floor(Math.random() * materialPostfix.handmade.length)
          ] +
          _kParenthesisRight;
      }
    } else {
      post = _kParenthesisLeft + post + _kParenthesisRight;
    }
    names.push({ name: name + post, rarity: r });
  }
  return names;
}

const commonAlchemyNames = [
  ...commonNames.dao,
  ...commonNames.element,
  ...commonNames.color,
  ...commonNames.number,
  ...commonNames.action,
];

export function getTalisman(number, options) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let prefix = common[Math.floor(Math.random() * common.length)];
    let c = colorPrefix[Math.floor(Math.random() * colorPrefix.length)];
    let m =
      talismanMaterial[Math.floor(Math.random() * talismanMaterial.length)];
    let s = spiritPrefix[Math.floor(Math.random() * spiritPrefix.length)];
    let k = options?.kind;
    let r = options?.rarity ?? _getRarity(rarityValues.uncommon).rarity;
    if (r == 'exotic') {
      let t = [
        ...talisman.exotic,
        ...talisman.mythic,
        ...talisman.legendary,
        ...talisman.epic,
        ...talisman.rare,
        ...talisman.uncommon,
        ...talisman.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + s + k;
    } else if (r == 'mythic') {
      let t = [
        ...talisman.mythic,
        ...talisman.legendary,
        ...talisman.epic,
        ...talisman.rare,
        ...talisman.uncommon,
        ...talisman.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + s + k;
    } else if (r == 'legendary') {
      let t = [
        ...talisman.legendary,
        ...talisman.epic,
        ...talisman.rare,
        ...talisman.uncommon,
        ...talisman.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + c + m + k;
    } else if (r == 'epic') {
      let t = [
        ...talisman.epic,
        ...talisman.rare,
        ...talisman.uncommon,
        ...talisman.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + m + k;
    } else if (r == 'rare') {
      let t = [...talisman.rare, ...talisman.uncommon, ...talisman.common];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + k;
    } else if (r == 'uncommon') {
      let t = [...talisman.uncommon, ...talisman.common];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = c + m + k;
    } else if (r == 'common') {
      k ??= talisman.common[Math.floor(Math.random() * talisman.common.length)];
      name = m + k;
    }
    let post = options?.postfix || '';
    if (!post) {
      let r1 = Math.random();
      let r2 = Math.random();
      if (r1 < rarityValues.rare && r2 < rarityValues.rare) {
        post =
          _kParenthesisLeft +
          talismanPostfix.broken[
            Math.floor(Math.random() * talismanPostfix.broken.length)
          ] +
          _kParenthesisRight;
      } else if (r1 < rarityValues.uncommon && r2 < rarityValues.uncommon) {
        post =
          _kParenthesisLeft +
          talismanPostfix.handmade[
            Math.floor(Math.random() * talismanPostfix.handmade.length)
          ] +
          _kParenthesisRight;
      }
    } else {
      post = _kParenthesisLeft + post + _kParenthesisRight;
    }
    names.push({ name: name + post, rarity: r });
  }
  return names;
}

export function getAlchemy(number, kind) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let rarity = 'common';
    let pre =
      commonAlchemyNames[Math.floor(Math.random() * commonAlchemyNames.length)];
    let s = '';
    let r = _getRarity();
    if (r.value < rarityValues.rare) {
      s = spiritPrefix[Math.floor(Math.random() * spiritPrefix.length)];
    }
    rarity = r.rarity;
    let k = kind || '';
    if (!kind) {
      k = alchemy[Math.floor(Math.random() * alchemy.length)];
    }
    names.push({ name: pre + s + k, rarity });
  }
  return names;
}

export function getClan(number, kind) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = common[Math.floor(Math.random() * common.length)];
    let k = kind;
    if (!k) {
      k = clan[Math.floor(Math.random() * clan.length)];
    }
    names.push(name + k);
  }
  return names;
}

const _kContry = '国';

export function getNation(number, kind) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let k = kind ?? '';
    let rarity = 'common';
    let r = Math.random();
    if (r < rarityValues.rare) {
      name = strangeNames[Math.floor(Math.random() * strangeNames.length)];
      rarity = 'rare';
      if (!kind) {
        if (name.length == 1) {
          k = _kContry;
        } else {
          k = nation[Math.floor(Math.random() * nation.length)];
        }
      }
    } else if (r < rarityValues.uncommon) {
      name = common[Math.floor(Math.random() * common.length)];
      rarity = 'uncommon';
      if (!kind) {
        if (name.length == 1) {
          k = _kContry;
        } else {
          k = nation[Math.floor(Math.random() * nation.length)];
        }
      }
    } else {
      let prefix = '';
      if (Math.random() < rarityValues.rare) {
        prefix = placePrefix[Math.floor(Math.random() * placePrefix.length)];
      }
      name = prefix + place[Math.floor(Math.random() * place.length)];
      if (!kind) {
        k = _kContry;
      }
    }
    names.push({ name: name + k, rarity });
  }
  return names;
}

export function getLocation(number, kind) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let k = kind ?? '';
    let rarity = 'common';
    let r = Math.random();
    if (r < rarityValues.rare) {
      name = strangeNames[Math.floor(Math.random() * strangeNames.length)];
      rarity = 'rare';
    } else if (r < rarityValues.uncommon) {
      name = common[Math.floor(Math.random() * common.length)];
      rarity = 'uncommon';
    } else {
      let placeIndex = Math.floor(Math.random() * place.length);
      let postfix = '';
      if (Math.random() < rarityValues.uncommon) {
        let postfixIndex = Math.floor(Math.random() * placePostfix.length);
        postfix = placePostfix[postfixIndex];
      }
      name = place[placeIndex] + postfix;
    }
    if (!kind) {
      k = location[Math.floor(Math.random() * location.length)];
    }
    names.push({ name: name + k, rarity });
  }
  return names;
}

function getZoneKind(category) {
  category ??=
    zoneCategories[Math.floor(Math.random() * zoneCategories.length)];
  let group = zone[category];
  return group[Math.floor(Math.random() * group.length)];
}

export function getZone(number, options) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let k = options?.kind ?? getZoneKind(options?.category);
    let rarity = 'common';
    let r = Math.random();
    if (r < rarityValues.rare) {
      name = strangeNames[Math.floor(Math.random() * strangeNames.length)];
      rarity = 'rare';
    } else if (r < rarityValues.uncommon) {
      name = common[Math.floor(Math.random() * common.length)];
      rarity = 'uncommon';
    } else {
      let prefix = '';
      if (Math.random() < rarityValues.rare) {
        prefix = placePrefix[Math.floor(Math.random() * placePrefix.length)];
      }
      name = prefix + place[Math.floor(Math.random() * place.length)];
      if (name.length == 1) {
        if (k.length > 1) {
          name += _kLinkWord;
        } else {
          if (Math.random() < rarityValues.rare) {
            name += _kLinkWord;
          }
        }
      }
    }
    names.push({ name: name + k, rarity });
  }
  return names;
}

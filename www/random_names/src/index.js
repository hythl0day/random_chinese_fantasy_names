import common from '../data/shared/common.json';
import strange from '../data/shared/strange.json';
import color from '../data/shared/color.json';
import spirit from '../data/shared/spirit.json';
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
import continent from '../data/place/continent.json';
import material from '../data/material/material.json';
import materialPrefix from '../data/material/prefix.json';
import materialPostfix from '../data/material/postfix.json';

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
  continent as continentKind,
};

export const rarityLevels = [
  'common',
  'uncommon',
  'rare',
  'epic',
  'legendary',
  'mythic',
  'exotic',
];

export const daoTitles = [
  ...new Set([
    ...daoTitleMale.uncommon,
    ...daoTitleMale.rare,
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

export const bookPostfixes = [...bookPostfix.uncommon, ...bookPostfix.rare];

const _rarityLevels = {
  common: 1.0, // common 灰
  uncommon: 0.35, // uncommon 白
  rare: 0.15, // rare 蓝
  epic: 0.075, // epic 紫
  legendary: 0.03, // legendary 橙
  mythic: 0.012, // mythic 金
  exotic: 0.005, // exotic 虹
};

function _getRarity(max) {
  let rarity;
  let value = Math.random() * (max || 1.0);
  if (value < _rarityLevels.exotic) {
    rarity = 'exotic';
  } else if (value < _rarityLevels.mythic) {
    rarity = 'mythic';
  } else if (value < _rarityLevels.legendary) {
    rarity = 'legendary';
  } else if (value < _rarityLevels.epic) {
    rarity = 'epic';
  } else if (value < _rarityLevels.rare) {
    rarity = 'rare';
  } else if (value < _rarityLevels.uncommon) {
    rarity = 'uncommon';
  } else {
    rarity = 'common';
  }
  return { rarity, value };
}

export function getName(number, isFemale, style, familyName, middleCharacter) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let theFamilyName;
    if (!familyName) {
      let familyIndex = Math.floor(Math.random() * family.length);
      theFamilyName = family[familyIndex];
    } else {
      theFamilyName = familyName;
    }
    let f = isFemale ?? Math.floor(Math.random() * 10) % 2 == 0;
    let namesOfASex = f ? female : male;
    let r = Math.random();
    let s;
    if (style == null || style == 'random') {
      s = r < 0.33333333 ? 'single' : r < 0.66666666 ? 'double' : 'combine';
    } else {
      s = style;
    }
    let name = '';
    if (s == 'single') {
      if (middleCharacter) {
        name = middleCharacter;
      } else {
        let nameIndex = Math.floor(Math.random() * namesOfASex.length);
        name = namesOfASex[nameIndex];
      }
    } else if (s == 'double') {
      let theMiddleCharacter;
      if (middleCharacter) {
        theMiddleCharacter = middleCharacter;
      } else {
        let nameIndex = Math.floor(Math.random() * namesOfASex.length);
        theMiddleCharacter = namesOfASex[nameIndex];
      }
      let nameIndex = Math.floor(Math.random() * namesOfASex.length);
      let theLastCharacter = namesOfASex[nameIndex];
      name = theMiddleCharacter + theLastCharacter;
    } else {
      let theMiddleCharacter;
      if (middleCharacter) {
        theMiddleCharacter = middleCharacter;
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

export function getDao(number, isFemale, title, firstCharacter) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let theFirstCharacter;
    if (firstCharacter) {
      theFirstCharacter = firstCharacter;
    } else {
      let nameIndex1 = Math.floor(Math.random() * dao.length);
      theFirstCharacter = dao[nameIndex1];
    }
    let nameIndex2 = Math.floor(Math.random() * dao.length);
    let name = theFirstCharacter + dao[nameIndex2];
    let titleGroup =
      isFemale ?? Math.floor(Math.random() * 10) % 2 == 0
        ? daoTitleFemale
        : daoTitleMale;
    let t = '';
    let rarity = 'common';
    if (!title) {
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
    }
    names.push({ name: name + t, rarity });
  }
  return names;
}

const _kNumberBeginSupplement = '路';
const _kNumberEndSupplement = '式';

function _getSkillName(length, kind, prefix, numfix) {
  let l = 1;
  let rarity = 'common';
  if (!length) {
    let r = _getRarity();
    if (r.value < _rarityLevels.rare) {
      l = 3;
    } else if (r.value < _rarityLevels.uncommon) {
      l = 2;
    }
    rarity = r.rarity;
  }
  let name = '';
  let pre = prefix ?? '';
  let n = numfix ?? '';
  let k = kind || skill[Math.floor(Math.random() * skill.length)];
  for (let i = 0; i < l; ++i) {
    name += common[Math.floor(Math.random() * common.length)];
  }
  if (!prefix && Math.random() < _rarityLevels.epic) {
    pre = skillPrefix[Math.floor(Math.random() * skillPrefix.length)];
  }
  if (!numfix && Math.random() < _rarityLevels.epic) {
    n = skillNumfix[Math.floor(Math.random() * skillNumfix.length)];
  }
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

export function getSkill(number, length, kind, prefix, numfix) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = _getSkillName(length, kind, prefix, numfix);
    names.push(name);
  }
  return names;
}

export function getBook(number, length, prefix, kind, postfix) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let skillname = _getSkillName(length);
    let rarity = skillname.rarity;
    let pre = prefix ?? '';
    let k = kind ?? '';
    let post = postfix ?? '';
    if (!prefix) {
      if (skillname.rarity == 'exotic') {
        pre =
          bookPrefix.exotic[
            Math.floor(Math.random() * bookPrefix.exotic.length)
          ];
      } else if (skillname.rarity == 'mythic') {
        pre =
          bookPrefix.mythic[
            Math.floor(Math.random() * bookPrefix.mythic.length)
          ];
      } else if (skillname.rarity == 'legendary') {
        pre =
          bookPrefix.legendary[
            Math.floor(Math.random() * bookPrefix.legendary.length)
          ];
      } else if (skillname.rarity == 'epic') {
        pre =
          bookPrefix.epic[Math.floor(Math.random() * bookPrefix.epic.length)];
      }
    }
    if (pre && !kind) {
      k = book[Math.floor(Math.random() * book.length)];
    }
    if (!prefix && !kind) {
      if (!postfix) {
        let r1 = Math.random();
        let r2 = Math.random();
        if (r1 < _rarityLevels.rare && r2 < _rarityLevels.rare) {
          rarity = 'handmade';
          post =
            '（' +
            bookPostfix.rare[
              Math.floor(Math.random() * bookPostfix.rare.length)
            ] +
            '）';
        } else if (r1 < _rarityLevels.uncommon && r2 < _rarityLevels.uncommon) {
          rarity = 'broken';
          post =
            '（' +
            bookPostfix.uncommon[
              Math.floor(Math.random() * bookPostfix.uncommon.length)
            ] +
            '）';
        }
      }
    } else {
      rarity = 'rare';
    }
    names.push({
      name: `《${skillname.name}${pre}${k}${post}》`,
      rarity: rarity,
    });
  }
  return names;
}

export function getTalisman(number, kind, rarity) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let prefix = common[Math.floor(Math.random() * common.length)];
    let c = color[Math.floor(Math.random() * color.length)];
    let m =
      talismanMaterial[Math.floor(Math.random() * talismanMaterial.length)];
    let s = spirit[Math.floor(Math.random() * spirit.length)];
    let k = kind;
    let r = rarity ?? _getRarity(_rarityLevels.uncommon).rarity;
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
      name = prefix + c + m + s + k;
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
    let post = '';
    let r1 = Math.random();
    let r2 = Math.random();
    if (r1 < _rarityLevels.rare && r2 < _rarityLevels.rare) {
      post =
        '（' +
        talismanPostfix.broken[
          Math.floor(Math.random() * talismanPostfix.broken.length)
        ] +
        '）';
    } else if (r1 < _rarityLevels.uncommon && r2 < _rarityLevels.uncommon) {
      post =
        '（' +
        talismanPostfix.handmade[
          Math.floor(Math.random() * talismanPostfix.handmade.length)
        ] +
        '）';
    }
    names.push({ name: name + post, rarity: r });
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
    if (r < _rarityLevels.rare) {
      name = strange[Math.floor(Math.random() * strange.length)];
      rarity = 'rare';
      if (!kind) {
        if (name.length == 1) {
          k = _kContry;
        } else {
          k = nation[Math.floor(Math.random() * nation.length)];
        }
      }
    } else if (r < _rarityLevels.uncommon) {
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
      if (Math.random() < _rarityLevels.rare) {
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
    if (r < _rarityLevels.rare) {
      name = strange[Math.floor(Math.random() * strange.length)];
      rarity = 'rare';
    } else if (r < _rarityLevels.uncommon) {
      name = common[Math.floor(Math.random() * common.length)];
      rarity = 'uncommon';
    } else {
      let placeIndex = Math.floor(Math.random() * place.length);
      let postfix = '';
      if (Math.random() < _rarityLevels.uncommon) {
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

const _kContinent = '洲';

export function getContinent(number, kind) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let k = kind ?? '';
    if (!kind) {
      k = continent[Math.floor(Math.random() * continent.length)];
    }
    let rarity = 'common';
    let r = Math.random();
    if (r < _rarityLevels.rare) {
      name = strange[Math.floor(Math.random() * strange.length)];
      rarity = 'rare';
    } else if (r < _rarityLevels.uncommon) {
      name = common[Math.floor(Math.random() * common.length)];
      rarity = 'uncommon';
    } else {
      let prefix = '';
      if (Math.random() < _rarityLevels.rare) {
        prefix = placePrefix[Math.floor(Math.random() * placePrefix.length)];
      }
      name = prefix + place[Math.floor(Math.random() * place.length)];
      if (name.length == 1) {
        k = _kContinent;
      }
    }
    names.push({ name: name + k, rarity });
  }
  return names;
}

export function getMaterial(number, kind, rarity) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let age = materialPrefix[Math.floor(Math.random() * materialPrefix.length)];
    let prefix = common[Math.floor(Math.random() * common.length)];
    let c = color[Math.floor(Math.random() * color.length)];
    let s = spirit[Math.floor(Math.random() * spirit.length)];
    let k = kind;
    let r = rarity ?? _getRarity(_rarityLevels.common).rarity;
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
      name = age + prefix + s + k;
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
      name = age + prefix + s + k;
    } else if (r == 'legendary') {
      let t = [
        ...material.legendary,
        ...material.epic,
        ...material.rare,
        ...material.uncommon,
        ...material.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + s + k;
    } else if (r == 'epic') {
      let t = [
        ...material.epic,
        ...material.rare,
        ...material.uncommon,
        ...material.common,
      ];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + s + k;
    } else if (r == 'rare') {
      let t = [...material.rare, ...material.uncommon, ...material.common];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + c + k;
    } else if (r == 'uncommon') {
      let t = [...material.uncommon, ...material.common];
      k ??= t[Math.floor(Math.random() * t.length)];
      name = prefix + c + k;
    } else if (r == 'common') {
      k ??= material.common[Math.floor(Math.random() * material.common.length)];
      name = prefix + k;
    }
    let post = '';
    let r1 = Math.random();
    let r2 = Math.random();
    if (r1 < _rarityLevels.rare && r2 < _rarityLevels.rare) {
      post =
        '（' +
        materialPostfix.broken[
          Math.floor(Math.random() * materialPostfix.broken.length)
        ] +
        '）';
    } else if (r1 < _rarityLevels.uncommon && r2 < _rarityLevels.uncommon) {
      post =
        '（' +
        materialPostfix.handmade[
          Math.floor(Math.random() * materialPostfix.handmade.length)
        ] +
        '）';
    }
    names.push({ name: name + post, rarity: r });
  }
  return names;
}

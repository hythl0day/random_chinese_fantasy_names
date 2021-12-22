import family from './data/name/family.json';
import female from './data/name/female.json';
import male from './data/name/male.json';
import middle from './data/name/middle.json';
import dao from './data/dao/dao.json';
import daoTitleMale from './data/dao/title_male.json';
import daoTitleFemale from './data/dao/title_female.json';
import common from './data/common.json';
import skillPrefix from './data/skill/prefix.json';
import skillKind from './data/skill/kind.json';
import skillPostfix from './data/skill/postfix.json';
import bookPrefix from './data/book/prefix.json';
import bookKind from './data/book/kind.json';
import bookPostfix from './data/book/postfix.json';
import talismanKind from './data/talisman/kind.json';
import talismanPrefix from './data/talisman/prefix.json';

export { skillPrefix, skillKind, skillPostfix, bookKind };

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

export const talismanKinds = [
  ...talismanKind.common,
  ...talismanKind.uncommon,
  ...talismanKind.rare,
  ...talismanKind.epic,
  ...talismanKind.legendary,
  ...talismanKind.mythic,
  ...talismanKind.exotic,
];

export const bookPostfixes = [...bookPostfix.uncommon, ...bookPostfix.rare];

const _rarityLevels = {
  // handmade 绿
  common: 1.0, // common 灰
  uncommon: 0.35, // uncommon 白
  rare: 0.15, // rare 蓝
  epic: 0.075, // epic 紫
  legendary: 0.025, // legendary 橙
  mythic: 0.01, // mythic 金
  exotic: 0.005, // exotic 虹
};

function _getRarity() {
  let rarity;
  let value = Math.random();
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
    let ss;
    if (style == null || style == 'random') {
      ss = r < 0.33333333 ? 'single' : r < 0.66666666 ? 'double' : 'combine';
    } else {
      ss = style;
    }
    let name = '';
    if (ss == 'single') {
      if (middleCharacter) {
        name = middleCharacter;
      } else {
        let nameIndex = Math.floor(Math.random() * namesOfASex.length);
        name = namesOfASex[nameIndex];
      }
    } else if (ss == 'double') {
      let theMiddleCharacter;
      if (middleCharacter) {
        theMiddleCharacter = middleCharacter;
      } else {
        let nameIndex = Math.floor(Math.random() * namesOfASex.length);
        theMiddleCharacter = namesOfASex[nameIndex];
      }
      let nameIndex = Math.floor(Math.random() * namesOfASex.length);
      let theLastCharacter = namesOfASex[nameIndex];
      name = `${theMiddleCharacter}${theLastCharacter}`;
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
      name = `${theMiddleCharacter}${theLastCharacter}`;
    }
    names.push(`${theFamilyName}${name}`);
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
    let name = `${theFirstCharacter}${dao[nameIndex2]}`;
    let titleGroup =
      isFemale ?? Math.floor(Math.random() * 10) % 2 == 0
        ? daoTitleFemale
        : daoTitleMale;
    let t = title ?? '';
    if (!title) {
      let rarity = _getRarity().rarity;
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
    names.push(`${name}${t}`);
  }
  return names;
}

const _kNumberEndSupplement = '式';

function _getSkillName(length, kind, prefix, postfix) {
  let l = length;
  let rarity = 'handmade';
  if (!l) {
    let r = _getRarity();
    if (r.value < _rarityLevels.rare) {
      l = 3;
    } else if (r.value < _rarityLevels.uncommon) {
      l = 2;
    } else {
      l = 1;
    }
    rarity = r.rarity;
  }
  let name = '';
  let pre = prefix ?? '';
  let post = postfix ?? '';
  let k = kind ?? skillKind[Math.floor(Math.random() * skillKind.length)];
  for (let i = 0; i < l; ++i) {
    name += common[Math.floor(Math.random() * common.length)];
  }
  if (Math.random() < _rarityLevels.epic) {
    pre = skillPrefix[Math.floor(Math.random() * skillPrefix.length)];
  }
  if (Math.random() < _rarityLevels.epic) {
    post = skillPostfix[Math.floor(Math.random() * skillPostfix.length)];
  }
  if (k.length > 1) {
    name = `${pre}${name}${k}${post != '' ? post + _kNumberEndSupplement : ''}`;
  } else {
    name = `${pre}${name}${post}${k}`;
  }
  return { name, rarity };
}

export function getSkill(number, length, kind, prefix, postfix) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = _getSkillName(length, kind, prefix, postfix);
    names.push(name);
  }
  return names;
}

export function getBook(number, length, prefix, kind, postfix) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let rarity = 'handmade';
    let skillname = _getSkillName(kind, length);
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
      k = bookKind[Math.floor(Math.random() * bookKind.length)];
    }
    if (!prefix && !kind) {
      if (!postfix) {
        let r1 = Math.random();
        let r2 = Math.random();
        if (r1 < _rarityLevels.rare && r2 < _rarityLevels.rare) {
          rarity = 'uncommon';
          post =
            '（' +
            bookPostfix.rare[
              Math.floor(Math.random() * bookPostfix.rare.length)
            ] +
            '）';
        } else if (r1 < _rarityLevels.uncommon && r2 < _rarityLevels.uncommon) {
          rarity = 'common';
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
      rarity: skillname.rarity,
    });
  }
  return names;
}

export function getTalisman(number, kind) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = common[Math.floor(Math.random() * common.length)];
    let k = kind;
    let rarity = 'handmade';
    let prefix = '';
    if (!k) {
      rarity = _getRarity().rarity;
      if (rarity == 'exotic') {
        prefix =
          talismanPrefix[Math.floor(Math.random() * talismanPrefix.length)];
        k =
          talismanKind.exotic[
            Math.floor(Math.random() * talismanKind.exotic.length)
          ];
      } else if (rarity == 'mythic') {
        prefix =
          talismanPrefix[Math.floor(Math.random() * talismanPrefix.length)];
        k =
          talismanKind.mythic[
            Math.floor(Math.random() * talismanKind.mythic.length)
          ];
      } else if (rarity == 'legendary') {
        prefix =
          talismanPrefix[Math.floor(Math.random() * talismanPrefix.length)];
        k =
          talismanKind.legendary[
            Math.floor(Math.random() * talismanKind.legendary.length)
          ];
      } else if (rarity == 'epic') {
        prefix =
          talismanPrefix[Math.floor(Math.random() * talismanPrefix.length)];
        k =
          talismanKind.epic[
            Math.floor(Math.random() * talismanKind.epic.length)
          ];
      } else if (rarity == 'rare') {
        prefix =
          talismanPrefix[Math.floor(Math.random() * talismanPrefix.length)];
        k =
          talismanKind.rare[
            Math.floor(Math.random() * talismanKind.rare.length)
          ];
      } else if (rarity == 'uncommon') {
        k =
          talismanKind.uncommon[
            Math.floor(Math.random() * talismanKind.uncommon.length)
          ];
      } else if (rarity == 'common') {
        k =
          talismanKind.common[
            Math.floor(Math.random() * talismanKind.common.length)
          ];
      }
    }
    names.push({ name: `${name}${prefix}${k}`, rarity: rarity });
  }
  return names;
}

import family from '../data/name/family.json';
import female from '../data/name/female.json';
import male from '../data/name/male.json';
import middle from '../data/name/middle.json';
import dao from '../data/dao/dao.json';
import daoTitleFemale from '../data/dao/title_male.json';
import daoTitleMale from '../data/dao/title_female.json';
import skill from '../data/skill/skill.json';
import skillPrefix from '../data/skill/prefix.json';
import skillKind from '../data/skill/kind.json';
import skillPostfix from '../data/skill/postfix.json';
import bookPrefix from '../data/book/prefix.json';
import bookKind from '../data/book/kind.json';
import bookPostfix from '../data/book/postfix.json';

export default {
  getName,
  getDao,
  getSkill,
  getBook,
};

const _rarityLevels = {
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
      let familyIndex =
        Math.floor(Math.random() * family.length + 1) % family.length;
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
        let nameIndex =
          Math.floor(Math.random() * namesOfASex.length + 1) %
          namesOfASex.length;
        name = namesOfASex[nameIndex];
      }
    } else if (ss == 'double') {
      let theMiddleCharacter;
      if (middleCharacter) {
        theMiddleCharacter = middleCharacter;
      } else {
        let nameIndex =
          Math.floor(Math.random() * namesOfASex.length + 1) %
          namesOfASex.length;
        theMiddleCharacter = namesOfASex[nameIndex];
      }
      let nameIndex =
        Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;
      let theLastCharacter = namesOfASex[nameIndex];
      name = `${theMiddleCharacter}${theLastCharacter}`;
    } else {
      let theMiddleCharacter;
      if (middleCharacter) {
        theMiddleCharacter = middleCharacter;
      } else {
        let nameIndex =
          Math.floor(Math.random() * middle.length + 1) % middle.length;
        theMiddleCharacter = middle[nameIndex];
      }
      let nameIndex =
        Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;
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
      let nameIndex1 = Math.floor(Math.random() * dao.length + 1) % dao.length;
      theFirstCharacter = dao[nameIndex1];
    }
    let nameIndex2 = Math.floor(Math.random() * dao.length + 1) % dao.length;
    let name = `${theFirstCharacter}${dao[nameIndex2]}`;
    let titleGroup =
      isFemale ?? Math.floor(Math.random() * 10) % 2 == 0
        ? daoTitleFemale
        : daoTitleMale;
    let t = title ?? '';
    if (!title) {
      let r = _getRarity().rarity;
      if (r == 'exotic') {
        t =
          titleGroup.exotic[
            Math.floor(Math.random() * titleGroup.exotic.length)
          ];
      } else if (r == 'mythic') {
        t =
          titleGroup.mythic[
            Math.floor(Math.random() * titleGroup.mythic.length)
          ];
      } else if (r == 'legendary') {
        t =
          titleGroup.legendary[
            Math.floor(Math.random() * titleGroup.legendary.length)
          ];
      } else if (r == 'epic') {
        t = titleGroup.epic[Math.floor(Math.random() * titleGroup.epic.length)];
      } else if (r == 'rare') {
        t = titleGroup.rare[Math.floor(Math.random() * titleGroup.rare.length)];
      } else if (r == 'uncommon') {
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

function _getSkillName(kind, length) {
  let l = length;
  if (!l) {
    let rarity = _getRarity().value;
    if (rarity < _rarityLevels.rare) {
      l = 3;
    } else if (rarity < _rarityLevels.common) {
      l = 2;
    } else {
      l = 1;
    }
  }
  let name = '';
  for (let i = 0; i < l; ++i) {
    name += skill[Math.floor(Math.random() * skill.length)];
  }
  let end = kind ?? skillKind[Math.floor(Math.random() * skillKind.length)];
  if (_getRarity().value < _rarityLevels.epic) {
    let prefix = skillPrefix[Math.floor(Math.random() * skillPrefix.length)];
    name = `${prefix}${name}`;
  }
  if (_getRarity().value < _rarityLevels.epic) {
    let postfix = skillPostfix[Math.floor(Math.random() * skillPostfix.length)];
    if (end.length > 1) {
      name = `${name}${end}${postfix}${_kNumberEndSupplement}`;
    } else {
      name = `${name}${postfix}${end}`;
    }
  } else {
    name = `${name}${end}`;
  }
  return name;
}

export function getSkill(number, kind, length) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = _getSkillName(kind, length);
    names.push(name);
  }
  return names;
}

export function getBook(number, length, prefix, kind, postfix) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let skillname = _getSkillName(kind, length);
    let r = rarity ?? _getRarity().rarity;
    let pre = prefix ?? '';
    let k = kind ?? '';
    let post = postfix ?? '';
    if (!prefix) {
      if (r == 'exotic') {
        pre = bookDef.exotic[Math.floor(Math.random() * bookDef.exotic.length)];
      } else if (r == 'mythic') {
        pre = bookDef.mythic[Math.floor(Math.random() * bookDef.mythic.length)];
      } else if (r == 'legendary') {
        pre =
          bookDef.legendary[
            Math.floor(Math.random() * bookDef.legendary.length)
          ];
      } else if (r == 'epic') {
        pre = bookDef.epic[Math.floor(Math.random() * bookDef.epic.length)];
      }
    }
    if (!kind) {
      k = bookEpicKind[Math.floor(Math.random() * bookEpicKind.length)];
    }
    if (!prefix && !kind) {
      if (!postfix) {
        let r1 = Math.random();
        let r2 = Math.random();
        if (r1 < _rarityLevels.uncommon && r2 < _rarityLevels.uncommon) {
          post =
            bookDef.uncommon[
              Math.floor(Math.random() * bookDef.uncommon.length)
            ];
        } else if (r1 < _rarityLevels.common && r2 < _rarityLevels.common) {
          post =
            bookDef.common[Math.floor(Math.random() * bookDef.uncommon.length)];
        }
      }
    }
    names.push(`《${skillname}${pre}${k}${post}》`);
  }
  return names;
}

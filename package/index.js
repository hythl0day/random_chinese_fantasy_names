const family = require('./data/name/family.json');
const female = require('./data/name/female.json');
const male = require('./data/name/male.json');
const middle = require('./data/name/middle.json');
const dao = require('./data/dao/dao.json');
const daoTitleFemale = require('./data/dao/title_male.json');
const daoTitleMale = require('./data/dao/title_female.json');
const skill = require('./data/skill/skill.json');
const skillPrefix = require('./data/skill/prefix.json');
const skillKind = require('./data/skill/kind.json');
const skillPostfix = require('./data/skill/postfix.json');
const bookDef = require('./data/book/def.json');
const bookEpicKind = require('./data/book/epic_kind.json');

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

exports.getName = function (number, isFemale, style) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let familyIndex =
      Math.floor(Math.random() * family.length + 1) % family.length;
    let familyName = family[familyIndex];
    let f = isFemale ?? Math.floor(Math.random() * 10) % 2 == 0;
    let namesOfASex = f ? female : male;
    let r = Math.random();
    let name = '';
    if (style == 'single' || r < 0.33333333) {
      let nameIndex =
        Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;
      name = namesOfASex[nameIndex];
    } else if (style == 'double' || r < 0.66666666) {
      let nameIndex1 =
        Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;
      let nameIndex2 =
        Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;
      name = `${namesOfASex[nameIndex1]}${namesOfASex[nameIndex2]}`;
    } else {
      let nameIndex1 =
        Math.floor(Math.random() * middle.length + 1) % middle.length;
      let nameIndex2 =
        Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;
      name = `${middle[nameIndex1]}${namesOfASex[nameIndex2]}`;
    }
    names.push(`${familyName}${name}`);
  }
  return names;
};

exports.getDao = function (number, isFemale, rarity) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let nameIndex1 = Math.floor(Math.random() * dao.length + 1) % dao.length;
    let nameIndex2 = Math.floor(Math.random() * dao.length + 1) % dao.length;
    let name = `${dao[nameIndex1]}${dao[nameIndex2]}`;
    let titleGroup =
      isFemale ?? Math.floor(Math.random() * 10) % 2 == 0
        ? daoTitleFemale
        : daoTitleMale;
    let title = '';
    let r = rarity ?? _getRarity().rarity;
    if (r == 'exotic') {
      title =
        titleGroup.exotic[Math.floor(Math.random() * titleGroup.exotic.length)];
    } else if (r == 'mythic') {
      title =
        titleGroup.mythic[Math.floor(Math.random() * titleGroup.mythic.length)];
    } else if (r == 'legendary') {
      title =
        titleGroup.legendary[
          Math.floor(Math.random() * titleGroup.legendary.length)
        ];
    } else if (r == 'epic') {
      title =
        titleGroup.epic[Math.floor(Math.random() * titleGroup.epic.length)];
    } else if (r == 'rare') {
      title =
        titleGroup.rare[Math.floor(Math.random() * titleGroup.rare.length)];
    } else if (r == 'uncommon') {
      title =
        titleGroup.uncommon[
          Math.floor(Math.random() * titleGroup.uncommon.length)
        ];
    }
    names.push(`${name}${title}`);
  }
  return names;
};

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

exports.getSkill = function (number, kind, length) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = _getSkillName(kind, length);
    names.push(name);
  }
  return names;
};

exports.getBook = function (number, kind, length, rarity) {
  let names = [];
  for (let i = 0; i < number; ++i) {
    let name = '';
    let skillname = _getSkillName(kind, length);
    let r = rarity ?? _getRarity().rarity;
    if (r == 'exotic') {
      let prefix =
        bookDef.exotic[Math.floor(Math.random() * bookDef.exotic.length)];
      let kind = bookEpicKind[Math.floor(Math.random() * bookEpicKind.length)];
      name = `${skillname}${prefix}${kind}`;
    } else if (r == 'mythic') {
      let prefix =
        bookDef.mythic[Math.floor(Math.random() * bookDef.mythic.length)];
      let kind = bookEpicKind[Math.floor(Math.random() * bookEpicKind.length)];
      name = `${skillname}${prefix}${kind}`;
    } else if (r == 'legendary') {
      let prefix =
        bookDef.legendary[Math.floor(Math.random() * bookDef.legendary.length)];
      let kind = bookEpicKind[Math.floor(Math.random() * bookEpicKind.length)];
      name = `${skillname}${prefix}${kind}`;
    } else if (r == 'epic') {
      let prefix =
        bookDef.epic[Math.floor(Math.random() * bookDef.epic.length)];
      let kind = bookEpicKind[Math.floor(Math.random() * bookEpicKind.length)];
      name = `${skillname}${prefix}${kind}`;
    } else if (r == 'rare') {
      name = skillname;
    } else if (r == 'uncommon') {
      let isBroken = Math.random() < _rarityLevels.uncommon;
      if (isBroken) {
        let postfix =
          bookDef.uncommon[Math.floor(Math.random() * bookDef.uncommon.length)];
        name = `${skillname}（${postfix}）`;
      } else {
        name = skillname;
      }
    } else if (r == 'common') {
      let isBroken = Math.random() < _rarityLevels.common;
      if (isBroken) {
        let postfix =
          bookDef.common[Math.floor(Math.random() * bookDef.common.length)];
        name = `${skillname}（${postfix}）`;
      } else {
        name = skillname;
      }
    }
    names.push(`《${name}》`);
  }
  return names;
};

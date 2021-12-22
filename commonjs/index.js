"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getBook = getBook;
exports.getDao = getDao;
exports.getName = getName;
exports.getSkill = getSkill;

var _family = _interopRequireDefault(require("../data/name/family.json"));

var _female = _interopRequireDefault(require("../data/name/female.json"));

var _male = _interopRequireDefault(require("../data/name/male.json"));

var _middle = _interopRequireDefault(require("../data/name/middle.json"));

var _dao = _interopRequireDefault(require("../data/dao/dao.json"));

var _title_male = _interopRequireDefault(require("../data/dao/title_male.json"));

var _title_female = _interopRequireDefault(require("../data/dao/title_female.json"));

var _skill = _interopRequireDefault(require("../data/skill/skill.json"));

var _prefix = _interopRequireDefault(require("../data/skill/prefix.json"));

var _kind = _interopRequireDefault(require("../data/skill/kind.json"));

var _postfix = _interopRequireDefault(require("../data/skill/postfix.json"));

var _prefix2 = _interopRequireDefault(require("../data/book/prefix.json"));

var _kind2 = _interopRequireDefault(require("../data/book/kind.json"));

var _postfix2 = _interopRequireDefault(require("../data/book/postfix.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  getName: getName,
  getDao: getDao,
  getSkill: getSkill,
  getBook: getBook
};
exports["default"] = _default;
var _rarityLevels = {
  common: 1.0,
  // common 灰
  uncommon: 0.35,
  // uncommon 白
  rare: 0.15,
  // rare 蓝
  epic: 0.075,
  // epic 紫
  legendary: 0.025,
  // legendary 橙
  mythic: 0.01,
  // mythic 金
  exotic: 0.005 // exotic 虹

};

function _getRarity() {
  var rarity;
  var value = Math.random();

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

  return {
    rarity: rarity,
    value: value
  };
}

function getName(number, isFemale, style, familyName, middleCharacter) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var theFamilyName = void 0;

    if (!familyName) {
      var familyIndex = Math.floor(Math.random() * _family["default"].length + 1) % _family["default"].length;

      theFamilyName = _family["default"][familyIndex];
    } else {
      theFamilyName = familyName;
    }

    var f = isFemale !== null && isFemale !== void 0 ? isFemale : Math.floor(Math.random() * 10) % 2 == 0;
    var namesOfASex = f ? _female["default"] : _male["default"];
    var r = Math.random();
    var ss = void 0;

    if (style == null || style == 'random') {
      ss = r < 0.33333333 ? 'single' : r < 0.66666666 ? 'double' : 'combine';
    } else {
      ss = style;
    }

    var name = '';

    if (ss == 'single') {
      if (middleCharacter) {
        name = middleCharacter;
      } else {
        var nameIndex = Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;
        name = namesOfASex[nameIndex];
      }
    } else if (ss == 'double') {
      var theMiddleCharacter = void 0;

      if (middleCharacter) {
        theMiddleCharacter = middleCharacter;
      } else {
        var _nameIndex2 = Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;

        theMiddleCharacter = namesOfASex[_nameIndex2];
      }

      var _nameIndex = Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;

      var theLastCharacter = namesOfASex[_nameIndex];
      name = "".concat(theMiddleCharacter).concat(theLastCharacter);
    } else {
      var _theMiddleCharacter = void 0;

      if (middleCharacter) {
        _theMiddleCharacter = middleCharacter;
      } else {
        var _nameIndex4 = Math.floor(Math.random() * _middle["default"].length + 1) % _middle["default"].length;

        _theMiddleCharacter = _middle["default"][_nameIndex4];
      }

      var _nameIndex3 = Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;

      var _theLastCharacter = namesOfASex[_nameIndex3];
      name = "".concat(_theMiddleCharacter).concat(_theLastCharacter);
    }

    names.push("".concat(theFamilyName).concat(name));
  }

  return names;
}

function getDao(number, isFemale, title, firstCharacter) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var theFirstCharacter = void 0;

    if (firstCharacter) {
      theFirstCharacter = firstCharacter;
    } else {
      var nameIndex1 = Math.floor(Math.random() * _dao["default"].length + 1) % _dao["default"].length;

      theFirstCharacter = _dao["default"][nameIndex1];
    }

    var nameIndex2 = Math.floor(Math.random() * _dao["default"].length + 1) % _dao["default"].length;

    var name = "".concat(theFirstCharacter).concat(_dao["default"][nameIndex2]);
    var titleGroup = (isFemale !== null && isFemale !== void 0 ? isFemale : Math.floor(Math.random() * 10) % 2 == 0) ? _title_male["default"] : _title_female["default"];
    var t = title !== null && title !== void 0 ? title : '';

    if (!title) {
      var r = _getRarity().rarity;

      if (r == 'exotic') {
        t = titleGroup.exotic[Math.floor(Math.random() * titleGroup.exotic.length)];
      } else if (r == 'mythic') {
        t = titleGroup.mythic[Math.floor(Math.random() * titleGroup.mythic.length)];
      } else if (r == 'legendary') {
        t = titleGroup.legendary[Math.floor(Math.random() * titleGroup.legendary.length)];
      } else if (r == 'epic') {
        t = titleGroup.epic[Math.floor(Math.random() * titleGroup.epic.length)];
      } else if (r == 'rare') {
        t = titleGroup.rare[Math.floor(Math.random() * titleGroup.rare.length)];
      } else if (r == 'uncommon') {
        t = titleGroup.uncommon[Math.floor(Math.random() * titleGroup.uncommon.length)];
      }
    }

    names.push("".concat(name).concat(t));
  }

  return names;
}

var _kNumberEndSupplement = '式';

function _getSkillName(kind, length) {
  var l = length;

  if (!l) {
    var _rarity = _getRarity().value;

    if (_rarity < _rarityLevels.rare) {
      l = 3;
    } else if (_rarity < _rarityLevels.common) {
      l = 2;
    } else {
      l = 1;
    }
  }

  var name = '';

  for (var i = 0; i < l; ++i) {
    name += _skill["default"][Math.floor(Math.random() * _skill["default"].length)];
  }

  var end = kind !== null && kind !== void 0 ? kind : _kind["default"][Math.floor(Math.random() * _kind["default"].length)];

  if (_getRarity().value < _rarityLevels.epic) {
    var prefix = _prefix["default"][Math.floor(Math.random() * _prefix["default"].length)];

    name = "".concat(prefix).concat(name);
  }

  if (_getRarity().value < _rarityLevels.epic) {
    var postfix = _postfix["default"][Math.floor(Math.random() * _postfix["default"].length)];

    if (end.length > 1) {
      name = "".concat(name).concat(end).concat(postfix).concat(_kNumberEndSupplement);
    } else {
      name = "".concat(name).concat(postfix).concat(end);
    }
  } else {
    name = "".concat(name).concat(end);
  }

  return name;
}

function getSkill(number, kind, length) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = _getSkillName(kind, length);

    names.push(name);
  }

  return names;
}

function getBook(number, length, prefix, kind, postfix) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var _rarity2;

    var name = '';

    var skillname = _getSkillName(kind, length);

    var r = (_rarity2 = rarity) !== null && _rarity2 !== void 0 ? _rarity2 : _getRarity().rarity;
    var pre = prefix !== null && prefix !== void 0 ? prefix : '';
    var k = kind !== null && kind !== void 0 ? kind : '';
    var post = postfix !== null && postfix !== void 0 ? postfix : '';

    if (!prefix) {
      if (r == 'exotic') {
        pre = bookDef.exotic[Math.floor(Math.random() * bookDef.exotic.length)];
      } else if (r == 'mythic') {
        pre = bookDef.mythic[Math.floor(Math.random() * bookDef.mythic.length)];
      } else if (r == 'legendary') {
        pre = bookDef.legendary[Math.floor(Math.random() * bookDef.legendary.length)];
      } else if (r == 'epic') {
        pre = bookDef.epic[Math.floor(Math.random() * bookDef.epic.length)];
      }
    }

    if (!kind) {
      k = bookEpicKind[Math.floor(Math.random() * bookEpicKind.length)];
    }

    if (!prefix && !kind) {
      if (!postfix) {
        var r1 = Math.random();
        var r2 = Math.random();

        if (r1 < _rarityLevels.uncommon && r2 < _rarityLevels.uncommon) {
          post = bookDef.uncommon[Math.floor(Math.random() * bookDef.uncommon.length)];
        } else if (r1 < _rarityLevels.common && r2 < _rarityLevels.common) {
          post = bookDef.common[Math.floor(Math.random() * bookDef.uncommon.length)];
        }
      }
    }

    names.push("\u300A".concat(skillname).concat(pre).concat(k).concat(post, "\u300B"));
  }

  return names;
}
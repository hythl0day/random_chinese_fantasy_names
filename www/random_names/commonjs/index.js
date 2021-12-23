"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bookKind", {
  enumerable: true,
  get: function get() {
    return _kind2["default"];
  }
});
exports.bookPrefixes = exports.bookPostfixes = void 0;
Object.defineProperty(exports, "clanKind", {
  enumerable: true,
  get: function get() {
    return _clan_kind["default"];
  }
});
Object.defineProperty(exports, "continentKind", {
  enumerable: true,
  get: function get() {
    return _continent_kind["default"];
  }
});
exports.daoTitles = void 0;
exports.getBook = getBook;
exports.getClan = getClan;
exports.getContinent = getContinent;
exports.getDao = getDao;
exports.getLocation = getLocation;
exports.getName = getName;
exports.getNation = getNation;
exports.getSkill = getSkill;
exports.getTalisman = getTalisman;
Object.defineProperty(exports, "locationKind", {
  enumerable: true,
  get: function get() {
    return _location_kind["default"];
  }
});
Object.defineProperty(exports, "nationKind", {
  enumerable: true,
  get: function get() {
    return _nation_kind["default"];
  }
});
Object.defineProperty(exports, "placePostfix", {
  enumerable: true,
  get: function get() {
    return _postfix2["default"];
  }
});
Object.defineProperty(exports, "placePrefix", {
  enumerable: true,
  get: function get() {
    return _prefix4["default"];
  }
});
Object.defineProperty(exports, "skillKind", {
  enumerable: true,
  get: function get() {
    return _kind["default"];
  }
});
Object.defineProperty(exports, "skillNumfix", {
  enumerable: true,
  get: function get() {
    return _numfix["default"];
  }
});
Object.defineProperty(exports, "skillPrefix", {
  enumerable: true,
  get: function get() {
    return _prefix["default"];
  }
});
exports.talismanKind = void 0;

var _family = _interopRequireDefault(require("../data/name/family.json"));

var _female = _interopRequireDefault(require("../data/name/female.json"));

var _male = _interopRequireDefault(require("../data/name/male.json"));

var _middle = _interopRequireDefault(require("../data/name/middle.json"));

var _dao = _interopRequireDefault(require("../data/dao/dao.json"));

var _title_male = _interopRequireDefault(require("../data/dao/title_male.json"));

var _title_female = _interopRequireDefault(require("../data/dao/title_female.json"));

var _common = _interopRequireDefault(require("../data/shared/common.json"));

var _strange = _interopRequireDefault(require("../data/shared/strange.json"));

var _kind = _interopRequireDefault(require("../data/skill/kind.json"));

var _prefix = _interopRequireDefault(require("../data/skill/prefix.json"));

var _numfix = _interopRequireDefault(require("../data/skill/numfix.json"));

var _prefix2 = _interopRequireDefault(require("../data/book/prefix.json"));

var _kind2 = _interopRequireDefault(require("../data/book/kind.json"));

var _postfix = _interopRequireDefault(require("../data/book/postfix.json"));

var _kind3 = _interopRequireDefault(require("../data/talisman/kind.json"));

var _prefix3 = _interopRequireDefault(require("../data/talisman/prefix.json"));

var _clan_kind = _interopRequireDefault(require("../data/organization/clan_kind.json"));

var _nation_kind = _interopRequireDefault(require("../data/organization/nation_kind.json"));

var _place = _interopRequireDefault(require("../data/place/place.json"));

var _prefix4 = _interopRequireDefault(require("../data/place/prefix.json"));

var _postfix2 = _interopRequireDefault(require("../data/place/postfix.json"));

var _location_kind = _interopRequireDefault(require("../data/place/location_kind.json"));

var _continent_kind = _interopRequireDefault(require("../data/place/continent_kind.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var daoTitles = _toConsumableArray(new Set([].concat(_toConsumableArray(_title_male["default"].uncommon), _toConsumableArray(_title_male["default"].rare), _toConsumableArray(_title_male["default"].epic), _toConsumableArray(_title_male["default"].legendary), _toConsumableArray(_title_male["default"].mythic), _toConsumableArray(_title_male["default"].exotic), _toConsumableArray(_title_female["default"].uncommon), _toConsumableArray(_title_female["default"].rare), _toConsumableArray(_title_female["default"].epic), _toConsumableArray(_title_female["default"].legendary), _toConsumableArray(_title_female["default"].mythic), _toConsumableArray(_title_female["default"].exotic))));

exports.daoTitles = daoTitles;
var bookPrefixes = [].concat(_toConsumableArray(_prefix2["default"].epic), _toConsumableArray(_prefix2["default"].legendary), _toConsumableArray(_prefix2["default"].mythic), _toConsumableArray(_prefix2["default"].exotic));
exports.bookPrefixes = bookPrefixes;
var talismanKind = [].concat(_toConsumableArray(_kind3["default"].common), _toConsumableArray(_kind3["default"].uncommon), _toConsumableArray(_kind3["default"].rare), _toConsumableArray(_kind3["default"].epic), _toConsumableArray(_kind3["default"].legendary), _toConsumableArray(_kind3["default"].mythic), _toConsumableArray(_kind3["default"].exotic));
exports.talismanKind = talismanKind;
var bookPostfixes = [].concat(_toConsumableArray(_postfix["default"].uncommon), _toConsumableArray(_postfix["default"].rare));
exports.bookPostfixes = bookPostfixes;
var _rarityLevels = {
  // handmade 绿
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
      var familyIndex = Math.floor(Math.random() * _family["default"].length);
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
        var nameIndex = Math.floor(Math.random() * namesOfASex.length);
        name = namesOfASex[nameIndex];
      }
    } else if (ss == 'double') {
      var theMiddleCharacter = void 0;

      if (middleCharacter) {
        theMiddleCharacter = middleCharacter;
      } else {
        var _nameIndex2 = Math.floor(Math.random() * namesOfASex.length);

        theMiddleCharacter = namesOfASex[_nameIndex2];
      }

      var _nameIndex = Math.floor(Math.random() * namesOfASex.length);

      var theLastCharacter = namesOfASex[_nameIndex];
      name = "".concat(theMiddleCharacter).concat(theLastCharacter);
    } else {
      var _theMiddleCharacter = void 0;

      if (middleCharacter) {
        _theMiddleCharacter = middleCharacter;
      } else {
        var _nameIndex4 = Math.floor(Math.random() * _middle["default"].length);

        _theMiddleCharacter = _middle["default"][_nameIndex4];
      }

      var _nameIndex3 = Math.floor(Math.random() * namesOfASex.length);

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
      var nameIndex1 = Math.floor(Math.random() * _dao["default"].length);
      theFirstCharacter = _dao["default"][nameIndex1];
    }

    var nameIndex2 = Math.floor(Math.random() * _dao["default"].length);
    var name = "".concat(theFirstCharacter).concat(_dao["default"][nameIndex2]);
    var titleGroup = (isFemale !== null && isFemale !== void 0 ? isFemale : Math.floor(Math.random() * 10) % 2 == 0) ? _title_female["default"] : _title_male["default"];
    var t = title !== null && title !== void 0 ? title : '';
    var rarity = 'common';

    if (!title) {
      rarity = _getRarity().rarity;

      if (rarity == 'exotic') {
        t = titleGroup.exotic[Math.floor(Math.random() * titleGroup.exotic.length)];
      } else if (rarity == 'mythic') {
        t = titleGroup.mythic[Math.floor(Math.random() * titleGroup.mythic.length)];
      } else if (rarity == 'legendary') {
        t = titleGroup.legendary[Math.floor(Math.random() * titleGroup.legendary.length)];
      } else if (rarity == 'epic') {
        t = titleGroup.epic[Math.floor(Math.random() * titleGroup.epic.length)];
      } else if (rarity == 'rare') {
        t = titleGroup.rare[Math.floor(Math.random() * titleGroup.rare.length)];
      } else if (rarity == 'uncommon') {
        t = titleGroup.uncommon[Math.floor(Math.random() * titleGroup.uncommon.length)];
      }
    }

    names.push({
      name: "".concat(name).concat(t),
      rarity: rarity
    });
  }

  return names;
}

var _kNumberBeginSupplement = '路';
var _kNumberEndSupplement = '式';

function _getSkillName(length, kind, prefix, numfix) {
  var l = length;
  var rarity = 'common';

  if (!l) {
    var r = _getRarity();

    if (r.value < _rarityLevels.rare) {
      l = 3;
    } else if (r.value < _rarityLevels.uncommon) {
      l = 2;
    } else {
      l = 1;
    }

    rarity = r.rarity;
  }

  var name = '';
  var pre = prefix !== null && prefix !== void 0 ? prefix : '';
  var n = numfix !== null && numfix !== void 0 ? numfix : '';
  var k = kind !== null && kind !== void 0 ? kind : _kind["default"][Math.floor(Math.random() * _kind["default"].length)];

  for (var i = 0; i < l; ++i) {
    name += _common["default"][Math.floor(Math.random() * _common["default"].length)];
  }

  if (Math.random() < _rarityLevels.epic) {
    pre = _prefix["default"][Math.floor(Math.random() * _prefix["default"].length)];
  }

  if (Math.random() < _rarityLevels.epic) {
    n = _numfix["default"][Math.floor(Math.random() * _numfix["default"].length)];
  }

  if (Math.random() < 0.5) {
    name = "".concat(n != '' ? n + _kNumberBeginSupplement : '').concat(pre).concat(name).concat(k);
  } else {
    if (k.length > 1) {
      name = "".concat(pre).concat(name).concat(k).concat(n != '' ? n + _kNumberEndSupplement : '');
    } else {
      name = "".concat(pre).concat(name).concat(n).concat(k);
    }
  }

  return {
    name: name,
    rarity: rarity
  };
}

function getSkill(number, length, kind, prefix, numfix) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = _getSkillName(length, kind, prefix, numfix);

    names.push(name);
  }

  return names;
}

function getBook(number, length, prefix, kind, postfix) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var rarity = 'common';

    var skillname = _getSkillName(length);

    var pre = prefix !== null && prefix !== void 0 ? prefix : '';
    var k = kind !== null && kind !== void 0 ? kind : '';
    var post = postfix !== null && postfix !== void 0 ? postfix : '';

    if (!prefix) {
      if (skillname.rarity == 'exotic') {
        pre = _prefix2["default"].exotic[Math.floor(Math.random() * _prefix2["default"].exotic.length)];
      } else if (skillname.rarity == 'mythic') {
        pre = _prefix2["default"].mythic[Math.floor(Math.random() * _prefix2["default"].mythic.length)];
      } else if (skillname.rarity == 'legendary') {
        pre = _prefix2["default"].legendary[Math.floor(Math.random() * _prefix2["default"].legendary.length)];
      } else if (skillname.rarity == 'epic') {
        pre = _prefix2["default"].epic[Math.floor(Math.random() * _prefix2["default"].epic.length)];
      }
    }

    if (pre && !kind) {
      k = _kind2["default"][Math.floor(Math.random() * _kind2["default"].length)];
    }

    if (!prefix && !kind) {
      if (!postfix) {
        var r1 = Math.random();
        var r2 = Math.random();

        if (r1 < _rarityLevels.rare && r2 < _rarityLevels.rare) {
          rarity = 'uncommon';
          post = '（' + _postfix["default"].rare[Math.floor(Math.random() * _postfix["default"].rare.length)] + '）';
        } else if (r1 < _rarityLevels.uncommon && r2 < _rarityLevels.uncommon) {
          rarity = 'common';
          post = '（' + _postfix["default"].uncommon[Math.floor(Math.random() * _postfix["default"].uncommon.length)] + '）';
        }
      }
    } else {
      rarity = 'rare';
    }

    names.push({
      name: "\u300A".concat(skillname.name).concat(pre).concat(k).concat(post, "\u300B"),
      rarity: skillname.rarity
    });
  }

  return names;
}

function getTalisman(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = _common["default"][Math.floor(Math.random() * _common["default"].length)];

    var k = kind;
    var rarity = 'common';
    var prefix = '';

    if (!k) {
      rarity = _getRarity().rarity;

      if (rarity == 'exotic') {
        prefix = _prefix3["default"][Math.floor(Math.random() * _prefix3["default"].length)];
        k = _kind3["default"].exotic[Math.floor(Math.random() * _kind3["default"].exotic.length)];
      } else if (rarity == 'mythic') {
        prefix = _prefix3["default"][Math.floor(Math.random() * _prefix3["default"].length)];
        k = _kind3["default"].mythic[Math.floor(Math.random() * _kind3["default"].mythic.length)];
      } else if (rarity == 'legendary') {
        prefix = _prefix3["default"][Math.floor(Math.random() * _prefix3["default"].length)];
        k = _kind3["default"].legendary[Math.floor(Math.random() * _kind3["default"].legendary.length)];
      } else if (rarity == 'epic') {
        prefix = _prefix3["default"][Math.floor(Math.random() * _prefix3["default"].length)];
        k = _kind3["default"].epic[Math.floor(Math.random() * _kind3["default"].epic.length)];
      } else if (rarity == 'rare') {
        prefix = _prefix3["default"][Math.floor(Math.random() * _prefix3["default"].length)];
        k = _kind3["default"].rare[Math.floor(Math.random() * _kind3["default"].rare.length)];
      } else if (rarity == 'uncommon') {
        k = _kind3["default"].uncommon[Math.floor(Math.random() * _kind3["default"].uncommon.length)];
      } else if (rarity == 'common') {
        k = _kind3["default"].common[Math.floor(Math.random() * _kind3["default"].common.length)];
      }
    }

    names.push({
      name: "".concat(name).concat(prefix).concat(k),
      rarity: rarity
    });
  }

  return names;
}

function getClan(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = _common["default"][Math.floor(Math.random() * _common["default"].length)];

    var k = kind;

    if (!k) {
      k = _clan_kind["default"][Math.floor(Math.random() * _clan_kind["default"].length)];
    }

    names.push("".concat(name).concat(k));
  }

  return names;
}

var _kContry = '国';

function getNation(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = '';
    var k = kind !== null && kind !== void 0 ? kind : '';
    var rarity = 'common';
    var r = Math.random();

    if (r < _rarityLevels.rare) {
      var index = Math.floor(Math.random() * _strange["default"].length);
      name = _strange["default"][index];
      rarity = 'rare';

      if (!kind) {
        if (name.length == 1) {
          k = _kContry;
        } else {
          k = _nation_kind["default"][Math.floor(Math.random() * _nation_kind["default"].length)];
        }
      }
    } else if (r < _rarityLevels.uncommon) {
      var _index = Math.floor(Math.random() * _common["default"].length);

      name = _common["default"][_index];
      rarity = 'uncommon';

      if (!kind) {
        if (name.length == 1) {
          k = _kContry;
        } else {
          k = _nation_kind["default"][Math.floor(Math.random() * _nation_kind["default"].length)];
        }
      }
    } else {
      var prefix = '';

      if (Math.random() < _rarityLevels.rare) {
        var _index3 = Math.floor(Math.random() * _prefix4["default"].length);

        prefix = _prefix4["default"][_index3];
      }

      var _index2 = Math.floor(Math.random() * _place["default"].length);

      name = prefix + _place["default"][_index2];

      if (!kind) {
        k = _kContry;
      }
    }

    names.push({
      name: "".concat(name).concat(k),
      rarity: rarity
    });
  }

  return names;
}

var _kFamily = '家';

function getLocation(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = '';
    var k = kind !== null && kind !== void 0 ? kind : '';
    var rarity = 'common';
    var r = Math.random();

    if (r < _rarityLevels.rare) {
      var index = Math.floor(Math.random() * _strange["default"].length);
      name = _strange["default"][index];
      rarity = 'rare';
    } else if (r < _rarityLevels.uncommon) {
      var _index4 = Math.floor(Math.random() * _common["default"].length);

      name = _common["default"][_index4];
      rarity = 'uncommon';
    } else {
      var placeIndex = Math.floor(Math.random() * _place["default"].length);
      var postfix = '';

      if (Math.random() < _rarityLevels.uncommon) {
        var postfixIndex = Math.floor(Math.random() * _postfix2["default"].length);
        postfix = _postfix2["default"][postfixIndex];
      }

      name = _place["default"][placeIndex] + postfix;
    }

    if (!kind) {
      k = _location_kind["default"][Math.floor(Math.random() * _location_kind["default"].length)];
    }

    names.push({
      name: "".concat(name).concat(k),
      rarity: rarity
    });
  }

  return names;
}

var _kContinent = '洲';

function getContinent(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = '';
    var k = kind !== null && kind !== void 0 ? kind : '';

    if (!kind) {
      k = _continent_kind["default"][Math.floor(Math.random() * _continent_kind["default"].length)];
    }

    var rarity = 'common';
    var r = Math.random();

    if (r < _rarityLevels.rare) {
      var index = Math.floor(Math.random() * _strange["default"].length);
      name = _strange["default"][index];
      rarity = 'rare';
    } else if (r < _rarityLevels.uncommon) {
      var _index5 = Math.floor(Math.random() * _common["default"].length);

      name = _common["default"][_index5];
      rarity = 'uncommon';
    } else {
      var prefix = '';

      if (Math.random() < _rarityLevels.rare) {
        var _index7 = Math.floor(Math.random() * _prefix4["default"].length);

        prefix = _prefix4["default"][_index7];
      }

      var _index6 = Math.floor(Math.random() * _place["default"].length);

      name = prefix + _place["default"][_index6];

      if (name.length == 1) {
        k = _kContinent;
      }
    }

    names.push({
      name: "".concat(name).concat(k),
      rarity: rarity
    });
  }

  return names;
}
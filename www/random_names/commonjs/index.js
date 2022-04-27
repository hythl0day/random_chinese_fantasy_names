"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alchemyKind", {
  enumerable: true,
  get: function get() {
    return _alchemy["default"];
  }
});
Object.defineProperty(exports, "bookKind", {
  enumerable: true,
  get: function get() {
    return _book["default"];
  }
});
exports.bookPrefixes = exports.bookPostfixes = void 0;
Object.defineProperty(exports, "clanKind", {
  enumerable: true,
  get: function get() {
    return _clan["default"];
  }
});
Object.defineProperty(exports, "creatureCategory", {
  enumerable: true,
  get: function get() {
    return _constants.creatureCategory;
  }
});
Object.defineProperty(exports, "creatureCategoryNames", {
  enumerable: true,
  get: function get() {
    return _constants.creatureCategoryNames;
  }
});
exports.daoTitles = void 0;
exports.getAlchemy = getAlchemy;
exports.getBook = getBook;
exports.getClan = getClan;
exports.getCreature = getCreature;
exports.getDao = getDao;
exports.getLocation = getLocation;
exports.getMaterial = getMaterial;
exports.getName = getName;
exports.getNation = getNation;
exports.getSkill = getSkill;
exports.getTalisman = getTalisman;
exports.getZone = getZone;
Object.defineProperty(exports, "locationKind", {
  enumerable: true,
  get: function get() {
    return _location["default"];
  }
});
exports.materialPostfixes = exports.materialKind = void 0;
Object.defineProperty(exports, "nationKind", {
  enumerable: true,
  get: function get() {
    return _nation["default"];
  }
});
Object.defineProperty(exports, "placePostfix", {
  enumerable: true,
  get: function get() {
    return _postfix3["default"];
  }
});
Object.defineProperty(exports, "placePrefix", {
  enumerable: true,
  get: function get() {
    return _prefix3["default"];
  }
});
Object.defineProperty(exports, "rarityColors", {
  enumerable: true,
  get: function get() {
    return _constants.rarityColors;
  }
});
Object.defineProperty(exports, "rarityLevels", {
  enumerable: true,
  get: function get() {
    return _constants.rarityLevels;
  }
});
Object.defineProperty(exports, "rarityNames", {
  enumerable: true,
  get: function get() {
    return _constants.rarityNames;
  }
});
Object.defineProperty(exports, "rarityValues", {
  enumerable: true,
  get: function get() {
    return _constants.rarityValues;
  }
});
Object.defineProperty(exports, "sexValues", {
  enumerable: true,
  get: function get() {
    return _constants.sexValues;
  }
});
Object.defineProperty(exports, "skillKind", {
  enumerable: true,
  get: function get() {
    return _skill["default"];
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
exports.talismanPostfixes = exports.talismanKind = void 0;
Object.defineProperty(exports, "zoneCategories", {
  enumerable: true,
  get: function get() {
    return _constants.zoneCategories;
  }
});
exports.zoneKind = void 0;

var _constants = require("./constants.js");

var _common = _interopRequireDefault(require("../data/shared/common.json"));

var _strange = _interopRequireDefault(require("../data/shared/strange.json"));

var _color = _interopRequireDefault(require("../data/shared/color.json"));

var _spirit = _interopRequireDefault(require("../data/shared/spirit.json"));

var _family = _interopRequireDefault(require("../data/name/family.json"));

var _female = _interopRequireDefault(require("../data/name/female.json"));

var _male = _interopRequireDefault(require("../data/name/male.json"));

var _middle = _interopRequireDefault(require("../data/name/middle.json"));

var _dao = _interopRequireDefault(require("../data/dao/dao.json"));

var _title_male = _interopRequireDefault(require("../data/dao/title_male.json"));

var _title_female = _interopRequireDefault(require("../data/dao/title_female.json"));

var _skill = _interopRequireDefault(require("../data/skill/skill.json"));

var _prefix = _interopRequireDefault(require("../data/skill/prefix.json"));

var _numfix = _interopRequireDefault(require("../data/skill/numfix.json"));

var _prefix2 = _interopRequireDefault(require("../data/book/prefix.json"));

var _book = _interopRequireDefault(require("../data/book/book.json"));

var _postfix = _interopRequireDefault(require("../data/book/postfix.json"));

var _talisman = _interopRequireDefault(require("../data/talisman/talisman.json"));

var _material = _interopRequireDefault(require("../data/talisman/material.json"));

var _postfix2 = _interopRequireDefault(require("../data/talisman/postfix.json"));

var _clan = _interopRequireDefault(require("../data/organization/clan.json"));

var _nation = _interopRequireDefault(require("../data/organization/nation.json"));

var _place = _interopRequireDefault(require("../data/place/place.json"));

var _prefix3 = _interopRequireDefault(require("../data/place/prefix.json"));

var _postfix3 = _interopRequireDefault(require("../data/place/postfix.json"));

var _location = _interopRequireDefault(require("../data/place/location.json"));

var _zone = _interopRequireDefault(require("../data/place/zone.json"));

var _material2 = _interopRequireDefault(require("../data/material/material.json"));

var _postfix4 = _interopRequireDefault(require("../data/material/postfix.json"));

var _creature = _interopRequireDefault(require("../data/creature/creature.json"));

var _prefix4 = _interopRequireDefault(require("../data/creature/prefix.json"));

var _strange2 = _interopRequireDefault(require("../data/creature/strange.json"));

var _alchemy = _interopRequireDefault(require("../data/alchemy/alchemy.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var daoTitles = _toConsumableArray(new Set([].concat(_toConsumableArray(_title_male["default"].uncommon), _toConsumableArray(_title_male["default"].epic), _toConsumableArray(_title_male["default"].legendary), _toConsumableArray(_title_male["default"].mythic), _toConsumableArray(_title_male["default"].exotic), _toConsumableArray(_title_female["default"].uncommon), _toConsumableArray(_title_female["default"].rare), _toConsumableArray(_title_female["default"].epic), _toConsumableArray(_title_female["default"].legendary), _toConsumableArray(_title_female["default"].mythic), _toConsumableArray(_title_female["default"].exotic))));

exports.daoTitles = daoTitles;
var bookPrefixes = [].concat(_toConsumableArray(_prefix2["default"].epic), _toConsumableArray(_prefix2["default"].legendary), _toConsumableArray(_prefix2["default"].mythic), _toConsumableArray(_prefix2["default"].exotic));
exports.bookPrefixes = bookPrefixes;
var talismanKind = [].concat(_toConsumableArray(_talisman["default"].common), _toConsumableArray(_talisman["default"].uncommon), _toConsumableArray(_talisman["default"].rare), _toConsumableArray(_talisman["default"].epic), _toConsumableArray(_talisman["default"].legendary), _toConsumableArray(_talisman["default"].mythic), _toConsumableArray(_talisman["default"].exotic));
exports.talismanKind = talismanKind;
var materialKind = [].concat(_toConsumableArray(_material2["default"].common), _toConsumableArray(_material2["default"].uncommon), _toConsumableArray(_material2["default"].rare), _toConsumableArray(_material2["default"].epic), _toConsumableArray(_material2["default"].legendary), _toConsumableArray(_material2["default"].mythic), _toConsumableArray(_material2["default"].exotic));
exports.materialKind = materialKind;
var materialPostfixes = [].concat(_toConsumableArray(_postfix4["default"].broken), _toConsumableArray(_postfix4["default"].handmade));
exports.materialPostfixes = materialPostfixes;
var talismanPostfixes = [].concat(_toConsumableArray(_postfix2["default"].broken), _toConsumableArray(_postfix2["default"].handmade));
exports.talismanPostfixes = talismanPostfixes;
var zoneKind = [].concat(_toConsumableArray(_zone["default"].land), _toConsumableArray(_zone["default"].water), _toConsumableArray(_zone["default"]["void"]));
exports.zoneKind = zoneKind;
var bookPostfixes = [].concat(_toConsumableArray(_postfix["default"].uncommon), _toConsumableArray(_postfix["default"].rare));
exports.bookPostfixes = bookPostfixes;

function _getRarity(max) {
  var rarity;
  var value = Math.random() * (max || 1.0);

  if (value < _constants.rarityValues.exotic) {
    rarity = 'exotic';
  } else if (value < _constants.rarityValues.mythic) {
    rarity = 'mythic';
  } else if (value < _constants.rarityValues.legendary) {
    rarity = 'legendary';
  } else if (value < _constants.rarityValues.epic) {
    rarity = 'epic';
  } else if (value < _constants.rarityValues.rare) {
    rarity = 'rare';
  } else if (value < _constants.rarityValues.uncommon) {
    rarity = 'uncommon';
  } else {
    rarity = 'common';
  }

  return {
    rarity: rarity,
    value: value
  };
}

var _kParenthesisLeft = '（';
var _kParenthesisRight = '）';
var _kBookLeft = '《';
var _kBookRight = '》';
var _kLinkWord = '之';
var common = [].concat(_toConsumableArray(_common["default"].dao), _toConsumableArray(_common["default"].element), _toConsumableArray(_common["default"].creature), _toConsumableArray(_common["default"].thing), _toConsumableArray(_common["default"].color), _toConsumableArray(_common["default"].place), _toConsumableArray(_common["default"].adj), _toConsumableArray(_common["default"].number), _toConsumableArray(_common["default"].gesture), _toConsumableArray(_common["default"].action));

function getName(number, options) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var _options$isFemale;

    var theFamilyName = void 0;

    if (options !== null && options !== void 0 && options.familyName) {
      theFamilyName = options.familyName;
    } else {
      var familyIndex = Math.floor(Math.random() * _family["default"].length);
      theFamilyName = _family["default"][familyIndex];
    }

    var f = (_options$isFemale = options === null || options === void 0 ? void 0 : options.isFemale) !== null && _options$isFemale !== void 0 ? _options$isFemale : Math.floor(Math.random() * 10) % 2 == 0;
    var namesOfASex = f ? _female["default"] : _male["default"];
    var r = Math.random();
    var s = options === null || options === void 0 ? void 0 : options.style;

    if (!s) {
      s = r < 0.33333333 ? 'single' : r < 0.66666666 ? 'double' : 'combine';
    }

    var name = '';

    if (s == 'single') {
      if (options !== null && options !== void 0 && options.middleCharacter) {
        name = options.middleCharacter;
      } else {
        var nameIndex = Math.floor(Math.random() * namesOfASex.length);
        name = namesOfASex[nameIndex];
      }
    } else if (s == 'double') {
      var theMiddleCharacter = void 0;

      if (options !== null && options !== void 0 && options.middleCharacter) {
        theMiddleCharacter = options.middleCharacter;
      } else {
        var _nameIndex2 = Math.floor(Math.random() * namesOfASex.length);

        theMiddleCharacter = namesOfASex[_nameIndex2];
      }

      var _nameIndex = Math.floor(Math.random() * namesOfASex.length);

      var theLastCharacter = namesOfASex[_nameIndex];
      name = theMiddleCharacter + theLastCharacter;
    } else {
      var _theMiddleCharacter = void 0;

      if (options !== null && options !== void 0 && options.middleCharacter) {
        _theMiddleCharacter = options.middleCharacter;
      } else {
        var _nameIndex4 = Math.floor(Math.random() * _middle["default"].length);

        _theMiddleCharacter = _middle["default"][_nameIndex4];
      }

      var _nameIndex3 = Math.floor(Math.random() * namesOfASex.length);

      var _theLastCharacter = namesOfASex[_nameIndex3];
      name = _theMiddleCharacter + _theLastCharacter;
    }

    names.push(theFamilyName + name);
  }

  return names;
}

function getDao(number, options) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var _options$isFemale2;

    var theFirstCharacter = void 0;

    if (options !== null && options !== void 0 && options.firstCharacter) {
      theFirstCharacter = options.firstCharacter;
    } else {
      var nameIndex1 = Math.floor(Math.random() * _dao["default"].length);
      theFirstCharacter = _dao["default"][nameIndex1];
    }

    var nameIndex2 = Math.floor(Math.random() * _dao["default"].length);
    var name = theFirstCharacter + _dao["default"][nameIndex2];
    var titleGroup = ((_options$isFemale2 = options === null || options === void 0 ? void 0 : options.isFemale) !== null && _options$isFemale2 !== void 0 ? _options$isFemale2 : Math.floor(Math.random() * 10) % 2 == 0) ? _title_female["default"] : _title_male["default"];
    var t = (options === null || options === void 0 ? void 0 : options.title) || '';
    var rarity = 'common';

    if (!t) {
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
    } else {
      if (_title_female["default"].exotic.includes(t) || _title_male["default"].exotic.includes(t)) {
        rarity = 'exotic';
      } else if (_title_female["default"].mythic.includes(t) || _title_male["default"].mythic.includes(t)) {
        rarity = 'mythic';
      }

      if (_title_female["default"].legendary.includes(t) || _title_male["default"].legendary.includes(t)) {
        rarity = 'legendary';
      }

      if (_title_female["default"].epic.includes(t) || _title_male["default"].epic.includes(t)) {
        rarity = 'epic';
      }

      if (_title_female["default"].rare.includes(t) || _title_male["default"].rare.includes(t)) {
        rarity = 'rare';
      }

      if (_title_female["default"].uncommon.includes(t) || _title_male["default"].uncommon.includes(t)) {
        rarity = 'uncommon';
      }
    }

    names.push({
      name: name + t,
      rarity: rarity
    });
  }

  return names;
}

var _kNumberBeginSupplement = '路';
var _kNumberEndSupplement = '式';

function _getSkillName(length, kind, prefix, numfix) {
  var l = length || 1;
  var rarity = 'common';

  if (!length) {
    var r = _getRarity();

    if (r.value < _constants.rarityValues.rare) {
      l = 3;
    } else if (r.value < _constants.rarityValues.uncommon) {
      l = 2;
    }

    rarity = r.rarity;
  } else {
    if (length > 2) {
      rarity = 'rare';
    } else if (length > 1) {
      rare = 'uncommon';
    }
  }

  var name = '';

  for (var i = 0; i < l; ++i) {
    name += common[Math.floor(Math.random() * common.length)];
  }

  var pre = prefix || '';

  if (!pre && Math.random() < _constants.rarityValues.epic) {
    pre = _prefix["default"][Math.floor(Math.random() * _prefix["default"].length)];
  }

  var n = numfix || '';

  if (!n && Math.random() < _constants.rarityValues.epic) {
    n = _numfix["default"][Math.floor(Math.random() * _numfix["default"].length)];
  }

  var k = kind || _skill["default"][Math.floor(Math.random() * _skill["default"].length)];

  if (Math.random() < 0.5) {
    name = (n != '' ? n + _kNumberBeginSupplement : '') + pre + name + k;
  } else {
    if (k.length > 1) {
      name = pre + name + k + (n != '' ? n + _kNumberEndSupplement : '');
    } else {
      name = pre + name + n + k;
    }
  }

  return {
    name: name,
    rarity: rarity
  };
}

function getSkill(number, options) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = _getSkillName(options === null || options === void 0 ? void 0 : options.length, options === null || options === void 0 ? void 0 : options.kind, options === null || options === void 0 ? void 0 : options.prefix, options === null || options === void 0 ? void 0 : options.numfix);

    names.push(name);
  }

  return names;
}

function getBook(number, options) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var skillname = _getSkillName(options === null || options === void 0 ? void 0 : options.length, options === null || options === void 0 ? void 0 : options.mainkind);

    var rarity = skillname.rarity;
    var pre = (options === null || options === void 0 ? void 0 : options.prefix) || '';

    if (!pre) {
      if (rarity == 'exotic') {
        pre = _prefix2["default"].exotic[Math.floor(Math.random() * _prefix2["default"].exotic.length)];
      } else if (rarity == 'mythic') {
        pre = _prefix2["default"].mythic[Math.floor(Math.random() * _prefix2["default"].mythic.length)];
      } else if (rarity == 'legendary') {
        pre = _prefix2["default"].legendary[Math.floor(Math.random() * _prefix2["default"].legendary.length)];
      } else if (rarity == 'epic') {
        pre = _prefix2["default"].epic[Math.floor(Math.random() * _prefix2["default"].epic.length)];
      }
    }

    var pk = (options === null || options === void 0 ? void 0 : options.postkind) || '';

    if (pre && !pk) {
      pk = _book["default"][Math.floor(Math.random() * _book["default"].length)];
    }

    var post = (options === null || options === void 0 ? void 0 : options.postfix) || '';

    if (!post) {
      var r1 = Math.random();
      var r2 = Math.random();

      if (r1 < _constants.rarityValues.rare && r2 < _constants.rarityValues.rare) {
        post = _kParenthesisLeft + _postfix["default"].rare[Math.floor(Math.random() * _postfix["default"].rare.length)] + _kParenthesisRight;
      } else if (r1 < _constants.rarityValues.uncommon && r2 < _constants.rarityValues.uncommon) {
        post = _kParenthesisLeft + _postfix["default"].uncommon[Math.floor(Math.random() * _postfix["default"].uncommon.length)] + _kParenthesisRight;
      }
    } else {
      post = _kParenthesisLeft + post + _kParenthesisRight;
    }

    names.push({
      name: _kBookLeft + skillname.name + pre + pk + post + _kBookRight,
      rarity: rarity
    });
  }

  return names;
}

var commonCreatureNames = [].concat(_toConsumableArray(_common["default"].dao), _toConsumableArray(_common["default"].element), _toConsumableArray(_common["default"].thing), _toConsumableArray(_common["default"].color), _toConsumableArray(_common["default"].number), _toConsumableArray(_common["default"].action));

function getCreature(number, options) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = '';
    var pre = commonCreatureNames[Math.floor(Math.random() * commonCreatureNames.length)];

    var c = _color["default"][Math.floor(Math.random() * _color["default"].length)];

    var s = _prefix4["default"][Math.floor(Math.random() * _prefix4["default"].length)];

    var cat = options === null || options === void 0 ? void 0 : options.category;
    var k = '';

    if (!cat) {
      cat = _constants.creatureCategory[Math.floor(Math.random() * _constants.creatureCategory.length)];
    }

    k = _creature["default"][cat][Math.floor(Math.random() * _creature["default"][cat].length)];

    var r = (options === null || options === void 0 ? void 0 : options.rarity) || _getRarity(_constants.rarityValues.uncommon).rarity;

    if (r == 'exotic') {
      name = _strange2["default"][Math.floor(Math.random() * _strange2["default"].length)];
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

    names.push({
      name: name,
      rarity: r,
      category: cat
    });
  }

  return names;
}

var _kAge1 = '百年';
var _kAge10 = '千年';
var _kAge100 = '万年';

function getMaterial(number, options) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = '';
    var age = '';
    var pre = common[Math.floor(Math.random() * common.length)];

    var c = _color["default"][Math.floor(Math.random() * _color["default"].length)];

    var s = _spirit["default"][Math.floor(Math.random() * _spirit["default"].length)];

    var k = options === null || options === void 0 ? void 0 : options.kind;

    var r = (options === null || options === void 0 ? void 0 : options.rarity) || _getRarity(_constants.rarityValues.uncommon).rarity;

    if (r == 'exotic') {
      var _k;

      var t = [].concat(_toConsumableArray(_material2["default"].exotic), _toConsumableArray(_material2["default"].mythic), _toConsumableArray(_material2["default"].legendary), _toConsumableArray(_material2["default"].epic), _toConsumableArray(_material2["default"].rare), _toConsumableArray(_material2["default"].uncommon), _toConsumableArray(_material2["default"].common));
      (_k = k) !== null && _k !== void 0 ? _k : k = t[Math.floor(Math.random() * t.length)];
      age = _kAge100;
      name = age + pre + c + s + k;
    } else if (r == 'mythic') {
      var _k2;

      var _t = [].concat(_toConsumableArray(_material2["default"].mythic), _toConsumableArray(_material2["default"].legendary), _toConsumableArray(_material2["default"].epic), _toConsumableArray(_material2["default"].rare), _toConsumableArray(_material2["default"].uncommon), _toConsumableArray(_material2["default"].common));

      (_k2 = k) !== null && _k2 !== void 0 ? _k2 : k = _t[Math.floor(Math.random() * _t.length)];
      age = _kAge10;
      name = age + pre + c + s + k;
    } else if (r == 'legendary') {
      var _k3;

      var _t2 = [].concat(_toConsumableArray(_material2["default"].legendary), _toConsumableArray(_material2["default"].epic), _toConsumableArray(_material2["default"].rare), _toConsumableArray(_material2["default"].uncommon), _toConsumableArray(_material2["default"].common));

      (_k3 = k) !== null && _k3 !== void 0 ? _k3 : k = _t2[Math.floor(Math.random() * _t2.length)];
      age = _kAge1;
      name = age + pre + c + s + k;
    } else if (r == 'epic') {
      var _k4;

      var _t3 = [].concat(_toConsumableArray(_material2["default"].epic), _toConsumableArray(_material2["default"].rare), _toConsumableArray(_material2["default"].uncommon), _toConsumableArray(_material2["default"].common));

      (_k4 = k) !== null && _k4 !== void 0 ? _k4 : k = _t3[Math.floor(Math.random() * _t3.length)];
      name = pre + c + s + k;
    } else if (r == 'rare') {
      var _k5;

      var _t4 = [].concat(_toConsumableArray(_material2["default"].rare), _toConsumableArray(_material2["default"].uncommon), _toConsumableArray(_material2["default"].common));

      (_k5 = k) !== null && _k5 !== void 0 ? _k5 : k = _t4[Math.floor(Math.random() * _t4.length)];
      name = pre + s + k;
    } else if (r == 'uncommon') {
      var _k6;

      var _t5 = [].concat(_toConsumableArray(_material2["default"].uncommon), _toConsumableArray(_material2["default"].common));

      (_k6 = k) !== null && _k6 !== void 0 ? _k6 : k = _t5[Math.floor(Math.random() * _t5.length)];
      name = c + s + k;
    } else if (r == 'common') {
      var _k7;

      (_k7 = k) !== null && _k7 !== void 0 ? _k7 : k = _material2["default"].common[Math.floor(Math.random() * _material2["default"].common.length)];
      name = c + k;
    }

    var post = (options === null || options === void 0 ? void 0 : options.postfix) || '';

    if (!post) {
      var r1 = Math.random();
      var r2 = Math.random();

      if (r1 < _constants.rarityValues.rare && r2 < _constants.rarityValues.rare) {
        post = _kParenthesisLeft + _postfix4["default"].broken[Math.floor(Math.random() * _postfix4["default"].broken.length)] + _kParenthesisRight;
      } else if (r1 < _constants.rarityValues.uncommon && r2 < _constants.rarityValues.uncommon) {
        post = _kParenthesisLeft + _postfix4["default"].handmade[Math.floor(Math.random() * _postfix4["default"].handmade.length)] + _kParenthesisRight;
      }
    } else {
      post = _kParenthesisLeft + post + _kParenthesisRight;
    }

    names.push({
      name: name + post,
      rarity: r
    });
  }

  return names;
}

var commonAlchemyNames = [].concat(_toConsumableArray(_common["default"].dao), _toConsumableArray(_common["default"].element), _toConsumableArray(_common["default"].color), _toConsumableArray(_common["default"].number), _toConsumableArray(_common["default"].action));

function getTalisman(number, options) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var _options$rarity;

    var name = '';
    var prefix = common[Math.floor(Math.random() * common.length)];

    var c = _color["default"][Math.floor(Math.random() * _color["default"].length)];

    var m = _material["default"][Math.floor(Math.random() * _material["default"].length)];

    var s = _spirit["default"][Math.floor(Math.random() * _spirit["default"].length)];

    var k = options === null || options === void 0 ? void 0 : options.kind;
    var r = (_options$rarity = options === null || options === void 0 ? void 0 : options.rarity) !== null && _options$rarity !== void 0 ? _options$rarity : _getRarity(_constants.rarityValues.uncommon).rarity;

    if (r == 'exotic') {
      var _k8;

      var t = [].concat(_toConsumableArray(_talisman["default"].exotic), _toConsumableArray(_talisman["default"].mythic), _toConsumableArray(_talisman["default"].legendary), _toConsumableArray(_talisman["default"].epic), _toConsumableArray(_talisman["default"].rare), _toConsumableArray(_talisman["default"].uncommon), _toConsumableArray(_talisman["default"].common));
      (_k8 = k) !== null && _k8 !== void 0 ? _k8 : k = t[Math.floor(Math.random() * t.length)];
      name = prefix + s + k;
    } else if (r == 'mythic') {
      var _k9;

      var _t6 = [].concat(_toConsumableArray(_talisman["default"].mythic), _toConsumableArray(_talisman["default"].legendary), _toConsumableArray(_talisman["default"].epic), _toConsumableArray(_talisman["default"].rare), _toConsumableArray(_talisman["default"].uncommon), _toConsumableArray(_talisman["default"].common));

      (_k9 = k) !== null && _k9 !== void 0 ? _k9 : k = _t6[Math.floor(Math.random() * _t6.length)];
      name = prefix + s + k;
    } else if (r == 'legendary') {
      var _k10;

      var _t7 = [].concat(_toConsumableArray(_talisman["default"].legendary), _toConsumableArray(_talisman["default"].epic), _toConsumableArray(_talisman["default"].rare), _toConsumableArray(_talisman["default"].uncommon), _toConsumableArray(_talisman["default"].common));

      (_k10 = k) !== null && _k10 !== void 0 ? _k10 : k = _t7[Math.floor(Math.random() * _t7.length)];
      name = prefix + c + m + k;
    } else if (r == 'epic') {
      var _k11;

      var _t8 = [].concat(_toConsumableArray(_talisman["default"].epic), _toConsumableArray(_talisman["default"].rare), _toConsumableArray(_talisman["default"].uncommon), _toConsumableArray(_talisman["default"].common));

      (_k11 = k) !== null && _k11 !== void 0 ? _k11 : k = _t8[Math.floor(Math.random() * _t8.length)];
      name = prefix + m + k;
    } else if (r == 'rare') {
      var _k12;

      var _t9 = [].concat(_toConsumableArray(_talisman["default"].rare), _toConsumableArray(_talisman["default"].uncommon), _toConsumableArray(_talisman["default"].common));

      (_k12 = k) !== null && _k12 !== void 0 ? _k12 : k = _t9[Math.floor(Math.random() * _t9.length)];
      name = prefix + k;
    } else if (r == 'uncommon') {
      var _k13;

      var _t10 = [].concat(_toConsumableArray(_talisman["default"].uncommon), _toConsumableArray(_talisman["default"].common));

      (_k13 = k) !== null && _k13 !== void 0 ? _k13 : k = _t10[Math.floor(Math.random() * _t10.length)];
      name = c + m + k;
    } else if (r == 'common') {
      var _k14;

      (_k14 = k) !== null && _k14 !== void 0 ? _k14 : k = _talisman["default"].common[Math.floor(Math.random() * _talisman["default"].common.length)];
      name = m + k;
    }

    var post = (options === null || options === void 0 ? void 0 : options.postfix) || '';

    if (!post) {
      var r1 = Math.random();
      var r2 = Math.random();

      if (r1 < _constants.rarityValues.rare && r2 < _constants.rarityValues.rare) {
        post = _kParenthesisLeft + _postfix2["default"].broken[Math.floor(Math.random() * _postfix2["default"].broken.length)] + _kParenthesisRight;
      } else if (r1 < _constants.rarityValues.uncommon && r2 < _constants.rarityValues.uncommon) {
        post = _kParenthesisLeft + _postfix2["default"].handmade[Math.floor(Math.random() * _postfix2["default"].handmade.length)] + _kParenthesisRight;
      }
    } else {
      post = _kParenthesisLeft + post + _kParenthesisRight;
    }

    names.push({
      name: name + post,
      rarity: r
    });
  }

  return names;
}

function getAlchemy(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var rarity = 'common';
    var pre = commonAlchemyNames[Math.floor(Math.random() * commonAlchemyNames.length)];
    var s = '';

    var r = _getRarity();

    if (r.value < _constants.rarityValues.rare) {
      s = _spirit["default"][Math.floor(Math.random() * _spirit["default"].length)];
    }

    rarity = r.rarity;
    var k = kind || '';

    if (!kind) {
      k = _alchemy["default"][Math.floor(Math.random() * _alchemy["default"].length)];
    }

    names.push({
      name: pre + s + k,
      rarity: rarity
    });
  }

  return names;
}

function getClan(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = common[Math.floor(Math.random() * common.length)];
    var k = kind;

    if (!k) {
      k = _clan["default"][Math.floor(Math.random() * _clan["default"].length)];
    }

    names.push(name + k);
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

    if (r < _constants.rarityValues.rare) {
      name = _strange["default"][Math.floor(Math.random() * _strange["default"].length)];
      rarity = 'rare';

      if (!kind) {
        if (name.length == 1) {
          k = _kContry;
        } else {
          k = _nation["default"][Math.floor(Math.random() * _nation["default"].length)];
        }
      }
    } else if (r < _constants.rarityValues.uncommon) {
      name = common[Math.floor(Math.random() * common.length)];
      rarity = 'uncommon';

      if (!kind) {
        if (name.length == 1) {
          k = _kContry;
        } else {
          k = _nation["default"][Math.floor(Math.random() * _nation["default"].length)];
        }
      }
    } else {
      var prefix = '';

      if (Math.random() < _constants.rarityValues.rare) {
        prefix = _prefix3["default"][Math.floor(Math.random() * _prefix3["default"].length)];
      }

      name = prefix + _place["default"][Math.floor(Math.random() * _place["default"].length)];

      if (!kind) {
        k = _kContry;
      }
    }

    names.push({
      name: name + k,
      rarity: rarity
    });
  }

  return names;
}

function getLocation(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = '';
    var k = kind !== null && kind !== void 0 ? kind : '';
    var rarity = 'common';
    var r = Math.random();

    if (r < _constants.rarityValues.rare) {
      name = _strange["default"][Math.floor(Math.random() * _strange["default"].length)];
      rarity = 'rare';
    } else if (r < _constants.rarityValues.uncommon) {
      name = common[Math.floor(Math.random() * common.length)];
      rarity = 'uncommon';
    } else {
      var placeIndex = Math.floor(Math.random() * _place["default"].length);
      var postfix = '';

      if (Math.random() < _constants.rarityValues.uncommon) {
        var postfixIndex = Math.floor(Math.random() * _postfix3["default"].length);
        postfix = _postfix3["default"][postfixIndex];
      }

      name = _place["default"][placeIndex] + postfix;
    }

    if (!kind) {
      k = _location["default"][Math.floor(Math.random() * _location["default"].length)];
    }

    names.push({
      name: name + k,
      rarity: rarity
    });
  }

  return names;
}

function getZoneKind(category) {
  var _category;

  (_category = category) !== null && _category !== void 0 ? _category : category = _constants.zoneCategories[Math.floor(Math.random() * _constants.zoneCategories.length)];
  var group = _zone["default"][category];
  return group[Math.floor(Math.random() * group.length)];
}

function getZone(number, options) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var _options$kind;

    var name = '';
    var k = (_options$kind = options === null || options === void 0 ? void 0 : options.kind) !== null && _options$kind !== void 0 ? _options$kind : getZoneKind(options === null || options === void 0 ? void 0 : options.category);
    var rarity = 'common';
    var r = Math.random();

    if (r < _constants.rarityValues.rare) {
      name = _strange["default"][Math.floor(Math.random() * _strange["default"].length)];
      rarity = 'rare';
    } else if (r < _constants.rarityValues.uncommon) {
      name = common[Math.floor(Math.random() * common.length)];
      rarity = 'uncommon';
    } else {
      var prefix = '';

      if (Math.random() < _constants.rarityValues.rare) {
        prefix = _prefix3["default"][Math.floor(Math.random() * _prefix3["default"].length)];
      }

      name = prefix + _place["default"][Math.floor(Math.random() * _place["default"].length)];

      if (name.length == 1) {
        if (k.length > 1) {
          name += _kLinkWord;
        } else {
          if (Math.random() < _constants.rarityValues.rare) {
            name += _kLinkWord;
          }
        }
      }
    }

    names.push({
      name: name + k,
      rarity: rarity
    });
  }

  return names;
}
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'bookKind', {
  enumerable: true,
  get: function get() {
    return _kind2['default'];
  },
});
exports.daoTitles = exports.bookPrefixes = exports.bookPostfixes = void 0;
exports.getBook = getBook;
exports.getDao = getDao;
exports.getName = getName;
exports.getSkill = getSkill;
exports.getTalisman = getTalisman;
Object.defineProperty(exports, 'skillKind', {
  enumerable: true,
  get: function get() {
    return _kind['default'];
  },
});
Object.defineProperty(exports, 'skillPostfix', {
  enumerable: true,
  get: function get() {
    return _postfix['default'];
  },
});
Object.defineProperty(exports, 'skillPrefix', {
  enumerable: true,
  get: function get() {
    return _prefix['default'];
  },
});

var _family = _interopRequireDefault(require('../data/name/family.json'));

var _female = _interopRequireDefault(require('../data/name/female.json'));

var _male = _interopRequireDefault(require('../data/name/male.json'));

var _middle = _interopRequireDefault(require('../data/name/middle.json'));

var _dao = _interopRequireDefault(require('../data/dao/dao.json'));

var _title_male = _interopRequireDefault(
  require('../data/dao/title_male.json')
);

var _title_female = _interopRequireDefault(
  require('../data/dao/title_female.json')
);

var _skill = _interopRequireDefault(require('../data/common.json'));

var _prefix = _interopRequireDefault(require('../data/skill/prefix.json'));

var _kind = _interopRequireDefault(require('../data/skill/kind.json'));

var _postfix = _interopRequireDefault(require('../data/skill/numfix.json'));

var _prefix2 = _interopRequireDefault(require('../data/book/prefix.json'));

var _kind2 = _interopRequireDefault(require('../data/book/kind.json'));

var _postfix2 = _interopRequireDefault(require('../data/book/postfix.json'));

var _kind3 = _interopRequireDefault(require('../data/talisman/kind.json'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var daoTitles = _toConsumableArray(
  new Set([
    _title_male['default'].uncommon,
    _title_male['default'].rare,
    _title_male['default'].epic,
    _title_male['default'].legendary,
    _title_male['default'].mythic,
    _title_male['default'].exotic,
    _title_female['default'].uncommon,
    _title_female['default'].rare,
    _title_female['default'].epic,
    _title_female['default'].legendary,
    _title_female['default'].mythic,
    _title_female['default'].exotic,
  ])
);

exports.daoTitles = daoTitles;
var bookPrefixes = [].concat(
  _toConsumableArray(_prefix2['default'].epic),
  _toConsumableArray(_prefix2['default'].legendary),
  _toConsumableArray(_prefix2['default'].mythic),
  _toConsumableArray(_prefix2['default'].exotic)
);
exports.bookPrefixes = bookPrefixes;
var bookPostfixes = [].concat(
  _toConsumableArray(_postfix2['default'].uncommon),
  _toConsumableArray(_postfix2['default'].rare)
);
exports.bookPostfixes = bookPostfixes;
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
  exotic: 0.005, // exotic 虹
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
    value: value,
  };
}

function getName(number, isFemale, style, familyName, middleCharacter) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var theFamilyName = void 0;

    if (!familyName) {
      var familyIndex =
        Math.floor(Math.random() * _family['default'].length + 1) %
        _family['default'].length;

      theFamilyName = _family['default'][familyIndex];
    } else {
      theFamilyName = familyName;
    }

    var f =
      isFemale !== null && isFemale !== void 0
        ? isFemale
        : Math.floor(Math.random() * 10) % 2 == 0;
    var namesOfASex = f ? _female['default'] : _male['default'];
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
        var nameIndex =
          Math.floor(Math.random() * namesOfASex.length + 1) %
          namesOfASex.length;
        name = namesOfASex[nameIndex];
      }
    } else if (ss == 'double') {
      var theMiddleCharacter = void 0;

      if (middleCharacter) {
        theMiddleCharacter = middleCharacter;
      } else {
        var _nameIndex2 =
          Math.floor(Math.random() * namesOfASex.length + 1) %
          namesOfASex.length;

        theMiddleCharacter = namesOfASex[_nameIndex2];
      }

      var _nameIndex =
        Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;

      var theLastCharacter = namesOfASex[_nameIndex];
      name = ''.concat(theMiddleCharacter).concat(theLastCharacter);
    } else {
      var _theMiddleCharacter = void 0;

      if (middleCharacter) {
        _theMiddleCharacter = middleCharacter;
      } else {
        var _nameIndex4 =
          Math.floor(Math.random() * _middle['default'].length + 1) %
          _middle['default'].length;

        _theMiddleCharacter = _middle['default'][_nameIndex4];
      }

      var _nameIndex3 =
        Math.floor(Math.random() * namesOfASex.length + 1) % namesOfASex.length;

      var _theLastCharacter = namesOfASex[_nameIndex3];
      name = ''.concat(_theMiddleCharacter).concat(_theLastCharacter);
    }

    names.push(''.concat(theFamilyName).concat(name));
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
      var nameIndex1 =
        Math.floor(Math.random() * _dao['default'].length + 1) %
        _dao['default'].length;

      theFirstCharacter = _dao['default'][nameIndex1];
    }

    var nameIndex2 =
      Math.floor(Math.random() * _dao['default'].length + 1) %
      _dao['default'].length;

    var name = ''.concat(theFirstCharacter).concat(_dao['default'][nameIndex2]);
    var titleGroup = (
      isFemale !== null && isFemale !== void 0
        ? isFemale
        : Math.floor(Math.random() * 10) % 2 == 0
    )
      ? _title_female['default']
      : _title_male['default'];
    var t = title !== null && title !== void 0 ? title : '';

    if (!title) {
      var r = _getRarity().rarity;

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

    names.push(''.concat(name).concat(t));
  }

  return names;
}

var _kNumberEndSupplement = '式';

function _getSkillName(length, kind, prefix, postfix) {
  var l = length;

  if (!l) {
    var rarity = _getRarity().value;

    if (rarity < _rarityLevels.rare) {
      l = 3;
    } else if (rarity < _rarityLevels.uncommon) {
      l = 2;
    } else {
      l = 1;
    }
  }

  var name = '';
  var pre = prefix !== null && prefix !== void 0 ? prefix : '';
  var post = postfix !== null && postfix !== void 0 ? postfix : '';
  var k =
    kind !== null && kind !== void 0
      ? kind
      : _kind['default'][Math.floor(Math.random() * _kind['default'].length)];

  for (var i = 0; i < l; ++i) {
    name +=
      _skill['default'][Math.floor(Math.random() * _skill['default'].length)];
  }

  if (_getRarity().value < _rarityLevels.epic) {
    pre =
      _prefix['default'][Math.floor(Math.random() * _prefix['default'].length)];
  }

  if (_getRarity().value < _rarityLevels.epic) {
    post =
      _postfix['default'][
        Math.floor(Math.random() * _postfix['default'].length)
      ];
  }

  if (k.length > 1) {
    name = ''
      .concat(pre)
      .concat(name)
      .concat(k)
      .concat(post != '' ? post + _kNumberEndSupplement : '');
  } else {
    name = ''.concat(pre).concat(name).concat(post).concat(k);
  }

  return name;
}

function getSkill(number, length, kind, prefix, postfix) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = _getSkillName(length, kind, prefix, postfix);

    names.push(name);
  }

  return names;
}

function getBook(number, length, prefix, kind, postfix) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name = '';

    var skillname = _getSkillName(kind, length);

    var pre = prefix !== null && prefix !== void 0 ? prefix : '';
    var k = kind !== null && kind !== void 0 ? kind : '';
    var post = postfix !== null && postfix !== void 0 ? postfix : '';

    if (!prefix) {
      var r = _getRarity().rarity;

      if (r == 'exotic') {
        pre =
          _prefix2['default'].exotic[
            Math.floor(Math.random() * _prefix2['default'].exotic.length)
          ];
      } else if (r == 'mythic') {
        pre =
          _prefix2['default'].mythic[
            Math.floor(Math.random() * _prefix2['default'].mythic.length)
          ];
      } else if (r == 'legendary') {
        pre =
          _prefix2['default'].legendary[
            Math.floor(Math.random() * _prefix2['default'].legendary.length)
          ];
      } else if (r == 'epic') {
        pre =
          _prefix2['default'].epic[
            Math.floor(Math.random() * _prefix2['default'].epic.length)
          ];
      }
    }

    if (pre && !kind) {
      k =
        _kind2['default'][Math.floor(Math.random() * _kind2['default'].length)];
    }

    if (!prefix && !kind) {
      if (!postfix) {
        var r1 = Math.random();
        var r2 = Math.random();

        if (r1 < _rarityLevels.rare && r2 < _rarityLevels.rare) {
          post =
            _postfix2['default'].rare[
              Math.floor(Math.random() * _postfix2['default'].rare.length)
            ];
        } else if (r1 < _rarityLevels.uncommon && r2 < _rarityLevels.uncommon) {
          post =
            '（' +
            _postfix2['default'].uncommon[
              Math.floor(Math.random() * _postfix2['default'].uncommon.length)
            ] +
            '）';
        }
      }
    }

    names.push(
      '\u300A'.concat(skillname).concat(pre).concat(k).concat(post, '\u300B')
    );
  }

  return names;
}

function getTalisman(number, kind) {
  var names = [];

  for (var i = 0; i < number; ++i) {
    var name =
      _skill['default'][Math.floor(Math.random() * _skill['default'].length)];

    var k = kind;

    if (!k) {
      k =
        _kind3['default'][Math.floor(Math.random() * _kind3['default'].length)];
    }

    names.push('\u300A'.concat(name).concat(k, '\u300B'));
  }

  return names;
}

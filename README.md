# 仙侠小说专有名词随机生成器

随机生成人名、法号、功法、秘籍等。

目前项目还未完工，正在开发法宝、材料、丹药、地名、门派名的生成。

## 在线版本

[https://hetu.dev/random-names/](https://hetu.dev/random-names/)

## NPM Package

安装

```
npm i random_chinese_fantasy_names
```

使用

```
import { getName } from "random_chinese_fantasy_names"

console.log(getName(10))
```

如果你想要使用 common js 版本的包：

```
const { getName } = require("random_chinese_fantasy_names/commonjs")
```

# 仙侠世界名词随机生成器

随机生成人名、法号、功法、神通、法宝、材料、丹药、地名、门派名、等。

提供两种代码：[河图脚本语言](https://github.com/hetu-script/hetu-script)和 Javascript。功能完全相同。

关于 Javascript 的使用这里不再赘述。

效果截图(命令行测试)
![image](https://user-images.githubusercontent.com/2274141/146925353-ffe6c271-b86a-454b-a0d7-dc8ba4a729b6.png)

## 河图脚本的安装和使用

需要电脑上已经安装了[Dart SDK](https://gekorm.com/dart-windows/)，并配置好了 Dart 的环境参数。

如果是在脚本中使用，直接 import 即可。

如果是在命令行测试，可以安装河图脚本库：

```
dart pub global activate hetu_script_dev_tools
```

然后在本项目目录下的命令行输入：

```
hetu hetu/name.ht
```

进入 REPL 界面后，输入函数名字和数量获得随机名：

```
getName(10) // 生成 10 个名字
```

## 随机中文姓名

```
fun getName(number, {isFemale, style})
```

函数可以接受三个参数：

number（必填）: 生成名字的数量。

isFemale（命名参数）: 是否是女名，默认随机。

style（命名参数）: （名字样式，一个实字，两个实字，或者一个虚字+一个实字），默认随机。

## 随机法号

```
fun getDao(number, {isFemale, rarity})
```

函数可以接受三个参数：

number（必填）: 生成名字的数量。

isFemale（命名参数）: 是否是女性称号，默认随机。

rarity（命名参数）: 称号稀有度，默认随机，可选值包括：

| 稀有度字符串 | 概率  |                  称号                  |
| :----------- | :---- | :------------------------------------: |
| "common"     | 0.25  |             子，道人，道姑             |
| "rare"       | 0.15  |               真人，法师               |
| "epic"       | 0.075 |            上人，洞主，公主            |
| "legendary"  | 0.025 |         教主，真君，教母，圣母         |
| "mythic"     | 0.01  | 仙，仙人，仙师，仙翁，仙子，仙女，圣女 |
| "exotic"     | 0.005 |               天尊，娘娘               |

## 技能

```
fun getSkill(number, {length, kind})
```

函数可以接受三个参数：

number（必填）: 生成名字的数量。

length: 技能描述词语堆砌的数量，默认随机，随机时最小 1，最大 3，如果指定，则无限制。

kind 代表技能的种类，例如"遁术"，"内功"，"剑法"等，默认随机。

随机时，可能会在名字最前面或者种类文字前面，或者整个名字最后，加上"小"，"大"或者数字。这个数字只会在名字中出现一次。如果是出现在最后，则会补上一个"式"字。

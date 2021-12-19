# random_chinese_fantasy_names

随机生成人名、法号、地名、门派名、法宝名等。

这是个[河图脚本语言](https://github.com/hetu-script/hetu-script)的库。

## 安装

需要电脑上已经安装了[Dart SDK](https://gekorm.com/dart-windows/)，并配置好了 Dart 的环境参数。

如果是在脚本中使用，直接 import 即可。

如果是在命令行测试，可以安装河图脚本库：

```
dart pub global activate hetu_script_dev_tools
```

然后在本项目目录下的命令行输入：

```
hetu random_names.ht
```

进入 REPL 界面后，输入函数名字获得随机名：

```
getRandomName()
```

## 随机中文姓名

![~0@KN0G B0J%`FJ496M~ZCC](https://user-images.githubusercontent.com/2274141/146690222-67eb44ba-64ff-45f0-8412-72f058d95b96.png)

```
fun getRandomNames({nameStyle, isFemale, number = 1})
```

函数可以接受三个命名参数：

nameStyle: （名字样式，一个实字，两个实字，或者一个虚字+一个实字），默认随机。
isFemale: 是否是女名，默认随机。
number: 生成名字的数量，默认 1 个。

## 随机法号

![81)DZV44L%_H@94W@OUK2VH](https://user-images.githubusercontent.com/2274141/146690224-b6b6b9f5-78fb-498d-b5b6-7f0e36dfb394.png)

```
fun getRandomDaoNames({titleRarity, isFemale, number = 1})
```

函数可以接受三个命名参数：

titleRarity: 称号稀有度，默认随机，可选值包括：

| 稀有度字符串 | 概率  |                称号                |
| :----------- | :---- | :--------------------------------: |
| "common"     | 0.4   |                 子                 |
| "rare"       | 0.16  |     仙，童子，道人，童女，道姑     |
| "epic"       | 0.064 |    真人，上人，洞主，公主，法师    |
| "legendary"  | 0.025 | 仙人，仙师，仙翁，仙子，仙女，圣女 |
| "mythic"     | 0.01  |       教主，真君，教母，圣母       |
| "exotic"     | 0.004 |             天尊，娘娘             |

isFemale: 是否是女性称号，默认随机。
number: 生成名字的数量，默认 1 个。

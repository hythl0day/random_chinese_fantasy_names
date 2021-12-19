# random_chinese_fantasy_names

随机生成人名、法号、地名、门派名、法宝名等。

这是个[河图脚本语言](https://github.com/hetu-script/hetu-script)的库。

## 随机中文姓名

需要电脑上已经安装了[Dart SDK](https://gekorm.com/dart-windows/)，并配置好了Dart的环境参数。

安装河图脚本运行库：

```
dart pub global activate hetu_script_dev_tools
```

在本项目目录下输入：

```
hetu random_names.ht
```

进入河图命令行后，输入函数名字获得随机名：

```
getRandomName()
```

![image](https://user-images.githubusercontent.com/2274141/146657539-16fc53ab-096f-4d1a-9976-69ba576e09a0.png)

函数可以接受三个命名参数：

nameStyle: （名字样式，一个实字，两个实字，或者一个虚字+一个实字），默认随机。
isFemale: 是否是女名，默认随机。
number: 生成名字的数量，默认1个。

```
fun getRandomNames({nameStyle, isFemale, number = 1})
```

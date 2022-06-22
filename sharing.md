## TypeScript简介
TypeScript是一套由微软开发、维护的编程语言。TS不仅包含JavaScript的语法，而且还提供了静态类型检查以及使用看起来像基于类的面向对象编程语法。TS将会成为下一代Web应用、移动应用、NodeJS项目的主力开发语言。其特点总结如下：

1、开发阶段进行静态检查
2、面向对象编程
3、泛型支持
4、写出的代码工程性强

## 编译器原理
- 编译器简单介绍
程序是由一些文件沟通，文件中是程序员编写的文本。这些文本有一个特殊的程序（称为编译器）解析，转换成抽象语法树（abstract syntax tree）。AST是去掉了空白、注释和缩进用的制表符或者空格之后的数据结构。编译器把AST转换成一种称为字节码（bytecode）的底层表示。字节码再传给运行时程序计算，最终得到结果。也就是说，运行程序就是让运行时计算由编译器从源码解析得来的AST生成的字节码。不同语言的具体细节有所不同。

- 大致流程梳理为：
1、把程序解析为AST。
2、把AST编译成字节码。
3、运行时计算字节码。

- TypeScript编译过程：  
  * TS部分
1、TypeScript源码 --> TypeScript AST
2、类型检查器检查AST
3、TypeScript AST --> JavaScript源码
  
  * JS部分
4、JavaScript源码 --> JavaScript AST
5、AST --> 字节码
6、运行时计算字节码

## 用法基本介绍
1、类型声明
```js
function add(left: number, right: number): number {
    return left + right;
}
```
Note: 常见的类型有：any, unknown, boolean, number, bigint, string, symbol, Array<string>, string[], null, undefined,
void, never

2、使用Class组织代码结构
```js
class Person {
    private name: string;
    private age: number;
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    toString(): string {
        return `${this.name} (${this.age}) (${this.salary})`; // As of version 1.4
    }
}
```

3、使用泛型使得函数更通用
```js
function id<T>(x: T): T {
    return x;
}
```

4、定义类型文件
```js
declare namespace arithmetics {
    add(left: number, right: number): number;
    subtract(left: number, right: number): number;
    multiply(left: number, right: number): number;
    divide(left: number, right: number): number;
}
export = arithmetics;
```

5、并集（|）和交集（&）
```js
type Cat = {name: string, purrs: boolean};
type Dog = {name: string, barks: boolean, wags: boolean};
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;
```

## 错误处理机制
错误处理机制


## 整合TypeScript到 vue、react、taro 中
整合 ts 到代码中


## 总结
用法总结
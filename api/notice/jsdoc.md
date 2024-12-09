# JSDoc：JavaScript的API文档生成器

jsDoc官方文档：[https://www.jsdoc.com.cn/](https://www.jsdoc.com.cn/)

## 使用JSDoc示例

   在JavaScript文件中，使用JSDoc注释来描述代码的结构和行为。这些注释通常以`/** ... */`的形式出现，并包含特定的JSDoc标签，如`@param`、`@returns`、`@constructor`等。

  - 函数参数的类型：约束参数的类型
   ```javascript
   /**
    * 表示一本书。
    * @constructor
    * @param {string} title - 书的标题。
    * @param {string} author - 书的作者。
    */
   function Book(title, author) {
       this.title = title;
       this.author = author;
   }
   ```

  - 设置变量的类型：text的类型为UiText而不是UiBox。
   ```javascript
   /**
    * text-1
    * @type UiText
    */
   const text = ui.findChildByName('text-1');
   ```

## JSDoc的常用标签

1. **@constructor**
   - 用于声明一个构造函数。
   - 示例：`@constructor`

2. **@param**
   - 描述函数或方法的参数。
   - 示例：`@param {string} name - The name of the person.`

3. **@returns** 或 **@return**
   - 描述函数或方法的返回值。
   - 示例：`@returns {number} - The sum of the two numbers.`

4. **@throws** 或 **@exception**
   - 指出函数或方法可能抛出的异常或错误。
   - 示例：`@throws {Error} - If the input is invalid.`

5. **@type**
   - 指定变量或属性的类型。
   - 示例：`@type {number}`

6. **@property**
   - 描述对象的属性。
   - 示例：`@property {string} name - The name of the item.`

7. **@property {Type} [name]**
   - 可选属性的描述（方括号表示可选）。
   - 示例：`@property {string} [description] - Optional description of the item.`

8. **@callback**
   - 定义回调函数的签名。
   - 示例：`@callback DoneCallback @param {Error|null} err - The error object, or null if no error occurred. @param {Result} [result] - The result of the operation, if any.`

9. **@example**
   - 提供代码示例。
   - 示例：`@example const result = add(2, 3); console.log(result); // Output: 5`

10. **@see**
    - 提供对其他文档或资源的引用。
    - 示例：`@see http://example.com/related-topic`

11. **@since**
    - 指出某个功能或API自哪个版本开始可用。
    - 示例：`@since 1.0.0`

12. **@deprecated**
    - 标记某个功能或API已弃用。
    - 示例：`@deprecated Use the newMethod instead.`

13. **@override**
    - 指出某个方法重写了父类或接口中的方法。
    - 示例：`@override`

14. **@augments**
    - 指出一个类继承自另一个类。
    - 示例：`@augments SomeBaseClass`

15. **@implements**
    - 指出一个类实现了某个接口。
    - 示例：`@implements SomeInterface`

16. **@mixes**
    - 指出一个类混合了其他类或模块的功能（也称为traits）。
    - 示例：`@mixes SomeMixin`

17. **@namespace**
    - 定义一个命名空间。
    - 示例：`@namespace MyLibrary.Utils`

18. **@global**
    - 标记一个全局变量或函数。
    - 示例：`@global`

19. **@inner**
    - 标记一个内部（私有）成员，通常不会出现在生成的文档中。
    - 示例：`@inner`

20. **@alias**
    - 为某个成员提供一个别名。
    - 示例：`@alias anotherName`

这些标签可以组合使用，以提供关于代码的全面文档。例如，一个完整的函数文档可能包含`@param`、`@returns`、`@throws`和`@example`等标签。通过合理使用这些标签，可以生成清晰、有用的API文档，帮助其他创作者理解和使用你的代码。
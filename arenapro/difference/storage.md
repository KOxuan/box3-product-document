
# 数据空间
:::warning
该API文档：[GameDataStorage](https://docs.box3lab.com/api/GameDataStorage/getSpace.html)
:::

:::tip
**修改原因：**  
由于官方原先提供的d.ts文件中，该API接口的`value`字段被统一声明为`any`类型（更具体地说，是官方自定义的`JSONValue`类型，能同时容纳字符串、数值、布尔值、对象以及数组）。

然而，在大多数情况下，为了确保当前数据空间下的类型一致性，我们采用了泛型来约束，从而提升了代码的可读性和检查准确性。

:::

## 用法示例
### **不加泛型，默认为`JSONValue`类型**
![](/QQ20241022-192639.png)



### **加了泛型约束**
![](/QQ20241022-193007.png)


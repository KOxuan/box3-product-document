
# 数据跨端通讯
:::warning
服务端API文档：[ServerRemoteChannel](https://docs.box3lab.com/api/RemoteChannel/Server/)

客户端API文档：[ClientRemoteChannel](https://docs.box3lab.com/api/RemoteChannel/Client/)
:::

:::tip
**修改原因：**  
由于官方原先提供的d.ts文件中，该API接口通讯信息被统一声明为`any`类型（更具体地说，是官方自定义的`JSONValue`类型，能同时容纳字符串、数值、布尔值、对象以及数组）。

然而，在大多数情况下，为了确保当前通讯信息格式的一致性，我们采用了泛型来约束，从而提升了代码的可读性和检查准确性。

:::

## 用法示例
### **客户端向服务端发送数据**
![](/QQ20241022-195207.png)

### **服务器接收数据**
#### **没有约束类型**
![](/QQ20241022-195257.png)

#### **约束类型**
![](/QQ20241022-195414.png)

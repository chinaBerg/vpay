## vpay
基于Vue2的移动端密码输出框插件。
[查看Demo演示](https://chinaberg.github.io/vpay/dist/#/, '支付密码弹窗demo演示页面')

![支付密码框演示动图](./static/pay.gif)

### 安装

```bash
npm i vpay -S
```

### 使用
```js
import Vue from 'vue';
import vpay from 'vpay';

Vue.use(vpay);

// 组件使用
<vpay v-model="show" />
```

### API
| 参数 | 说明 | 类型 | 默认值 |
| - | :- | :- | :-: |
| v-model | 密码框的显示隐藏 | Boolean | false |
| digit | 密码的位数| Number | 6 |
| ref | 获取当前插件实例 | String | - |
| title | 弹窗标题 | String | 请输入支付密码 |
| loading-text | 正在支付的文字提示 | String | 正在支付 |
| finished-text | 支付成功的文字提示 | String | 支付成功 |
| duration | 支付成功提示的显示时间 | Number | 500 |

### Events

| 事件名 | 说明 | 参数 |
| :- | :- | :- |
| input-end | 密码输入完成后的回调函数 | 用户输入的密码 |
| close | 密码弹窗关闭后的回调函数 | - |
| forget | 点击忘记密码的回调函数 | - |

### 实例方法

| 方法名 | 说明 | 参数 |
| :- | :- | :- |
| $success | 通知插件支付结果成功，该方法返回`promise`，可在`then`中进行成功后的回调函数 | - |
| $fail| 密码弹窗关闭后的回调函数 | - |

```js
// 成功的回调示例
this.$refs.pays.$success(true).then(res => {
  console.log('支付成功');
  this.$router.push('/success');
});

// 支付结果失败：
this.$refs.pays.$fail('可以自定义错误提示，默认：支付密码错误');
```

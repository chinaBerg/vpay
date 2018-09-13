# vpay
vue移动端支付密码窗插件，仿支付宝密码框。

### demo地址
[demo演示页面](https://chinaberg.github.io/vpay/dist/#/, '支付密码弹窗demo演示页面')

### 动态图演示
![支付密码框演示动图](./static/pay.gif)

### 插件的安装
#### NPM 
```
npm i vpay
```
#### 引入插件
```
import Vue from 'vue';
import vpay from 'vpay';

Vue.use(vpay);
```

#### 基本用法  
```html
<vpay ref="pays"
    v-model="show"           
    @close="close"
    @forget="forget"
    @input-end="inputEnd"
></vpay>
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


### Event    

| 事件名 | 说明 | 参数 |  
| :- | :- | :- |
| input-end | 密码输入完成后的回调函数 | - |
| close | 密码弹窗关闭后的回调函数 | - |
| forget | 点击忘记密码的回调函数 | - |

### input-end 回调参数
| 参数名 | 说明 | 类型 |
| - | :- | :- |
| val | 支付密码 | String |

### 插件内部方法  
| 方法名 | 说明 | 参数 |  
| :- | :- | :- |
| $success | 通知插件支付结果成功，该方法返回promise，可在.then()方法中进行成功后的回调函数 | - |
| $fail| 密码弹窗关闭后的回调函数 | - |  

#### 用法示例：  
支付结果成功：  
```javascript
this.$refs.pays.$success(true).then(res => {
    console.log('支付成功')
    this.$router.push('/success')
})
```
支付结果失败：  
```javascript  
this.$refs.pays.$fail('可以自定义错误提示，默认：支付密码错误')  
```  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

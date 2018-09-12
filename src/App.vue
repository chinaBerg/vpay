<template>
  <div id="app">
      <h3>仿某宝支付密码框的vue插件</h3>
      <div class="submit-btn" @click="onShowPay">点击显示支付弹窗</div>

      <zfc-password
            v-model="show"           
            ref="pays"
            @close="close"
            @forget="forget"
            @input-end="inputEnd"
      ></zfc-password>
  </div>
</template>

<script>
export default {
    name: 'App',

    data () {
        return {
            show: false
        }
    },

    methods: {
        onShowPay () {
            this.show = true;
        },

        // 密码输入完成回调
        inputEnd (val) {
            setTimeout(() => {
                // 模拟支付成功的结果
                if (val == 111111) {
                    // 调用插件的$success方法告知插件支付成功
                    // 并且在then方法里面可以写支付成功的回调，例如可以跳转支付结果页面
                    this.$refs.pays.$success().then(res => {
                        console.log('支付成功')
                        this.$router.push('/success')
                    })
                // 模拟支付失败的结果    
                } else {
                    this.$refs.pays.$fail()
                }
            }, 1000)
        },

        // 取消支付弹窗关闭的回调
        close() {
            console.log('关闭')
        },

        // 忘记密码跳转
        forget () {
            console.log('触发forge事件');
        }
    }
}
</script>

<style>
    * {
      padding: 0;
      margin: 0;
    }
    body {
        max-width: 750px;
        margin: 0 auto;
    }

    .submit-btn {
        width: 100%;
        height: 50px;
        margin: 300px auto;
        background: #f00;
        color: #fff;
        text-align: center;
        line-height: 50px;
    }
</style>

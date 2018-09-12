import keyboard from './pay'
const zfcPassword = {
    install (Vue, options) {
        Vue.component('zfb-password', keyboard)
    }
}

export default zfcPassword
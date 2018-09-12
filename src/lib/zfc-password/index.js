import keyboard from './pay'
const zfcPassword = {
    install (Vue, options) {
        Vue.component('zfc-password', keyboard)
    }
}

export default zfcPassword
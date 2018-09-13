import keyboard from './pay'
const zfcPassword = {
    install (Vue, options) {
        Vue.component('vpay', keyboard)
    }
}

export default zfcPassword
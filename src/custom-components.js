import IconSvg from 'components/Icon-svg'
import CircleLoading from 'components/CircleLoading/index.vue'
import NoneData from 'components/NoneData/index'
import NoneData2 from 'components/NoneData/index2'
import Alert from 'components/Dialog/index.js'
import DefaultLoading from 'components/DefaultLoading/index.vue'
import FullCircleLoading from 'components/CircleLoading/full-loading.vue'
import HeaderBar from 'components/HeaderBar'
import SwitchCheck from 'components/Switch'
import { showLoading, hideLoading } from './components/DefaultLoading/index.js'


const install = Vue => {
    Vue.component('Icon', IconSvg)
    Vue.component('NoneData', NoneData)
    Vue.component('NoneData2', NoneData2)
    Vue.component('CircleLoading', CircleLoading)
    Vue.component('DefaultLoading', DefaultLoading)
    Vue.component('FullCircleLoading', FullCircleLoading)
    Vue.component('HeaderBar', HeaderBar)
    Vue.component('SwitchCheck', SwitchCheck)

    Vue.prototype.$alert = Alert
    Vue.prototype.$showLoading = showLoading
    Vue.prototype.$hideLoading = hideLoading
}

export default install
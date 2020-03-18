import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/test'

Vue.use(Vuex);

export default new Vuex.Store(
    {
        modules:{
            news
        }
    }
)

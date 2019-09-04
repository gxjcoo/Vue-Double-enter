import Vue from 'vue'
import Vuex from 'vuex'
import me from "./store/me"
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		me
	}
})

export default store
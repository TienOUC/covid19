import { createStore } from 'vuex';

const store = createStore({
	state: {
		chinaChartIndex: 0,
		worldChartIndex: 0,
		chinaMapflag: null,
		worldMapflag: null,
	},

	mutations: {
		changeChinaChartIndex(state, index) {
			state.chinaChartIndex = index;
		},
		changeWorldChartIndex(state, index) {
			state.worldChartIndex = index;
		},
		// switchChinaMap(state, flag) {
		// 	state.flag = flag;
		// },
		changeChinaFlagState(state, flag) {
			state.chinaMapflag = flag;
		},
		changeWorldFlagState(state, flag) {
			state.worldMapflag = flag;
		},
	},
	actions: {
		switchChinaMap(context, flag) {
			setTimeout(() => {
				context.commit('changeChinaFlagState', flag);
			}, 50);
		},
		switchWorldMap(context, flag) {
			setTimeout(() => {
				context.commit('changeWorldFlagState', flag);
			}, 50);
		},
	},
});

export default store;

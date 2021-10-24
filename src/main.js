import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

import * as echarts from 'echarts';
import china from './map/china.json';
import world from './map/world.json';
echarts.registerMap('china', china);
echarts.registerMap('world', world);

const app = createApp(App);

app.use(VueAxios, axios);
app.use(store)
app.provide('axios', app.config.globalProperties.axios);
app.config.globalProperties.$echarts = echarts;
app.mount('#app');

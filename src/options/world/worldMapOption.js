import 'echarts/map/js/world.js';

export default {
	visualMap: [
		{
			type: 'piecewise', //piecewise分段   continuous连续
			left: 10,
			bottom: 10,
			itemHeight: 10,
			itemWidth: 10,
			itemGap: 5,
			textGap: 5,
			pieces: [
				{ gte: 10000 },
				{ gt: 1000, lte: 9999 },
				{ gt: 100, lte: 999 },
				{ gt: 10, lte: 99 },
				{ gt: 1, lte: 9 },
				{ value: 0 },
			],
			inRange: {
				// 设置地图颜色
				color: ['#d2fdfc', '#f59e83', '#e55a4e', '#cb2a2f', '#ae233e', '#811c24'],
			},
			textStyle: {
				color: '#9e9e9e',
				fontSize: 10,
				fontWeight: 'bold',
			},
		},
	],
	// tooltip: {
	// 	formatter: function (params) {
	// 		return `
	//                   地区：${params.name} </br>
	//                   累计确诊：${(params.data && params.data.value) || 0} </br>
	//                   累计治愈：${(params.data && params.data.curedCount) || 0} </br>
	//                   累计死亡：${(params.data && params.data.deadCount) || 0} </br>
	//                   现存确诊：${(params.data && params.data.currentConfirmedCount) || 0}
	//                   `;
	// 	},
	// },
	series: [
		{
			type: 'map',
			map: 'world',
			label: {
				// 显示各省名称
				show: true,
				textStyle: {
					color: '#f5f5f5',
				},
			},
			itemStyle: {
				emphasis: {
					areaColor: 'rgb(210, 253, 252)', // 修改鼠标悬停时地图的背景色
				},
			},
			data: [5, 20, 36, 10, 10, 20], // 数据数组
		},
	],
};

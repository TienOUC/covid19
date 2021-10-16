export default {
	title: {
		text: '亚洲多国新增确诊',
	},
	tooltip: {
		trigger: 'axis',
	},
	legend: {
		data: ['新增境外输入'],
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true,
	},
	// toolbox: {
	// 	feature: {
	// 		saveAsImage: {},
	// 	},
	// },
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	},
	yAxis: {
		type: 'value',
	},
	series: [
		{
			name: '新增境外输入',
			type: 'line',
			smooth: true,
			stack: 'Total',
			data: [120, 132, 101, 134, 90, 230, 210],
		},
	],
};

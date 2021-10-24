export default (categories = [], data = []) => {
	return {
		title: {
			text: '本土近30天新增趋势',
			textStyle: {
				fontSize: 16,
			},
		},
		tooltip: {
			trigger: 'item',
			triggerOn: 'mousemove',
			borderWidth: 0,
			backgroundColor: 'rgba(50,50,50,0.7)',
			textStyle: {
				color: '#fff',
				fontSize: 10,
				fontWeight: 500,
			},
			formatter: (params) => {
				console.log(params);
				return `日期：${params.name} </br>
								新增：${(params && params.value) || 0}`;
			},
		},
		// legend: {
		// 	data: ['本土新增'],
		// 	top: 25,
		// 	right: 20,
		// 	itemHeight: 10,
		// 	itemStyle: {
		// 		color: '#d92121',
		// 	},
		// 	icon: 'circle',
		// 	textStyle: {
		// 		color: '#ccc',
		// 	},
		// },
		grid: {
			left: '1.2%',
			right: '4%',
			bottom: '0%',
			containLabel: true,
		},
		xAxis: {
			type: 'category',
			// nameTextStyle: { color: '#bbb' },
			axisLabel: {
				rotate: 45,
			},
			axisLine: {
				lineStyle: {
					color: '#ccc',
				},
			},
			axisTick: {
				show: false,
			},
			// boundaryGap: false,
			data: categories,
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#ccc',
				},
			},
		},
		series: [
			{
				name: '本土新增',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					color: '#d92121',
				},
				smooth: true,
				// stack: 'Total',
				data: data,
			},
		],
	};
};

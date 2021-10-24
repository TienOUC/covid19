export default (categories = [], data = []) => {
	return {
		title: {
			text: '现有疑似感染省Top10',
			textStyle: {
				fontSize: 16,
			},
		},
		tooltip: {
			// trigger: 'axis',
			// axisPointer: {
			// 	type: 'shadow',
			// },
			borderWidth: 0,
			backgroundColor: 'rgba(50,50,50,0.7)',
			textStyle: {
				color: '#fff',
				fontSize: 10,
				fontWeight: 500,
			},
			formatter: (params) => {
				return `地区：${params.name} </br>
							  疑似：${(params && params.value) || 0}`;
			},
		},
		grid: {
			left: '1.2%',
			right: '4%',
			bottom: '0',
			containLabel: true,
		},
		xAxis: [
			{
				type: 'category',
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
				data: categories,
				// axisTick: {
				// 	alignWithLabel: true,
				// },
			},
		],
		yAxis: [
			{
				type: 'value',
				axisLine: {
					show: false,
					lineStyle: {
						color: '#ccc',
					},
				},
			},
		],
		series: [
			{
				// name: '',
				type: 'bar',
				barWidth: '20%',
				itemStyle: {
					color: function (params) {
						let colorList = [
							'#d92121',
							'#e4573d',
							'#ec7f51',
							'#f4a766',
							'#f6b26b',
							'#f8b96f',
							'#f8bc70',
							'#f9c072',
							'#fac374',
							'#fac575',
						];
						return colorList[params.dataIndex];
					},
				},
				data: data,
			},
		],
	};
};

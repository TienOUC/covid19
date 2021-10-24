const _data = [];

function chinaMapOptions(data = _data, ...res) {
	return {
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
					color: ['#fff', '#ffe5db', '#ff9985', '#f57567', '#e64546', '#b80909'],
				},

				textStyle: {
					color: '#9e9e9e',
					fontSize: 10,
					fontWeight: 'bold',
				},
			},
		],
		tooltip: {
			// trigger: 'item',
			// triggerOn: 'click',

			borderWidth: 0,
			backgroundColor: 'rgba(50,50,50,0.7)',
			textStyle: {
				color: '#fff',
				fontSize: 10,
				fontWeight: 500,
				// lineHeight: 14,
			},
			formatter: (params) => {
				return `地区：${params.name} </br>
							  确诊：${(params.data && params.data.value) || 0}`;
			},
			// 	return `地区：${params.name} </br>
			// 				累计确诊：${(params.data && params.data.value) || 0} </br>
			// 				累计治愈：${(params.data && params.data.curedCount) || 0} </br>
			// 				累计死亡：${(params.data && params.data.deadCount) || 0} </br>
			// 				现存确诊：${(params.data && params.data.currentConfirmedCount) || 0}`;
			// },
		},
		series: [
			{
				top: 160,
				type: 'map',
				map: 'china',
				zoom: 1.7,
				label: {
					// 显示各省名称
					show: true,
					fontSize: 10,
					color: '#000',
				},
				emphasis: {
					itemStyle: {
						areaColor: 'rgb(210, 253, 252)', // 修改鼠标悬停时地图的背景色
					},
				},
				data: data,
			},
		],
	};
}

export default chinaMapOptions;

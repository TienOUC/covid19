// 将数据构造成 Echarts option 配置所需的格式
const optionCreater =  (temp) => {
	let province = [];
	let count = [];
	temp.forEach((item) => {
		province.push(item.province);
		count.push(item.count);
	});
	return { province, count };
};

export default optionCreater;
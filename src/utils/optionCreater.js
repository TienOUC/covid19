// 将数据构造成 Echarts option 配置所需的格式
const optionCreater = async (fn) => {
	const res = await fn();
	let province = [];
	let count = [];
	res.forEach((item) => {
		province.push(item.province);
		count.push(item.count);
	});
	return { province, count };
};

export default optionCreater;
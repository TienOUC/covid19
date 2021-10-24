const getBeforeDay = (before) => {
	let currentDay = new Date();
	let temp = currentDay.setDate(currentDay.getDate() - before);
	let options = { month: 'numeric', day: 'numeric' };
	let res = new Date(temp).toLocaleString('zh-CN', options).replace(/\//g, '.');

	return res;
};

export default getBeforeDay;

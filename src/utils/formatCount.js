function formatCount(count) {
	const reg2 = /(?!^)(?=(\d{3})+(?:$|\.))/g;
	const res = String(count).replace(reg2, ',');
	return res;
}

export default formatCount;

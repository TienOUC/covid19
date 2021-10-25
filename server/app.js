const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// 解析request
app.use(express.urlencoded({ extended: false }));
// 处理跨域
app.use(require('cors')());

app.get('/api/data', (req, res, next) => {
	fs.readFile(path.join(__dirname, '../data/data.json'), 'utf8', (err, data) => {
		if (err) res.send('data.json读取失败');
		res.send(data);
		next();
	});
});


app.get('/api/historyData', (req, res, next) => {
	fs.readFile(path.join(__dirname, '../data/historyData.json'), 'utf8', (err, data) => {
		if (err) res.send('historyData.json读取失败');
		res.send(data);
		next();
	});
});

app.listen(8088, () => console.log('http://127.0.0.1:8088'));

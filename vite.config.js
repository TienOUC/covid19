import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // 需要安装的插件@types/node
import viteCompression from 'vite-plugin-compression'; //gzip必备插件
const resolve = (dir) => path.join(__dirname, dir);

export default defineConfig({
	alias: {
		'@': resolve('src'),
	},
	plugins: [
		vue(),
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: 'gzip',
			ext: '.gz',
		}),
	],

	publicDir: 'public', // 公共文件路径,会被复制到outDir 根目录

	// 样式相关规则
	css: {
		preprocessorOptions: {
			scss: {
				// 加载全局样式
				additionalData: `@use './src/style/base.scss';
                         @use './src/style/reset.css';`,
			},
		},
	},

	// 打包相关规则
	build: {
		target: 'es2020', //指定es版本,浏览器的兼容性
		outDir: 'dist', //指定打包输出路径
		assetsDir: 'assets', //指定静态资源存放路径
		cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
		sourcemap: false, //是否构建source map 文件
		terserOptions: {
			// 生产环境移除console
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
	},

	// // 为服务器设置代理规则
	// server: {
	// 	host: '0.0.0.0', // 指定服务器主机名
	// 	port: 3333, // 指定服务端口号
	// 	open: true, // 运行自动打开浏览器
	// 	// https: false, // 关闭https
	// 	strictPort: true, // 若3333端口被占用,直接结束项目
	// 	proxy: {
	// 		// 选项写法
	// 		// "/api": {
	// 		//   target: "http://jsonplaceholder.typicode.com",
	// 		//   changeOrigin: true,
	// 		//   rewrite: (path) => path.replace(/^\/api/, ""),
	// 		// },
	// 	},
	// },
});

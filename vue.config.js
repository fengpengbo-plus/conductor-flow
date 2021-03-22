module.exports = {
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					javascriptEnabled: true
				}
			}
		}
	},
	runtimeCompiler: true,
	chainWebpack: (config) => {
		config.module
			.rule("image")
			.test(/\.ico$/)
			.use("url-loader")
			.loader("url-loader");
	}
}

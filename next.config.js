module.exports = {
	generateBuildId: () => 'build',
	reactStrictMode: true,
	images: {
	  disableStaticImages: true
	},
	webpack5: true,
	webpack: (config) => {
	  config.resolve.fallback = {
		...config.resolve.fallback,
		fs: false
	  }
  
	  return config;
	},
};

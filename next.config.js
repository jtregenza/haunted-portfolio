module.exports = {
	generateBuildId: () => 'build',
	reactStrictMode: true,
	images: {
	  disableStaticImages: true
	},
	target: 'experimental-serverless-trace',
	webpack5: true
};

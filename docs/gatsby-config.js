const config = require('./data/config')

module.exports = {
	siteMetadata: {
		title: config.title,
		description: config.description
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.title,
				short_name: 'React Popup',
				start_url: '/home',
				background_color: config.themeColor,
				theme_color: config.backgroundColor,
				display: 'minimal-ui',
				icon: './static/favicon/profile.png'
			}
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'Roboto'
				]
			}
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: config.title,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			}
		},
		{
			resolve: 'gatsby-mdx',
			options: {
				extensions: ['.mdx', '.md']
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: 'src/mdPages/'
			}
		},
		'gatsby-plugin-offline'
	]
}

/* global __dirname */
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	mode: "none",
	entry: [
		"./src/ScrollView.tsx"
	],
	output: {
		path: __dirname + "/dist",
		publicPath: "http://localhost:8080/",
		filename: "ScrollView.js",
		libraryTarget: "umd",
		//library: "react-vscrollview",
	},
	resolve: {
		//root: paths.client(),
		//root: "src",
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
	},
	externals: {
		// use external version of React (ie, don't bundle react, since any app using this library will already have it available)
		//"react": "React",
		"react": "commonjs react",
		"react-dom": "commonjs react-dom",
		"react-vextensions": "commonjs react-vextensions",
    },
    /*module: {
		noParse: ["react"]
    },*/
    module: {
		rules: [
			{
				test: /\.(jsx?|tsx?)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["@babel/env"]
				}
			},
			{test: /\.tsx?$/, loader: "ts-loader"},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer!less-loader")
			},
			{
				test: /\.(css)$/,
				loader: ExtractTextPlugin.extract("style", "css-loader!autoprefixer")
			},
			{
				test: /\.(png|jpg|jpeg|svg)$/,
				loader: "file"
			}
		]
	},
	plugins: [
		//new webpack.NoErrorsPlugin(),
		//new webpack.IgnorePlugin(/react/),
	]
};
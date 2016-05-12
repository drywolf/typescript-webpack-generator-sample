module.exports =
{
    context: __dirname,
    entry: ["babel-polyfill", "./sample.tsx"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader/dist.babel/index',
				exclude: /(node_modules|bower_components)/,
            },
        ]
    },
	devtool: 'inline-source-map',
}

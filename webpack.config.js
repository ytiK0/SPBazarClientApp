// noinspection WebpackConfigHighlighting

const path = require("path")
const dotenv = require("dotenv")
const webpack = require("webpack")

const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
}, {})
const HTMLWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const GLOBAL_CSS_REGEXP = /\.global\.css$/

module.exports = {
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"]
    },
    mode: NODE_ENV ? NODE_ENV : "production",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        assetModuleFilename: "img/[name][ext]"
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(ts|tsx)$/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options:{
                            modules: {
                                mode: "local",
                                localIdentName: "[name]_[local]--[hash:base64:5]"
                            }
                        }
                    }
                ],
                exclude: [GLOBAL_CSS_REGEXP, /ReactToastify.css$/]
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /ReactToastify.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]"
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template:path.resolve(__dirname, "index.html") }),
        new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
        historyApiFallback: true,
        port: 2000,
        open: true,
        hot: IS_DEV
    },
    devtool: "source-map"
}
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin"); //vue thì dùng cái này để webpack build
const HtmlWebpackPlugin = require("html-webpack-plugin"); // build ra file index sắp xếp các file build => xem trong folder build => index.html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //loại bỏ những cái rác (cái này kb có loại thật hay k)
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // min css
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // tách css ra các file
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //min js
const mode = process.env.NODE_ENV || 'development'; //env
const ASSET_PATH = process.env.ASSET_PATH || '/vue/dist/'; //public path

const webpack = require('webpack');

module.exports = {
    entry: { //đầu vào
        home: ["babel-polyfill", "./src/home-pega.js"], ///polyfill sử dùng full option es5 mà es6 k có vd: await
        category: ["babel-polyfill", "./src/category-pega.js"],
    },
    //entry: {
    //    home: "./src/home-pega.js",
    //    category: "./src/category-pega.js",
    //},
    output: {  /*đầu ra*/
        filename: "[name].min.js", //tên file khi build
        path: path.resolve(__dirname, "./dist/"), // thử mục build
        publicPath: ASSET_PATH, //đường dẫn sau khi build (vd: src image sẽ có đường dẫn này)
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'initPages', //tên để gọi
        libraryExport: 'default',
        sourceMapFilename: "[name].js.map"
    },
    optimization: {
        splitChunks: {
            chunks: 'all', /// loại bỏ những thứ dùng chung cho vào 1 file 
            automaticNameDelimiter: '.', // thay dấu ~ mặc định thành dấu . khi build ra những file dùng chung
        },
        minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyJsPlugin()], //min plugin
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.join(__dirname, "./src"), //đường dẫn thay thế
        },
    },
    module: {
        ///các loader cho webpack hiểu
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        /*@babel/core là nền tảng để tháo lắp các "phụ kiện" một cách linh hoạt. 
                         * Trong đó, các "phụ kiện" bao gồm: @babel/preset - env để convert từ ES5++ về ES5*/
                    },
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            //{
            //    test: /\.css$/,
            //    use: ["style-loader", "css-loader"],
            //},
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    /*'style-loader',*/
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: './image/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        ///các plugin
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
            ignoreOrder: true,
        }),
        //IgnorePlugin || ContextReplacementPlugin //cái này để sử dụng 1 phần language thư viện moment, cụ thể là ngôn ngữ vn
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /vi/),
        new CleanWebpackPlugin(), new VueLoaderPlugin(), new HtmlWebpackPlugin({ template: "./src/index.html" })],
    devtool: (mode === 'development') ? 'inline-source-map' : false, //sourceMap, ở dev thì se là true dể debugger đc, lên proc thì sẽ k lộ code
    mode: mode,
    performance: {
        hints: false, //ẩn warning khi build
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};


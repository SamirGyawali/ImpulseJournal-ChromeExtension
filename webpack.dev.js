const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // path for the build
        filename: '[name].js',
    },
    mode: 'development',
    devtool: "inline-source-map", // Useful for debugging with source maps
    module: {
        rules: [
            // JavaScript and JSX files
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', {"runtime": "automatic"}]
                        ],
                    }
                }
            },
            // CSS and SCSS files
            {
                test: /\.(css|scss)$/i, // Handles both .css and .scss files
                use: [
                    MiniCssExtractPlugin.loader,  // Extract CSS into separate files
                    'css-loader',  // Translates CSS into CommonJS
                    {
                        loader: 'resolve-url-loader', // Resolves relative URLs
                        options: {
                            sourceMap: true, // Required for resolving SCSS relative paths
                        }
                    },
                    {
                        loader: 'sass-loader', // Compiles SCSS to CSS
                        options: {
                            sourceMap: true, // Enables source maps for easier debugging
                        }
                    },
                ]
            },
            // SVG files
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000, // Inline small SVGs
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'popup.html', // Output filename
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', // Output for extracted CSS files
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "public", // Copy static assets from the public folder
                },
            ],
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions automatically
    },
};

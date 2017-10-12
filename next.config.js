/**
 * Created by oyhanyu on 2017/10/10.
 */
const isProd = process.env.NODE_ENV === 'production';
const path = require('path')
const glob = require('glob')
module.exports = {
    /* config options here */
    distDir: 'build',
    webpack: (config, { buildId, dev }) => {
        // Perform customizations to webpack config
        config.module.rules.push(
            {
                test: /\.(css|less)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            }
            /*{
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            }*/
            ,
            {
                test: /\.less$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader',
                    { loader: 'less-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                                .map((d) => path.join(__dirname, d))
                                .map((g) => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        )
        // Important: return the modified config
        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config

        // Important: return the modified config
        return config
    },
    // You may only need to add assetPrefix in the production.
    // assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''
}
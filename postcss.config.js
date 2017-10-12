/**
 * Created by oyhanyu on 2017/10/11.
 */
module.exports = {
    plugins: [
        require('postcss-easy-import')({prefix: '_'}), // keep this first
        require('autoprefixer')({ /* ...options */ }) // so imports are auto-prefixed too
    ]
}
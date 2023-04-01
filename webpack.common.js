const { globSync } = require('glob');
const Path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const projectBase = 'base';

const getEntries = () => {
    const entries = {};
    const files = globSync(Path.join(__dirname, 'static_src/scripts/*.js'));
    files.forEach((file) => {
        const entry = Path.parse(file);
        entries[entry.name] = file;
    });
    return entries;
}

module.exports = {
    entry: getEntries(),
    output: {
        path: Path.resolve(__dirname, projectBase, 'static'),
        filename: 'scripts/[name]-[fullhash].js',
        publicPath: '',
        clean: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name]-[fullhash].css',
        }),
    ],
};

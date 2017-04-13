module.exports = {
    "module": {
        "loaders": [
            {
                "test": /\.js$/,
                "loader": "babel-loader",
                "exclude": /node_modules/,
                "query": {
                    "presets": ["es2015"]
                }
            }
        ]
    },
    "resolve": {
        "alias": {
            "vue$": "vue/dist/vue.js"
        }
    },
    // "entry": entry,
    "output": {
        "filename": "[name].js"
    },
    "devtool": "source-map"
};

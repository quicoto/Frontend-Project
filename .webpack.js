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
    // "entry": entry,
    "output": {
        "filename": "[name].js"
    },
    "devtool": "cheap-source-map"
};

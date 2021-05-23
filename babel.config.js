{
    test: /\.html$/,
    exclude: [/node_modules/, require.resolve('./index.html')],
    use: {
        loader: 'file-loader',
        query: {
            name: '[name].[ext]'
        },
    },
},

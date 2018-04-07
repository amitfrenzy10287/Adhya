## follow steps required for a repos to run


webpack.config.dev

module: {
    loaders: [
      {
        // make all files ending in .json use the `json-loader`
        test: /\.json$/,
        loader: 'json-loader'
      },
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },  
    ]
  },

plugins: [
    new webpack.ProvidePlugin({
        '$': "jquery",
        'jQuery': "jquery",
         'Tether': 'tether',
        'Popper': 'popper.js'
      }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

npm install botstrap@latest
npm install image-exists
npm install react-emoji-render --save
npm install --save react-fontawesome
npm install react-social-icons --save-dev	
npm install react-bootstrap-datetimepicker
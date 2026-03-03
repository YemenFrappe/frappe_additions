const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    preview_attachment: './frappe_additions/src/preview_attachment/main.js',
    collapse_sidebar: './frappe_additions/src/sidebar_collapsed/main.js',
  },
  
  output: {
    path: path.resolve(__dirname, 'frappe_additions/public'),

    filename: (pathData) => {
      const name = pathData.chunk.name;
      if (name === 'preview_attachment') {
        return 'preview_attachment/js/preview_attachment.bundle.js';
      } else if (name === 'collapse_sidebar') {
        return 'sidebar_collapsed/js/collapse_sidebar.bundle.js';
      }
      return 'js/[name].bundle.js'; 
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};



// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './frappe_additions/src/preview_attachment/main.js',
//   output: {
//     path: path.resolve(__dirname, 'frappe_additions/public/preview_attachment/js'),
//     filename: 'preview_attachment.bundle.js',
//   },
// };




// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './frappe_additions/src/preview_attachment/main.js',
//   output: {
//     path: path.resolve(__dirname, 'frappe_additions/public/preview_attachment/js'),
//     filename: 'preview_attachment.bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//     ],
//   },
// };

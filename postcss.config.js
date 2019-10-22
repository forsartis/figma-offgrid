const purgecssConfig = {
  content: ['./src/**/*.vue'],
  whitelist: ['html', 'body'],
  defaultExtractor: content =>
    content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [],
};

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    tailwindcss: './tailwind.config.js',
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': isProduction ? purgecssConfig : false,
  },
};

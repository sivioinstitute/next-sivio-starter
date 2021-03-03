const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
};

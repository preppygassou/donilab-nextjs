/* const withPlugins = require('next-compose-plugins');
const withImages = require('next-images'); */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { i18n } = require('./next-i18next.config')

/* const nextSettings = {
    
    trailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
}; */
/* const nextSettings = {
    
    trailingSlash: true,
  
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
}; */

module.exports = 
withPWA({
  reactStrictMode: true,
  concurrentFeatures: true,
  i18n,
  pwa: {
    disable: process.env.NODE_ENV !== 'development',
    dest: 'public',
    runtimeCaching,
  },
  images: { domains: ['https://blog.donilab.org','2.gravatar.com',
  'secure.gravatar.com',] },
 /*  images: { domains: ['res.cloudinary.com'] },
  eslint: {
    ignoreDuringBuilds: true,
  },
  exportPathMap: function() {
    return {
        '/': { page: '/' },
    };
},
   */
    /* async rewrites() {
        return [
          {
            source: '/api/:slug*',
            destination: 'https://blog.donilab.org/wp-json/wp/v2/:slug*',
          }
          
        ]
      }, */
})


const path = require("path");

module.exports = {
  reactStrictMode: true,
  compress: true,
  include: path.resolve(__dirname, "src/assets"),
  webpack(config, options) {
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
  //   images: {
  //     domains: ["assets.nbatopshot.com", "45.77.252.22"],
  //   },
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/:path*",
  //         destination: "http://45.77.252.22:9069/:path*",
  //       },
  //     ];
  //   },
};

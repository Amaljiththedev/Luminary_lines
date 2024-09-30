const nextConfig = {
    webpack: (config) => {
      if (config.mode === 'development') {
        config.devtool = 'eval'; // Disable source maps for now
      }
      return config;
    },
  };
  
  export default nextConfig;
  
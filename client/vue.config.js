module.exports = {
    devServer: {
      proxy: {
        '^/graphql': {
          target: 'http://localhost:8000',
          changeOrigin: true
        },
      }
    }
  }
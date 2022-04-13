const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //outputDir : npm run build로 빌드 시에 파일이 생성되는 위치
  outputDir: "../resources/static",
  devServer: {
    proxy: {
      '/login': {target: 'http://localhost:8082'},
      '/api': {target: 'http://localhost:8082'}
    }
  }

})

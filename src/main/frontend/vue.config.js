const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //outputDir : npm run build로 빌드 시에 파일이 생성되는 위치
  outputDir: "../resources/static",
  transpileDependencies: true
})

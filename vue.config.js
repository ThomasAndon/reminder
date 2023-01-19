const { defineConfig } = require('@vue/cli-service')
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      require('unplugin-vue-components/webpack')({ resolvers: [NaiveUiResolver()] })
      // Components({
      //   resolvers: [NaiveUiResolver()]
      // })
    ]
  }
})

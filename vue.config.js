const path = require('path')
let objectProject = {
    ui: {
      entry: 'ui/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'ui',
      // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'ui']
    },
    index: {
      entry: 'src/main.js', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'index',
      // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }
  let page = {}
  let projectname = process.argv[3] // 获取--mode后面的参数确定执行哪个文件
  if (process.env.NODE_ENV == 'development') {
    if(process.argv[4]=="ui"){
      page["index"]= objectProject["ui"]   
    }
    if(process.argv[4]=="index"){
      page["index"]= objectProject["index"]   
    }
  } else {
    //假如命令npm run build-index,
    //就会得到projectname=index
    page[projectname] = objectProject[projectname]
    // {
    //   index: {
    //     entry: 'src/views/index/main.js',
    //     template: 'public/index.html', 
    //     filename: 'index.html',
    //     chunks: ['chunk-vendors', 'chunk-common', 'index']
    //   }
    // }
  }


  function resolve(dir) {
    return path.join(__dirname, dir)
  }
module.exports = {
  //publicPath: './', // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
    outputDir: 'dist-'+projectname, //标识是打包哪个文件
    
    pages: page,
    /*  lintOnSave: false;  */
    /*     baseUrl: 'vue', */
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: (config)=>{
      config.resolve.alias
          .set('@', resolve('ui/'))

  }
,
configureWebpack: {
  resolve: {
    alias: {
      '@': path.join(__dirname, 'ui/'),
    },
  },
},

    lintOnSave: false
}

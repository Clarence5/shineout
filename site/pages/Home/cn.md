## 安装
```
$ npm install shineout
```

## 使用
``` js
import { Table } from 'shineout'

<Table />
```

## 配置

### theme 主题
目前内置支持了两套主题，bootstrap（v3版本, 默认），和兼容 ant-design 的主题 'antd'。可以通过修改 webpack less-loader 配置来切换主题
```
{
  loader: 'less-loader',
  options: {
    modifyVars: {
      theme: 'antd'
    }
  },
}
```

### CSS 前缀
默认通过前缀来隔离 css 代码，默认的前缀是 'shineout'，如果要修改这个值，需要修改 webpack less-loader 配置
```
{
  loader: 'less-loader',
  options: {
    modifyVars: {
      'so-prefix': 'your-prefix'
    }
  },
}
``` 

在项目内设置 config

```
import config from 'shineout/config'
config.setConfig({
  prefix: 'your-prefix'
})
```

### CSS Module
如果需要使用 CSS Module，在应用入口设置 config.cssModule 为 true
```
import config from 'shineout/config'
config.setConfig({
  cssModule: true
})
```
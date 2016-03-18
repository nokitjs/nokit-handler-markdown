## 只求极致

[ **M** ] arkdown + E [ **ditor** ] = **Mditor**    

[![version](https://badge.fury.io/js/mditor.svg)](http://badge.fury.io/js/mditor)  

Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已...  

体验: 
[在线 demo](http://houfeng.net/mditor/demo/index.html)  
  
## 浏览器端

##### 第一步:

引入 Mditor 样式文件  
```html
<link rel="stylesheet" href="../build/css/mditor.min.css" />
```

引用 Mditor 脚本文件
```html
<script src="../build/js/mditor.min.js"></script>
```

##### 第二步:

添加 textarea 元素
```html
<textarea name="editor" id="editor">
```

创建 Mditor 实例
```javascript
var mditor = new Mditor("#editor",{
	height:300,
	fixedHeight:true
});
```

## 服务器端

通过 npm 安装
```sh
npm install mditor -save
```

在服务端解析
```javascript
var mditor = require("mditor");
var parser = new mditor.Parser();
var html = parser.parse("** Hello mditor! **");
```
 
## 近时规划
1. 公开扩展方法及相关 API
2. 更新 README.md 增加完整 API 说明
2. 国际化支持
3. 兼容性测试

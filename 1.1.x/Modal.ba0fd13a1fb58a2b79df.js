webpackJsonpShineoutDoc([20],{925:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),r=t(61),s=t(60),a=t(35),l=t(926),c=t.n(l),u=t(927),h=t.n(u),f=Object(a.a)(c.a,h.a),m=[{name:"1-base",title:Object(a.a)("基本用法 \n 最基本的组件用法。 \n Modal 会在 document.body 中创建一个新的层显示弹出内容。","Base \n The basic usage for component."),component:t(928).default,rawText:t(929)},{name:"2-special",title:Object(a.a)("类型 \n Modal 内置了 4 个类型的样式，为了方便调用，设计为静态函数","Type \n Modal has 4 built in style."),component:t(930).default,rawText:t(931)},{name:"3-confirm",title:Object(a.a)("确认框 \n 调用 confirm 函数显示确认框。","Confirm \n The confirmation modal dialog."),component:t(932).default,rawText:t(933)},{name:"4-form",title:Object(a.a)("表单 \n Modal 内部的表单，可以用 Modal.Submit 来代替 Button","Form \n The internal form of Modal can use Modal.Submit to trigger submit."),component:t(934).default,rawText:t(935)},{name:"5-multistage",title:Object(a.a)("多层 Modal \n 支持多层 Modal","Multistage \n Multi-layer Modal"),component:t(936).default,rawText:t(937)},{name:"6-close",title:Object(a.a)("点击空白关闭 \n 默认点击对话框外部空白页面会关闭对话框。 \n 设置 maskCloseAble 属性为 false，禁用点击空白关闭，同时右上角的关闭图标也会隐藏。 \n 设置 maskCloseAble 属性为 null，禁用点击空白关闭，右上角的关闭图标会保留。","Close \n By default, clicking on the blank page outside the Modal box will closes the Modal box. \n Set maskCloseAble to false to disable the function that click mask to close and the close icon in the upper right corner will be hidden at the same time. \n Set maskCloseAbel to null to disable the function that click mask to close and the close icon in the upper right corner will be preserved."),component:t(938).default,rawText:t(939)},{name:"7-position",title:Object(a.a)("位置 \n 通过position设置弹出位置。","Position \n Set position property to specify the pop-up position."),component:t(940).default,rawText:t(941)}];n.default=Object(r.a)(function(e){return i.a.createElement(s.b,Object.assign({},e,{codes:void 0,source:f,examples:m}))})},926:function(e,n){e.exports="# Modal *对话框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| destroy | boolean | false | 关闭时是否销毁元素 |\n| footer | ReactElement \\| null | 无 | 底部内容 |\n| maskCloseAble | bool | true | 点击遮罩层是否关闭对话框 |\n| maskOpacity | number | 0.25 | 遮罩层透明度 |\n| padding | number\\|string | 16 | 内容内边距 |\n| style | object | 无 | 最外层扩展样式 |\n| title | string \\| ReactElement | 无 | 弹出层的标题 |\n| width | number \\| string | 500 | 对话框宽度 |\n| position | string | 无 | 弹出位置，可选值为 \\['top', 'right', 'bottom', 'left'] |\n\n### Methods\n\nModal 提供了一组方法供全局调用，这些方法生成的元素，会在关闭后销毁。\n\nModal.info(options) // 提示信息\n\nModal.success(options) // 成功提示框\n\nModal.error(options) // 错误提示框\n\nModal.confirm(options) // 确认提示框\n\n#### Options参数\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string \\| ReactElement | 无 | 提示内容主体 |\n| title | string | 无 | 标题 |\n| onCancel | function | 无 | 点击取消按钮时触发事件，仅在 confirm 方法中有效 |\n| onClose | function | 无 | 关闭Modal时触发 |\n| onOk | function | 无 | 点击确定按钮时触发事件，返回 Promise 时，会在 Promise resolve 后关闭Modal |\n| text | object | { ok: 'Ok', cancel: 'Cancel' } | 按钮文字 |"},927:function(e,n){e.exports="# Modal\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| destroy | boolean | false | Whether to destroy elements when it is closed |\n| footer | ReactElement \\| null | - | The content at the bottom |\n| maskCloseAble | bool | true | Whether to close the mask when the mask is clicked |\n| maskOpacity | number | 0.25 | The opacity of the mask |\n| padding | number\\|string | 16 | Padding style of the content |\n| position | string | - | Pop-up position, one of \\['top', 'right', 'bottom', 'left'] |\n| title | string \\| ReactElement | - | the title of the pop-up layer |\n| width | number \\| string | 500 | the width of the Modal |\n\n### Methods\n\nModal provides several static methods for globally calling. The elements generated by these methods are destroyed when it is closed.\n\nModal.info(options)\n\nModal.success(options)\n\nModal.error(options)\n\nModal.confirm(options)\n\n#### Options Parameter\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| content | string \\| ReactElement | - | Content body |\n| title | string | - | title |\n| onCancel | function | - | The event is triggered when the cancel button is clicked. |\n| onClose | function | none | The event is triggered when the modal is closed. |\n| onOk | function | none | The event is triggered when the ok button is clicked. |\n| text | object | { ok: 'Ok', cancel: 'Cancel' } | The text of button |"},928:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),r=t(19),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var a=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleOk=function(){t.setState({visible:!1,content:t.state.content+=1}),console.log("clicked ok!")},t.handleCancel=function(){t.setState({visible:!1,content:t.state.content+=1}),console.log("clicked cancel")},t.state={visible:!1,content:1},t.show=t.show.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),s(n,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.show},"click me"),i.a.createElement(r.r,{visible:this.state.visible,width:500,title:"Modal Title",onClose:this.handleCancel,footer:[i.a.createElement(r.c,{key:"cancel",onClick:this.handleCancel},"Cancel"),i.a.createElement(r.c,{key:"ok",type:"primary",onClick:this.handleOk},"Ok")]},"you are visited "+this.state.content))}}]),n}();n.default=a},929:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 最基本的组件用法。\n *    -- Modal 会在 document.body 中创建一个新的层显示弹出内容。\n * en - Base\n *    -- The basic usage for component.\n */\nimport React from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n      content: 1,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleOk = () => {\n    this.setState({\n      visible: false,\n      content: this.state.content += 1,\n    })\n    console.log('clicked ok!')\n  }\n\n  handleCancel = () => {\n    this.setState({\n      visible: false,\n      content: this.state.content += 1,\n    })\n    console.log('clicked cancel')\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          width={500}\n          title=\"Modal Title\"\n          onClose={this.handleCancel}\n          footer={[\n            <Button key=\"cancel\" onClick={this.handleCancel}>Cancel</Button>,\n            <Button key=\"ok\" type=\"primary\" onClick={this.handleOk}>Ok</Button>,\n          ]}\n        >\n          {`you are visited ${this.state.content}`}\n        </Modal>\n      </div>\n    )\n  }\n}\n"},930:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),r=t(19);n.default=function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:function(){r.r.info({title:"This is a info message",content:"this is  some information that user must know"})}},"info"),i.a.createElement(r.c,{onClick:function(){r.r.success({title:"This is a success message",content:"this is some information that user successful operation"})}},"success"),i.a.createElement(r.c,{onClick:function(){r.r.warn({title:"This is a warning message",content:"this is  some information that user must know"})}},"warning"),i.a.createElement(r.c,{onClick:function(){r.r.error({title:"This is a error message",content:"this is some information that user attended"})}},"error"))}},931:function(e,n){e.exports="/**\n * cn - 类型\n *    -- Modal 内置了 4 个类型的样式，为了方便调用，设计为静态函数\n * en - Type\n *    -- Modal has 4 built in style.\n */\nimport React from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default function () {\n  function info() {\n    Modal.info({\n      title: 'This is a info message',\n      content: 'this is  some information that user must know',\n    })\n  }\n\n  function success() {\n    Modal.success({\n      title: 'This is a success message',\n      content: 'this is some information that user successful operation',\n    })\n  }\n\n  function warning() {\n    Modal.warn({\n      title: 'This is a warning message',\n      content: 'this is  some information that user must know',\n    })\n  }\n\n  function error() {\n    Modal.error({\n      title: 'This is a error message',\n      content: 'this is some information that user attended',\n    })\n  }\n\n  return (\n    <div>\n      <Button onClick={info}>info</Button>\n      <Button onClick={success}>success</Button>\n      <Button onClick={warning}>warning</Button>\n      <Button onClick={error}>error</Button>\n    </div>\n  )\n}\n"},932:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),r=t(19),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var l=function(e){function n(){var e,t,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return t=o=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),o.confirm=function(){r.r.confirm({title:"This is a confirm message",content:"this is some information that user confirm",onOk:function(){return new Promise(function(e){console.log("yes i know"),setTimeout(function(){return e(!0)},2e3)})},text:{ok:"Yes",cancel:"No"}})},a(o,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["Component"]),s(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.confirm},"confirm"))}}]),n}();n.default=l},933:function(e,n){e.exports="/**\n * cn - 确认框\n *    -- 调用 confirm 函数显示确认框。\n * en - Confirm\n *    -- The confirmation modal dialog.\n */\nimport React, { Component } from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default class extends Component {\n  confirm = () => {\n    Modal.confirm({\n      title: 'This is a confirm message',\n      content: 'this is some information that user confirm',\n      onOk: () => new Promise((resolve) => { console.log('yes i know'); setTimeout(() => resolve(true), 2000) }),\n      text: { ok: 'Yes', cancel: 'No' },\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.confirm}>confirm</Button>\n      </div>\n    )\n  }\n}\n"},934:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),r=t(19),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var a={email:[{required:!0,message:"Please enter your email."},{type:"email",message:"Please enter a valid email."}],password:[{required:!0,message:"Please enter password."},{min:7,message:"Password must be at least {min} characters."},{regExp:/[a-z]+/i,message:"Password at least has one letter."},function(e,n,t){/\d+/.test(e)?t(!0):t(new Error("Password at least has one numeral."))}]},l=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleSubmit=function(e){t.setState({visible:!1}),r.q.success(JSON.stringify(e))},t.handleClose=function(){t.setState({visible:!1})},t.state={visible:!1},t.show=t.show.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),s(n,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"renderFooter",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.handleClose},"Cancel"),i.a.createElement(r.r.Submit,null,"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.show},"click me"),i.a.createElement(r.r,{visible:this.state.visible,width:456,title:"Form",onClose:this.handleClose,footer:this.renderFooter()},i.a.createElement(r.k,{labelWidth:100,rules:a,labelAlign:"right",style:{maxWidth:400},onSubmit:this.handleSubmit},i.a.createElement(r.k.Item,{required:!0,label:"Email"},i.a.createElement(r.o,{name:"email"})),i.a.createElement(r.k.Item,{required:!0,label:"Password"},i.a.createElement(r.o,{name:"password",type:"password"})))))}}]),n}();n.default=l},935:function(e,n){e.exports="/**\n * cn - 表单\n *    -- Modal 内部的表单，可以用 Modal.Submit 来代替 Button\n * en - Form\n *    --The internal form of Modal can use Modal.Submit to trigger submit.\n */\nimport React from 'react'\nimport { Modal, Button, Form, Input, Message } from 'shineout'\n\nconst rules = {\n  email: [\n    { required: true, message: 'Please enter your email.' },\n    { type: 'email', message: 'Please enter a valid email.' },\n  ],\n  password: [\n    { required: true, message: 'Please enter password.' },\n    { min: 7, message: 'Password must be at least {min} characters.' },\n    { regExp: /[a-z]+/i, message: 'Password at least has one letter.' },\n    (value, formdata, callback) => {\n      if (/\\d+/.test(value)) callback(true)\n      else callback(new Error('Password at least has one numeral.'))\n    },\n  ],\n}\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleSubmit = (data) => {\n    this.setState({\n      visible: false,\n    })\n    Message.success(JSON.stringify(data))\n  }\n\n  handleClose = () => {\n    this.setState({\n      visible: false,\n    })\n  }\n\n  renderFooter() {\n    return (\n      <div>\n        <Button onClick={this.handleClose}>Cancel</Button>\n        <Modal.Submit>Submit</Modal.Submit>\n      </div>\n    )\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          width={456}\n          title=\"Form\"\n          onClose={this.handleClose}\n          footer={this.renderFooter()}\n        >\n          <Form\n            labelWidth={100}\n            rules={rules}\n            labelAlign=\"right\"\n            style={{ maxWidth: 400 }}\n            onSubmit={this.handleSubmit}\n          >\n            <Form.Item required label=\"Email\">\n              <Input name=\"email\" />\n            </Form.Item>\n\n            <Form.Item required label=\"Password\">\n              <Input name=\"password\" type=\"password\" />\n            </Form.Item>\n          </Form>\n        </Modal>\n      </div>\n    )\n  }\n}\n"},936:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),r=t(19),s=t(62),a=t(9),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var c=Object(a.a)(11,0).map(function(){return[Object(s.e)(600,450),Object(s.e)(450,320)]}),u=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={current:0},t.show=t.show.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),l(n,[{key:"show",value:function(e){this.setState({current:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.show.bind(this,1)},"click me"),Object(a.a)(11,1).map(function(n){return i.a.createElement(r.r,{key:n,visible:e.state.current>=n,width:c[n][0],height:c[n][1],title:"Modal Title "+n,onClose:e.show.bind(e,n-1),footer:i.a.createElement(r.c,{onClick:e.show.bind(e,n-1)},"Close")},"Level ",n,".",i.a.createElement("br",null),n<10&&i.a.createElement("a",{href:"javascript:;",onClick:e.show.bind(e,n+1)},"Next level"))}))}}]),n}();n.default=u},937:function(e,n){e.exports="/**\n * cn - 多层 Modal\n *    -- 支持多层 Modal\n * en - Multistage\n *    -- Multi-layer Modal\n */\nimport React from 'react'\nimport { Modal, Button } from 'shineout'\nimport { pickNumber } from 'doc/utils/faker'\nimport { range } from 'shineout/utils/numbers'\n\nconst size = range(11, 0).map(() => [pickNumber(600, 450), pickNumber(450, 320)])\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      current: 0,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show(current) {\n    this.setState({ current })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show.bind(this, 1)}>click me</Button>\n\n        {\n          range(11, 1).map(i => (\n            <Modal\n              key={i}\n              visible={this.state.current >= i}\n              width={size[i][0]}\n              height={size[i][1]}\n              title={`Modal Title ${i}`}\n              onClose={this.show.bind(this, i - 1)}\n              footer={<Button onClick={this.show.bind(this, i - 1)}>Close</Button>}\n            >\n              Level {i}.\n              <br />\n              {\n                i < 10 &&\n                <a href=\"javascript:;\" onClick={this.show.bind(this, i + 1)}>Next level</a>\n              }\n            </Modal>\n          ))\n        }\n      </div>\n    )\n  }\n}\n"},938:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),r=t(19),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var a=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleOk=function(){t.setState({visible:!1}),console.log("you are click ok!")},t.handleCancel=function(){t.setState({visible:!1})},t.state={visible:!1},t.show=t.show.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.a.Component),s(n,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.show},"click me"),i.a.createElement(r.r,{visible:this.state.visible,maskClosable:null,width:500,height:300,title:"Modal Title",onClose:this.handleCancel,footer:[i.a.createElement(r.c,{key:"cancel",onClick:this.handleCancel},"Cancel"),i.a.createElement(r.c,{key:"ok",type:"primary",onClick:this.handleOk},"Ok")]},"The prop maskCloseAble is false.",i.a.createElement("br",null),"You must click the button to close the Modal."))}}]),n}();n.default=a},939:function(e,n){e.exports='/**\n * cn - 点击空白关闭\n *    -- 默认点击对话框外部空白页面会关闭对话框。\n *    -- 设置 maskCloseAble 属性为 false，禁用点击空白关闭，同时右上角的关闭图标也会隐藏。\n *    -- 设置 maskCloseAble 属性为 null，禁用点击空白关闭，右上角的关闭图标会保留。\n * en - Close\n *    -- By default, clicking on the blank page outside the Modal box will closes the Modal box.\n *    -- Set maskCloseAble to false to disable the function that click mask to close and the close icon in the upper right corner will be hidden at the same time.\n *    -- Set maskCloseAbel to null to disable the function that click mask to close and the close icon in the upper right corner will be preserved.\n */\nimport React from \'react\'\nimport { Modal, Button } from \'shineout\'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleOk = () => {\n    this.setState({\n      visible: false,\n    })\n    console.log(\'you are click ok!\')\n  }\n\n  handleCancel = () => {\n    this.setState({\n      visible: false,\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          maskClosable={null}\n          width={500}\n          height={300}\n          title="Modal Title"\n          onClose={this.handleCancel}\n          footer={[\n            <Button key="cancel" onClick={this.handleCancel}>Cancel</Button>,\n            <Button key="ok" type="primary" onClick={this.handleOk}>Ok</Button>,\n          ]}\n        >\n          The prop maskCloseAble is false.\n          <br />\n          You must click the button to close the Modal.\n        </Modal>\n      </div>\n    )\n  }\n}\n'},940:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t.n(o),r=t(19),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var a=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleClose=function(){t.setState({visible:!1})},t.toggle=function(e){t.setState({visible:e})},t.state={visible:!1,position:"right"},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["Component"]),s(n,[{key:"renderFooter",value:function(){return i.a.createElement("div",null,i.a.createElement(r.c,{onClick:this.toggle.bind(this,!1)},"Cancel"),i.a.createElement(r.r.Submit,null,"Submit"))}},{key:"render",value:function(){var e=this,n=this.state.position;return i.a.createElement("div",null,i.a.createElement(r.x,{data:["top","right","bottom","left"],value:n,style:{width:100,marginRight:12},keygen:!0,onChange:function(n){return e.setState({position:n})}}),i.a.createElement(r.c,{onClick:this.toggle.bind(this,!0)},"click me"),i.a.createElement(r.r,{visible:this.state.visible,title:"Form",key:n,position:n,onClose:this.toggle.bind(this,!1),footer:this.renderFooter()},i.a.createElement(r.k,{labelWidth:100,labelAlign:"right",style:{width:500},onSubmit:this.toggle.bind(this,!1)},i.a.createElement(r.k.Item,{required:!0,label:"Email"},i.a.createElement(r.o,{name:"email"})),i.a.createElement(r.k.Item,{required:!0,label:"Password"},i.a.createElement(r.o,{name:"password",type:"password"})))))}}]),n}();n.default=a},941:function(e,n){e.exports="/**\n * cn - 位置\n *    -- 通过position设置弹出位置。\n * en - Position\n *    -- Set position property to specify the pop-up position.\n */\nimport React, { Component } from 'react'\nimport { Modal, Button, Form, Input, Select } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n      position: 'right',\n    }\n  }\n\n  handleClose = () => {\n    this.setState({\n      visible: false,\n    })\n  }\n\n  toggle = (visible) => {\n    this.setState({ visible })\n  }\n\n  renderFooter() {\n    return (\n      <div>\n        <Button onClick={this.toggle.bind(this, false)}>Cancel</Button>\n        <Modal.Submit>Submit</Modal.Submit>\n      </div>\n    )\n  }\n\n  render() {\n    const { position } = this.state\n    return (\n      <div>\n        <Select\n          data={['top', 'right', 'bottom', 'left']}\n          value={position}\n          style={{ width: 100, marginRight: 12 }}\n          keygen\n          onChange={p => this.setState({ position: p })}\n        />\n        <Button onClick={this.toggle.bind(this, true)}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          title=\"Form\"\n          key={position}\n          position={position}\n          onClose={this.toggle.bind(this, false)}\n          footer={this.renderFooter()}\n        >\n          <Form\n            labelWidth={100}\n            labelAlign=\"right\"\n            style={{ width: 500 }}\n            onSubmit={this.toggle.bind(this, false)}\n          >\n            <Form.Item required label=\"Email\">\n              <Input name=\"email\" />\n            </Form.Item>\n\n            <Form.Item required label=\"Password\">\n              <Input name=\"password\" type=\"password\" />\n            </Form.Item>\n          </Form>\n        </Modal>\n      </div>\n    )\n  }\n}\n"}});
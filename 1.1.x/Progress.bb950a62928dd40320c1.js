webpackJsonpShineoutDoc([22],{957:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t.n(r),s=t(61),i=t(60),o=t(35),l=t(958),c=t.n(l),u=t(959),p=t.n(u),d=Object(o.a)(c.a,p.a),f=[{name:"1-base",title:Object(o.a)("基本用法 \n 基础的进度条","Base \n Basic progress bar"),component:t(960).default,rawText:t(961)},{name:"2-type",title:Object(o.a)("样式 \n 内置了四种样式，通过 type 来调用","Type \n There are 4 built-in style."),component:t(962).default,rawText:t(963)},{name:"3-color",title:Object(o.a)(" \n 通过 color 使用自定义颜色","Color \n Use custom colors."),component:t(964).default,rawText:t(965)},{name:"4-circle",title:Object(o.a)("圆形 \n 设置 shape 为 'circle'，显示为环形进度条","Circle \n Set the shape property to circle to display circular progress bar."),component:t(966).default,rawText:t(967)},{name:"5-size",title:Object(o.a)("大小 \n 通过 size 或 style 来控制大小 \n 通过 strokeWidth 属性来控制线框宽度","Size \n Set size(circle) or style(line) property to change the size."),component:t(968).default,rawText:t(969)},{name:"6-animation",title:Object(o.a)("动态示例 \n value 变更时动画效果演示","Animation \n The animation for changing value."),component:t(970).default,rawText:t(971)}];n.default=Object(s.a)(function(e){return a.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:f}))})},958:function(e,n){e.exports="# Progress *进度条*\n\n<example />\n\n## API \n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#e9ecef' | 背景色 |\n| className | string | - | 扩展className |\n| children | string \\| ReactElement | - | 附加内容 |\n| color | string | primary | 前景色 |\n| shape | string | 'line' | 样式，可选值为 \\['line', 'circle'] |\n| size | number | 100 | 进度条大小，仅对 circle 有效 |\n| strokeWidth | number | 8 | 线框宽度 |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 无 | 内置配色，可选值为，\\['success', 'info', 'warning', 'danger'] |\n| value | number | 0 | 百分比值，0 <= value <= 100 |"},959:function(e,n){e.exports="# Progress\n\n<example />\n\n## API \n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#e9ecef' | Background color |\n| className | string | - | Extend className |\n| children | string \\| ReactElement | - | Content |\n| color | string | primary | Foreground color |\n| shape | string | 'line' | Options:  \\['line', 'circle'] |\n| size | number | 100 | The width and height of 'circle' shape. |\n| strokeWidth | number | 8 | The width of the stroke |\n| style | object | - | Container element style |\n| type | string | - | Built-in color, options: \\['success', 'info', 'warning', 'danger'] |\n| value | number | 0 | Percentage, 0 <= value <= 100 |"},960:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t.n(r),s=t(19);n.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(s.u,{value:50}),a.a.createElement("br",null),a.a.createElement(s.u,{value:50},"50%"))}},961:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基础的进度条\n * en - Base\n *    -- Basic progress bar\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function () {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={50} />\n      <br />\n      <Progress value={50}>50%</Progress>\n    </div>\n  )\n}\n"},962:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t.n(r),s=t(19);n.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(s.u,{value:100,type:"success"}),a.a.createElement("br",null),a.a.createElement(s.u,{value:90,type:"info"}),a.a.createElement("br",null),a.a.createElement(s.u,{value:80,type:"warning"}),a.a.createElement("br",null),a.a.createElement(s.u,{value:70,type:"danger"}))}},963:function(e,n){e.exports='/**\n * cn - 样式\n *    -- 内置了四种样式，通过 type 来调用\n * en - Type\n *    -- There are 4 built-in style.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function () {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={100} type="success" />\n      <br />\n      <Progress value={90} type="info" />\n      <br />\n      <Progress value={80} type="warning" />\n      <br />\n      <Progress value={70} type="danger" />\n    </div>\n  )\n}\n'},964:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t.n(r),s=t(19);n.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(s.u,{value:60,color:"#531dab"}),a.a.createElement("br",null),a.a.createElement(s.u,{value:50,color:"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)"}))}},965:function(e,n){e.exports="/**\n * cn -\n *    -- 通过 color 使用自定义颜色\n * en - Color\n *    -- Use custom colors.\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function () {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={60} color=\"#531dab\" />\n      <br />\n      <Progress value={50} color=\"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)\" />\n    </div>\n  )\n}\n"},966:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t.n(r),s=t(19);n.default=function(){return a.a.createElement("div",null,a.a.createElement(s.u,{shape:"circle",style:{marginRight:20},value:30}),a.a.createElement(s.u,{shape:"circle",style:{marginRight:20},value:70},"70%"),a.a.createElement(s.u,{shape:"circle",type:"success",style:{marginRight:20},value:100},"Success"),a.a.createElement(s.u,{shape:"circle",strokeLinecap:"butt",color:"#531dab",value:70}))}},967:function(e,n){e.exports='/**\n * cn - 圆形\n *    -- 设置 shape 为 \'circle\'，显示为环形进度条\n * en - Circle\n *    -- Set the shape property to circle to display circular progress bar.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function () {\n  return (\n    <div>\n      <Progress shape="circle" style={{ marginRight: 20 }} value={30} />\n\n      <Progress shape="circle" style={{ marginRight: 20 }} value={70}>70%</Progress>\n\n      <Progress shape="circle" type="success" style={{ marginRight: 20 }} value={100}>Success</Progress>\n\n      <Progress shape="circle" strokeLinecap="butt" color="#531dab" value={70} />\n    </div>\n  )\n}\n'},968:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t.n(r),s=t(19);n.default=function(){return a.a.createElement("div",null,a.a.createElement(s.u,{style:{width:120},strokeWidth:3,value:30}),a.a.createElement("br",null),a.a.createElement(s.u,{shape:"circle",size:50,strokeWidth:6,style:{marginRight:20},value:70}),a.a.createElement(s.u,{shape:"circle",type:"warning",style:{marginRight:20,width:70,height:70},value:70},"70%"),a.a.createElement(s.u,{shape:"circle",type:"success",value:100},"Success"))}},969:function(e,n){e.exports='/**\n * cn - 大小\n *    -- 通过 size 或 style 来控制大小\n *    -- 通过 strokeWidth 属性来控制线框宽度\n * en - Size\n *    -- Set size(circle) or style(line) property to change the size.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function () {\n  return (\n    <div>\n      <Progress style={{ width: 120 }} strokeWidth={3} value={30} />\n\n      <br />\n\n      <Progress shape="circle" size={50} strokeWidth={6} style={{ marginRight: 20 }} value={70} />\n\n      <Progress shape="circle" type="warning" style={{ marginRight: 20, width: 70, height: 70 }} value={70}>70%</Progress>\n\n      <Progress shape="circle" type="success" value={100}>Success</Progress>\n    </div>\n  )\n}\n'},970:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=t.n(r),s=t(19),i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var o=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleClick=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.value;(e+=12*Math.random())>=100?(e=100,t.setState({value:e})):t.setState({value:e},function(){setTimeout(t.handleClick,320)})},t.state={value:0},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["Component"]),i(n,[{key:"render",value:function(){var e=this.state.value;return a.a.createElement("div",null,a.a.createElement(s.u,{style:{width:400},value:e},a.a.createElement("div",{style:{width:50}},e.toFixed(0))),a.a.createElement("br",null),a.a.createElement(s.u,{shape:"circle",type:"success",value:e},e.toFixed(0),"%"),a.a.createElement(s.c,{style:{marginLeft:80},onClick:this.handleClick.bind(this,0)},"Start"))}}]),n}();n.default=o},971:function(e,n){e.exports="/**\n * cn - 动态示例\n *    -- value 变更时动画效果演示\n * en - Animation\n *    -- The animation for changing value.\n */\nimport React, { Component } from 'react'\nimport { Button, Progress } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { value: 0 }\n  }\n\n  handleClick = (value = this.state.value) => {\n    value += (Math.random() * 12)\n    if (value >= 100) {\n      value = 100\n      this.setState({ value })\n    } else {\n      this.setState({ value }, () => {\n        setTimeout(this.handleClick, 320)\n      })\n    }\n  }\n\n  render() {\n    const { value } = this.state\n\n    return (\n      <div>\n        <Progress style={{ width: 400 }} value={value}>\n          <div style={{ width: 50 }}>{value.toFixed(0)}</div>\n        </Progress>\n\n        <br />\n\n        <Progress shape=\"circle\" type=\"success\" value={value}>{value.toFixed(0)}%</Progress>\n\n        <Button style={{ marginLeft: 80 }} onClick={this.handleClick.bind(this, 0)}>Start</Button>\n      </div>\n    )\n  }\n}\n"}});
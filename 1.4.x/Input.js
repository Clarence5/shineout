(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[26],{847:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(474),o=n(475),i=n(34),u=n(848),s=n.n(u),p=n(849),c=n.n(p),m=Object(i.b)(s.a,c.a),d=[{name:"1-base",title:Object(i.b)("基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex","Base \n Input usually needs to be used with other components, so the default width is 100% and the default display is block. \n If the style.width is set, the default display is inline-flex."),component:n(850).default,rawText:n(851)},{name:"1-clearable",title:Object(i.b)("允许删除 \n Input 允许删除","allow clear \n Input allow clear"),component:n(852).default,rawText:n(853)},{name:"2-size",title:Object(i.b)("大小 \n 提供了三种尺寸的输入框，small、default、large","Size \n There are three size of input, small, default, large."),component:n(854).default,rawText:n(855)},{name:"3-number",title:Object(i.b)("数字 \n type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数","Number \n When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property"),component:n(856).default,rawText:n(857)},{name:"4-number",title:Object(i.b)(" \n Input.Number 组件，可以通过鼠标和上下键辅助输入"," \n Input.Number component can be assisted by mouse and up and down keyboard."),component:n(858).default,rawText:n(859)},{name:"5-group",title:Object(i.b)("组合 \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。","Group \n The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color."),component:n(860).default,rawText:n(861)},{name:"6-tip",title:Object(i.b)("提示文字 \n 在 input 上设置的 tip 在 focus 时弹出","Tip \n The tip set on input pops up when it is focused."),component:n(862).default,rawText:n(863)},{name:"7-validate",title:Object(i.b)("校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。","Validate \n When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location. \n If the popover property is not set, no error message will pop up. \n If input is invalid, the message will not be hidden."),component:n(864).default,rawText:n(865)},{name:"8-disabled",title:Object(i.b)("禁用 \n 设置 disabled 属性禁用组件","Disabled \n Set the disabled property to disable the component."),component:n(866).default,rawText:n(867)},{name:"9-password",title:Object(i.b)("密码 \n Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。","Password \n Input.Password is a mock input of type 'password', used for disable Chrome autofill."),component:n(868).default,rawText:n(869)}];t.default=Object(r.a)(function(e){return l.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:m,examples:d}))})},848:function(e,t){e.exports="# Input *输入框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | 无 | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(value) | 无 | 值改变回调函数 |\n| onEnterPress | function(value) | 无| 回车键回调函数 |\n| placeholder | string | 无 | 同原生 input 标签的 placeholder |\n| popover | string | 无| 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string \\| ReactElement | 无 | 提示信息 |\n| trim | bool | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| type | string | 'text' | 同原生 input 标签的 type |\n| value | string \\| number | 无 | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n| clearable | bool | false | 可点击清空图标删除输入框内容 |\n\n### Input.Number\n\n基本 API 和上表相同，特定的 API 如下：\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| max | number | 无 | 最大值 |\n| min | number | 无 | 最小值 |\n| step | number | 1 | 改变数字跨度，可为小数 |\n| digits | number | 无 | 数值的精度 |\n| allowNull | bool | false | 允许空值 | \n"},849:function(e,t){e.exports="# Input\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | - | Default value |\n| delay | number | 400 | User input triggers the onChange and to check interval, unit: ms.|\n| name | string | none | The name of Form which access data |\n| onChange | function(value) | - | The callback function when the value is changing |\n| onEnterPress | function(value) | - | The callback function for enter key |\n| placeholder | string | - | Same as the native input tag |\n| popover | string | none | The position where the text pop up, options: \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | options: \\['large', 'default', 'small'] |\n| style | object | - | Container element style |\n| tip | string \\| ReactElement | none | Prompt information |\n| trim | bool | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| type | string | 'text' | Same as the type of the native input tag |\n| value | string \\| number | - | The defaultValue and value can be set at the same time and defaultValue will be overridden by value<br />In the Form, the value will be taken over by the form and the value will lose efficacy. |\n| clearable | bool | false | Remove content of the input when clicking the clear icon |\n\n\n### Input.Number\n\nThe basic API is the same as the above table, and the specific API is as follows:\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| max | number | - | The maximum value |\n| min | number | - | The minimum value|\n| step | number | 1 | Change the digital span. It can be decimal. |\n| digits | number | - | the digits of number |\n| allowNull | bool | false | allow value is null |\n"},850:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468);t.default=function(){return l.a.createElement(r.a,{placeholder:"input something"})}},851:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block\n *    -- 如果设置了 style.width，默认 display 为 inline-flex\n * en - Base\n *    -- Input usually needs to be used with other components, so the default width is 100% and the default display is block.\n *    -- If the style.width is set, the default display is inline-flex.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input placeholder=\"input something\" />\n}\n"},852:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468);t.default=function(){return l.a.createElement(r.a,{clearable:!0,placeholder:"input something"})}},853:function(e,t){e.exports="/**\n * cn - 允许删除\n *    -- Input 允许删除\n * en -  allow clear\n *    -- Input allow clear\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input clearable placeholder=\"input something\" />\n}\n"},854:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468),o={width:120,marginRight:12};t.default=function(){return l.a.createElement("div",null,l.a.createElement(r.a,{size:"small",style:o,placeholder:"small size"}),l.a.createElement(r.a,{style:o,placeholder:"default size"}),l.a.createElement(r.a,{size:"large",style:o,placeholder:"large size"}))}},855:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 提供了三种尺寸的输入框，small、default、large\n * en - Size\n *    -- There are three size of input, small, default, large.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 120, marginRight: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input size="small" style={style} placeholder="small size" />\n      <Input style={style} placeholder="default size" />\n      <Input size="large" style={style} placeholder="large size" />\n    </div>\n  )\n}\n'},856:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468),o={marginBottom:12};t.default=function(){return l.a.createElement("div",{style:{width:300}},l.a.createElement(r.a,{style:o,type:"number",placeholder:"digits undefined"}),l.a.createElement(r.a,{style:o,digits:0,type:"number",placeholder:"digits 0"}),l.a.createElement(r.a,{style:o,digits:1,type:"number",placeholder:"digits 1"}),l.a.createElement(r.a,{style:o,digits:2,type:"number",placeholder:"digits 2"}),l.a.createElement(r.a,{style:o,digits:3,type:"number",placeholder:"digits 3"}))}},857:function(e,t){e.exports='/**\n * cn - 数字\n *    -- type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数\n * en - Number\n *    -- When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} type="number" placeholder="digits undefined" />\n      <Input style={style} digits={0} type="number" placeholder="digits 0" />\n      <Input style={style} digits={1} type="number" placeholder="digits 1" />\n      <Input style={style} digits={2} type="number" placeholder="digits 2" />\n      <Input style={style} digits={3} type="number" placeholder="digits 3" />\n    </div>\n  )\n}\n'},858:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468);t.default=function(){return l.a.createElement(r.a.Number,{width:120,min:23,max:100,digits:0})}},859:function(e,t){e.exports="/**\n * cn -\n *  . -- Input.Number 组件，可以通过鼠标和上下键辅助输入\n * en -\n *  . -- Input.Number component can be assisted by mouse and up and down keyboard.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Number width={120} min={23} max={100} digits={0} />\n}\n"},860:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468),o=n(44),i=n(136),u={width:300,marginBottom:12};t.default=function(){return l.a.createElement("div",null,l.a.createElement(r.a.Group,{style:u},l.a.createElement(i.a,{name:"user"}),l.a.createElement(r.a,{placeholder:"first name"}),"-",l.a.createElement(r.a,{placeholder:"last name"})),l.a.createElement(r.a.Group,{style:u},l.a.createElement(r.a,{placeholder:"search text"}),l.a.createElement(i.a,{name:"search"})),l.a.createElement(r.a.Group,{style:u},l.a.createElement(r.a,{style:{flex:1},placeholder:"flex 1"}),l.a.createElement(r.a,{style:{flex:3},placeholder:"flex 3"})),l.a.createElement(r.a.Group,{style:u},l.a.createElement(r.a,{placeholder:"search text"}),l.a.createElement(o.a,{type:"primary"},"Search")),l.a.createElement(r.a.Group,{size:"small",style:u},l.a.createElement("b",null,l.a.createElement(i.a,{name:"envelope"})),l.a.createElement(r.a,{placeholder:"email"}),l.a.createElement("b",null,".com")))}},861:function(e,t){e.exports='/**\n * cn - 组合\n *  . -- Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。\n * en - Group\n *  . -- The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color.\n */\nimport React from \'react\'\nimport { Button, Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group style={style}>\n        <FontAwesome name="user" />\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <FontAwesome name="search" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input style={{ flex: 1 }} placeholder="flex 1" />\n        <Input style={{ flex: 3 }} placeholder="flex 3" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button type="primary">Search</Button>\n      </Input.Group>\n\n      <Input.Group size="small" style={style}>\n        <b>\n          <FontAwesome name="envelope" />\n        </b>\n        <Input placeholder="email" />\n        <b>.com</b>\n      </Input.Group>\n    </div>\n  )\n}\n'},862:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468),o=n(136),i={marginBottom:12};t.default=function(){return l.a.createElement("div",{style:{width:300}},l.a.createElement(r.a,{style:i,placeholder:"email",tip:"enter you email.",popover:"top-left"}),l.a.createElement(r.a.Group,{style:i,tip:"enter you email."},l.a.createElement(o.a,{name:"envelope"}),l.a.createElement(r.a,{placeholder:"email"})),l.a.createElement(r.a.Group,{style:i},l.a.createElement(o.a,{name:"envelope"}),l.a.createElement(r.a,{tip:"enter you email.",placeholder:"email"})))}},863:function(e,t){e.exports='/**\n * cn - 提示文字\n *    -- 在 input 上设置的 tip 在 focus 时弹出\n * en - Tip\n *    -- The tip set on input pops up when it is focused.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} placeholder="email" tip="enter you email." popover="top-left" />\n\n      <Input.Group style={style} tip="enter you email.">\n        <FontAwesome name="envelope" />\n        <Input placeholder="email" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <FontAwesome name="envelope" />\n        <Input tip="enter you email." placeholder="email" />\n      </Input.Group>\n    </div>\n  )\n}\n'},864:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(240),o=n(468),i=new r.b;t.default=function(){return l.a.createElement(o.a,{placeholder:"email",rules:[i.required],tip:"Email, required",popover:"top-left",width:300})}},865:function(e,t){e.exports='/**\n * cn - 校验\n *    -- 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出\n *    -- 如果没有设置 popover，不会弹出错误提示。\n *    -- 有错误时，提示框不会隐藏。\n * en - Validate\n *    -- When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location.\n *    -- If the popover property is not set, no error message will pop up.\n *    -- If input is invalid, the message will not be hidden.\n */\nimport React from \'react\'\nimport { Input, Rule } from \'shineout\'\n\nconst rules = new Rule()\n\nexport default function() {\n  return <Input placeholder="email" rules={[rules.required]} tip="Email, required" popover="top-left" width={300} />\n}\n'},866:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468),o={width:300,marginBottom:12};t.default=function(){return l.a.createElement("div",null,l.a.createElement(r.a.Group,{disabled:!0,style:o},l.a.createElement(r.a,{placeholder:"first name"}),"-",l.a.createElement(r.a,{placeholder:"last name"})),l.a.createElement(r.a,{disabled:!0,style:o,placeholder:"disabled input"}))}},867:function(e,t){e.exports='/**\n * cn - 禁用\n *    -- 设置 disabled 属性禁用组件\n * en - Disabled\n *    -- Set the disabled property to disable the component.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group disabled style={style}>\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input disabled style={style} placeholder="disabled input" />\n    </div>\n  )\n}\n'},868:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(468);t.default=function(){return l.a.createElement(r.a.Password,{placeholder:"input password"})}},869:function(e,t){e.exports="/**\n * cn - 密码\n *    -- Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。\n * en - Password\n *    -- Input.Password is a mock input of type 'password', used for disable Chrome autofill.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Password placeholder=\"input password\" />\n}\n"}}]);
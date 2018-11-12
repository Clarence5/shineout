webpackJsonpShineoutDoc([23],{942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(61),l=n(60),c=n(35),a=n(943),s=n.n(a),u=n(944),p=n.n(u),d=Object(c.a)(s.a,p.a),g=[{name:"1-base",title:Object(c.a)("基本用法 \n 与 Tooltip 相比，Popover 可以控制样式，大小由内容决定","Base \n The basic usage."),component:n(945).default,rawText:n(946)},{name:"2-position",title:Object(c.a)("弹出位置 \n 内置了十二个弹出的位置","Position \n Twelve pop-up positions are built in."),component:n(947).default,rawText:n(948)},{name:"3-click",title:Object(c.a)("点击触发 \n 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发","Trigger \n Set the trigger property to change the trigger event to 'click'."),component:n(949).default,rawText:n(950)},{name:"4-func",title:Object(c.a)("关闭事件 \n content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件","Close \n Set the content property to a function, you can handle the close event inside the popup panel."),component:n(951).default,rawText:n(952)},{name:"5-type",title:Object(c.a)("样式 \n 内置四种样式","Type \n Four styles are built in."),component:n(953).default,rawText:n(954)},{name:"6-type",title:Object(c.a)(" \n 如果内置样式不满足需求，可以通过 background 和 border 自定义样式"," \n Customize the style with background and border."),component:n(955).default,rawText:n(956)}];t.default=Object(i.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:g}))})},943:function(e,t){e.exports="# Popover *气泡*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#fff' | 弹出层背景色（含箭头） |\n| border | string | '#dee2e6' | 弹出层边框颜色（含箭头） |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 子元素只能为一个 ReactElement |\n| content | ReactElement \\| function | 必填 | 弹出内容 | \n| position | string | 'top' | 弹出层位置，可选值为 \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | 无 | 最外层扩展样式 |\n| trigger | string | 'hover' | 触发方式，可选值为 \\['click', 'hover'] |\n| type | string | 无 | 可选值为，\\['success', 'info', 'warning', 'danger'] |\n"},944:function(e,t){e.exports="# Popover\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#fff' | Pop-up background-color(with arrows) |\n| border | string | '#dee2e6' | The color of pop-up border(with arrows) |\n| className | string | - | Extend className |\n| children | ReactElement | required | The child element can only be one ReactElement. |\n| content | ReactElement \\| function | required | Pop-up content | \n| position | string | 'top' | The position of pop-up layer, options:  \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | - | The pop-up container style |\n| trigger | string | 'hover' | options: \\['click', 'hover'] |\n| type | string | none | Options: \\['success', 'info', 'warning', 'danger'] |"},945:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(19);t.default=function(){var e=r.a.createElement("div",{style:{width:200,padding:20}},"Some text");return r.a.createElement(i.t,{content:e},r.a.createElement(i.c,null,"Hover"))}},946:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 与 Tooltip 相比，Popover 可以控制样式，大小由内容决定\n * en - Base\n *    -- The basic usage.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return (\n    <Popover content={content}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},947:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(19),l=[[null,"bottom-left","bottom","bottom-right",null],["right-top",null,null,null,"left-top"],["right",null,null,null,"left"],["right-bottom",null,null,null,"left-bottom"],[null,"top-left","top","top-right",null]],c={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){var e=r.a.createElement("div",{style:{width:240,padding:30}},"Some text");return l.map(function(t,n){return r.a.createElement("div",{key:n},t.map(function(t,n){return t?r.a.createElement(i.t,{content:e,position:t,key:n},r.a.createElement("div",{style:c},t)):r.a.createElement("div",{key:n,style:Object.assign({},c,{border:0})})}))})}},948:function(e,t){e.exports="/**\n * cn - 弹出位置\n *    -- 内置了十二个弹出的位置\n * en - Position\n *    -- Twelve pop-up positions are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst positions = [\n  [null, 'bottom-left', 'bottom', 'bottom-right', null],\n  ['right-top', null, null, null, 'left-top'],\n  ['right', null, null, null, 'left'],\n  ['right-bottom', null, null, null, 'left-bottom'],\n  [null, 'top-left', 'top', 'top-right', null],\n]\n\nconst style = {\n  width: 100, textAlign: 'center', lineHeight: '30px', margin: 4, display: 'inline-block', border: 'solid 1px #eee',\n}\n\nexport default function () {\n  const content = <div style={{ width: 240, padding: 30 }}>Some text</div>\n  return positions.map((row, i) => (\n    <div key={i}>\n      {\n        row.map((p, j) =>\n        (p ? (\n          <Popover content={content} position={p} key={j}>\n            <div style={style}>{p}</div>\n          </Popover>\n          )\n         : <div key={j} style={{ ...style, border: 0 }} />))\n      }\n    </div>\n  ))\n}\n"},949:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(19);t.default=function(){var e=r.a.createElement(i.d,{style:{width:300,border:0,background:"transparent"}},r.a.createElement(i.d.Header,null,"Header"),r.a.createElement(i.d.Body,{style:{height:80}},"Body"));return r.a.createElement(i.t,{content:e,trigger:"click",style:{marginRight:12}},r.a.createElement(i.c,null,"Click me"))}},950:function(e,t){e.exports="/**\n * cn - 点击触发\n *    -- 默认是移入组件触发，设置 trigger 为 'click'，可以改为点击触发\n * en - Trigger\n *    -- Set the trigger property to change the trigger event to 'click'.\n */\nimport React from 'react'\nimport { Button, Popover, Card } from 'shineout'\n\nexport default function () {\n  const content = (\n    <Card style={{ width: 300, border: 0, background: 'transparent' }}>\n      <Card.Header>Header</Card.Header>\n      <Card.Body style={{ height: 80 }}>Body</Card.Body>\n    </Card>\n  )\n  return (\n    <Popover content={content} trigger=\"click\" style={{ marginRight: 12 }}>\n      <Button>Click me</Button>\n    </Popover>\n  )\n}\n"},951:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(19);t.default=function(){return r.a.createElement(i.t,{content:function(e){return r.a.createElement("div",{style:{padding:20}},r.a.createElement("div",null,"Are you sure you want to close this panel?"),r.a.createElement("div",{style:{marginTop:30,textAlign:"right"}},r.a.createElement(i.c,{size:"small",onClick:function(){e(),i.q.success("Popover panel closed.")}},"close")))},trigger:"click",style:{marginRight:12}},r.a.createElement(i.c,null,"Click me"))}},952:function(e,t){e.exports="/**\n * cn - 关闭事件\n *    -- content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件\n * en - Close\n *    -- Set the content property to a function, you can handle the close event inside the popup panel.\n */\nimport React from 'react'\nimport { Button, Popover, Message } from 'shineout'\n\nexport default function () {\n  const content = close => (\n    <div style={{ padding: 20 }}>\n      <div>Are you sure you want to close this panel?</div>\n      <div style={{ marginTop: 30, textAlign: 'right' }}>\n        <Button\n          size=\"small\"\n          onClick={() => {\n            close()\n            Message.success('Popover panel closed.')\n          }}\n        >\n          close\n        </Button>\n      </div>\n    </div>\n  )\n\n  return (\n    <Popover content={content} trigger=\"click\" style={{ marginRight: 12 }}>\n      <Button>Click me</Button>\n    </Popover>\n  )\n}\n"},953:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(19),l=["success","info","warning","danger"],c={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){var e=r.a.createElement("div",{style:{width:200,padding:20}},"Some text");return l.map(function(t,n){return r.a.createElement(i.t,{content:e,type:t,key:n},r.a.createElement("div",{style:c},t))})}},954:function(e,t){e.exports="/**\n * cn - 样式\n *    -- 内置四种样式\n * en - Type\n *    -- Four styles are built in.\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst types = ['success', 'info', 'warning', 'danger']\n\nconst style = {\n  width: 100, textAlign: 'center', lineHeight: '30px', margin: 4, display: 'inline-block', border: 'solid 1px #eee',\n}\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return types.map((t, i) => (\n    <Popover content={content} type={t} key={i}>\n      <div style={style}>{t}</div>\n    </Popover>\n  ))\n}\n"},955:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(19);t.default=function(){var e=r.a.createElement("div",{style:{width:200,padding:20,color:"gold"}},"Some text");return r.a.createElement(i.t,{content:e,background:"#555",border:"gold",style:{marginRight:12}},r.a.createElement(i.c,null,"Hover"))}},956:function(e,t){e.exports="/**\n * cn -\n *    -- 如果内置样式不满足需求，可以通过 background 和 border 自定义样式\n * en -\n *    -- Customize the style with background and border.\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20, color: 'gold' }}>Some text</div>\n  return (\n    <Popover content={content} background=\"#555\" border=\"gold\" style={{ marginRight: 12 }}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"}});
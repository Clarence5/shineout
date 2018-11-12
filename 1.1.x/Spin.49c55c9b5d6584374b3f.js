webpackJsonpShineoutDoc([6],{972:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(61),o=t(60),i=t(35),l=t(973),s=t.n(l),u=t(974),m=t.n(u),d=Object(i.a)(s.a,m.a),p=[{name:"01-default",title:Object(i.a)('default \n name="default"','default \n name="default"'),component:t(975).default,rawText:t(976)},{name:"02-chasing-dots",title:Object(i.a)('chasing-dots \n name="chasing-dots"','chasing-dots \n name="chasing-dots"'),component:t(977).default,rawText:t(978)},{name:"03-cube-grid",title:Object(i.a)('cube-grid \n name="cube-grid"','cube-grid \n name="cube-grid"'),component:t(979).default,rawText:t(980)},{name:"04-double-bounce",title:Object(i.a)('double-bounce \n name="double-bounce"','double-bounce \n name="double-bounce"'),component:t(981).default,rawText:t(982)},{name:"05-fading-circle",title:Object(i.a)('fading-circle \n name="fading-circle"','fading-circle \n name="fading-circle"'),component:t(983).default,rawText:t(984)},{name:"06-four-dots",title:Object(i.a)('four-dots \n name="four-dots"','four-dots \n name="four-dots"'),component:t(985).default,rawText:t(986)},{name:"07-plane",title:Object(i.a)('plane \n name="plane"','plane \n name="plane"'),component:t(987).default,rawText:t(988)},{name:"08-pulse",title:Object(i.a)('pulse \n name="pulse"','pulse \n name="pulse"'),component:t(989).default,rawText:t(990)},{name:"09-ring",title:Object(i.a)('ring \n name="ring"','ring \n name="ring"'),component:t(991).default,rawText:t(992)},{name:"10-scale-circle",title:Object(i.a)('scale-circle \n name="scale-circle"','scale-circle \n name="scale-circle"'),component:t(993).default,rawText:t(994)},{name:"11-three-bounce",title:Object(i.a)('three-bounce \n name="three-bounce"','three-bounce \n name="three-bounce"'),component:t(995).default,rawText:t(996)},{name:"12-wave",title:Object(i.a)('wave \n name="wave"','wave \n name="wave"'),component:t(997).default,rawText:t(998)}];n.default=Object(c.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},973:function(e,n){e.exports="# Spin *加载中*\n\n部分样式来源于[SpinKit](https://github.com/tobiasahlin/SpinKit)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| color | string | #6c757d | 颜色 |\n| size | number \\| string | 40 | 尺寸 |\n| name | string | 'fading-circle' | 类型，可选值见示例 |"},974:function(e,n){e.exports="# Spin\n\nPart of the style comes from [SpinKit](https://github.com/tobiasahlin/SpinKit).\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| color | string | #6c757d | color |\n| size | number \\| string | 40 | size |\n| name | string | 'fading-circle' | type. See the example for optional values. |"},975:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"default",color:"green"}),r.a.createElement(c.z,{name:"default"}),r.a.createElement(c.z,{size:"54px",name:"default",color:"#dc3545"}))}},976:function(e,n){e.exports='/**\n* cn - default\n     -- name="default"\n* en - default\n     -- name="default"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="default" color="green" />\n      <Spin name="default" />\n      <Spin size="54px" name="default" color="#dc3545" />\n    </div>\n  )\n}\n'},977:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"chasing-dots",color:"green"}),r.a.createElement(c.z,{name:"chasing-dots"}),r.a.createElement(c.z,{size:"54px",name:"chasing-dots",color:"#dc3545"}))}},978:function(e,n){e.exports='/**\n* cn - chasing-dots\n     -- name="chasing-dots"\n* en - chasing-dots\n     -- name="chasing-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="chasing-dots" color="green" />\n      <Spin name="chasing-dots" />\n      <Spin size="54px" name="chasing-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},979:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"cube-grid",color:"green"}),r.a.createElement(c.z,{name:"cube-grid"}),r.a.createElement(c.z,{size:"54px",name:"cube-grid",color:"#dc3545"}))}},980:function(e,n){e.exports='/**\n* cn - cube-grid\n     -- name="cube-grid"\n* en - cube-grid\n     -- name="cube-grid"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="cube-grid" color="green" />\n      <Spin name="cube-grid" />\n      <Spin size="54px" name="cube-grid" color="#dc3545" />\n    </div>\n  )\n}\n'},981:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"double-bounce",color:"green"}),r.a.createElement(c.z,{name:"double-bounce"}),r.a.createElement(c.z,{size:"54px",name:"double-bounce",color:"#dc3545"}))}},982:function(e,n){e.exports='/**\n* cn - double-bounce\n     -- name="double-bounce"\n* en - double-bounce\n     -- name="double-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="double-bounce" color="green" />\n      <Spin name="double-bounce" />\n      <Spin size="54px" name="double-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},983:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"fading-circle",color:"green"}),r.a.createElement(c.z,{name:"fading-circle"}),r.a.createElement(c.z,{size:"54px",name:"fading-circle",color:"#dc3545"}))}},984:function(e,n){e.exports='/**\n* cn - fading-circle\n     -- name="fading-circle"\n* en - fading-circle\n     -- name="fading-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="fading-circle" color="green" />\n      <Spin name="fading-circle" />\n      <Spin size="54px" name="fading-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},985:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"four-dots",color:"green"}),r.a.createElement(c.z,{name:"four-dots"}),r.a.createElement(c.z,{size:"54px",name:"four-dots",color:"#dc3545"}))}},986:function(e,n){e.exports='/**\n* cn - four-dots\n     -- name="four-dots"\n* en - four-dots\n     -- name="four-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="four-dots" color="green" />\n      <Spin name="four-dots" />\n      <Spin size="54px" name="four-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},987:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"plane",color:"green"}),r.a.createElement(c.z,{name:"plane"}),r.a.createElement(c.z,{size:"54px",name:"plane",color:"#dc3545"}))}},988:function(e,n){e.exports='/**\n* cn - plane\n     -- name="plane"\n* en - plane\n     -- name="plane"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="plane" color="green" />\n      <Spin name="plane" />\n      <Spin size="54px" name="plane" color="#dc3545" />\n    </div>\n  )\n}\n'},989:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"pulse",color:"green"}),r.a.createElement(c.z,{name:"pulse"}),r.a.createElement(c.z,{size:"54px",name:"pulse",color:"#dc3545"}))}},990:function(e,n){e.exports='/**\n* cn - pulse\n     -- name="pulse"\n* en - pulse\n     -- name="pulse"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="pulse" color="green" />\n      <Spin name="pulse" />\n      <Spin size="54px" name="pulse" color="#dc3545" />\n    </div>\n  )\n}\n'},991:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"ring",color:"green"}),r.a.createElement(c.z,{name:"ring"}),r.a.createElement(c.z,{size:"54px",name:"ring",color:"#dc3545"}))}},992:function(e,n){e.exports='/**\n* cn - ring\n     -- name="ring"\n* en - ring\n     -- name="ring"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="ring" color="green" />\n      <Spin name="ring" />\n      <Spin size="54px" name="ring" color="#dc3545" />\n    </div>\n  )\n}\n'},993:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"scale-circle",color:"green"}),r.a.createElement(c.z,{name:"scale-circle"}),r.a.createElement(c.z,{size:"54px",name:"scale-circle",color:"#dc3545"}))}},994:function(e,n){e.exports='/**\n* cn - scale-circle\n     -- name="scale-circle"\n* en - scale-circle\n     -- name="scale-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="scale-circle" color="green" />\n      <Spin name="scale-circle" />\n      <Spin size="54px" name="scale-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},995:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"three-bounce",color:"green"}),r.a.createElement(c.z,{name:"three-bounce"}),r.a.createElement(c.z,{size:"54px",name:"three-bounce",color:"#dc3545"}))}},996:function(e,n){e.exports='/**\n* cn - three-bounce\n     -- name="three-bounce"\n* en - three-bounce\n     -- name="three-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="three-bounce" color="green" />\n      <Spin name="three-bounce" />\n      <Spin size="54px" name="three-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},997:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),c=t(19);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(c.z,{size:18,name:"wave",color:"green"}),r.a.createElement(c.z,{name:"wave"}),r.a.createElement(c.z,{size:"54px",name:"wave",color:"#dc3545"}))}},998:function(e,n){e.exports='/**\n* cn - wave\n     -- name="wave"\n* en - wave\n     -- name="wave"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function () {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="wave" color="green" />\n      <Spin name="wave" />\n      <Spin size="54px" name="wave" color="#dc3545" />\n    </div>\n  )\n}\n'}});
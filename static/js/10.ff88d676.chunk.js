(this["webpackJsonpreact-goodpic"]=this["webpackJsonpreact-goodpic"]||[]).push([[10],{316:function(e,n,a){"use strict";a.r(n);var t=a(16),r=a(0),o=a.n(r),s=a(125),l=a(319),c=a(322),i=a(17),u=a(65),m=a(5);function p(){var e=Object(t.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n  @media (max-width: 500px) {\n    margin-bottom: 10px;\n  }\n"]);return p=function(){return e},e}function d(){var e=Object(t.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 20px;\n  background: #e9eff2;\n  @media (max-width: 500px) {\n    margin-top: 80px;\n  }\n"]);return d=function(){return e},e}function h(){var e=Object(t.a)(["\n  background: #288388;\n  border: none;\n"]);return h=function(){return e},e}var g=Object(i.a)(s.a)(h()),b=i.a.div(d()),f=function(e,n){return/\W/.test(n)?Promise.reject("invalid characters existing"):n.length<4?Promise.reject("length of password should be 4 characters at least."):n.length>10?Promise.reject("length of password should not more than 10."):Promise.resolve()},x={labelCol:{span:6},wrapperCol:{span:18}},w={wrapperCol:{offset:6,span:18}},j=i.a.h1(p());n.default=function(){var e=Object(u.a)().AuthStore,n=Object(m.f)();return o.a.createElement(b,null,o.a.createElement(j,null,"\u767b\u5f55"),o.a.createElement(l.a,Object.assign({},x,{name:"basic",onFinish:function(a){console.log("Success:",a),e.setUsername(a.username),e.setPassword(a.password),e.login().then((function(e){console.log("\u767b\u5f55\u6210\u529f\uff0c\u8fdb\u5165\u9996\u9875"),n.push("/")})).catch((function(e){console.log("\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}))},onFinishFailed:function(e){console.log("Failed:",e)}}),o.a.createElement(l.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"},{validator:f}]},o.a.createElement(c.a,null)),o.a.createElement(l.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"},{min:6,message:"length of password should be 6 characters at least."},{max:20,message:"length of password should not more than 20."}]},o.a.createElement(c.a.Password,null)),o.a.createElement(l.a.Item,w,o.a.createElement(g,{type:"primary",htmlType:"submit"},"Login"))))}}}]);
//# sourceMappingURL=10.ff88d676.chunk.js.map
# goodpic

预览链接：https://oliver-ysq.github.io/goodpic/index#/

### 技术栈：

- React：base技术框架
- React-Router：路由管理
- Mobx6：全局数据管理
- styled-component：css in js解决方案
- antd：组件库
- leancloud：阿里serverless解决方案

### 实现功能：

1. 支持用户的注册和登录
2. 支持 png/jpg/gif/svg 格式的、大小在1MB以内的图片文件的上传
3. 支持图库的管理（包括查看和删除）
4. 图库支持动态（分步）滑动加载。
5. 使用`@media`作移动端适配。

### 项目记录

1. 懒加载  
   按需加载组件，防止一次性加载全部组件带来的卡顿。

   ```
   import {Suspense, lazy} from "react";
   ...
   const Home = lazy(()=>import("./pages/component/Home"))
   const About = lazy(()=>import("./pages/component/About"))
   
   jsx:
   <Suspense fallback={<Loading />}>   {/* 异步加载 */}
       <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/about' exact component={About}/>
           <Route path='/history' exact component={History}/>
       </Switch>
   </Suspense>
   ```

2. styled-components

   - 基本使用

   ```
   import styled from "styled-components"
   const MyHeader = styled.header` //生成一个带有如下样式的<header></header>标签
       color: red;
   `
   
   export default function component(){
       return(
           <MyHeader>welcome</MyHeader>
       )
   }
   ```

   - 为已存在的组件增加css样式：

   ```
   const Button = styled.button`
       font-size: 24px;
   `
   
   const BigButton = style(Button)`
       font-size: 48px;
   `
   ```

   - 获取props

   ```
    const Button = styled.button`
        background: ${props => props.primary ? 'palevioletred' : 'white'};
        color: ${props => props.primary ? 'white' : 'palevioletred'};
        font-size: 1em;
    `
    render(
        <div>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    );
   ```

3. react-router使用
   关键点： 

   - Router：BrowseRouter；HashRouter  
     包裹router的显示范围
   - Route：  
     每个可通过router跳转的页面为一个Route
   - Switch  
     包裹Route
   - Link：Link；NavLink  
     跳转到Route

4. mobx
   三步走：
   （1）创建仓库

   ```
   import {makeAutoObservable} from 'mobx'
   class myStore{
       count: 0;
       add(){
           this.count++
       }   
   }
   export {myStore}
   ```

   （2）使用Context注入仓库

   ```
   import React, {createContext, useContext} from 'react'
   import {myStore} from './myStore'
   
   const context = createContext({
       myStore: new myStore()
   })
   
   export const useStores = () => useContext(context)
   ```

   （3）在组件中使用

   ```
   const {myStore} = useStores()
   //可以使用myStore中的方法
   myStore.count
   myStore.add()
   ```

5. useRef

   ```
   const count = useRef(0)
   console.log(count.current)
   ```

6. 非受控表单
   useRef()方案  

7. 定制图片宽高  
   若图片的url为imgurl，则定制宽为100，高为200的图片：  
     imgurl/w/100/h/200

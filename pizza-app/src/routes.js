import Home from "./components/Home"
import Menu from "./components/Menu"
import Admin from "./components/Admin"
import About from "./components/about/About"
import Login from "./components/Login"
import Register from "./components/Register"


// 二级路由 
// children:[{path:'/xxx', name:'nameLink',component: ImportName}]

import Contact from "./components/about/Contact"
import Delivery from "./components/about/Delivery"
import History from "./components/about/History"
import OrderingGuide from "./components/about/OrderingGuide"

// 三级路由

import Phone from "./components/about/contact/Phone"
import PersonName from "./components/about/contact/PersonName"



export const routes = [
    // { path: '/', name:"homeLink", component: Home },
    { path: '/', name:"homeLink", components:{  //components展示多个
        default: Home,
        'history':History,
        'delivery': Delivery,
        'orderingGuide': OrderingGuide

    } },
    { path: '/menu', name:"menuLink", component: Menu },
    { path: '/admin', name:"adminLink", component: Admin },
    { path: '/login', name:"loginLink", component: Login },
    { path: '/about', name:"aboutLink",redirect: '/about/contact',component: About, children:[
      {path: '/about/contact', name:"contactLink", redirect: '/personname',component: Contact, children:[
        {path:'/phone', name:"phoneNumber", component: Phone},
        {path:'/personname', name:"personName", component: PersonName},
      ]},
      {path: '/delivery', name:"deliveryLink", component: Delivery},
      {path: '/history', name:"historyLink", component: History},
      {path: '/orderingGuide', name:"orderingGuideLink", component: OrderingGuide},
    ] },
    { path: '/register',name:"registerLink", component: Register },
    { path: '*', redirect: '/' },   // 匹配不到则引导到主页
  
  ]



  // 全局守卫  ---> 路由独享守护
// router.beforeEach((to,from,next) =>{
//   // alert('还没有登陆，请先登录。');
//   // next();
//   // 判断store.gettes.islogin == false
//   // console.log(to)
//   //  to.path是获取用户请求的路径，如果用户现在在登陆和注册页面，不提醒alert，可以操作
//   if (to.path == '/login' || to.path == '/register'){
//     next()
//   }else{
//    alert('还没有登陆，请先登录!');   //非以上二个页面路径，就提示必须登陆，并且引导登陆界面
//    next('/login')  // 引导到登陆界面
//   }
// })

// 后置钩子
// router.afterEach((to, from) => {
//   alert('after Each');
// })
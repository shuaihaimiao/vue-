import Home from './Home.vue';
// import Header from './Public-header.vue'
import Footer from './Public-footer.vue'
import Left from './Public-left.vue'
import Password from './login-password.vue'
import Message from './my-message.vue'
import Body from './public-body.vue'
import Editing from './editing-information.vue'
import renzheng from './renzheng.vue'
import mylesson from './mylesson.vue'
import renzhengkecheng from './shenhekecheng.vue'
import myactive from './myactive.vue'
import active2 from './active2.vue'
import active3 from './active3.vue'
import left3 from './public-body3.vue'
import left4 from './public-left4.vue'
import weitongguo from './weitongguo.vue'
import tiwen from './tiwen.vue'
import huida from './huida.vue'
import shouru from './shouru.vue'
import yinhangka from './yinhangka.vue'
import yhktj from './yhktj.vue'
import lessonadd from './lessonadd.vue'
import shangchuanchenggong from './shangchuanchenggong'
import shangchuanchenggong2 from './shangchuanchenggong2'
import tx from './tixian.vue'
import left5 from './public5'
import daichuli from './daichuli'
export const routes = [
    {
        path: '/', component: Body, children: [
            {
                path: '/home', name: 'home', component: Home, children: [
                    { path: '/home', name: 'julu', component: mylesson },
                    { path: '/shenhekecheng', name: 'active', component: renzhengkecheng },
                    { path: '/active2', name: 'active2', comments: active2 },
                    { path: '/myactive', name: 'myactive', comments: myactive },
                    { path : '/lessonadd',name:'lessonadd', component:lessonadd},
                    { path : '/shangchuanchenggong',name:'shangchuanchenggong',component:shangchuanchenggong},
                    { path : '/shangchuanchenggong2',name:'shangchuanchenggong2',component:shangchuanchenggong2},
                    { path: '/weitongguo', name: '111', component: weitongguo },
                ]
            },
            {
                path: '/home', name: 'julu', component: mylesson, children: [
                    { path: '/active2', name: '111', component: active2 },
                    { path: '/shenhekecheng', name: '111', component: active3 },
                    { path: '/weitongguo', name: '111', component: weitongguo },
                    
                ]
            },
            {
                path: '/', name: 'left', component: Left, children: [

                    { path: '/editing', name: 'editing', component: Editing },
                    { path: '/password', name: 'password', component: Password, },
                    { path: '/', name: 'message', component: Message },
                    { path: '/renzheng', name: 'lesson', component: renzheng }

                ]
            },
            {
                path: '/left3', name: 'left', component: left3,children:[
                    
                        { path: '/tiwen', name: 'tiwen', component: tiwen },
                        {path:'/huida',name:'huida',component:huida },
                        {path:'/daichuli',name:'daichuli',component:daichuli}
                    
                ]

            },
            {
                path: '/left4', name: 'left', component: left4,children:[
                    { path: '/shouru', name: 'shouru', component: shouru },
                    { path: '/yinhangka', name: 'yinhangka', component: yinhangka },
                    { path : '/yhktj',name:'yhktj', component:yhktj},
                    {path :'/tixian',name:'tixian', component:tx }
                   
                ]

            },{
                path:'/left5',name:'left',component : left5
            }
        ]
    },


    { path: '/footer', component: Footer },

    { path: '*' }


]

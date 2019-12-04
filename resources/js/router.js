import Vue from 'vue'


import VueRouter from 'vue-router'



Vue.use(VueRouter)

const router = new VueRouter({



routes: [
{path: '/app', component: require('./App.vue').default},
//beginnerfreetalking
{path: '/freetalking/beginner/chapter1', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter1.vue').default},
{path: '/freetalking/beginner/chapter2', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter2.vue').default},
{path: '/freetalking/beginner/chapter3', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter3.vue').default},
{path: '/freetalking/beginner/chapter4', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter4.vue').default},
{path: '/freetalking/beginner/chapter5', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter5.vue').default},
{path: '/freetalking/beginner/chapter6', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter6.vue').default},
{path: '/freetalking/beginner/chapter7', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter7.vue').default},
{path: '/freetalking/beginner/chapter8', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter8.vue').default},
{path: '/freetalking/beginner/chapter9', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter9.vue').default},
{path: '/freetalking/beginner/chapter10', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter10.vue').default},
{path: '/freetalking/beginner/chapter11', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter11.vue').default},
{path: '/freetalking/beginner/chapter12', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter12.vue').default},
{path: '/freetalking/beginner/chapter13', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter13.vue').default},
{path: '/freetalking/beginner/chapter14', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter14.vue').default},
{path: '/freetalking/beginner/chapter15', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter15.vue').default},
{path: '/freetalking/beginner/chapter16', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter16.vue').default},
{path: '/freetalking/beginner/chapter17', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter17.vue').default},
{path: '/freetalking/beginner/chapter18', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter18.vue').default},
{path: '/freetalking/beginner/chapter19', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter19.vue').default},
{path: '/freetalking/beginner/chapter20', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter20.vue').default},
{path: '/freetalking/beginner/chapter21', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter21.vue').default},
{path: '/freetalking/beginner/chapter22', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter22.vue').default},
{path: '/freetalking/beginner/chapter23', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter23.vue').default},
{path: '/freetalking/beginner/chapter24', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter24.vue').default},
{path: '/freetalking/beginner/chapter25', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter25.vue').default},
{path: '/freetalking/beginner/chapter26', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter26.vue').default},
{path: '/freetalking/beginner/chapter27', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter27.vue').default},
{path: '/freetalking/beginner/chapter28', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter28.vue').default},
{path: '/freetalking/beginner/chapter29', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter29.vue').default},
{path: '/freetalking/beginner/chapter30', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter30.vue').default},
{path: '/freetalking/beginner/chapter31', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter31.vue').default},
{path: '/freetalking/beginner/chapter32', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter32.vue').default},
{path: '/freetalking/beginner/chapter33', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter33.vue').default},
{path: '/freetalking/beginner/chapter34', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter34.vue').default},
{path: '/freetalking/beginner/chapter35', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter35.vue').default},
{path: '/freetalking/beginner/chapter36', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter36.vue').default},
{path: '/freetalking/beginner/chapter37', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter37.vue').default},
{path: '/freetalking/beginner/chapter38', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter38.vue').default},
{path: '/freetalking/beginner/chapter39', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter39.vue').default},
{path: '/freetalking/beginner/chapter40', name: 'freetalking_beginner', component: require('./components/Books/FreetalkingAdult/Beginner/Chapter40.vue').default},

//Intermediate
{path: '/freetalking/intermediate/chapter1', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter1.vue').default},
{path: '/freetalking/intermediate/chapter2', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter2.vue').default},
{path: '/freetalking/intermediate/chapter3', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter3.vue').default},
{path: '/freetalking/intermediate/chapter4', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter4.vue').default},
{path: '/freetalking/intermediate/chapter5', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter5.vue').default},
{path: '/freetalking/intermediate/chapter6', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter6.vue').default},
{path: '/freetalking/intermediate/chapter7', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter7.vue').default},
{path: '/freetalking/intermediate/chapter8', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter8.vue').default},
{path: '/freetalking/intermediate/chapter9', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter9.vue').default},
{path: '/freetalking/intermediate/chapter10', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter10.vue').default},
{path: '/freetalking/intermediate/chapter11', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter11.vue').default},
{path: '/freetalking/intermediate/chapter12', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter12.vue').default},
{path: '/freetalking/intermediate/chapter13', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter13.vue').default},
{path: '/freetalking/intermediate/chapter14', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter14.vue').default},
{path: '/freetalking/intermediate/chapter15', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter15.vue').default},
{path: '/freetalking/intermediate/chapter16', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter16.vue').default},
{path: '/freetalking/intermediate/chapter17', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter17.vue').default},
{path: '/freetalking/intermediate/chapter18', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter18.vue').default},
{path: '/freetalking/intermediate/chapter19', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter19.vue').default},
{path: '/freetalking/intermediate/chapter20', name: 'freetalking_intermediate', component: require('./components/Books/FreetalkingAdult/Intermediate/Chapter20.vue').default},
],
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}

})


export default router

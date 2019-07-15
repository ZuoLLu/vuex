import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        count:1,
        review:[]
    },
    getters:{
        getStateCount:function(state){
            return state.count+1;
        }
    },
    mutations:{
        add(state){
            state.count = state.count+1;
        },
        reduce(state,n){
            state.count = state.count-n;
        },
        SET_REVIEW(state,review){
            state.review = review;
            sessionStorage.setItem('review', JSON.stringify(state.review));
        }
    },
    actions:{
        addFun(context){
            context.commit('add');
        },
        reductionFun(context,n){
            context.commit('reduce',n);
        }
    },
})
export default store;
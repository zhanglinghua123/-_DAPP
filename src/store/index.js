import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return {
      MyPrivateKey:"",
      Myaccount:"",
      myNetArray:[],
      netArray:[],
      sellNetArray:[],
      mySellArray:[],
    }
  },
  mutations:{
    changeMyAccount(state,str)
    {
      state.Myaccount = str;
    },
    changeMyNet(state,array)
    {
      state.myNetArray = array;
    },
    changeNet(state,array)
    {
      state.netArray = array;
    },
    changeSellNetArray(state,array)
    {
      state.sellNetArray = array;
    },
    changeMyNetArray(state,array)
    {
      state.mySellArray = array;
    }
  },
  actions: {
  },
  modules: {
  }
})

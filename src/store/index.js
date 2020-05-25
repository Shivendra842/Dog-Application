import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfAllBreeds:{},
    selectedBreedName:"",
    selectedBreedImage:"",
 
  },
  mutations: {
    setBreedList:(state,list) =>{
      state.listOfAllBreeds=list;
    },
    setSelectedBreedName:(state,name)=>{
      state.selectedBreedName=name;
    },
    setSelectedBreedImage:(state,image) => {
      state.selectedBreedImage=image;
    },
  },
  getters:{
    listOfAllBreeds: state => (state.listOfAllBreeds),
    selectedBreedName: state => (state.selectedBreedName),
    selectedBreedImage:state => (state.selectedBreedImage)
  },
  actions: {
  },
  modules: {
  }
})

import store from '../../../src/store/index.js'


describe('In store, ', () => {
    it('should set the breedName',()=>{  
        let breedName="hound"
        store.commit("setSelectedBreedName","hound")
        expect(store.getters.selectedBreedName).toBe(breedName)
    })

    it('should set the breedImage',()=>{  
        let breedImage="url"
        store.commit("setSelectedBreedImage","url")
        expect(store.getters.selectedBreedImage).toBe(breedImage)
    })

    it('should set the breedImage',()=>{  
        let breedList={"bulldog":"english"}
        store.commit("setBreedList",{"bulldog":"english"})
        expect(store.getters.listOfAllBreeds).toEqual(breedList)
    })
})

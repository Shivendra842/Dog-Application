import {
	listOfAllBreeds,
	getNRandomImageByBreed
} from '../../../src/service/index.js';

describe('In weather service, ', () => {
    it('should return value',()=>{  
        listOfAllBreeds().then(((result) => {
        expect(result).toEqual('https://dog.ceo/api/breeds/list/all');
        })).catch(error=>{
            console.log(error)
        })
    })

    it('should return value',()=>{  
        getNRandomImageByBreed("hound","",20).then(((result) => {
        expect(result).toEqual('https://dog.ceo/api/breed/hound/images/random/20');
        })).catch(error=>{
            console.log(error)
        })
    })

    it('should return value',()=>{  
        getNRandomImageByBreed("bulldog","english",20).then(((result) => {
        expect(result).toEqual('https://dog.ceo/api/breed/bulldog/english/images/random/20');
        })).catch(error=>{
            console.log(error)
        })
    })
  
})
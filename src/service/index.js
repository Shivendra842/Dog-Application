import axios from 'axios';

const baseUrl = 'https://dog.ceo/api';


export const listOfAllBreeds = () => {
    return axios.get(`${baseUrl}/breeds/list/all`)
}

// export const getRandomImageByBreed = breeds =>{
//     return axios.get(`${baseUrl}/breed/${breeds}/images/random`)
// }

export const getNRandomImageByBreed = (breeds,subBreed,numberOfImages) =>{
    //console.log(breeds,subBreed,numberOfImages)
    if(!subBreed.length)
    {
        return axios.get(`${baseUrl}/breed/${breeds}/images/random/${numberOfImages}`)
    }
    return axios.get(`${baseUrl}/breed/${breeds}/${subBreed}/images/random/${numberOfImages}`)
   
}
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import getMoreImages from '@/components/breedSearch/moreImages/getMoreImages.vue';

describe('In getMoreImages Component', () => {
    let getMoreImagesWrapper;
    let store;
	//const router = new VueRouter({ path: '/', name: 'Home' });

	beforeEach(() => {
		Vue.use(Vuex);
		Vue.use(Vuetify);
		getMoreImagesWrapper = shallowMount(getMoreImages, {
            Vue,
            data() {
                return {
                    images: {"url":"url"}
                };
            },
            propsData:{
                breedName:"hound",
                subBreedName:"none",
                numberOfImages: 20
            },
            methods:{
                getImages: jest.fn(),
                getNRandomImageByBreed: jest.fn()
            },
            /* 
            store=new Vuex.store({
               mutations={
                    setBreedList:jest.fn(),
                    setSelectedBreedName:jest.fn(),
                    setSelectedBreedImage:jest.fn()

                },
                
                getters={
                    listOfAllBreeds:jest.fn(),
                    selectedBreedName:jest.fn(),
                    selectedBreedImage:jest.fn()
                }
            })*/
			//router
		});
    });

    afterEach(() => {
		getMoreImagesWrapper.destroy();
    });
    
    it('is a Vue instance', () => {
		expect(getMoreImagesWrapper.isVueInstance).toBeTruthy();
    });
    
    it('it should have a main <div>', () => {
		expect(getMoreImagesWrapper.attributes('id')).toBe('getMoreImages');
    });

    it('it should be a the first row', () => {
		expect(getMoreImagesWrapper.find('#row1').html()).toContain('v-row-stub');
    });

    it('it should be a the second row', () => {
		expect(getMoreImagesWrapper.find('#row2').html()).toContain('v-row-stub');
    });

    it('it should be a the first column', () => {
		expect(getMoreImagesWrapper.find('#col1').html()).toContain('v-col-stub');
    });

    it('it should be a the second column', () => {
		expect(getMoreImagesWrapper.find('#col2').html()).toContain('v-col-stub');
    });

    it('it should be a the first span tag', () => {
		expect(getMoreImagesWrapper.find('#span1').html()).toContain('span');
    });

    it('it should be a the second span tag', () => {
		expect(getMoreImagesWrapper.find('#span2').html()).toContain('span');
    });

    it('first span tag should contain "hound"', () => {
		expect(getMoreImagesWrapper.find('#span1').text()).toContain('hound');
    });

    it('second span tag should contain "none"', () => {
		expect(getMoreImagesWrapper.find('#span2').text()).toContain('none');
    });

    it('it should be a <v-card></v-card>', () => {
		expect(getMoreImagesWrapper.html()).toContain('v-card-stub');
    });
    it('it should be a <v-img></v-img>', () => {
		expect(getMoreImagesWrapper.html()).toContain('v-img-stub');
    });

    it('it should be a the first heading tag', () => {
		expect(getMoreImagesWrapper.find('#heading1').html()).toContain('h1');
    });

    it('it should be a the second heading tag', () => {
		expect(getMoreImagesWrapper.find('#heading2').html()).toContain('h1');
    });
   
   
    
   /* it('it should check the existence of listAllBreed button', () => {
        let listAllBreedButton = getMoreImagesWrapper.find('#row1');
        expect(listAllBreedButton.exists()).toBe(true);
    });*/
    
});
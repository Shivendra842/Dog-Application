import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import listAllBreed from '@/components/breedList/listAllBreed.vue';
import searchBreeds from '@/components/breedSearch/searchBreeds.vue';
import VueRouter from 'vue-router';
import {routes} from '@/router/index.js';

describe('In listAllBreeds Component', () => {
	let listAllBreedWrapper;
    let store;
    let router = new VueRouter({ routes });
	//const router = new VueRouter({ path: '/', name: 'Home' });

	beforeEach(() => {
		Vue.use(Vuex);
		Vue.use(Vuetify);
		listAllBreedWrapper = shallowMount(listAllBreed, {
            Vue,
            router,
			data() {
				return {
					breedList: {"hound":"none","pug":"none"},
					flag: true,
					randomDogImage: ["url"],
					currentPage: 1,
					maxBreedsToDisplay: 10,
					breedsToDisplay: {"hound":"hound"},
					paginationLength: 0,
                    items: [5, 10, 15, 20],
                    adjustImageInde:0
				};
			},

			methods: {
				allBreedsList: jest.fn(),
				getRandomDogImage: jest.fn(),
				gotoSearchBreedComponent: jest.fn(),
				adjustImageIndex: jest.fn(),
				displayNBreeds: jest.fn()
			}
		});
	});
	afterEach(() => {
		listAllBreedWrapper.destroy();
    });
    it('is a Vue instance', () => {
		expect(listAllBreedWrapper.isVueInstance).toBeTruthy();
    });
    it("initialize function should be called on create",async ()=>{
        const spyinit= jest.spyOn(listAllBreedWrapper.vm,"allBreedsList");
        listAllBreedWrapper.vm.gotoSearchBreedComponent=jest.fn();
        setTimeout(() => {
            expect(spyinit).toHaveBeenCalled();    
            expect(listAllBreedWrapper.vm.gotoSearchBreedComponent).toHaveBeenCalled();
            expect(homeWrapper.vm.adjustImageIndex).toHaveBeenCalled();
        });
      
    });
    
    it('it should have a main <div>', () => {
		expect(listAllBreedWrapper.attributes('id')).toBe('listAllBreed');
    });
    it('it should be a the starting row', () => {
		expect(listAllBreedWrapper.find('.padding').html()).toContain(
			'v-row-stub'
		);
    });
    it('it should be a the starting column', () => {
		expect(listAllBreedWrapper.find('#col1').html()).toContain(
			'v-col-stub'
		);
    });
    
    it('it should be a <v-hover></v-hover>', () => {
		expect(listAllBreedWrapper.html()).toContain('v-hover-stub');
    });

    it('it should be a <v-pagination></v-pagination>', () => {
		expect(listAllBreedWrapper.html()).toContain('v-pagination-stub');
    });
    
    it('it should be a <v-select></v-select>', () => {
		expect(listAllBreedWrapper.html()).toContain('v-select-stub');
    });

    it('it should call a function', () => {
      listAllBreedWrapper.vm.breedList={"hound":"[]","bulldog":"english"};
        listAllBreedWrapper.vm.maxBreedsToDisplay=1;
		expect(listAllBreedWrapper.vm.paginationLength).toBe(0);
    });

});

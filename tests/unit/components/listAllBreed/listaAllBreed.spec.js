import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import listAllBreed from '@/components/breedList/listAllBreed.vue';
import searchBreeds from '@/components/breedSearch/searchBreeds.vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index.js';

describe('In listAllBreeds Component', () => {
	let listAllBreedWrapper;
	let store;
	let router = new VueRouter({ routes });
	let mutations;
	let getters;
	let state;

	beforeEach(() => {
		Vue.use(Vuex);
		Vue.use(Vuetify);
		(state = {
			listOfAllBreeds: {},
			selectedBreedName: '',
			selectedBreedImage: ''
		}),
			(mutations = {
				setBreedList: jest.fn(),
				setSelectedBreedName: jest.fn(),
				setSelectedBreedImage: jest.fn()
			}),
			(getters = {
				listOfAllBreeds: () => state.listOfAllBreeds,
				selectedBreedName: () => state.selectedBreedName,
				selectedBreedImage: () => state.selectedBreedImage
			});
		store = new Vuex.Store({
			mutations,
			getters,
			state
		});
		listAllBreedWrapper = shallowMount(listAllBreed, {
			Vue,
			router,
			data() {
				return {
					breedList: { hound: 'none', pug: 'none' },
					flag: true,
					randomDogImage: ['url'],
					currentPage: 1,
					maxBreedsToDisplay: 1,
					breedsToDisplay: { hound: 'hound' },
					paginationLength: 0,
					items: [5, 10, 15, 20],
					adjustImageInde: 0
				};
			}
		});
	});
	afterEach(() => {
		listAllBreedWrapper.destroy();
	});
	it('is a Vue instance', () => {
		expect(listAllBreedWrapper.isVueInstance).toBeTruthy();
	});
	it('initialize function should be called on create', async () => {
		const spyinit = jest.spyOn(listAllBreedWrapper.vm, 'allBreedsList');
		listAllBreedWrapper.vm.gotoSearchBreedComponent = jest.fn();
		setTimeout(() => {
			expect(spyinit).toHaveBeenCalled();
			expect(
				listAllBreedWrapper.vm.gotoSearchBreedComponent
			).toHaveBeenCalled();
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

	it('it should call a displayNBreeds fn for getting n data', () => {
		listAllBreedWrapper.vm.displayNBreeds();
		expect(listAllBreedWrapper.vm.paginationLength).toBe(2);
	});

	it('it should call adjustImageIndex to get image index', () => {
		expect(listAllBreedWrapper.vm.adjustImageIndex()).toBe(0);
	});

	it('it should call a function', async () => {
		listAllBreedWrapper.vm.getRandomDogImage();
		expect(listAllBreedWrapper.vm.flag).toBe(true);
	});

	it('it should call a function', async () => {
		listAllBreedWrapper.vm.getRandomDogImage();
		expect(listAllBreedWrapper.vm.flag).toBe(true);
	});
});

import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import getMoreImages from '@/components/breedSearch/moreImages/getMoreImages.vue';

describe('In getMoreImages Component', () => {
	let getMoreImagesWrapper;
	let store;
	let mutations;
	let getters;
	let state;

	beforeEach(() => {
		Vue.use(Vuex);
		Vue.use(Vuetify);
		(state = {
			listOfAllBreeds: {},
			selectedBreedName: 'hound',
			selectedBreedImage: 'url'
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
		getMoreImagesWrapper = shallowMount(getMoreImages, {
			Vue,
			store,
			data() {
				return {
					images: { url: 'url' }
				};
			},
			propsData: {
				breedName: 'hound',
				subBreedName: 'none',
				numberOfImages: 20
			}
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
		expect(getMoreImagesWrapper.find('#row1').html()).toContain(
			'v-row-stub'
		);
	});

	it('it should be a the second row', () => {
		expect(getMoreImagesWrapper.find('#row2').html()).toContain(
			'v-row-stub'
		);
	});

	it('it should be a the first column', () => {
		expect(getMoreImagesWrapper.find('#col1').html()).toContain(
			'v-col-stub'
		);
	});

	it('it should be a the second column', () => {
		expect(getMoreImagesWrapper.find('#col2').html()).toContain(
			'v-col-stub'
		);
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

	it('it should call a function', () => {
		let expectedUrl = { url: 'url' };
		getMoreImagesWrapper.vm.getImages();
		expect(getMoreImagesWrapper.vm.breedName).toEqual('hound');
		expect(getMoreImagesWrapper.vm.images).toEqual(expectedUrl);
	});

	it('when breedName is changed', () => {
		getMoreImagesWrapper.setData({ breedName: 'hound' });

		getMoreImagesWrapper.vm.$options.watch.breedName.call(
			getMoreImagesWrapper.vm
		);
		expect(getMoreImagesWrapper.vm.breedName).toBe('hound');
	});

	it('when breedName is changed', () => {
		getMoreImagesWrapper.setData({ subBreedName: 'english' });

		getMoreImagesWrapper.vm.$options.watch.subBreedName.call(
			getMoreImagesWrapper.vm
		);
		expect(getMoreImagesWrapper.vm.subBreedName).toBe('english');
	});
	it('when breedName is changed', () => {
		getMoreImagesWrapper.setData({ subBreedName: 'english' });

		getMoreImagesWrapper.vm.$options.watch.subBreedName.call(
			getMoreImagesWrapper.vm
		);
		expect(getMoreImagesWrapper.vm.subBreedName).toBe('english');
	});
	it('when breedName is fetched from the store', () => {
		getMoreImagesWrapper.vm.breedName = '';
		getMoreImagesWrapper.vm.getImages();
		expect(getMoreImagesWrapper.vm.breedName).toBe('hound');
	});
});

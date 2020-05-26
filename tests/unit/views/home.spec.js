import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import listAllBreed from '@/components/breedList/listAllBreed.vue';
import Home from '@/views/Home.vue';

describe('In App Component', () => {
	let homeWrapper;

	beforeEach(() => {
		Vue.use(Vuetify);
		homeWrapper = shallowMount(Home, {
			Vue
		});
	});

	afterEach(() => {
		homeWrapper.destroy();
	});

	it('is a Vue instance', () => {
		expect(homeWrapper.isVueInstance).toBeTruthy();
	});

	it('it should have a main <div>', () => {
		expect(homeWrapper.attributes('id')).toBe('Home');
	});

	describe('it should be a appHeader component', () => {
		it('it should be a <listAllBreed></listAllBreed>', () => {
			expect(homeWrapper.html()).toContain(
				'<listallbreed-stub></listallbreed-stub>'
			);
		});
		it('it should load the app-header', () => {
			expect(listAllBreed).toBeTruthy();
		});
	});
});

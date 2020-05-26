import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import appHeader from '@/components/header/header.vue';

describe('In footer Component', () => {
	let headerWrapper;

	beforeEach(() => {
		Vue.use(Vuetify);
		headerWrapper = shallowMount(appHeader, {
			Vue
		});
	});

	afterEach(() => {
		headerWrapper.destroy();
	});

	it('is a Vue instance', () => {
		expect(headerWrapper.isVueInstance).toBeTruthy();
	});

	it('it should have a <v-app-bar></v-app-bar>', () => {
		expect(headerWrapper.html()).toContain('v-app-bar-stub');
	});
	it('it should have a main <div>', () => {
		expect(headerWrapper.attributes('id')).toBe('header');
	});

	it('it should be a <v-spacer></v-spacer>', () => {
		expect(headerWrapper.html()).toContain('v-spacer-stub');
	});

	it('title should have a value', () => {
		expect(headerWrapper.find('v-toolbar-title-stub').text()).toContain(
			'Pets'
		);
	});

	it('it should check the existence of listAllBreed button', () => {
		let listAllBreedButton = headerWrapper.find('#listAllBreedsButton');
		expect(listAllBreedButton.exists()).toBe(true);
	});

	it('it should check the existence of searchBreeds button', () => {
		let searchBreedButton = headerWrapper.find('#searchBreedsButton');
		expect(searchBreedButton.exists()).toBe(true);
	});

	it('listAllBreed button should have a value', () => {
		expect(headerWrapper.find('#listAllBreedsButton').text()).toContain(
			'List All Breeds'
		);
	});

	it('searchBreeds button should have a value', () => {
		expect(headerWrapper.find('#searchBreedsButton').text()).toContain(
			'Search Breeds'
		);
	});
});

import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import appFooter from '@/components/footer/footer.vue';

describe('In footer Component', () => {
	let footerWrapper;

	beforeEach(() => {
		Vue.use(Vuetify);
		footerWrapper = shallowMount(appFooter, {
			Vue
		});
	});

	afterEach(() => {
		footerWrapper.destroy();
	});

	it('is a Vue instance', () => {
		expect(footerWrapper.isVueInstance).toBeTruthy();
	});

	it('it should have a <v-card></v-card>', () => {
		expect(footerWrapper.html()).toContain('v-card-stub');
	});
	it('it should have a main <div>', () => {
		expect(footerWrapper.attributes('id')).toBe('footer');
	});

	it('it should be a <v-footer></v-footer>', () => {
		expect(footerWrapper.html()).toContain('v-footer-stub');
	});

	it('it should be Dogs @2020', () => {
		expect(footerWrapper.find('v-col-stub').text()).toContain('Dogs @2020');
	});
});

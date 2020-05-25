import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import appHeader from '@/components/header/header.vue';
import appFooter from '@/components/footer/footer.vue';
import App from '../../src/App.vue';
import Home from '../../src/views/Home.vue';

describe('In App Component', () => {
	let appWrapper;
const router = new VueRouter({ path: '/', name: 'Home' });

	beforeEach(() => {
	Vue.use(VueRouter);
		Vue.use(Vuetify);
		appWrapper = shallowMount(App, {
			Vue,
			router
		});
	});

	afterEach(() => {
		appWrapper.destroy();
	});

	it('is a Vue instance', () => {
		expect(appWrapper.isVueInstance).toBeTruthy();
    });

    it('it should be a v-app-stub', () => {
        expect(appWrapper.html()).toContain("v-app");
      });
    
    describe("it should be a appHeader component", () => {
        it("it should be a <appheader></appheader>", () => {
          expect(appWrapper.html()).toContain("<appheader-stub></appheader-stub>");
        });
        it("it should load the app-header", () => {
          expect(appHeader).toBeTruthy();
        });
      });

      describe("it should render router view", () => {
        it('it should have a div element with class="container"', () => {
          expect(appWrapper.html()).toContain("v-content");
        });
        it("it should be the Home view by default", () => {
          expect(Home).toBeTruthy();
        });
    
      });

      describe("it should be a appFooter component", () => {
        it("it should be a <appfooter></appfooter>", () => {
          expect(appWrapper.html()).toContain("appfooter-stub");
        });
        it("it should load the app-footer", () => {
          expect(appFooter).toBeTruthy();
        });
      });
});

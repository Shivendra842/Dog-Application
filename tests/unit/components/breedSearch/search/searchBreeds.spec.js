import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import searchBreeds from '@/components/breedSearch/searchBreeds.vue';

describe('In getMoreImages Component', () => {
	let searchBreedsWrapper;
	let store;
	let mutations;
	let getters;
	let state;

	beforeEach(() => {
		Vue.use(Vuex);
		Vue.use(Vuetify);
		
		state={
			listOfAllBreeds:{},
			selectedBreedName:"",
			selectedBreedImage:"",
		 
		  },
			mutations={
				setBreedList:jest.fn(),
				setSelectedBreedName:jest.fn(),
				setSelectedBreedImage:jest.fn()

			},
			getters={
				listOfAllBreeds:()=>state.listOfAllBreeds,
				selectedBreedName:()=>state.selectedBreedName,
				selectedBreedImage:()=>state.selectedBreedImage
			}
		
		store=new Vuex.Store({
			mutations,
			getters,state
		
		   })
		searchBreedsWrapper = shallowMount(searchBreeds, {
			Vue,
			store,
			data() {
				return {
					toggleSearchOptions: false,
					filterButtonValue: 'More Filters',
					toggleShowMoreImageOption: false,
					moreImagesButtonValue: 'More Images',
					selectedBreed: '',
					selectedSubBreed: '',
					subBreedList: [],
					image: [],
					disableShowMoreImages: true
				};
            },
            
		});
	});
	afterEach(() => {
		searchBreedsWrapper.destroy();
	});

	it('is a Vue instance', () => {
		expect(searchBreedsWrapper.isVueInstance).toBeTruthy();
	});

	it('it should have a main <div>', () => {
		expect(searchBreedsWrapper.attributes('id')).toBe('searchBreeds');
	});

	it('it should be a the starting row', () => {
		expect(searchBreedsWrapper.find('#row1').html()).toContain(
			'v-row-stub'
		);
	});

	it('it should be a the starting column', () => {
		expect(searchBreedsWrapper.find('#col1').html()).toContain(
			'v-col-stub'
		);
	});

	it('it should check the existence of show More Images button', () => {
		let showMoreImagesButton = searchBreedsWrapper.find(
			'#showMoreImagesButton'
		);
		expect(showMoreImagesButton.exists()).toBe(true);
	});

	it('it should check the existence of change Search Options button', () => {
		let changeSearchOptionsButton = searchBreedsWrapper.find(
			'#changeSearchOptionsButton'
		);
		expect(changeSearchOptionsButton.exists()).toBe(true);
	});

	it('showMoreImages button should have a value "More Images"', () => {
		expect(
			searchBreedsWrapper.find('#showMoreImagesButton').text()
		).toContain('More Images');
	});

	it('changeSearchOptions button should have a value "More Filters"', () => {
		expect(
			searchBreedsWrapper.find('#changeSearchOptionsButton').text()
		).toContain('More Filters');
	});

	it('Testing show more images button', () => {
		setTimeout(() => {
			searchBreedsWrapper.find('#showMoreImagesButton').trigger('click');
			expect(showMoreImages).toHaveBeenCalled();
		});
    });
    
    it('Testing show more filter option button', () => {
		setTimeout(() => {
			searchBreedsWrapper.find('#changeSearchOptionsButton').trigger('click');
			expect(changeSearchOptions).toHaveBeenCalled();
		});
    });
    
    it('Testing value changes on clicking show more images button', () => {
		setTimeout(() => {
			searchBreedsWrapper.find('#showMoreImagesButton').trigger('click');
            expect(searchBreedsWrapper.vm.toggleShowMoreImageOption).toBe(true)
            expect(searchBreedsWrapper.vm.moreImagesButtonValue).toBe('Hide Images')
		});
    });

    it('Testing value changes on clicking show filters button', () => {
		setTimeout(() => {
			searchBreedsWrapper.find('#changeSearchOptionsButton').trigger('click');
            expect(searchBreedsWrapper.vm.toggleSearchOptions).toBe(true)
            expect(searchBreedsWrapper.vm.filterButtonValue).toBe('Hide Filters')
		});
    });
   it("breedImage function should be called on create", async () => {
    const spyinit = jest.spyOn(searchBreedsWrapper.vm, "breedImage");
    searchBreedsWrapper.vm.changeSearchOptions=jest.fn();
    setTimeout(() => {
        expect(spyinit).toHaveBeenCalled();
        expect(searchBreedsWrapper.vm.breedImage).toHaveBeenCalled();
        expect(searchBreedsWrapper.vm.changeSearchOptions).toHaveBeenCalled();
    });

});

describe('Watcher - selectedBreed', () => {
    beforeEach(() => {
      searchBreedsWrapper.vm.selectedBreed = jest.fn();
    });

    it('when selectedBreed has full name, then searchBreed funtion should call', () => {
        searchBreedsWrapper.setData({ selectedBreed: 'hound' });
        setTimeout(()=>{
            searchBreedsWrapper.vm.$options.watch.selectedBreed.call(searchBreedsWrapper.vm);
            expect(searchBreedsWrapper.vm.selectedBreed).toBeCalled();
        });
    });
  });

it('it should call a function', () => {
    searchBreedsWrapper.vm.changeSearchOptions();
	  expect(searchBreedsWrapper.vm.toggleSearchOptions).toEqual(true);
	  expect(searchBreedsWrapper.vm.filterButtonValue).toEqual('Hide Filters');
  });
  

  it('it should call a function', () => {
	 searchBreedsWrapper.vm.showMoreImages();
	   expect(searchBreedsWrapper.vm.toggleShowMoreImageOption).toEqual(true);
	   expect(searchBreedsWrapper.vm.moreImagesButtonValue ).toEqual('Hide Image');
   });
  
});


<template>
	<div id="searchBreeds">
		<v-row id="row1">
			<v-col class="text-center" id="col1">
				<v-btn
					class="ma-2"
					outlined
					color="indigo"
					@click="showMoreImages"
					:disabled="disableShowMoreImages"
					id="showMoreImagesButton"
					>{{ moreImagesButtonValue }}
				</v-btn>
				<v-btn
					class="ma-2"
					outlined
					color="indigo"
					@click="changeSearchOptions"
					id="changeSearchOptionsButton"
					>{{ filterButtonValue }}
				</v-btn>
			</v-col>
		</v-row>
		<v-row
			v-if="toggleSearchOptions"
			align="center"
			justify="center"
			id="row2"
		>
			<v-col class="text-center" cols="3">
				<v-autocomplete
					v-model="selectedBreed"
					:items="breedList()"
					label="Breed"
					placeholder="Start typing to Search"
				></v-autocomplete>
			</v-col>
			<v-col class="text-center" cols="3">
				<v-autocomplete
					v-model="selectedSubBreed"
					:items="subBreedList"
					label="Sub-Breed"
					placeholder="Start typing to Search"
				></v-autocomplete>
			</v-col>
		</v-row>
		<div v-if="!toggleShowMoreImageOption">
			<v-row>
				<v-col class="contain">
					<v-card max-width="700px" class="detailed-card">
						<v-img height="100%" align="center" :src="image[0]">
						</v-img>
					</v-card>
				</v-col>
				<v-col class="contain">
					<h1 v-if="breedName()">
						Breed:<span class="text-capitalize">
							{{ breedName() }}</span
						>
					</h1>
					<h1 v-if="selectedSubBreed">
						Sub-Breed:<span class="text-capitalize">
							{{ selectedSubBreed }}</span
						>
					</h1>
				</v-col>
			</v-row>
		</div>
		<div v-else>
			<getMoreImages
				:breedName="selectedBreed"
				:subBreedName="selectedSubBreed"
				numberOfImages:20
			/>
		</div>
	</div>
</template>

<script>
import getMoreImages from '@/components/breedSearch/moreImages/getMoreImages.vue';
import { getNRandomImageByBreed } from '../../service/index.js';

export default {
	name: 'searchBreeds',
	components: {
		getMoreImages
	},
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

	created() {
		this.breedImage();
	},
	methods: {
		breedName() {
			if (!this.selectedBreed.length) {
				this.selectedBreed = this.$store.getters.selectedBreedName;
				return this.selectedBreed;
			} else return this.selectedBreed;
		},
		breedImage() {
			if (this.selectedBreed.length) {
				getNRandomImageByBreed(
					this.selectedBreed,
					this.selectedSubBreed,
					1
				).then(response => {
					this.image = response.data.message;
				});
				this.disableShowMoreImages = false;
				return;
			}
			if (this.$store.getters.selectedBreedImage)
				this.disableShowMoreImages = false;
			this.image.push(this.$store.getters.selectedBreedImage);
		},
		listOfAllBreeds() {
			return this.$store.getters.listOfAllBreeds;
		},
		changeSearchOptions() {
			this.toggleSearchOptions = !this.toggleSearchOptions;

			this.filterButtonValue = this.toggleSearchOptions
				? 'Hide Filters'
				: 'More Filters';
		},
		showMoreImages() {
			this.toggleShowMoreImageOption = !this.toggleShowMoreImageOption;
			this.moreImagesButtonValue = this.toggleShowMoreImageOption
				? 'Hide Image'
				: 'More Images';
		},
		breedList() {
			let obj = this.listOfAllBreeds();
			let result = Object.keys(obj);
			return result;
		}
	},
	watch: {
		selectedBreed() {
			var list = this.listOfAllBreeds();
			this.selectedSubBreed = '';
			for (var iterator in list) {
				if (iterator == this.selectedBreed) {
					this.subBreedList = list[iterator];
				}
			}
			this.breedImage();
		},
		selectedSubBreed() {
			this.breedImage();
		}
	}
};
</script>
<style scoped>
.detailed-card {
	margin-bottom: 10px;
	padding: 5px;
}
</style>

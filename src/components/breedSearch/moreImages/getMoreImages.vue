<template>
	<div id="getMoreImages">
		<v-row id="row1">
			<v-col class="text-center" id="col1">
				<h1 id="heading1">
					Breed:<span class="text-capitalize" id="span1"> {{ breedName }}</span>
				</h1>
				<h1 v-if="subBreedName" id="heading2">
					Sub-Breed: <span class="text-capitalize" id="span2"> {{ subBreedName }}</span>
				</h1>
			</v-col>
		</v-row>
		<v-row id="row2">
			<v-col v-for="data in images" :key="`${data}`" cols="auto" md="6" lg="3" id="col2">
				<v-card max-width="300px" class="mx-auto" outlined>
					<v-img
						class="white--text align-end"
						height="150px"
						align="center"
						:src="data"
					>
					</v-img>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import { getNRandomImageByBreed } from '../../../service/index.js';
export default {
	name: 'getMoreImages',
	data() {
		return {
			images: {}
		};
	},
	props: {
		breedName: {
			type: String
		},
		subBreedName: {
			type: String
		},
		numberOfImages: {
			type: Number
		}
	},

	created() {
		this.getImages();
	},
	methods: {
		getImages() {
			if (!this.breedName.length) {
				this.breedName = this.$store.getters.selectedBreedName;
			}
			getNRandomImageByBreed(this.breedName, this.subBreedName, 20).then(
				response => {
					this.images = response.data.message;
				}
			);
		}
	},
	watch: {
		breedName() {
			this.getImages();
		},
		subBreedName() {
			this.getImages();
		},
	}
};
</script>
<style scoped>
</style>
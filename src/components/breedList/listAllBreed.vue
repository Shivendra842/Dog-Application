<template>
	<div id="listAllBreed">
		<div v-if="flag">
			<v-row class="padding">
				<v-col
					v-for="(index, data, i) in breedsToDisplay"
					:key="`${data}`"
					cols="auto"
					md="6"
					lg="3"
					id="col1"
				>
					<v-hover>
						<template v-slot="{ hover }">
							<v-card
								max-width="300px"
								class="mx-auto"
								outlined
								:elevation="hover ? 24 : 1"
							>
								<v-card-actions>
									<v-img
										class="white--text align-end"
										height="150px"
										align="center"
										:src="
											randomDogImage[
												i + adjustImageIndex()
											]
										"
										@click="
											gotoSearchBreedComponent(
												data,
												randomDogImage[
													i + adjustImageIndex()
												]
											)
										"
									>
										<v-expand-transition>
											<div
												v-if="hover"
												class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-2 white--text"
												style="height: 100%;"
											>
												{{ data }}
											</div>
										</v-expand-transition>
									</v-img>
								</v-card-actions>
							</v-card>
						</template>
					</v-hover>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-pagination
						v-model="currentPage"
						:length="paginationLength"
						circle
					></v-pagination>
				</v-col>
			</v-row>
			<v-row align="center" justify="center">
				<v-col cols="2">
					<v-select
						:value="maxBreedsToDisplay"
						:items="items"
						label="Items per page"
						type="number"
						@input="maxBreedsToDisplay = parseInt($event, 10)"
					></v-select>
				</v-col>
			</v-row>
		</div>
		<div v-else>
			<v-row>
				<v-col>
					<v-row
						align="center"
						justify="center"
						class="grey lighten-5"
						style="height: 500px;"
					>
						<v-progress-circular
							:size="70"
							:width="7"
							color="red"
							indeterminate
						>
						</v-progress-circular> <br>
						<h1 class="color--text">	Getting The Page Ready ...</h1>
					</v-row>
				</v-col>
			</v-row>
		</div>
	</div>
</template>
<script>
import {
	listOfAllBreeds,
	getNRandomImageByBreed
} from '../../service/index.js';
import searchBreeds from '@/components/breedSearch/searchBreeds.vue';

export default {
	name: 'listAllBreed',
	data() {
		return {
			breedList: {},
			flag: false,
			randomDogImage: [],
			currentPage: 1,
			maxBreedsToDisplay: 10,
			breedsToDisplay: {},
			paginationLength: 0,
			items: [5, 10, 15, 20],
		};
	},
	components: {
		searchBreeds
	},
	async created() {
		await this.allBreedsList();
	},
	mounted() {
		setTimeout(() => {
			this.getRandomDogImage();
			this.displayNBreeds();
		}, 3000);
	},
	methods: {
		async allBreedsList() {
			listOfAllBreeds().then(response => {
				this.breedList = response.data.message;
				this.$store.commit('setBreedList', this.breedList);
			});
		},
		async getRandomDogImage() {
			for (var index in this.breedList) {
				await getNRandomImageByBreed(index, '', 1).then(response => {
					this.randomDogImage.push(response.data.message[0]);
				});
			}
			this.flag = true;
		},
		gotoSearchBreedComponent(breedName, breedImage) {
			this.$store.commit('setSelectedBreedName', breedName);
			this.$store.commit('setSelectedBreedImage', breedImage);
			this.$router.push('/searchBreeds');
		},
		adjustImageIndex() {
			return (this.currentPage - 1) * this.maxBreedsToDisplay;
		},
		displayNBreeds() {
			let allBreedNames = Object.keys(this.breedList);
			this.paginationLength = Math.ceil(
				allBreedNames.length / this.maxBreedsToDisplay
			);
			let fromBreed = (this.currentPage - 1) * this.maxBreedsToDisplay;
			let upToBreed = this.currentPage * this.maxBreedsToDisplay - 1;
			if (allBreedNames.length < upToBreed) {
				upToBreed = allBreedNames.length - 1;
			}
			let breedToDisplay = {};
			for (let iterator = fromBreed; iterator <= upToBreed; iterator++) {
				breedToDisplay[allBreedNames[iterator]] =
					allBreedNames[iterator];
			}
			this.breedsToDisplay = breedToDisplay;
		},
		getColor(){
			const color=['red','yellow','green','purple']
			console.log(color[Math.floor(Math.random()*5)])
			return color[Math.floor(Math.random()*5)];
		}
	},
	watch: {
		currentPage() {
			this.displayNBreeds();
		},
		maxBreedsToDisplay() {
			this.displayNBreeds();
		}
	},
	computed: {}
};
</script>

<style scoped>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: 0.5;
	position: absolute;
	width: 100%;
}
.padding {
	margin-right: 20px;
	margin-left: 20px;
}
</style>

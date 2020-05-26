<template>
	<div id="header">
		<v-app-bar
			app
			color="#43a047"
			dark
			scroll-threshold="300"
			shrink-on-scroll
			fixed
			srcs
		>
			<v-toolbar-title class="for-large-only">Pets</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn class="ma-2" rounded color="purple" to="/" id="listAllBreedsButton">List All Breeds </v-btn>
			<v-btn class="ma-2" rounded color="purple" to="/searchBreeds"
				id="searchBreedsButton">Search Breeds
			</v-btn>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	name: 'appHeader'
};
</script>

<style  scoped>
</style>
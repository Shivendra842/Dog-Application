<template>
	<div id="Home">
		<listAllBreed />
	</div>
</template>

<script>
import listAllBreed from '@/components/breedList/listAllBreed.vue';
export default {
	name: 'Home',
	components: {
		listAllBreed
	}
};
</script>
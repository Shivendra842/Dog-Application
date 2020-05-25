<template>
	<v-app>
		<appHeader />
		<v-content>
			<keep-alive include="Home">
				<router-view> </router-view>
			</keep-alive>
		</v-content>
		<appFooter />
	</v-app>
</template>

<script>
import appHeader from '@/components/header/header.vue';
import appFooter from '@/components/footer/footer.vue';
export default {
	name: 'StarWarApp',
	components: {
		appHeader,
		appFooter
	}
};
</script>

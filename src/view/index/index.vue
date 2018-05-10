<template>
	<div class="main">
		<swipe></swipe>
		<exercise></exercise>
		<index-Product></index-Product>
		<index-Detail></index-Detail>
	</div>
</template>
<script>
	import swipe from '../../components/awesomeSwipe/swipe.vue'
	import exercise from './components/exercise/exercise.vue'
	import indexProduct from './components/index-product/index-product.vue'
	import indexDetail from './components/index-detail/index-detail.vue'
	export default {
		data() {
			return {
			}
		},
		beforeMount() {
		},
		methods: {

		},
		components: {
			swipe,
			exercise,
			indexProduct,
			indexDetail
		}
	}
</script>
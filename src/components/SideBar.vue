<script setup>
</script>

<template>
	<div>
		<ul class="nav">
			<li><h1><router-link class="links" to="/">Home</router-link></h1></li>
			<li><h1><router-link class="links" to="/notes">Notes</router-link></h1></li>
			<li><h1><router-link class="links" to="/lists">Lists</router-link></h1></li>
		</ul>
	</div>
</template>

<style scoped>
.nav {
	list-style: none;
}

.links {
	color: white;
}
</style>
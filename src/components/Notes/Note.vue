<script setup>
function truncateText(text, maxLength) {
    if (text.length <= maxLength ) return text
    
    return text.split("").slice(0, maxLength - 3).join("") + "..."
}

</script>

<template>
	<div class="note-card">
		<div class="img-cnt">
			<v-img class="note-img" src="../../assets/hero.png">
			</v-img>
		</div>
		
		<h2>Name Note</h2>
		<span class="info">{{ truncateText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid odit quos vero consequuntur fuga pariatur commodi dolorum nostrum a porro, saepe odio. Id provident dolorum tenetur? Ex, molestias ad.', 60) }}</span>
		
		<v-icon-btn icon="mdi-delete-outline" icon-color="red" color="black" class="btn">
			
		</v-icon-btn>
	</div>
</template>

<style scoped>
.note-card {
	width: 330px;
	padding: 20px;
	border-radius: 30px;
	background-color: rgb(0, 0, 0);
}

.note-img {
	width: 200px;
	margin: auto;
}

.img-cnt {
	height: 150px;
	overflow: hidden;
	width: 250px;
	margin: auto;
	margin-bottom: 10px;

}

.btn {
	position: absolute;
	border: 2px solid red;
	margin-top:0px ;
	margin-left: 30px;
}

.info {
	display: inline-block;
	width: 220px;
}
</style>
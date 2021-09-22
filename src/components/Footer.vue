<template>
	<v-card class="footer" flat>
		<div class="footer__container content">
			<span>Copyright © Todos os direitos reservados • PróEnade</span>
		</div>
	</v-card>
</template>

<style lang="scss" scoped>
.content {
	margin: 0 auto;
	width: 70%;
}
.footer {
	background-image: url('../assets/Degradeok.jpg');
	width: 100%;
	height: 50px;
	border-top: 1px solid #0082ff !important;
	border-radius: 0 !important;
	&__container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0;
		max-width: 970px;
		span {
			color: #ff5a00;
		}
	}
}
</style>

<template>
	<v-card height="80%">
		<Header />
		<div class="home">
			<v-card height="500px" width="51%" flat class="home__card">
				<h2>
					Preencha o campo abaixo e clique em cadastrar para incluir um novo
					curso.
				</h2>

				<v-col cols="12" sm="10">
					<v-text-field
						type="text"
						label="Inclua o nome do curso"
						class="home__input"
						v-model="description"
						outlined
						hide-details
					/>
				</v-col>
				<div class="d-flex button">
					<button :loading="loading" @click="cadastrarCurso" class="home__btn">
						Cadastrar
					</button>

					<button :loading="loading" @click="back" class="home__back">
						Voltar
					</button>
				</div>
			</v-card>
		</div>
	</v-card>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			description: '',
		}
	},
	components: {
		Header,
	},
	computed: {
		...mapGetters({
			loading: 'loading',
			getSnackbar: 'snackbar',
			snackbarMessage: 'snackbarMessage',
		}),
	},
	methods: {
		async cadastrarCurso(e) {
			e.preventDefault()
			if (this.description === '') {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Inclua um curso',
				})
			} else {
				const { data } = await axios.post('http://localhost:3000/cursos', {
					description: this.description.toUpperCase(),
				})
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Curso cadastrado com sucesso !',
				})
			}
			this.description = ''
			this.pageHome()
		},
		pageHome() {
			this.$router.push({ name: 'Home' })
		},
		back() {
			this.$router.push('/home')
		},
	},
}
</script>

<style lang="scss" scoped>
.content {
	margin: 0 auto;
	width: 70%;
}

.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url('../assets/Degradeok.jpg');
	height: 100%;
	width: 100%;
	padding-top: 100px;
	&__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 50px;
	}
	h2 {
		color: #0082ff;
		margin: 10px auto 60px;
	}
	&__input {
		max-width: 800px;
		margin: 0 auto;
	}
	&__btn {
		margin-right: 10px;
		width: 130px;
		height: 40px;
		border: 0;
		border-radius: 10px;
		background: #003fff;
		font-weight: 500;
		color: #fff;
		cursor: pointer;
		outline: 0;
		transition: 800ms;
		&:hover {
			background: #0082ff;
			color: #fff;
		}
	}

	&__back {
		width: 120px;
		height: 40px;
		// padding: 10px;
		// margin-left: 10px;
		border: 0;
		border-radius: 10px;
		background: #ff5a00;
		font-weight: 500;
		color: #fff;
		cursor: pointer;
		outline: 0;
		transition: 800ms;
		&:hover {
			background: #fff;
			color: #ff5a00;
			border: 1px solid #ff5a00;
		}
	}
}

strong {
	color: #0082ff;
}
.button{
	margin-top: -200px;
}
</style>

<template>
	<v-card height="60%">
		<Header />
		<div class="home">
			<h2>
				Preencha o campo abaixo e clique em cadastrar para incluir uma nova disciplina.
			</h2>
			<v-col cols="7">
				<v-text-field
					type="text"
					label="Inclua o nome da disciplina"
					class="home__form__input"
					v-model="description"
					solo
					hide-details
					background-color="#fff"
				/>
			</v-col>
			<div class="d-flex">
				<button :loading="loading" @click="cadastrarDisciplina" class="home__btn">
					Cadastrar
				</button>

				<button :loading="loading" @click="back" class="home__back">
					Voltar
				</button>
			</div>
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
		async cadastrarDisciplina(e) {
			e.preventDefault()
			if (this.description === '') {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Inclua uma disciplina',
				})
			} else {
				const { data } = await axios.post('http://localhost:3000/disciplinas', {
					description: this.description.toUpperCase(),
				})
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Disciplina cadastrada com sucesso !',
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
	h2 {
		color: #fff;
		margin: 10px auto 60px;
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
</style>

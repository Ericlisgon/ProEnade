<template>
	<v-card height="100%">
		<Header />
		<div class="home content">
			<!-- <v-card>Filtros</v-card> -->
			<v-card class="mx-auto home__list">
				<v-card-text>
					<div>Word of the Day</div>
					<p class="text-h4 text--primary">
						el·ee·mos·y·nar·y
					</p>
					<p>adjective</p>
					<div class="text--primary">
						relating to or dependent on charity; charitable.<br />
						"an eleemosynary educational institution."
					</div>
				</v-card-text>
				<v-card-actions>
					<v-btn text color="teal accent-4" @click="reveal = true">
						Learn More
					</v-btn>
				</v-card-actions>
			</v-card>
		</div>
	</v-card>
</template>
<script>
import axios from 'axios'
import Modal from '@/components/Modal'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
export default {
	data() {
		return {
			curso: '',
			disciplina: '',
			ano: '',
			questao: '',
			alternativaA: '',
			alternativaB: '',
			alternativaC: '',
			alternativaD: '',
			alternativaE: '',
			alternativaCorreta: '',
			dificuldade: '',
			palavraChave1: '',
			palavraChave2: '',
			palavraChave3: '',
			modal: false,
			modalEditar: false,
			radios: [
				{ label: 'Fácil', value: 'F' },
				{ label: 'Médio', value: 'M' },
				{ label: 'Difícil', value: 'D' },
			],
			// provas: [],
			// editar: {
			// 	id: '',
			// 	curso: '',
			// 	disciplina: '',
			// 	ano: '',
			// 	questao: '',
			// 	alternativaA: '',
			// 	alternativaB: '',
			// 	alternativaC: '',
			// 	alternativaD: '',
			// 	alternativaE: '',
			// 	alternativaCorreta: '',
			// 	dificuldade: '',
			// 	palavraChave1: '',
			// 	palavraChave2: '',
			// 	palavraChave3: '',
			// },
		}
	},
	components: {
		Modal,
		Header,
		// Footer,
	},
	mounted() {
		// this.carregarAlunos()
	},
	methods: {
		logout() {
			this.$router.push({ name: 'Login' })
		},
		async cadastrarProva(e) {
			e.preventDefault()
			if (
				this.curso === '' ||
				this.disciplina === '' ||
				this.ano === '' ||
				this.questao === '' ||
				this.alternativaA === '' ||
				this.alternativaB === '' ||
				this.alternativaC === '' ||
				this.alternativaD === '' ||
				this.alternativaE === '' ||
				this.alternativaCorreta === '' ||
				this.dificuldade === '' ||
				this.palavraChave1 === '' ||
				this.palavraChave2 === '' ||
				this.palavraChave3 === ''
			) {
				alert('Preencha todos os campos')
			} else {
				const { data } = await axios.post('http://localhost:3000/provas', {
					curso: this.curso,
					disciplina: this.disciplina,
					ano: this.ano,
					questao: this.questao,
					alternativaA: this.alternativaA,
					alternativaB: this.alternativaB,
					alternativaC: this.alternativaC,
					alternativaD: this.alternativaD,
					alternativaE: this.alternativaE,
					alternativaCorreta: this.alternativaCorreta,
					dificuldade: this.dificuldade,
					palavraChave1: this.palavraChave1,
					palavraChave2: this.palavraChave2,
					palavraChave3: this.palavraChave3,
				})
			}
			// this.carregarAlunos()
			this.curso = ''
			this.disciplina = ''
			this.ano = ''
			this.questao = ''
			this.alternativaA = ''
			this.alternativaB = ''
			this.alternativaC = ''
			this.alternativaD = ''
			this.alternativaE = ''
			this.alternativaCorreta = ''
			this.dificuldade = ''
			this.palavraChave1 = ''
			this.palavraChave2 = ''
			this.palavraChave3 = ''
		},
		// async carregarAlunos() {
		// 	const { data } = await axios.get('http://localhost:3000/Provas')
		// 	this.alunos = data
		// },
		// async deletarAluno(e, id) {
		// 	e.preventDefault()

		// 	const { data } = await axios.delete(`http://localhost:3000/alunos/${id}`)

		// 	this.carregarAlunos()
		// },

		// carregarInfo(e, aluno) {
		// 	e.preventDefault()
		// 	this.editar.id = aluno.id
		// 	this.editar.nome = aluno.nome
		// 	this.editar.email = aluno.email
		// 	this.editar.ra = aluno.ra
		// 	this.editar.turma = aluno.turma
		// },
		// async editarAluno(e) {
		// 	e.preventDefault()
		// 	const { data } = await axios.put(
		// 		`http://localhost:3000/alunos/${this.editar.id}`,
		// 		{
		// 			nome: this.editar.nome,
		// 			email: this.editar.email,
		// 			ra: this.editar.ra,
		// 			turma: this.editar.turma,
		// 		}
		// 	)
		// 	this.modalEditar = false
		// 	this.carregarAlunos()
		// },
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
	&__title {
		color: #fff;
		margin: 10px auto 40px;
	}
	&__list {
		width: 50%;
		height: auto;
	}
	// &__table {
	// 	background: #303030;
	// 	border-radius: 5px;
	// 	border-collapse: collapse;
	// 	thead {
	// 		tr {
	// 			th {
	// 				padding: 10px 0;
	// 				color: #fff;
	// 				border-bottom: 1px solid #d0d0d6;
	// 			}
	// 		}
	// 	}
	// 	tbody {
	// 		tr {
	// 			td {
	// 				padding: 10px 0;
	// 				color: #626262;
	// 				text-align: center;
	// 				a {
	// 					margin: 0 10px;
	// 					cursor: pointer;
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	.modal {
		display: flex;
		flex-direction: column;
		padding: 15px;
		width: 100%;
		height: auto;
		// background: black;
		&__header {
			display: flex;
			justify-content: space-between;
			padding: 10px;
			&__title {
				color: #0082ff;
			}
		}
		&__form {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 10px;
			&__title {
				color: #fff;
				margin: 20px 0;
				text-align: initial;
			}
			&__coluna {
				width: 100%;
				display: flex;
				flex-direction: column;
			}
			&__btn {
				width: 116px;
				padding: 10px;
				border: 0;
				border-radius: 5px;
				background: #003fff;
				font-weight: 500;
				color: #fff;
				cursor: pointer;
				outline: 0;
				transition: 800ms;
				&:hover {
					background: #0082ff;
				}
			}
			&__btn-voltar {
				border: 1px solid #fff;
				border-radius: 5px;
				outline: 0;
				background: transparent;
				color: #fff;
				padding: 10px;
				width: 116px;
				margin-right: 10px;
				transition: 800ms;
				cursor: pointer;
				&:hover {
					background: #30438f;
					color: #fff;
				}
			}
		}
	}
}
strong {
	color: #003fff;
}
</style>

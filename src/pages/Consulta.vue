<template>
	<v-card flat>
		<Header />
		<!-- <div class="header"> -->
		<!-- </div> -->
		<div class="home content">
			<span>Preencha os filtros para pesquisa</span>
			<div class="home__form">
				<v-card class="mb-5 pl-5" height="60">
					<v-row>
						<div class="d-flex align-center mr-5">
							<strong class="mx-4">Tipo de questão:</strong>
							<v-radio-group row v-model="tipoQuestao">
								<v-radio
									v-for="(radio, index) in radiosQuestoes"
									:key="index"
									:label="radio.label"
									:value="radio.value"
									color="#757575"
								/>
							</v-radio-group>
						</div>
						<div class="d-flex align-center">
							<strong class="mx-4">Dificuldade:</strong>
							<v-radio-group row v-model="dificuldade">
								<v-radio
									v-for="(radio, index) in radios"
									:key="index"
									:label="radio.label"
									:value="radio.value"
									color="#757575"
								/>
							</v-radio-group>
						</div>
					</v-row>
				</v-card>
				<v-row>
					<v-col md="12" lg="6">
						<v-autocomplete
							:items="itemsCurso"
							label="Cursos"
							class="home__form__input"
							v-model="curso"
							solo
							hide-details
						/>
					</v-col>
					<v-col md="12" lg="6">
						<v-text-field
							type="text"
							label="Ano"
							class="home__form__input"
							v-model="ano"
							solo
							maxLength="4"
							hide-details
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="12" lg="6">
						<v-autocomplete
							:items="itemsDisciplina"
							label="Disciplina 1"
							class="home__form__input"
							v-model="disciplina1"
							solo
							hide-details
						/>
					</v-col>
					<v-col md="12" lg="6">
						<v-autocomplete
							:items="itemsDisciplina"
							label="Disciplinas 2"
							class="home__form__input"
							v-model="disciplina2"
							solo
							hide-details
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="12" lg="6">
						<v-autocomplete
							:items="itemsDisciplina"
							label="Disciplina 3"
							class="home__form__input"
							v-model="disciplina3"
							solo
							hide-details
						/>
					</v-col>
					<v-col md="12" lg="6">
						<v-autocomplete
							:items="itemsDisciplina"
							label="Disciplina 4"
							class="home__form__input"
							v-model="disciplina4"
							solo
							hide-details
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="12" lg="12">
						<v-text-field
							type="text"
							label="Digite frase ou palavra-chave"
							class="home__form__input"
							v-model="palavraChave"
							solo
							hide-details
						/>
					</v-col>
				</v-row>
			</div>
			<span>Lista de questões</span>
			<v-card class="mx-auto home__list">
				<v-card-text class="home__list__text">
					<div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Curso:</strong
							>
							<span class="home__list__text__description__subtitle">ADS</span>
						</div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Disciplina:</strong
							>
							<span class="home__list__text__description__subtitle"
								>Engenharia de software</span
							>
						</div>

						<div class="home__list__text__description">
							<strong class="home__list__text__description__title">Ano:</strong>
							<span class="home__list__text__description__subtitle">2008</span>
						</div>
					</div>
					<div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Tipo:</strong
							>
							<span class="home__list__text__description__subtitle"
								>Múltipla escolha</span
							>
						</div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Dificuldade:</strong
							>
							<span class="home__list__text__description__subtitle">Médio</span>
						</div>
					</div>
				</v-card-text>
				<v-card-text class="home__list__text2">
					<strong class="home__list__text2__question">Questão:</strong>
					<p class="home__list__text2__paragrafo">
						Em uma pesquisa de satisfação com notas de 0 a 10, sendo 0 muito
						insatisfeito e 10 muito satisfeito, uma empresa construiu uma
						tabela, mostrada a seguir, com o resumo das notas atribuídas pelos
						seus clientes aos serviços recebidos. Considerando essa situação e
						as informações apresentadas, avalie as afirmações a seguir. I. A
						média das notas dos clientes é igual a 6,0. II. A mediana das notas
						dos clientes é igual a 6,0. III. O desvio padrão populacional é
						menor do que 3,0. IV. O conjunto de dados é amodal. V. Um cliente
						que atribuiu nota 3,0 encontra-se no 1º quartil. É correto apenas o
						que se afirma em",
					</p>

					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">A)</strong>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English.
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">B)</strong>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English.
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">C)</strong>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English.
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">D)</strong>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English.
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">E)</strong>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English.
					</p>

					<p class="home__list__text2__correta">
						<strong class="home__list__text2__alternativa mb-3"
							>Alternativa correta:</strong
						>
						E
					</p>
				</v-card-text>
			</v-card>
			<v-card class="mx-auto home__list">
				<v-card-text class="home__list__text">
					<div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Curso:</strong
							>
							<span class="home__list__text__description__subtitle">ADS</span>
						</div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Disciplina:</strong
							>
							<span class="home__list__text__description__subtitle"
								>Engenharia de software</span
							>
						</div>

						<div class="home__list__text__description">
							<strong class="home__list__text__description__title">Ano:</strong>
							<span class="home__list__text__description__subtitle">2008</span>
						</div>
					</div>
					<div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Tipo:</strong
							>
							<span class="home__list__text__description__subtitle"
								>Múltipla escolha</span
							>
						</div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Dificuldade:</strong
							>
							<span class="home__list__text__description__subtitle">Médio</span>
						</div>
					</div>
				</v-card-text>
				<v-card-text class="home__list__text2">
					<strong class="home__list__text2__question">Questão:</strong>
					<p class="home__list__text2__paragrafo">
						Em uma pesquisa de satisfação com notas de 0 a 10, sendo 0 muito
						insatisfeito e 10 muito satisfeito, uma empresa construiu uma
						tabela, mostrada a seguir, com o resumo das notas atribuídas pelos
						seus clientes aos serviços recebidos. Considerando essa situação e
						as informações apresentadas, avalie as afirmações a seguir. I. A
						média das notas dos clientes é igual a 6,0. II. A mediana das notas
						dos clientes é igual a 6,0. III. O desvio padrão populacional é
						menor do que 3,0. IV. O conjunto de dados é amodal. V. Um cliente
						que atribuiu nota 3,0 encontra-se no 1º quartil. É correto apenas o
						que se afirma em",
					</p>

					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">A)</strong>
						It is a long established fact that a reader will be distracted by
						the readable
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">B)</strong>
						It is a long established fact that a reader will be distracted by
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">C)</strong>
						It is a long established fact that
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">D)</strong>
						It is a long established fact that a reader will be distracted by
						the readable
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">E)</strong>
						It is a long established fact that a reader will
					</p>

					<p class="home__list__text2__correta">
						<strong class="home__list__text2__alternativa mb-3"
							>Alternativa correta:</strong
						>
						D
					</p>
				</v-card-text>
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
			tipoQuestao: 'M',
			curso: '',
			disciplina1: '',
			disciplina2: '',
			disciplina3: '',
			disciplina4: '',
			ano: '',
			questao: '',
			alternativaA: '',
			alternativaB: '',
			alternativaC: '',
			alternativaD: '',
			alternativaE: '',
			alternativaCorreta: '',
			dificuldade: 'F',
			palavraChave: '',
			// palavraChave2: '',
			// palavraChave3: '',
			modal: false,
			modalEditar: false,
			radios: [
				{ label: 'Fácil', value: 'F' },
				{ label: 'Médio', value: 'M' },
				{ label: 'Difícil', value: 'D' },
			],
			radiosQuestoes: [
				{ label: 'Múltipla escolha', value: 'M' },
				{ label: 'Discursiva', value: 'D' },
			],
			itemsCurso: ['ADS', 'Ciências da Computação', 'Engenharia da computação'],
			itemsDisciplina: ['Engenharia de software'],

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
		this.carregarAlunos()
		this.radios.label = 'red'
	},

	methods: {
		// 	logout() {
		// 		this.$router.push({ name: 'Login' })
		// 	},
		// 	async cadastrarProva(e) {
		// 		e.preventDefault()
		// 		if (
		// 			this.curso === '' ||
		// 			this.disciplina === '' ||
		// 			this.ano === '' ||
		// 			this.questao === '' ||
		// 			this.alternativaA === '' ||
		// 			this.alternativaB === '' ||
		// 			this.alternativaC === '' ||
		// 			this.alternativaD === '' ||
		// 			this.alternativaE === '' ||
		// 			this.alternativaCorreta === '' ||
		// 			this.dificuldade === '' ||
		// 			this.palavraChave1 === '' ||
		// 			this.palavraChave2 === '' ||
		// 			this.palavraChave3 === ''
		// 		) {
		// 			alert('Preencha todos os campos')
		// 		} else {
		// 			const { data } = await axios.post('http://localhost:3000/provas', {
		// 				curso: this.curso,
		// 				disciplina: this.disciplina,
		// 				ano: this.ano,
		// 				questao: this.questao,
		// 				alternativaA: this.alternativaA,
		// 				alternativaB: this.alternativaB,
		// 				alternativaC: this.alternativaC,
		// 				alternativaD: this.alternativaD,
		// 				alternativaE: this.alternativaE,
		// 				alternativaCorreta: this.alternativaCorreta,
		// 				dificuldade: this.dificuldade,
		// 				palavraChave1: this.palavraChave1,
		// 				palavraChave2: this.palavraChave2,
		// 				palavraChave3: this.palavraChave3,
		// 			})
		// 		}
		// 		// this.carregarAlunos()
		// 		this.curso = ''
		// 		this.disciplina = ''
		// 		this.ano = ''
		// 		this.questao = ''
		// 		this.alternativaA = ''
		// 		this.alternativaB = ''
		// 		this.alternativaC = ''
		// 		this.alternativaD = ''
		// 		this.alternativaE = ''
		// 		this.alternativaCorreta = ''
		// 		this.dificuldade = ''
		// 		this.palavraChave1 = ''
		// 		this.palavraChave2 = ''
		// 		this.palavraChave3 = ''
		// 	},
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
span {
	margin: 40px 0;
	font-size: 30px;
	font-weight: 600;
	color: #fff;
}
.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url('../assets/Degradeok.jpg');
	background-repeat: repeat-y;
	height: auto;
	width: 100%;
	overflow-y: auto;
	&__form {
		width: 70%;
		max-width: 950px;
		margin-bottom: 20px;
		strong {
			color: #757575;
		}
		&__input {
			background: #fff !important;
		}
	}
	&__title {
		color: #fff;
		margin: 10px auto 40px;
	}
	&__list {
		width: 70%;
		height: auto;
		max-width: 950px;
		margin-bottom: 50px;
		padding: 10px;
		&__text {
			display: flex;
			justify-content: space-between;
			align-items: center;
			&__description {
				margin-bottom: 10px;
				&__title {
					font-size: 16px;
					color: black;
					margin-right: 10px;
				}
				&__subtitle {
					font-size: 16px;

					color: #757575;
				}
			}
		}
		&__text2 {
			display: flex;
			flex-direction: column;
			&__question {
				font-size: 16px;
				color: black;
			}
			&__paragrafo {
				font-size: 15px;
				margin-top: 10px;
				color: #757575;
			}
			&__alternativa {
				font-size: 14px;
				color: black;
			}
			&__correta {
				color: red;
				font-size: 15px;
				font-weight: 600;
			}
		}
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

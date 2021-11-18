<template>
	<v-card height="90%">
		<Header />
		<div class="home">
			<div class="home__cards">
				<div>
					<v-card
						class="home__cards__card mr-10"
						outlined
						@click="modal = true"
					>
						<v-icon color="#fff" size="40">
							description
						</v-icon>
						<h1>Cadastrar</h1>
						<p>
							Clique para  cadastro de questões.
						</p>
					</v-card>
					<v-card
						class="home__cards__card mr-10"
						outlined
						@click="pageCursos"
					>
						<v-icon color="#fff" size="40">
							description
						</v-icon>
						<h1>Cadastrar Curso</h1>
						<p>
							Clique para cadastro de cursos.
						</p>
					</v-card>
				</div>
				<div>
					<v-card class="home__cards__card" outlined @click="pageConsultar">
						<v-icon color="#fff" size="40">
							plagiarism
						</v-icon>
						<h1>Consultar</h1>
						<p>
							Clique para consultar, editar ou excluir
							questões.
						</p>
					</v-card>
					
					<v-card class="home__cards__card" outlined @click="pageDisciplinas">
						<v-icon color="#fff" size="40">
							plagiarism
						</v-icon>
						<h1>Cadstrar Disciplina</h1>
						<p>
							Clique para cadastro de disciplinas.
						</p>
					</v-card>
				</div>
			</div>
			<Modal v-if="modal">
				<v-card class="modal">
					<div class="modal__header">
						<h3 class="modal__header__title">Cadastrar nova questão</h3>
						<a @click="modal = false" name="section1" href="#">
							<img src="@/assets/Vector.svg" alt="" />
						</a>
					</div>
					<v-form class="modal__form">
						<v-row class="d-flex justify-space-between align-center">
							<div class="d-flex align-center">
								<strong class="mx-4">Tipo de questão:</strong>
								<v-radio-group row v-model="tipoQuestao">
									<v-radio
										v-for="(radio, index) in radiosQuestoes"
										:key="index"
										:label="radio.label"
										:value="radio.value"
									/>
								</v-radio-group>
							</div>
							<div class="d-flex align-center justify-end ">
								<strong>N° Questão</strong>
								<v-col md="12" lg="4">
									<v-text-field
										class="modal__form__input"
										v-model="codeQuestion"
										outlined
										hide-details
										maxLength="2"
									/>
								</v-col>
							</div>
						</v-row>
						<v-row>
							<v-col md="12" lg="6">
								<v-autocomplete
									:items="getCursos"
									item-text="description"
									item-value="id"
									return-object
									v-model="curso"
									outlined
									label="Curso"
									clearable
									hide-details
								/>
								<!-- <v-text-field
									type="text"
									label="Cursos"
									class="modal__form__input"
									v-model="curso"
									outlined
									hide-details
								/> -->
							</v-col>
							<v-col md="12" lg="6">
								<v-text-field
									type="text"
									label="Ano"
									class="modal__form__input"
									v-model="ano"
									outlined
									maxLength="4"
									hide-details
								/>
							</v-col>
						</v-row>
						<v-row>
							<v-col md="12" lg="6">
								<v-autocomplete
									:items="getDisciplinas"
									item-text="description"
									item-value="id"
									return-object
									v-model="disciplina1"
									outlined
									label="Disciplina 1"
									clearable
									hide-details
								/>
								<!-- <v-text-field
									type="text"
									label="Disciplina 1"
									class="modal__form__input"
									v-model="disciplina1"
									outlined
									hide-details
								/> -->
							</v-col>
							<v-col md="12" lg="6">
								<v-autocomplete
									:items="getDisciplinas"
									item-text="description"
									item-value="id"
									return-object
									v-model="disciplina2"
									outlined
									label="Disciplina 2"
									clearable
									hide-details
								/>
								<!-- <v-text-field
									type="text"
									label="Disciplinas 2"
									class="modal__form__input"
									v-model="disciplina2"
									outlined
									hide-details
								/> -->
							</v-col>
						</v-row>
						<v-row>
							<v-col md="12" lg="6">
								<v-autocomplete
									:items="getDisciplinas"
									item-text="description"
									item-value="id"
									return-object
									v-model="disciplina3"
									outlined
									label="Disciplina 3"
									clearable
								/>
								<!-- <v-text-field
									type="text"
									label="Disciplina 3"
									class="modal__form__input"
									v-model="disciplina3"
									outlined
								/> -->
							</v-col>
							<v-col md="12" lg="6">
								<v-autocomplete
									:items="getDisciplinas"
									item-text="description"
									item-value="id"
									return-object
									v-model="disciplina4"
									outlined
									label="Disciplina 4"
									clearable
								/>
								<!-- <v-text-field
									type="text"
									label="Disciplina 4"
									class="modal__form__input"
									v-model="disciplina4"
									outlined
								/> -->
							</v-col>
						</v-row>
						<div class="modal__form__coluna">
							<v-row>
								<v-col md="14" lg="14">
									<v-textarea
										type="text"
										label="Insira questão"
										class="modal__form__text"
										v-model="questao"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row v-if="tipoQuestao === 'MultiplaEscolha'">
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa A"
										class="modal__form__text"
										v-model="alternativaA"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row v-if="tipoQuestao === 'MultiplaEscolha'">
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa B"
										class="modal__form__text"
										v-model="alternativaB"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row v-if="tipoQuestao === 'MultiplaEscolha'">
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa C"
										class="modal__form__text"
										v-model="alternativaC"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row v-if="tipoQuestao === 'MultiplaEscolha'">
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa D"
										class="modal__form__text"
										v-model="alternativaD"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row v-if="tipoQuestao === 'MultiplaEscolha'">
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa E"
										class="modal__form__text"
										v-model="alternativaE"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row>
								<v-col md="12" lg="4" v-if="tipoQuestao === 'MultiplaEscolha'">
									<v-text-field
										type="text"
										label="Alternativa Correta"
										class="modal__form__input"
										v-model="alternativaCorreta"
										outlined
										hide-details
									/>
								</v-col>
								<div class="d-flex align-center">
									<strong class="mx-4">Dificuldade:</strong>
									<v-radio-group row v-model="dificuldade">
										<v-radio
											v-for="(radio, index) in radios"
											:key="index"
											:label="radio.label"
											:value="radio.value"
										/>
									</v-radio-group>
								</div>
							</v-row>
							<v-row>
								<v-col md="12" lg="12">
									<v-text-field
										type="text"
										label="Digite frase ou palavra-chave"
										class="modal__form__input"
										v-model="palavraChave"
										outlined
									/>
								</v-col>
							</v-row>
						</div>
						<v-row class="d-flex justify-space-between mb-6">
							<v-btn @click="cadastrarProva" class="modal__form__btn">
								Enviar
							</v-btn>
							<a class="modal__form__link mr-4" href="#section1">
								<v-tooltip color="#FF5A00" top>
									<template v-slot:activator="{ on, attrs }">
										<v-btn icon color="primary" dark v-bind="attrs" v-on="on">
											<v-icon color="#FF5A00">arrow_upward</v-icon>
										</v-btn>
									</template>
									<span>Voltar ao topo</span>
								</v-tooltip>
							</a>
						</v-row>
					</v-form>
				</v-card>
			</Modal>
		</div>
	</v-card>
</template>

<script>
import axios from 'axios'
import Modal from '@/components/Modal'
import Header from '@/components/Header'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			tipoQuestao: 'MultiplaEscolha',
			codeQuestion: '',
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
			dificuldade: '',
			palavraChave: '',
			dataAtual: '',
			modal: false,
			modalEditar: false,
			radios: [
				{ label: 'Fácil', value: 'Facil' },
				{ label: 'Médio', value: 'Medio' },
				{ label: 'Difícil', value: 'Dificil' },
			],
			radiosQuestoes: [
				{ label: 'Múltipla Escolha', value: 'MultiplaEscolha' },
				{ label: 'Discursiva', value: 'Discursiva' },
			],
			provas: [],
		}
	},
	components: {
		Modal,
		Header,
	},
	computed: {
		...mapGetters({
			getFilter: 'example/filter',
			getCursos: 'example/cursos',
			getDisciplinas: 'example/disciplinas',
			loading: 'loading',
			getSnackbar: 'snackbar',
			snackbarMessage: 'snackbarMessage',
		}),
	},
	mounted() {
		this.$store.dispatch('example/getCursos')
		this.$store.dispatch('example/getDisciplinas')
		var data = new Date()
		var dia = String(data.getDate()).padStart(2, '0')
		var mes = String(data.getMonth() + 1).padStart(2, '0')
		var ano = data.getFullYear()
		this.dataAtual = dia + '/' + mes + '/' + ano
		console.log(this.dataAtual)
	},
	methods: {
		
		async cadastrarProva(e) {
			e.preventDefault()
			if (this.curso === '') {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Inclua um curso',
				})
			} else if (this.disciplina === '') {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Inclua uma disciplina',
				})
			} else if (this.codeQuestion === '') {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Inclua o número da questão',
				})
			} else if (this.ano === '') {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Inclua o ano',
				})
			} else if (this.questao === '') {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Inclua uma questão',
				})
			} else if (this.dificuldade === '') {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Selecione a dificuldade',
				})
			} else {
				const { data } = await axios.post('http://localhost:3000/provas', {
					tipoQuestao: this.tipoQuestao,
					codeQuestion: this.codeQuestion,
					curso: this.curso.description,
					disciplina1: this.disciplina1.description,
					disciplina2: this.disciplina2.description,
					disciplina3: this.disciplina3.description,
					disciplina4: this.disciplina4.description,
					ano: this.ano,
					questao: this.questao,
					alternativaA: this.alternativaA,
					alternativaB: this.alternativaB,
					alternativaC: this.alternativaC,
					alternativaD: this.alternativaD,
					alternativaE: this.alternativaE,
					alternativaCorreta: this.alternativaCorreta.toUpperCase(),
					dificuldade: this.dificuldade,
					palavraChave: this.palavraChave.toUpperCase(),
					dataAtual: this.dataAtual,
				})
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Questão cadastrada com sucesso!',
				})
			}
			this.curso = ''
			this.codeQuestion = ''
			this.disciplina1 = ''
			this.disciplina2 = ''
			this.disciplina3 = ''
			this.disciplina4 = ''
			this.ano = ''
			this.questao = ''
			this.alternativaA = ''
			this.alternativaB = ''
			this.alternativaC = ''
			this.alternativaD = ''
			this.alternativaE = ''
			this.alternativaCorreta = ''
			this.dificuldade = ''
			this.palavraChave = ''
		},
		pageConsultar() {
			this.$router.push({ name: 'Consulta' })
		},
		pageCursos() {
			this.$router.push({ name: 'Cursos' })
		},
		pageDisciplinas() {
			this.$router.push({ name: 'Disciplinas' })
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
	&__cards {
		display: flex;
		justify-content: center;
		// max-width: 1500px;
		&__card {
			width: 400px !important;
			height: 200px !important;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 27px;
			background: #003fff !important;
			border-radius: 10px !important;
			margin-top: 8%;
			h1 {
				text-align: center;
				margin-top: 10px;
				color: #fff;
				font-weight: 500;
			}
			p {
				text-align: center;
				margin-top: 10px;
				color: #fff;
				font-weight: 400;
			}
		}
	}
	&__title {
		color: #fff;
		margin: 10px auto 40px;
	}
	&__table {
		background: #303030;
		border-radius: 5px;
		border-collapse: collapse;
		thead {
			tr {
				th {
					padding: 10px 0;
					color: #fff;
					border-bottom: 1px solid #d0d0d6;
				}
			}
		}
		tbody {
			tr {
				td {
					padding: 10px 0;
					color: #626262;
					text-align: center;
					a {
						margin: 0 10px;
						cursor: pointer;
					}
				}
			}
		}
	}
	.modal {
		display: flex;
		flex-direction: column;
		padding: 10px;
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
			strong {
				color: #0082ff;
			}
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
				margin-left: 10px;
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
			&__link {
				text-decoration: none;
			}
		}
	}
}
strong {
	color: #0082ff;
}
</style>

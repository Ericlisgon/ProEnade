<template>
	<v-card height="100%">
		<Header />
		<div class="home">
			<div class="home__cards">
				<v-card class="home__cards__card mr-15" outlined @click="modal = true">
					<v-icon color="#fff" size="50">
						description
					</v-icon>
					<h1>Cadastrar</h1>
					<p>
						Click para acessar a área de cadastro de curso, disciplina ou
						questões
					</p>
				</v-card>
				<v-card class="home__cards__card" outlined @click="pageConsultar">
					<v-icon color="#fff" size="50">
						plagiarism
					</v-icon>
					<h1>Consultar</h1>
					<p>
						Click para consultar, editar ou excluir cursos, disciplinas ou
						questões
					</p>
				</v-card>
			</div>
			<!-- <table class="home__table content ">
				
			<thead>
				<tr>
					<th>Nome</th>
					<th>Email</th>
					<th>RA</th>
					<th>Turma</th>
					<th>Ações</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="aluno in alunos" :key="aluno.id">
					<td>{{ aluno.nome }}</td>
					<td>
						{{ aluno.email }}
					</td>
					<td>
						{{ aluno.ra }}
					</td>
					<td>
						{{ aluno.turma }}
					</td>
					<td>
						<a
							@click=";(modalEditar = true), carregarInfo($event, aluno)"
							href="#"
						>
							<img src="@/assets/editar-imagem.svg" />
						</a>
						<a @click="deletarAluno($event, aluno.id)" href="#">
							<img src="@/assets/lixeira.svg" />
						</a>
					</td>
				</tr>
			</tbody>
		</table> -->
			<!-- <a @click=";(modalEditar = true), carregarInfo($event, aluno)" href="#">
				<img src="@/assets/editar-imagem.svg" />
			</a>
			<a @click="deletarAluno($event, aluno.id)" href="#">
				<img src="@/assets/lixeira.svg" />
			</a> -->

			<div class="home__buttons content">
				<!-- <button @click="logout" class="home__buttons__voltar">Voltar</button> -->
				<!-- <button @click="modal = true" class="home__buttons__adicionar">
					Novo aluno
				</button> -->
			</div>
			<Modal v-if="modal">
				<v-card class="modal">
					<div class="modal__header">
						<h3 class="modal__header__title">Cadastrar nova questão</h3>
						<a @click="modal = false" href="#">
							<img src="@/assets/Vector.svg" alt="" />
						</a>
					</div>
					<v-form class="modal__form">
						<v-row>
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
						</v-row>
						<v-row>
							<v-col md="12" lg="6">
								<!-- <v-autocomplete
									:items="itemsCurso"
									label="Cursos"
									class="modal__form__input"
									v-model="curso"
									outlined
									hide-details
								/> -->
								<v-text-field
									type="text"
									label="Cursos"
									class="modal__form__input"
									v-model="curso"
									outlined
									hide-details
								/>
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
								<!-- <v-autocomplete
									:items="itemsDisciplina"
									label="Disciplina 1"
									class="modal__form__input"
									v-model="disciplina1"
									outlined
									hide-details
								/> -->
								<v-text-field
									type="text"
									label="Disciplina 1"
									class="modal__form__input"
									v-model="disciplina1"
									outlined
									hide-details
								/>
							</v-col>
							<v-col md="12" lg="6">
								<!-- <v-autocomplete
									:items="itemsDisciplina"
									label="Disciplinas 2"
									class="modal__form__input"
									v-model="disciplina2"
									outlined
									hide-details
								/> -->
								<v-text-field
									type="text"
									label="Disciplinas 2"
									class="modal__form__input"
									v-model="disciplina2"
									outlined
									hide-details
								/>
							</v-col>
						</v-row>
						<v-row>
							<v-col md="12" lg="6">
								<!-- <v-autocomplete
									:items="itemsDisciplina"
									label="Disciplina 3"
									class="modal__form__input"
									v-model="disciplina3"
									outlined
								/> -->
								<v-text-field
									type="text"
									label="Disciplina 3"
									class="modal__form__input"
									v-model="disciplina3"
									outlined
								/>
							</v-col>
							<v-col md="12" lg="6">
								<!-- <v-autocomplete
									:items="itemsDisciplina"
									label="Disciplina 4"
									class="modal__form__input"
									v-model="disciplina4"
									outlined
								/> -->
								<v-text-field
									type="text"
									label="Disciplina 4"
									class="modal__form__input"
									v-model="disciplina4"
									outlined
								/>
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
								<!-- <v-col md="12" lg="4">
									<v-text-field
										type="text"
										label="Palavra chave 2"
										class="modal__form__input"
										v-model="palavraChave2"
										outlined
									/>
								</v-col>

								<v-col md="12" lg="4">
									<v-text-field
										type="text"
										label="Palavra chave 3"
										class="modal__form__input"
										v-model="palavraChave3"
										outlined
									/>
								</v-col> -->
							</v-row>
						</div>
						<!-- <v-text-area
							type="text"
							label="Insira sua prova"
							class="modal__form__text"
							v-model="questao"
							outlined
						/> -->
					</v-form>
					<v-btn @click="cadastrarProva" class="modal__form__btn">
						Enviar
					</v-btn>
				</v-card>
			</Modal>

			<!-- <Modal v-if="modalEditar">
				 <div class="modal">
					<div class="modal__header">
						<h3 class="modal__header__title">Consultar Provas</h3>
						<a href="#" @click="modalEditar = false">
							<img src="@/assets/Vector.svg" />
						</a>
					</div>
					<form @submit="editarAluno" class="modal__form">
						<input
							type="text"
							placeholder="Nome do aluno"
							v-model="editar.nome"
							class="modal__form__input"
						/>
						<input
							type="email"
							placeholder="E-mail do aluno"
							v-model="editar.email"
							class="modal__form__input"
						/>
						<input
							type="text"
							placeholder="RA do aluno"
							v-model="editar.ra"
							class="modal__form__input"
						/>
						<input
							type="text"
							placeholder="Turma do aluno"
							v-model="editar.turma"
							class="modal__form__input"
						/>

						<button
							class="modal__form__btn-voltar"
							@click="modalEditar = false"
						>
							Voltar
						</button>
						<button class="modal__form__btn">Editar</button>
					</form>
				</div> 
			</Modal> -->
		</div>
		<!-- <Footer /> -->
	</v-card>
</template>

<script>
import axios from 'axios'
import Modal from '@/components/Modal'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			tipoQuestao: 'MultiplaEscolha',
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
			// palavraChave2: '',
			// palavraChave3: '',
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
		// Footer,
	},
	computed: {
		...mapGetters({
			getFilter: 'example/filter',
			loading: 'loading',
			getSnackbar: 'snackbar',
			snackbarMessage: 'snackbarMessage',
		}),
	},
	mounted() {
		// this.carregarAlunos()
	},
	methods: {
		pageConsultar() {
			this.$router.push({ name: 'Consulta' })
		},
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
					curso: this.curso.toUpperCase(),
					disciplina1: this.disciplina1.toUpperCase(),
					disciplina2: this.disciplina2.toUpperCase(),
					disciplina3: this.disciplina3.toUpperCase(),
					disciplina4: this.disciplina4.toUpperCase(),
					ano: this.ano,
					questao: this.questao,
					alternativaA: this.alternativaA,
					alternativaB: this.alternativaB,
					alternativaC: this.alternativaC,
					alternativaD: this.alternativaD,
					alternativaE: this.alternativaE,
					alternativaCorreta: this.alternativaCorreta,
					dificuldade: this.dificuldade,
					palavraChave: this.palavraChave.toLowerCase(),
					// palavraChave2: this.palavraChave2,
					// palavraChave3: this.palavraChave3,
				})
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Questão cadastrada com sucesso!',
				})
			}
			// this.carregarAlunos()
			this.curso = ''
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
			// this.palavraChave2 = ''
			// this.palavraChave3 = ''
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
	&__cards {
		display: flex;
		justify-content: center;
		// max-width: 1500px;
		&__card {
			width: 450px !important;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 27px;
			background: #003fff !important;
			border-radius: 10px !important;
			margin-top: 10%;
			h1 {
				text-align: center;
				margin-top: 20px;
				color: #fff;
				font-weight: 500;
			}
			p {
				text-align: center;
				margin-top: 20px;
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
		}
	}
}
strong {
	color: #0082ff;
}
</style>

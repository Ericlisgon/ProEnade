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
						<!-- <v-autocomplete
							:items="itemsCurso"
							label="Cursos"
							class="home__form__input"
							v-model="curso"
							solo
							hide-details
						/> -->
						<v-text-field
							type="text"
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
						<!-- <v-autocomplete
							:items="itemsDisciplina"
							label="Disciplina 1"
							class="home__form__input"
							v-model="disciplina1"
							solo
							hide-details
						/> -->
						<v-text-field
							type="text"
							label="Disciplina 1"
							class="home__form__input"
							v-model="disciplina1"
							solo
							hide-details
						/>
					</v-col>
					<v-col md="12" lg="6">
						<!-- <v-autocomplete
							:items="itemsDisciplina"
							label="Disciplinas 2"
							class="home__form__input"
							v-model="disciplina2"
							solo
							hide-details
						/> -->
						<v-text-field
							type="text"
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
						<!-- <v-autocomplete
							:items="itemsDisciplina"
							label="Disciplina 3"
							class="home__form__input"
							v-model="disciplina3"
							solo
							hide-details
						/> -->
						<v-text-field
							type="text"
							label="Disciplina 3"
							class="home__form__input"
							v-model="disciplina3"
							solo
							hide-details
						/>
					</v-col>
					<v-col md="12" lg="6">
						<!-- <v-autocomplete
							:items="itemsDisciplina"
							label="Disciplina 4"
							class="home__form__input"
							v-model="disciplina4"
							solo
							hide-details
						/> -->
						<v-text-field
							type="text"
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
				<button
					:loading="loading"
					@click="consultarProva"
					class="home__form__btn"
				>
					Consultar
				</button>
			</div>
			<span v-if="this.provas.length > 0">Lista de questões</span>
			<v-card
				class="mx-auto home__list"
				v-for="prova in provas"
				:key="prova.id"
			>
				<v-card-text class="home__list__text">
					<div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Curso:</strong
							>
							<span class="home__list__text__description__subtitle">{{
								prova.curso
							}}</span>
						</div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Disciplina:</strong
							>
							<span class="home__list__text__description__subtitle"
								>{{ prova.disciplina1 }}, {{ prova.disciplina2 }},
								{{ prova.disciplina3 }}, {{ prova.disciplina4 }}</span
							>
						</div>

						<div class="home__list__text__description">
							<strong class="home__list__text__description__title">Ano:</strong>
							<span class="home__list__text__description__subtitle">{{
								prova.ano
							}}</span>
						</div>
					</div>
					<div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Tipo:</strong
							>
							<span class="home__list__text__description__subtitle">{{
								prova.tipoQuestao
							}}</span>
						</div>
						<div class="home__list__text__description">
							<strong class="home__list__text__description__title"
								>Dificuldade:</strong
							>
							<span class="home__list__text__description__subtitle">{{
								prova.dificuldade
							}}</span>
						</div>
					</div>
				</v-card-text>
				<v-card-text class="home__list__text2">
					<strong class="home__list__text2__question">Questão:</strong>
					<p class="home__list__text2__paragrafo">
						{{ prova.questao }}
					</p>

					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">A)</strong>
						{{ prova.alternativaA }}
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">B)</strong>
						{{ prova.alternativaB }}
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">C)</strong>
						{{ prova.alternativaC }}
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">D)</strong>
						{{ prova.alternativaD }}
					</p>
					<p class="home__list__text2__paragrafo">
						<strong class="home__list__text2__alternativa mb-3">E)</strong>
						{{ prova.alternativaE }}
					</p>

					<p class="home__list__text2__correta">
						<strong class="home__list__text2__alternativa mb-3"
							>Alternativa correta:</strong
						>
						{{ prova.alternativaCorreta }}
					</p>
				</v-card-text>
				<v-card-actions class="d-flex justify-end">
					<v-tooltip color="#0082ff" top>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								@click=";(modalEditar = true), carregarInfo($event, prova)"
								icon
								color="primary"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon color="#0082ff">mode_edit_outline</v-icon>
							</v-btn>
						</template>
						<h4>EDITAR</h4>
					</v-tooltip>
					<v-tooltip color="red" top>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								@click="deletarProva($event, prova.id)"
								icon
								color="primary"
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon color="red">delete</v-icon>
							</v-btn>
						</template>
						<h4>EXCLUIR</h4>
					</v-tooltip>
				</v-card-actions>
			</v-card>
			<!-- <v-card class="mx-auto home__list">
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
					<v-card-actions class="d-flex justify-end">
						<a
							@click=";(modalEditar = true), carregarInfo($event, prova)"
							href="#"
						>
							<img src="@/assets/edit.svg" />
						</a>
						<a @click="deletarAluno($event, aluno.id)" href="#">
							<img src="@/assets/delete.svg" />
						</a>
					</v-card-actions>
				</v-card-text>
			</v-card> -->
			<Modal v-if="modalEditar">
				<v-card class="modal">
					<div class="modal__header">
						<h3 class="modal__header__title">Cadastrar nova questão</h3>
						<a @click="modalEditar = false" href="#">
							<img src="@/assets/Vector.svg" alt="" />
						</a>
					</div>
					<v-form class="modal__form">
						<v-row>
							<div class="d-flex align-center">
								<strong class="mx-4">Tipo de questão:</strong>
								<v-radio-group row v-model="editar.tipoQuestao">
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
									v-model="editar.curso"
									outlined
									hide-details
								/>
							</v-col>
							<v-col md="12" lg="6">
								<v-text-field
									type="text"
									label="Ano"
									class="modal__form__input"
									v-model="editar.ano"
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
									v-model="editar.disciplina1"
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
									v-model="editar.disciplina2"
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
									v-model="editar.disciplina3"
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
									v-model="editar.disciplina4"
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
										v-model="editar.questao"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row>
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa A"
										class="modal__form__text"
										v-model="editar.alternativaA"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row>
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa B"
										class="modal__form__text"
										v-model="editar.alternativaB"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row>
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa C"
										class="modal__form__text"
										v-model="editar.alternativaC"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row>
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa D"
										class="modal__form__text"
										v-model="editar.alternativaD"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row>
								<v-col md="12" lg="12">
									<v-textarea
										type="text"
										label="Alternativa E"
										class="modal__form__text"
										v-model="editar.alternativaE"
										hide-details
										outlined
									/>
								</v-col>
							</v-row>
							<v-row>
								<v-col md="12" lg="4">
									<v-text-field
										type="text"
										label="Alternativa Correta"
										class="modal__form__input"
										v-model="editar.alternativaCorreta"
										outlined
										hide-details
									/>
								</v-col>
								<div class="d-flex align-center">
									<strong class="mx-4">Dificuldade:</strong>
									<v-radio-group row v-model="editar.dificuldade">
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
										v-model="editar.palavraChave"
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
					<v-btn @click="editarQuestao" class="modal__form__btn">
						Editar
					</v-btn>
				</v-card>
			</Modal>
		</div>
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
			tipoQuestao: '',
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
			modalEditar: false,
			radios: [
				{ label: 'Facil', value: 'Facil' },
				{ label: 'Medio', value: 'Medio' },
				{ label: 'Dificil', value: 'Dificil' },
			],
			radiosQuestoes: [
				{ label: 'MultiplaEscolha', value: 'MultiplaEscolha' },
				{ label: 'Discursiva', value: 'Discursiva' },
			],
			// itemsCurso: ['ADS', 'Ciências da Computação', 'Engenharia da computação'],
			// itemsDisciplina: ['Engenharia de software'],

			provas: {},
			editar: {
				id: '',
				tipoQuestao: '',
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
			},
		}
	},
	components: {
		Modal,
		Header,
		// Footer,
	},
	mounted() {
		// this.radios.label = 'red'
	},
	computed: {
		...mapGetters({
			getFilter: 'example/filter',
			loading: 'loading',
			getSnackbar: 'snackbar',
			snackbarMessage: 'snackbarMessage',
		}),
	},
	methods: {
		// 	logout() {
		// 		this.$router.push({ name: 'Login' })
		// 	},
		async consultarProva(e) {
			e.preventDefault()
			this.$store.dispatch('setLoading', true)
			try {
				if (
					this.tipoQuestao === ''
					// this.curso === '' ||
					// this.ano === '' ||
					// this.disciplina1 === '' ||
					// this.disciplina2 === '' ||
					// this.disciplina3 === '' ||
					// this.disciplina4 === '' ||
					// this.dificuldade === '' ||
					// this.palavraChave === ''
				) {
					this.$store.dispatch('setSnackbar', {
						status: true,
						message: 'Informe algum filtro.',
					})
				} else {
					const data = await this.$store.dispatch('example/getFilter', {
						tipoQuestao: this.tipoQuestao || null,
						dificuldade: this.dificuldade || null,
						curso: this.curso || null,
						ano: this.ano || null,
						disciplina1: this.disciplina1 || null,
						disciplina2: this.disciplina2 || null,
						disciplina3: this.disciplina3 || null,
						disciplina4: this.disciplina4 || null,
						palavraChave: this.palavraChave || null,
					})
					this.provas = data
					console.log('PROVAS', this.provas)
					if (this.provas.length === 0) {
						this.$store.dispatch('setSnackbar', {
							status: true,
							message: 'Nenhum resultado para esses filtros',
						})
					}
				}
			} catch (e) {
				this.$store.dispatch('setLoading', false)

				throw e
			}
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
		},

		async deletarProva(e, id) {
			e.preventDefault()
			const { data } = await axios.delete(`http://localhost:3000/provas/${id}`)
			this.consultarProva()
		},
		carregarInfo(e, prova) {
			e.preventDefault()
			this.editar.id = prova.id
			this.editar.tipoQuestao = prova.tipoQuestao
			this.editar.dificuldade = prova.dificuldade
			this.editar.curso = prova.curso
			this.editar.ano = prova.ano
			this.editar.disciplina1 = prova.disciplina1
			this.editar.disciplina2 = prova.disciplina2
			this.editar.disciplina3 = prova.disciplina3
			this.editar.disciplina4 = prova.disciplina4
			this.editar.questao = prova.questao
			this.editar.alternativaA = prova.alternativaA
			this.editar.alternativaB = prova.alternativaB
			this.editar.alternativaC = prova.alternativaC
			this.editar.alternativaD = prova.alternativaD
			this.editar.alternativaE = prova.alternativaE
			this.editar.alternativaCorreta = prova.alternativaCorreta
			this.editar.palavraChave = prova.palavraChave
		},
		async editarQuestao(e) {
			e.preventDefault()
			const { data } = await axios.put(
				`http://localhost:3000/provas/${this.editar.id}`,
				{
					tipoQuestao: this.editar.tipoQuestao,
					dificuldade: this.editar.dificuldade,
					curso: this.editar.curso,
					ano: this.editar.ano,
					disciplina1: this.editar.disciplina1,
					disciplina2: this.editar.disciplina2,
					disciplina3: this.editar.disciplina3,
					disciplina4: this.editar.disciplina4,
					questao: this.editar.questao,
					alternativaA: this.editar.alternativaA,
					alternativaB: this.editar.alternativaB,
					alternativaC: this.editar.alternativaC,
					alternativaD: this.editar.alternativaD,
					alternativaE: this.editar.alternativaE,
					alternativaCorreta: this.editar.alternativaCorreta,
					palavraChave: this.editar.palavraChave,
				}
			)
			await this.$store.dispatch('example/getFilter', {
				tipoQuestao: this.tipoQuestao || null,
				dificuldade: this.dificuldade || null,
				curso: this.curso || null,
				ano: this.ano || null,
				disciplina1: this.disciplina1 || null,
				disciplina2: this.disciplina2 || null,
				disciplina3: this.disciplina3 || null,
				disciplina4: this.disciplina4 || null,
				palavraChave: this.palavraChave || null,
			})
			this.modalEditar = false
		},
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
		&__btn {
			margin-top: 20px;
			width: 150px;
			height: 50px;
			padding: 10px;
			// margin-left: 10px;
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
				color: #fff;
			}
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

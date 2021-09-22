<template>
	<v-card height="100%">
		<Header />
		<div class="home">
			<div class="home__cards">
				<v-card class="home__cards__card mr-15" outlined @click="modal = true">
					<v-icon color="#fff" size="50">
						description
					</v-icon>
					<h1>Cadastrar Provas</h1>
					<p>Click para acessar a área de cadastro de provas</p>
				</v-card>
				<v-card class="home__cards__card" outlined>
					<v-icon color="#fff" size="50">
						plagiarism
					</v-icon>
					<h1>Consultar Provas</h1>
					<p>Click para consultar, editar ou excluir provas</p>
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
				<div class="modal">
					<div class="modal__header">
						<h3 class="modal__header__title">Cadastrar nova Prova</h3>
						<a @click="modal = false" href="#">
							<img src="@/assets/Vector.svg" alt="" />
						</a>
					</div>
					<form class="modal__form">
						<input
							type="text"
							placeholder="Cursos"
							class="modal__form__input"
							v-model="curso"
						/>
						<input
							type="text"
							placeholder="Disciplina"
							class="modal__form__input"
							v-model="disciplina"
						/>
						<input
							type="text"
							placeholder="Ano"
							class="modal__form__input"
							v-model="ano"
						/>
						<!-- <h3 class="modal__form__title">Insira sua prova</h3> -->
						<textarea
							type="text"
							placeholder="Insira sua prova"
							class="modal__form__text"
							v-model="prova"
						/>
						<button @click="cadastrarProva" class="modal__form__btn">
							Enviar
						</button>
					</form>
				</div>
			</Modal>

			<Modal v-if="modalEditar">
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
			</Modal>
		</div>
		<!-- <Footer /> -->
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
			prova: '',
			modal: false,
			modalEditar: false,
			alunos: [],
			editar: {
				id: '',
				curso: '',
				disciplina: '',
				ano: '',
				prova: '',
			},
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
				this.prova === ''
			) {
				alert('Preencha todos os campos')
			} else {
				const { data } = await axios.post('http://localhost:3000/provas', {
					curso: this.curso,
					disciplina: this.disciplina,
					ano: this.ano,
					prova: this.prova,
				})
			}
			// this.carregarAlunos()
			this.curso = ''
			this.disciplina = ''
			this.ano = ''
			this.prova = ''
		},
		// async carregarAlunos() {
		// 	const { data } = await axios.get('http://localhost:3000/alunos')
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
			padding: 20px;
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
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px 0;
		&__img {
			width: 150px;
		}
		&__sair {
			color: #fff;
			text-decoration: none;
			cursor: pointer;
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
	&__buttons {
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
		&__voltar {
			border: 1px solid #fff;
			border-radius: 5px;
			outline: 0;
			background: transparent;
			color: #fff;
			padding: 10px;
			width: 182px;
			margin-right: 10px;
			transition: 800ms;
			cursor: pointer;
			outline: 0;
			&:hover {
				background: #30438f;
				color: #fff;
			}
		}
		&__adicionar {
			border: 0;
			background: #4388ae;
			border-radius: 5px;
			color: #fff;
			width: 182px;
			transition: 800ms;
			cursor: pointer;
			outline: 0;
			&:hover {
				background: #30438f;
			}
		}
	}
	.modal {
		display: flex;
		flex-direction: column;
		padding: 15px;
		width: 100%;
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
			&__input {
				outline: 0;
				padding: 10px;
				margin-bottom: 10px;
				border-radius: 5px;
				border: 0;
				background: #fff;
				border: 1px solid #0082ff;
				width: 240px;
				height: 55px;
				// &:nth-child(1) {
				// 	margin-right: 5px;
				// }
				// &:nth-child(3) {
				// 	margin-right: 5px;
				// }
			}
			&__text {
				outline: 0;
				padding: 10px;
				margin-bottom: 10px;
				border-radius: 5px;
				border: 0;
				background: #fff;
				width: 740px;
				height: 300px;
				border: 1px solid #0082ff;
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
</style>

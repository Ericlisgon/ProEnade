import loadFields from '@/services/loadFields'
export default {
	async getFilter(
		{ commit, dispatch },
		{tipoQuestao, dificuldade, curso, ano, disciplina1, disciplina2, disciplina3, disciplina4, palavraChave}
	) {
    try {
      const { data } = await loadFields.getFilter(
        tipoQuestao, dificuldade, curso, ano, disciplina1, disciplina2, disciplina3, disciplina4, palavraChave
        )
        commit('setFilter', data)
        return data
		} catch (e) {
			// const { message } = JSON.parse(e.response.data)
			dispatch(
				'setSnackbar',
				{
					status: true,
					message:'Nenhum resultado encontrado para esses filtros'
				},
			)
			throw e
		}
	},
	emptyList({ commit }) {
		commit('emptyList')
	},
}
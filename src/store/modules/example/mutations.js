import { set } from '@/utils/vuex'

export default {
	setFilter: (state, data) => set((state['filter'] = data)),
// 	setListCategories: (state, data) => set((state['listCategories'] = data)),
// 	emptyList: state => set((state['listsReports'] = [])),
 }
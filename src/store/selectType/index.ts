import * as selectType from '@/store/interface/selectType';
import { getTypeItems } from '@/api/main';
import * as type from './type';
import {
  ActionTree,
  MutationTree,
  GetterTree,
} from '../../../node_modules/vuex';

const state: selectType.SelectTypeState = {
  items: []
}
const actions: ActionTree<selectType.SelectTypeState, any> = {
  async [type.GET__TYPEITEMS]({commit}) {
    const res = await getTypeItems()
    commit(type.GET__TYPEITEMS, res.data)
  }
}
const mutations: MutationTree<selectType.SelectTypeState> = {
  [type.GET__TYPEITEMS](state1, data: selectType.TypeItems) {
    console.log(data, state)
    state1.items = []
  },
}
export { state, actions, mutations };

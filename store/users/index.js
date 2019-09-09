import Cookie from 'js-cookie'
import { auth } from '@/services/firebase'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account
  }
}

export const actions = {
  async login ({ commit }, account) {
    try {
      await auth.signInWithEmailAndPassword(account.email, account.password)

      const token = await auth.currentUser.getIdToken()
      const { email, uid } = auth.currentUser

      Cookie.set('asset_token', token)

      commit('SET_USER', { email, uid })
    } catch (error) {
      throw error
    }
  }
}

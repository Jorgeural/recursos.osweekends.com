/**
 * Las mutaciones son las únicas que DEBEN  modificar el estado (por tenerlo todo centralizado y eso)
 */
const mutations = {
  logIn: (state, user) => {
    state.user = user
  }
}

export default mutations

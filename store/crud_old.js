export const state = () => ({
  users: [
    {
      machine: 'MC024',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'MC026',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'MC027',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'MC028',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'MC31',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'LN034',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'RW001',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'RW002',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'RW003',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
    {
      machine: 'RW004',
      shain: '0489山崎',
      CycleTime: '4.5',
    },
  ]
})

export const getters = {
  getUsers (state) {
    return state.users
  },
}

export const mutations = {
  addUser (state, paylaod) {
    state.users.push(paylaod.user)
  },
  updateUser (state, paylaod) {
    state.users.forEach((user, index) => {
      if (user.id === paylaod.user.id) {
        state.users.splice(index, 1, paylaod.user)
      }
    })
  },
  removeUser (state, paylaod) {
    state.users.forEach((user, index) => {
      if (user.id === paylaod.user.id) {
        state.users.splice(index, 1)
      }
    })
  }
}

import axios from 'axios'

var actions = {
  getProducts ({ commit }) {
    axios.get('http://localhost:9000/api').then(function (response) {
      commit('getProducts', response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  },

  register () {
    axios.post('http://localhost:9000/api/login', {
      login: 'admin',
      password: 'admin'
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  },

  addProduct ({dispatch}) {
    axios.post('http://localhost:9000/api/save', {
      'picture': 'https://ae01.alicdn.com/kf/HTB1Ge8RRVXXXXaTXpXXq6xXFXXX4/8.jpg_640x640.jpg',
      'images': ['http://placehold.it/32x32', 'http://placehold.it/32x32', 'http://placehold.it/32x32'],
      'name': 'Boyer Goodman',
      'price': 1000,
      'options': [
        {
          'id': 0,
          'name': 'Ester Franco'
        }
      ],
      'description': 'Commodo ut mollit reprehenderit ipsum pariatur elit in qui ut do dolor exercitation do aliquip. Incididunt proident Lorem tempor laboris tempor ullamco adipisicing esse duis fugiat nisi consequat deserunt magna. Aute eu nulla exercitation irure esse nisi.',
      'quantity': 1
    })
    .then(function (response) {
      dispatch('getProducts')
    })
    .catch(function (error) {
      console.log(error)
    })
  },

  deleteProduct ({dispatch}, id) {
    axios.post('http://localhost:9000/api/delete', {id: id})
    .then(function (response) {
      dispatch('getProducts')
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export default actions

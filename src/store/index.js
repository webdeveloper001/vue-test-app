import Vue from 'vue'
import axios from "axios"
import Vuex from 'vuex'

axios.defaults.headers.common["Content-Type"] = "application/json"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    brands: [],
    brand: {}
  },
  mutations: {
    setBrands (state, brands) {
      state.brands = brands
    },
    setBrand (state, brand) {
      state.brand = brand
    }
  },
  actions: {
    getBrands (context) {
      axios.get("http://private-bc245d-brewoptixv2.apiary-mock.com/brands")
        .then(response => {
          context.commit("setBrands", response.data)
        })
    },
    getBrand (context, brand_id) {
      axios.get(`http://private-bc245d-brewoptixv2.apiary-mock.com/brands/${brand_id}`)
        .then(response => {
          context.commit("setBrand", response.data)
        })
    }
  }
})

export default store

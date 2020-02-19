import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import User from '../models/User.js'

Vue.use(Vuex)

// Create a new database instance.
const database = new VuexORM.Database()

// Register Models to the database.
database.register(User)

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
    plugins: [VuexORM.install(database)]
})

export default store
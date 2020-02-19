<template>
    <div id="app">
        <p>Even though this input is modeled to user.name, the name won't be updated</p>
        <p>This happens because there the getters and setters for 'user' aren't being send by the ORM</p>
        <p>This behavior changed in version 0.34.0, prior the getters and setters were being send</p>
        <input type="text" v-model="user.name" v-if="user">
    </div>
</template>

<script>
    import User from './models/User.js'

    export default {
        computed: {
            user() {
                return User.find(1)
            }
        },

        mounted() {
            User.insert(
                {
                    data: {
                        id: 1,
                        name: 'John',
                        email: 'john@doe.com',
                    }
                }
            )

            console.log(this.user)
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>

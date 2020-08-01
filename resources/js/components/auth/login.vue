<template>
  <div class="m-auto max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your username"  v-model="user.username">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Your secrete password"  v-model="user.password"/>
      </div>
      
      <div class="flex items-center justify-between">
        <button class="mt-2 mx-auto bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none" type="button" @click="login">
          Catch 'Em All
        </button>
      </div>
      <div class="pt-3">
        Don't have an account ?
        <router-link :to="{path: 'register'}" class="no-underline text-blue-300">
          Register
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data () {
    return {
      user: { username: '', password: '' }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('auth/LOGIN_USER', this.user).then(response => {
        if (response.status_code === 200) {
          this.$router.push('pokedex')
        }
      })
      // this.$router.push('/pokedex')
    }
  }
}
</script>

<style>

</style>
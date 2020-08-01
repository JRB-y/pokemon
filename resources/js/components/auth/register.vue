<template>
  <div class="m-auto max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your username" v-model="user.username">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Your secrete password" v-model="user.password"/>
      </div>
      <h2 class="form-title text-center text-gray-700 mt-6 mb-6 opacity-10 border-b">Choose your profile picture</h2>
      <ul>
        <li v-for="profilePicture in profilePictureList" :key="profilePicture">
            <label class="flex flex-row items-center pt-2 pb-2 pr-3 border-b ml-2" :for="profilePicture">
                <input type="radio" :id="profilePicture" name="profile-picture" :value="profilePicture" v-model="user.profilePicture" />
                <div class="w-1/5">
                    <img class="object-scale-down w-12 ml-4" :src="`/images/profile/${profilePicture.toLowerCase()}.png`" />
                </div>
                <div class="content-name-pok w-4/5 ml-4 pb-1 pt-1 pokemon_font">
                    <p class="text-gray-700 text-xl text-opacity-10">{{profilePicture}}</p>
                </div>
            </label>
        </li>
      </ul>
      <div class="flex items-center justify-between">
        <button 
          class="mt-5 mx-auto bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none"
          type="button"
          @click="register"
          :disabled="cantCreateProfile"
          :class="{'opacity-50 cursor-not-allowed': cantCreateProfile}"
        >
          Create an Account
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data () {
    return {
      profilePictureList: ['Pikachu', 'Squirtle', 'Bulbasaur', 'Charmander', 'Jigglypuff', 'Pokeball'],
      user: {
        username: '',
        password: '',
        profilePicture: ''
      }
    }
  },

  computed: {
    cantCreateProfile () {
      if (this.user.username === '' || this.user.password === '' || this.user.profilePicture === '') {
        return true
      }
      return false
    }
  },

  methods: {
    register () {
      this.$store.dispatch('auth/REGISTER_USER', this.user).then(response => {
        if (response.status_code === 200) {
          this.$router.push('pokedex')
        }
      })
    }
  }
  
}
</script>

<style>

</style>
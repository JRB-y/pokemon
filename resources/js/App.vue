<template>
  <div class="flex justify-center m-auto h-screen sm:w-screen md:w-1/3 text-gray-700 text-center bg-main-pokemon">
    <section class="block fixed inset-x-0 top-0 z-10 bg-transparent w-screen md:w-1/3 md:mx-auto" v-if="isLoggedIn">
    <ul class="flex justify-between">
      <li class="mr-3">
        <div class="left-0 top-0 absolute pt-2 pl-2 w-screen mx-auto">
          <img src="/images/left-arrow.svg" id="back-arrow" @click="goBack" v-if="generateBackArrow()" />
        </div>
      </li>
      <li class="mr-3">
      </li>
      <li class="mr-3">
        <a class="right-0 top-0 absolute inline-block py-2 px-4 text-red-400" href="#" @click="logout">Logout</a>
      </li>
    </ul>
      <!-- <div id="tabs" class="flex justify-between" >
        
        <router-link :to="{path: '/pokedex'}" class="focus:text-teal-500 right-0 hover:text-teal-500 justify-center inline-block text-center pt-1">
          <span class="tab tab-home block text-xs">Logout</span>
        </router-link>
        
      </div> -->
    </section>
    <router-view />
    <BottomNavigation v-if="isLoggedIn"/>
  </div>
</template>

<script>
import LoginComponent from './components/auth/login'
import BottomNavigation from './components/navigation/bottomNavigation'

export default {
  name: 'AppComponent',
  components: { LoginComponent, BottomNavigation },

  computed: {
    isLoggedIn () {
      return this.$store.getters['auth/isLoggedIn']
    }
  },

  methods: {
    goBack () {
      if (this.$route.fullPath.split('/')[1] === 'pokemon') {
        this.$router.push('/pokedex')
      }
    },

    generateBackArrow () {
      if (this.$route.fullPath === '/pokedex') return false
      if (this.$route.fullPath === '/') return false
      if (this.$route.fullPath === '/login') return false
      if (this.$route.fullPath === '/register') return false
      else return true
    },

    logout () {
      this.$store.dispatch('auth/LOGOUT_USER').then(res => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped>
  #back-arrow:hover {
    cursor: pointer;
    opacity: 0.8;
  }
</style>
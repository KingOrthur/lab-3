<template>
  <div id="app">
    <login-header v-if="$route.name === 'login'"/>
    <app-header v-else-if="$route.name !== 'login'"/>
    <router-view/>
    <login-footer v-if="$route.name === 'login'"/>
    <app-footer v-else-if="$route.name !== 'login'"/>
  </div>


</template>

<script>
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import LoginHeader from '@/components/login-header.vue'
import LoginFooter from '@/components/login-footer.vue'

export default {
  components: { AppHeader, AppFooter, LoginHeader, LoginFooter},
}
</script>

<style>
</style>

<template>
  <HeaderComponent/>
  <TabelaComponent/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import TabelaComponent from './components/TabelaComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    TabelaComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: fit-content;  
}
#app header, footer{
  color: #ffffff;
  
}
</style>

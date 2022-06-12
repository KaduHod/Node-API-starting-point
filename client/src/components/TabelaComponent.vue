<template>
  <main>
    <table >
      <thead>
        <tr>
         <th>Identificador</th>
         <th>Nome</th>
         <th>Nascimento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in clients"
           v-bind:item="client"
           v-bind:index="index"
           v-bind:key="client.id"
        >
         <td>{{ client.id }}</td>
         <td>{{ client.nome }}</td>
         <td>{{ client.nascimento }}</td>
       </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import Service from '../service/Service.js'


export default {
  name: 'TabelaComponent',
  data() {
    return{
      clients : [],
      exercicios : [],
      error : '',
      text : ''
    }
  },
  async created() {
    try{
      let response = await Service.get()
      this.clients = response.data      
      
    }catch(err) {
      this.error = err;
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% -100px);
  height: fit-content;
  margin: 50px;
}
 
table{
  width: 70%;
  padding: 15px;
  box-shadow: 0px 0px 20px  rgb(88, 88, 88);
  background-color: rgb(247, 247, 247);
  border-radius: 10px;
  height: fit-content;
}
thead{
  margin-bottom: 15px;
}
</style>

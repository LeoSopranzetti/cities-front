<template>               
    <div>

        <div class="container">
            <h2 class = "mb-5">Forneça as duas cidades</h2>
            <form>         
                <div class="row mb-3 mt-3">
                        <div class="form-group col">
                            <label for="exampleInputEmail1"><h5>Primeira cidade</h5> </label>
                            <input  class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Primeira cidade" v-model="cidadeNome">
                            <p v-if="show1 === 'ok'" class="text-danger">Cidade inválida, digite novamente!</p>
                            <City v-model="city" :city="city" class="mb-3"/>
                            
                            <button v-if="disponibilidade()" @click.prevent="check1()" type="submit" class="btn btn-primary ">Procurar cidade</button>
                        </div>
                        <div class="form-group col">
                            <label for="exampleInputPassword1"><h5>Segunda Cidade</h5></label>
                            <input  class="form-control mb-2" id="exampleInputPassword1" placeholder="Segunda cidade" v-model="cidade2Nome">
                            <p v-if="show2 === 'ok'" class="text-danger">Cidade inválida, digite novamente!</p>
                            <City2 v-model="city2" :city2="city2" class="mb-3"/>
                            <button v-if="disponibilidade2()" @click.prevent="check2()" type="submit" class="btn btn-primary ">Procurar cidade</button>
                        </div>
                    
                </div>
                <div class="row justify-content-center">
                    <button v-if="mostrar()" @click.prevent="pesquisarDistancia()" type="submit" class="btn btn-success col-2 btn-lg ">Distância</button>
                    <button v-else type="submit" class="btn btn-secondary col-2 btn-lg " disabled>Distância</button>
                </div>   

            </form>
            <p v-if="distancia !== ''">{{ distancia }} KM</p>
        </div>
        
    </div>                              
</template>

<script>

import City from '@/components/City'
import City2 from '@/components/City2'

    export default {
        name: 'home',

        components: {
          City, City2
        },

    data(){
    return{
        city:{
            id:'',
            name:'',
            uf: '',
            ibge:'',
            geolocation:'',
            location:''
        },
        city2:{
            id:'',
            name:'',
            uf: '',
            ibge:'',
            geolocation:'',
            location:''
        },
        cidadeNome: '',
        cidade2Nome: '',
        show1: '',
        show2 : '',
        distancia: ''
    }
    },

    methods: {
        check1() {
        this.$http     
            .get("http://localhost:8080/cities/" + this.cidadeNome)
            .then(resposta => {
                this.city = resposta.data
                console.log(resposta.data)
                this.show1 = ''
                })
            .catch(erro => {
                console.log(erro)
                this.show1 = 'ok'})
        },
        check2() {
        this.$http
            .get("http://localhost:8080/cities/" + this.cidade2Nome)
            .then(resposta => {
                this.city2 = resposta.data
                console.log(resposta)
                this.show2 = ''
                })
            .catch(erro => {
                console.log(erro)
                this.show2 = 'ok'})
        },
        
        disponibilidade(){
            if(this.city.name === ''){
                return true
                 } else {
                     return false
                 }
        },

        disponibilidade2(){
            if(this.city2.name === ''){
                return true
                 } else {
                     return false
                 }
        },

        mostrar(){
            if (this.city.name !== '' & this.city2.name !== ''){
                return true
            } else {
                return false
            }
        },
        pesquisarDistancia(){
            this.$http     
                .get("http://localhost:8080/distances/by-cube?from=" + this.city.id + "&to=" + this.city2.id)
                .then(resposta => {
                    console.log(resposta.data)
                    
                    this.distancia = (resposta.data / 1000).toFixed(2)
                    })
                .catch(erro => {
                    console.log(erro)})
        }
  }
    }
  


</script>

<style scoped>

</style>
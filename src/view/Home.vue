<template>               
    <div>

        <div class="container">
            <h1 class="display-1 row justify-content-center ">Cities API</h1>
             <p class="lead row justify-content-center mb-5">Aplicação que mostra a distância entre duas cidades Brasileiras.</p>
            <h4 class = "mb-5 display-5">Forneça as duas cidades</h4>
            <form>         
                <div class="row mb-3 mt-3">
                        <div class="form-group col">
                            <label for="exampleInputEmail1"><h5 >Primeira cidade</h5> </label>
                            <input  class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Primeira cidade" v-model="cidadeNome">
                            <p v-if="show1 === 'ok'" class="text-danger">Cidade inválida, digite novamente!</p>
                            <City v-model="city" :city="city" class="mb-3"/>
                            
                            <button v-if="disponibilidade()" @click.prevent="check1()" type="submit" class="btn btn-primary ">Procurar cidade</button>
                            <button v-if="!disponibilidade()" @click.prevent="limpar()" type="submit" class="btn btn-danger ">Limpar</button>
                        </div>
                        <div class="form-group col">
                            <label for="exampleInputPassword1"><h5 >Segunda Cidade</h5></label>
                            <input  class="form-control mb-2" id="exampleInputPassword1" placeholder="Segunda cidade" v-model="cidade2Nome">
                            <p v-if="show2 === 'ok'" class="text-danger">Cidade inválida, digite novamente!</p>
                            <City2 v-model="city2" :city2="city2" class="mb-3"/>
                            <button v-if="disponibilidade2()" @click.prevent="check2()" type="submit" class="btn btn-primary ">Procurar cidade</button>
                            <button v-if="!disponibilidade2()" @click.prevent="limpar2()" type="submit" class="btn btn-danger ">Limpar</button>
                        </div>
                    
                </div>
                <div class="row justify-content-center">
                    <button v-if="mostrar()" @click.prevent="pesquisarDistancia()" type="submit" class="btn btn-success col-2 btn-lg ">Distância</button>
                    <button v-else type="submit" class="btn btn-secondary col-2 btn-lg mb-3" disabled>Distância</button>
                </div>   

            </form>

            <div class = "row mt-5 ">
                <div  class="col align-self-center">
                <h1 class=" mt-3 display-5 " v-if="distancia !== ''">A distância entre {{city.name}} e {{city2.name}} é de:</h1>
                <p class="display-5 text-success" v-if="distancia !== ''">{{ distancia }} KM</p>
                <h1 class=" mt-3 display-5 " v-if="distancia === ''">Os bens materiais enchem os olhos, viajar enche a memória!</h1>
                </div>

                <div class="col">
                    <div >
						<img class="img-thumbnail"
							src="https://www.girosa.com.br/images/articles/3491/b2ap3_large_Travelling-OurLifeInTheD.jpg" />
					</div>
                </div>
            </div>

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
        },
        limpar(){
            this.city.name = '' 
            this.city.ibge = ''
            this.distancia = ''
        },
        limpar2(){
            this.city2.name = ''
            this.city2.ibge = ''
            this.distancia = ''
        }
        

  }
    }
  


</script>

<style scoped>

</style>
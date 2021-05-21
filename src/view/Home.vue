<template>               
    <div>

        <div class="container">
         <form>         
            <div class="row mb-3 mt-3">
                    <div class="form-group col">
                        <label for="exampleInputEmail1"><h5>Primeira cidade</h5> </label>
                        <input  class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Primeira cidade" v-model="city.name">
                        <button @click.prevent="check1()" type="submit" class="btn btn-primary ">Disponibilidade</button>
                    </div>
                    <div class="form-group col">
                        <label for="exampleInputPassword1"><h5>Segunda Cidade</h5></label>
                        <input  class="form-control mb-2" id="exampleInputPassword1" placeholder="Segunda cidade" v-model="city2.name">
                        <button @click.prevent="check2()" type="submit" class="btn btn-primary ">Disponibilidade</button>
                    </div>
                
            </div>
            <button type="submit" class="btn btn-primary col-1 ">Procurar</button>
                
            </form>
        </div>
        
    </div>                              
</template>

<script>

    export default {
        name: 'home',

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
        }
    }
    },

    methods: {
        check1() {
        this.$http     
            .get("http://localhost:8080/cities/" + this.city.name)
            .then(resposta => {
                this.city = resposta.data
                console.log(resposta.data)
                })
            .catch(erro => console.log(erro))
        },
        check2() {
        this.$http
            .get("http://localhost:8080/cities/" + this.city2.name)
            .then(resposta => {
                this.city2 = resposta.data
                console.log(resposta)
                })
            .catch(erro => console.log(erro))
        }
  }
    }
  


</script>

<style scoped>

</style>
<template>               
    <div>

        <div class="container">
         <form>         
            <div class="row mb-3 mt-3">
                    <div class="form-group col">
                        <label for="exampleInputEmail1"><h5>Primeira cidade</h5> </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Primeira cidade">
                    </div>
                    <div class="form-group col">
                        <label for="exampleInputPassword1"><h5>Segunda Cidade</h5></label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Segunda cidade">
                    </div>
                
            </div>
            <button type="submit" class="btn btn-primary col-1 ">Procurar</button>
                
            </form>
        </div>
        
    </div>                              
</template>

<script>
    export default {
        name: 'home'
  
}

</script>

<style scoped>

</style>
<template>
	<div class="card" v-if="verdadeiro()">
				<div class="card-header alert-dark" style="background-color: #d2cfcf"><h4>{{city2.name}}</h4></div>
				
				<div class="card-body">
					<div class="row">
						<div class="col-12 col-sm-6  mb-3">
							<dl class="row">		
							<dt class="col-sm-5">Estado:</dt> <dd class="col-sm-7 ">{{city2.uf.name}}</dd>				
							<dt class="col-sm-5">IBGE:</dt> <dd class="col-sm-7 "> {{city2.ibge}}</dd>						
							
							</dl>
						</div>
					</div>
				</div>
			</div>
</template>

<script>
export default {
    props: ['city2'],

    data() {
        return {
			
        }
    },

    methods: {
        verdadeiro(){
            
            if(this.city2.ibge === ''){
                return false 
            } else {
                return true
            }
        }
    }
}
</script>
<template>
  <div class="home">
    <Nav></Nav>
    <Container6></Container6>
    <Container4></Container4>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Container6 from '@/components/Container6.vue'
import Container4 from '@/components/Container4.vue'
export default {
  name: 'OrdenesView',
  components: {
    Nav,Container4,Container6
  }/* ,data(){
    return{
      content:document.querySelector("#containerRecept"),
      pedidos:JSON.parse(localStorage.getItem("ordenes")),
      id: 1
  }
  },
  methods: {
      addElements(pedidos){
        pedidos.forEach(element => {
            this.content.innerHTML += `
            <table class="ordenTable">
                <tr>
                    <th>Numero de pedido</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>"${id}"</td>
                    <td>${element.nombre}</td>
                    <td>${element.telefono}</td>
                    <td>${element.email}</td>
                    
                </tr>
                <tr>
                    <th>Numero de pasteles</th>
                    <th>Tamaño del pastel</th>
                    <th>Sabores</th>
                    <th>Ingredientes</th>
                </tr>
                <tr>
                    <td>${element.nDePasteles}</td>
                    <td>${element.tamañoPastel}</td>
                    <td>${element.sabor}</td>
                    <td>${element.ingredientes}</td>
                </tr>
                
                <tr>
                    <th id="total">TOTAL</th>
                </tr>
                <tr>
                    <td>$ ${element.total} pesos mexicanos</td>
                </tr>
            </table>`
            id++;
        }) 
    }
  } */
}
</script>

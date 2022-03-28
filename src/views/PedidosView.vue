<template>
  <div class="home">
    <Nav></Nav>
    <Form></Form>
    <Container4></Container4>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import  Form from '@/components/Form.vue'
import Container4 from '@/components/Container4.vue'
export default {
  name: 'PedidosView',
  components: {
    Nav,Container4,Form
  }
}
</script>

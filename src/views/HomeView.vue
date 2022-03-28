<template>
  <div class="home">
    <Nav></Nav>
    <Container1></Container1>  
    <Container2></Container2>
    <Container3></Container3>
    <Container4></Container4>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Container1 from '@/components/Container1.vue'
import Container2 from '@/components/Container2.vue'
import Container3 from '@/components/Container3.vue'
import Container4 from '@/components/Container4.vue'
export default {
  name: 'HomeView',
  components: {
    Nav,Container1,Container2,Container3,Container4
  }
}
</script>

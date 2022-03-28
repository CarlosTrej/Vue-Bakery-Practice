<template>
  <div class="home">
    <Nav></Nav>
    <Container-5></Container-5>
    <Container4></Container4>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import  Container5 from '@/components/Container5.vue'
import Container4 from '@/components/Container4.vue'
export default {
  name: 'MenuView',
  components: {
    Nav,Container4,Container5
  }
}
</script>

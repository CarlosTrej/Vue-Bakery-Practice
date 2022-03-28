<template>
    <div>
        <nav id="navBar">
            
            <img src="./../assets/img/MoreSugar.png" alt="logo Red Sugar"  id="logo" >
            <router-link to="/"><h3>{{inicio}}</h3></router-link> 
            <router-link to="/menu"><h3>{{menu}}</h3></router-link> 
            <router-link to="/pedido"><h3>{{pedido}}</h3></router-link>
            <router-link to="/ordenes"><h3>{{ordenes}}</h3></router-link>
        </nav>
        <h1>{{title}}</h1>

    </div>
</template>
<script>
export default {
    name: 'Nav-bar',
    data(){
        return{
            inicio:'Inicio',
            menu:'Menú',
            pedido:'Pedido',
            ordenes:'Ordenes',
            title:'Repostería Red Sugar'
        }
    }
}
</script>

<template>
    <div class="formulario">
        <h2>Aqui realiza tu pedido</h2>
        <form @submit.prevent="agregarPedido" id="pedidoForm">
            <label for="nombre">Nombre</label><br>
            <input class="txt" type="text" name="nombre" id="nombre" placeholder="Nombre" v-model="nombre"><br>
            <label for="telefono">Teléfono</label><br>
            <input class="txt" type="tel" name="telefono" id="telefono" maxlength="12" minlength="10" placeholder="5512345678" v-model="telefono"><br>
            <label for="email">Correo Electrónico</label><br>
            <input class="txt" type="email" id="email" placeholder="correo@correo.com" v-model="email"><br>
            <label for="pastel">¿Cuántos pastéles desea ordenar?</label><br>
            <input class="txt" type="number" name="pastel" id="pastel" min="1" max="10" v-model="npasteles"><br>
            <label for="tamaño" class="tamaño-group">Selecciona el tamaño de tu pastel</label><br>
            <select class="txt" id="tamaño" v-model="tamaño">
                <option value="personal">Personal   $70</option>
                <option value="pequeño">Pequeño $200</option>
                <option value="mediano">Mediano $500</option>
                <option value="grande">Grande   $900</option>
                <option value="familiar">Familiar   $1,500</option>
            </select><br>
            <div class="checkBox">
            <label for="sabores">Selecciona los sabores de tu preferencia</label><br><br>
                <label for="vainilla"><input type="checkbox" value="Vainilla" id="vainilla" v-model="flavorChecked"> Vainilla $15</label><br>
                <label for="chocolateS"><input type="checkbox" value="Chocolate Suizo" id="chocolateS" v-model="flavorChecked"> Chocolate Suizo $15</label><br>
                <label for="chocolateB"><input type="checkbox" value="Chocolate Blanco" id="chocolateB" v-model="flavorChecked"> Chocolate Blanco $15</label><br>
                <label for="matcha"><input type="checkbox" value="Matcha" id="matcha" v-model="flavorChecked"> Matcha $20</label><br>
                <label for="imposible"><input type="checkbox" value="Imposible" id="imposible" v-model="flavorChecked"> Imposible $20</label><br>
                <label for="redVelvet"><input type="checkbox" value="Red Velvet" id="redVelvet" v-model="flavorChecked"> Red Velvet $20</label><br>
                <label for="tiramisu"><input type="checkbox" value="Tiramisu" id="tiramisu" v-model="flavorChecked"> Tiramisú $30</label><br>
                <label for="turron"><input type="checkbox" value="Turron" id="turron" v-model="flavorChecked"> Turrón $30</label><br>
                <label for="pistache"><input type="checkbox" value="Pistache" id="pistache" v-model="flavorChecked"> Pistáche $30</label><br><br>
            <label for="adornos">Selecciona los adornos para personalizar tu pastel</label><br><br>
                <label for=""><input type="checkbox" value="Durazno" id="durazno" v-model="itemChecked"> Durázno $20</label><br>
                <label for=""><input type="checkbox" value="Fresa" id="fresa" v-model="itemChecked"> Fresa $20</label><br>
                <label for=""><input type="checkbox" value="Kiwi" id="kiwi" v-model="itemChecked"> Kiwi $20</label><br>
                <label for=""><input type="checkbox" value="Amarena" id="amarena" v-model="itemChecked"> Amaréna $30</label><br>
                <label for=""><input type="checkbox" value="BlueBerry" id="blueBerry" v-model="itemChecked"> Blue berry $30</label><br>
                <label for=""><input type="checkbox" value="Arandano" id="arandano" v-model="itemChecked"> Arándano $30</label><br>
                <label for=""><input type="checkbox" value="Frambuesa" id="frambuesa" v-model="itemChecked"> Frambuésa $30</label><br>
                <label for=""><input type="checkbox" value="Zarzamora" id="zarzamora" v-model="itemChecked"> Zarzamora $30</label><br>
                <label for=""><input type="checkbox" value="Nuez" id="nuez" v-model="itemChecked"> Nuéz $20</label><br>
                <label for=""><input type="checkbox" value="Almendra" id="almendra" v-model="itemChecked"> Alméndra $20</label><br>
                <label for=""><input type="checkbox" value="Oreo" id="oreo" v-model="itemChecked"> Oreo $20</label><br><br>
            </div>
            <center><input type="reset" class="restart" value="Restablecer" @click="reset">
            <a href="#"><button type="submit" class="submit" id="submit" @click="submit">Enviar</button></a></center>
        </form><!-- form -->
    </div>
</template>
<script>
export default {
    name: 'Form',
    data(){
        return{
            nombre: '',
            telefono: '',
            email: '',
            npasteles: 1,
            tamaño: '',
            flavorChecked: [],
            itemChecked: [],
            total: 0
        }
    },
    methods: {
        submit(){ 
            if(this.nombre == '' || this.telefono == '' || this.email == '' || this.npasteles == 0 || this.tamaño == ''){
                alert('Por favor llene todos los campos');
            }else{
                switch(this.tamaño){
                    case 'personal':
                        this.total = 70 * this.npasteles;
                        break;
                    case 'pequeño':
                        this.total = 200 * this.npasteles;
                        break;
                    case 'mediano':
                        this.total = 500 * this.npasteles;
                        break;
                    case 'grande':
                        this.total = 900 * this.npasteles;
                        break;
                    case 'familiar':
                        this.total = 1500 * this.npasteles;
                        break;
                }/* switch */
                this.flavorChecked.forEach(element => {
                    switch(element){
                        case 'Vainilla':
                            this.total += 15;
                            break;
                        case 'Chocolate Suizo':
                            this.total += 15;
                            break;
                        case 'Chocolate Blanco':
                            this.total += 15;
                            break;
                        case 'Matcha':
                            this.total += 20;
                            break;
                        case 'Imposible':
                            this.total += 20;
                            break;
                        case 'Red Velvet':
                            this.total += 20;
                            break;
                        case 'Tiramisu':
                            this.total += 30;
                            break;
                        case 'Turron':
                            this.total += 30;
                            break;
                        case 'Pistache':
                            this.total += 30;
                            break;
                    }/* switch */
                });/* forEach */
                this.itemChecked.forEach(element => {   
                    switch(element){
                        case 'Durazno':
                            this.total += 20;
                            break;
                        case 'Fresa':
                            this.total += 20;
                            break;
                        case 'Kiwi':
                            this.total += 20;
                            break;
                        case 'Amarena':
                            this.total += 30;
                            break;
                        case 'BlueBerry':
                            this.total += 30;
                            break;
                        case 'Arandano':
                            this.total += 30;
                            break;
                        case 'Frambuesa':
                            this.total += 30;
                            break;
                        case 'Zarzamora':
                            this.total += 30;
                            break;
                        case 'Nuez':
                            this.total += 20;
                            break;
                        case 'Almendra':
                            this.total += 20;
                            break;
                        case 'Oreo':
                            this.total += 20;
                            break;
                    }/* switch */
                });/* forEach */
                alert('Gracias por su pedido, en breve nos pondremos en contacto con usted');
                console.log('Nombre: ' + this.nombre + '\nTeléfono: ' + this.telefono + '\nCorreo: ' + this.email + '\nTamaño: ' + this.tamaño + '\nPasteles: ' + this.npasteles + '\nflavors: ' + this.flavorChecked + '\nAdornos: ' + this.itemChecked + '\nTotal: ' + this.total);
                let obj = {
                    nombre: this.nombre,
                    telefono: this.telefono,
                    email: this.email,
                    tamaño: this.tamaño,
                    npasteles: this.npasteles,
                    flavorChecked: this.flavorChecked,
                    itemChecked: this.itemChecked,
                    total: this.total
                }
                let pedidos = [];
                if(localStorage.getItem("ordenes") == null){
                    pedidos.push(obj)
                    localStorage.setItem("ordenes",JSON.stringify(pedidos));
                }else{
                    let current = JSON.parse(localStorage.getItem("ordenes"));
                    current.push(obj)
                    localStorage.setItem("ordenes",JSON.stringify(current));
                }   /* if */
                this.nombre = '';
                this.telefono = '';
                this.email = '';
                this.npasteles = 1;
                this.tamaño = '';
                this.flavorChecked = [];
                this.itemChecked = [];
                this.total = 0;
            }  /* if */
        }   /* submit */
    }  /* methods */
    }   /* export */
</script>
<script lang="ts">
import {Product} from './model/product.model'
import {Cart} from './model/cart.model'
import ProductCard from './components/card/ProductCard.vue'
export default{
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(123,"Climatizador",399,{ id: 1, title: 'Eletrodomésticos' }),
        new Product(879,"Smartphone",1500,{ id: 15, title: 'Eletrônicos' }),
        new Product(79,"Ventilador",120,{ id: 1, title: 'Eletrodomésticos' }),
        new Product(538,"Mesa de Jantar",589.9,{ id: 4, title: 'Móveis' })
        ],
    }
  },
  methods: {
    addItem(product: Product){
      this.cart.addToCart(product)
    },
    remItem(product: Product){
      this.cart.remItem(product)
    },
    delItem(product: Product){
      this.cart.delItem(product)
    },
  },
  components:{ProductCard},
}

</script>

<template>
  <main>

    <div class="row">

        <div class="column">
          <h1>Produtos</h1>
          <div v-for="product in products">
            <ProductCard :product="product" @add="addItem" @remove="remItem"/>
          </div>
        </div>

         <div class="column">
          <h1>Carrinho</h1>
          <div v-for="item in cart.listProducts">
            <p>{{item.product.name}}   {{item.quantity}} </p>
            <button @click="delItem(item.product)" >Excluir item</button>
          </div>
          <h3>Subtotal ({{cart.getTotalItems()}} produtos): R$ {{cart.getFinalPrice().toFixed(2)}}</h3>
        </div>
    </div>
   
  </main>
</template>

<style>
.column{
  float: left;
    width: 50%;
}
</style>

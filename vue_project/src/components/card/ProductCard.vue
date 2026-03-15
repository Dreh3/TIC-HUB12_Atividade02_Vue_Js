<template>
    <article>
        <h3>{{product?.name}}</h3>
        <p>{{product?.category.title}}</p>
        <p>R$: {{product?.price.toFixed(2).replace(',','.')}}</p>
        <button @click="addItem(product!)">Adicionar</button>
        <button @click="remItem(product!)">Remover</button>
    </article>
</template>
<script lang = "ts">
import {Product} from '@/model/product.model'
import {defineComponent, type PropType} from 'vue'
export default defineComponent({
    props:{
        product:{
            type: Object as PropType<Product>,
        }
    },
    emits:["onClick"],
    methods:{
        addItem(product:Product){
            this.$emit("add",product)
        },
        remItem(product:Product){
            this.$emit("remove",product)
        }
    }
})
</script>
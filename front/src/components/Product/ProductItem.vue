<template>
  <div>
    <router-link :to="{name: 'cardinfo', params: {id: product.id}}">
      <div class="card" style="width: auto; ">
        <img src="/img/clocks2.png" class="card-img-top">
        <div class="card-body p-0 pt-1 pb-3">
          <div class="item-text">
            <h6 class="card-title mt-1 mb-1">{{ product.name }}</h6>
          </div>
          <div class="price-container mb-1">
            <div class="rate">☆ {{ product.rating }}</div>
            <div class="bought-by">купили {{ product.boughtby}}</div>
          </div>
          <div class="price">{{ product.price }} руб.</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import cardInfoView from "@/views/CardInfoView.vue";

export default {
  name: "ProductItem",
  computed: {
    cardInfoView() {
      return cardInfoView
    }
  },
  props: ['product'],
}
</script>

<style scoped>

</style>
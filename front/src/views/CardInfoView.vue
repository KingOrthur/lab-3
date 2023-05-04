<template>
  <body style="background:#f8f9fa;">
    <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-md-6" style="display: flex;align-items: center;">
        <img src="/img/clocks2.png" class="card-img-top">
      </div>
      <div class="col-md-6">
        <h1 class="mt-2" style="font-weight: bolder">Информация о товаре {{ id }}</h1>
        <div class="card-body p-0 pt-1 pb-3" style="font-size: 16px">
          <div class="item-text" >
            <h6 class="card-title mt-1 mb-1" style="font-size: 35px; font-weight: bolder">{{ product.name }}</h6>
          </div>
          <p class="mt-4">История нашей компании начинается с 1995 года. С этого момента наш пакет часовых брендов постоянно и динамично расширялся. У нас в сети появились самые знаменитые и надежные часовые марки в разных ценовых сегментах из Японии, Швейцарии и других стран.  Благодаря вашим отзывам, дорогие наши покупатели, мы тщательно отобрали ассортимент, который максимально удовлетворяет вашим вкусам.
            <br><br>Наши магазины находятся в лучших ТЦ Белгорода и Курска. Наша компания - это большая команда профессионалов, любящих свое дело. Многие сотрудники имеют большой опыт и стаж работы, а некоторые из них работают с начала основания компании.
            <br><br>Миссия часовой компании «7 часов» - быть вашим безупречным экспертом в мире часов. Дарить эмоции удовольствия и успеха через уникальное творение - часы, которое всегда с вами. Время - это одно из самых ценных даров человеку, которым он распоряжается по своему усмотрению, отражая свою индивидуальность и характер.</p>
          <div class="price-container mt-4 mb-4">
            <div class="rate">☆ {{ product.rating }}</div>
            <div class="bought_times">Купили {{ product.bought_times}} раз</div>
          </div>
          <div class="price" style="font-size: 25px; font-weight: bold">{{ product.price }} руб.</div>
        </div>
        <div>
          <button class="btn btn-danger w-25" @click="addToCart" v-show="!this.product.inCart">В корзину</button>
          <button class="btn btn-success w-25" @click="addToCart" v-show="this.product.inCart">Добавлен</button>
        </div>
      </div>
    </div>
  </div>
  </body>

</template>

<script>
export default {
  name: "CardInfoView",
  methods: {
    addToCart(){
      this.$store.commit('add', this.product.id)
      this.product.inCart = true
    },
    getInCart(){

    },
  },

  data() {
    return {
      id: null,
      product: {id: 1, name: 'Часы 1', rating: '5.0', bought_times: 301, price: '432,65'}
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
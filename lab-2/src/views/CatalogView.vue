<template>
  <main>
    <div class="container">
      <div class="row mt-5">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <ul class="list-unstyled mb-1" >
            <h2 style="font-weight: bold; text-align: center">Категории</h2>
          </ul>
        </div>
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 ">
          <div class="products row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3" v-for="item in items">
              <CatalogItem :catalog="item"></CatalogItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CatalogItem from "@/components/Catalog/CatalogItem.vue";

export default {
  name: "CatalogView",
  components: {CatalogItem},
  data(){
    return{
      items: [
        {name: "Мобильные телефоны и аксессуары"},
        {name: "Компьютеры и офис"},
        {name: "Электроника"},
        {name: "Бытовая техника"},
        {name: "Безопасность и защита"},
        {name: "Строительство и ремонт"},
        {name: "Освещение"},
        {name: "Дом и сад"},
        {name: "Инструменты"},
        {name: "Автомобили и мотоциклы"},
        {name: "Канцтовары для офиса и дома"},
        {name: "Мебель"},
        {name: "Мужская одежда"},
        {name: "Женская одежда"},
        {name: "Обувь"},
        {name: "Детская одежда и обувь"},
        {name: "Аксессуары для одежды"},
        {name: "Украшения и аксессуары"},
        {name: "Наручные часы"},
        {name: "Багаж и сумки"},
        {name: "Спорт и развлечения"},
        {name: "Мать и ребенок"},
        {name: "Игрушки и хобби"},
        {name: "Красота и здоровье"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
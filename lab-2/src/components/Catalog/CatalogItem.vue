<template>
  <div>
    <a href="#">
      <div class="card gray-card" style="width: auto">
        <div class="card-body p-0 pt-1 pb-3">
          <div class="item-text-catalog">
            <h6 class="card-title">{{catalog.name}}</h6>
          </div>
        </div>
        <img src="/img/clocks2.png" style="width: 60%;margin-left: 40%;margin-top: 30%;border-radius: 24px">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: ['catalog']
}
</script>

<style scoped>

</style>
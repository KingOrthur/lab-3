<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand"><img src="/img/logo-aliexpress.svg"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Искать..." aria-label="Search">
              <button class="btn btn-outline-dark" type="submit">Искать</button>
            </form>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0" style="margin-left: auto">
            <li class="nav-item">
              <router-link :to="{name: 'login'}" class="nav-link">Войти</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Заказы</a>
            </li>
            <li class="nav-item cart-img">
              <img src="/img/cart.png"/>
              &nbsp;
              <b>{{ count }}</b>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app-header",
  data(){
    return {
      count: 10
    }
  }
}

</script>

<style scoped>

</style>
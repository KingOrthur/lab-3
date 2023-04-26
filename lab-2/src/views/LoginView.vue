<template>
  <main>
    <div class="authorize">
      <div class="border-bott pb-2">
        РЕГИСТРАЦИЯ
      </div>
      <div class="line-input"></div>
      <form>
        <div class="authorize-phone">
          <a href="">Вход по телефону</a>
        </div>

        <div class="mt-2 mb-3 email-container">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Адрес эл.почты">
          <div class="errors"></div>
        </div>
        <div class="mb-3 password-container">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Пароль">
          <div class="errors"></div>
        </div>

        <button type="submit" class="btn btn-primary mt-4 mb-3 w-100">Войти</button>
        <div class="authorize-password">
          <a href="">Забыли пароль?</a>
        </div>
        <div class="authorize-networks mt-4 mb-3">
          <div class="decorator mb-1"></div>
          <span class="text">
          Войти через соцсети
        </span>
          <div class="decorator mb-1"></div>
          <div class="badges mt-4 ">
            <div class="badge">
              <a href="https://google.com">
                <img src="/img/googlebadge.png" width="46" height="46">
              </a>
            </div>
            <div class="badge">
              <a href="https://mail.ru/">
                <img src="/img/mailrubadge.png" width="46" height="46">
              </a>
            </div>
            <div class="badge">
              <a href="https://vk.com/">
                <img src="/img/vkbadge.png" width="46" height="46">
              </a>
            </div>
            <div class="badge">
              <a href="https://ok.ru/">
                <img src="/img/okbadge.png" width="46" height="46">
              </a>
            </div>
          </div>
        </div>
      </form>
      <div class="ending-text">
        Регистрируясь на сайте или авторизуясь через социальные сети, вы соглашаетесь с
        <a href="">Пользовательским соглашением</a> и
        <a href="">Политикой конфиденциальности</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>

</style>
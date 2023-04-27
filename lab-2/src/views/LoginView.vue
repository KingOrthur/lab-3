<template>
  <main>
    <div class="authorize">
      <div class="border-bott pb-2">
        РЕГИСТРАЦИЯ
      </div>
      <div class="line-input"></div>
      <form @submit="loginForm">
        <div class="authorize-phone">
          <a href="">Вход по телефону</a>
        </div>

        <div class="mt-2 mb-3 email-container">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Адрес эл.почты" v-model="email">
          <div class="errors">{{emailError}}</div>
        </div>
        <div class="mb-3 password-container">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Пароль" v-model="password">
          <div class="errors">{{passwordError}}</div>
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
  name: "LoginView",
  data() {
    return {
      email: '',
      password: '',
      emailError: 'Заполните email',
      passwordError: 'Заполните пароль'
    }
  },
  methods: {
    loginForm(event){
      this.emailError = ''
      this.passwordError = ''

      if (this.email.trim() === ''){
        this.emailError = "Заполните email"
      }
      if (this.password.trim() === ''){
        this.passwordError = "Заполните пароль"
      }

      event.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>
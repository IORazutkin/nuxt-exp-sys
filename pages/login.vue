<template>
  <div class="login">
    <div class="container">
      <div class="login__frame">
        <div class="login__frame__title">
          Авторизация в системе
        </div>
        <form class="login__frame__form" @submit.prevent="sendForm">
          <div class="input-group">
            <input v-model="formData.username" class="field" placeholder="Логин">
          </div>
          <div class="input-group">
            <input v-model="formData.password" type="password" class="field" placeholder="Пароль">
          </div>
          <div class="input-group">
            <button class="submit-btn">
              Вход
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  formData: any = {
    username: '',
    password: ''
  }

  sendForm () {
    const formData = new FormData()
    formData.append('username', this.formData.username)
    formData.append('password', this.formData.password)

    this.$axios.$post('/login', formData).then(
      () => {
        this.$router.push('/')
      })
  }
}
</script>

<style lang="scss" scoped>
.login {
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  align-items: center;

  &__frame {
    background-color: white;
    padding: 32px;
    box-shadow: 0 0 1px 0 black;

    &__title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    }
  }
}
</style>

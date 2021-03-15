<template>
  <div class="page">
    <div class="page__header">
      <div class="container">
        <div class="page__header__wrapper">
          <div class="page__header__logo">
            <img src="~/assets/img/heartbeat.png" width="50" height="50" alt="">
            Болезни.net
          </div>
          <div>
            <nuxt-link to="/" class="mr-4">
              Регистрация пациента
            </nuxt-link>
            <button class="page__header__btn" @click="logout">
              Выход
            </button>
          </div>
        </div>
      </div>
    </div>
    <form class="page__form" @submit.prevent="addUser">
      <div class="container">
        <div class="page__form__wrapper">
          <div class="page__form__title">
            Записать пациента на услугу
          </div>
          <div class="input-group" :class="{'error': $v.formData.omsNum.$error}">
            <input v-model="formData.omsNum" v-mask="'################'" type="tel" class="field" placeholder="Номер ОМС">
          </div>
          <div class="input-group" :class="{'error': $v.formData.service.$error}">
            <v-select
              v-model="formData.service"
              :options="services"
              label="name"
              :searchable="false"
              placeholder="Услуга"
            />
          </div>
          <div class="input-group d-flex">
            <button class="submit-btn">
              Записать
            </button>
            <div v-if="message.title" class="message" :class="{'error': message.error}">
              {{ message.title }}
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import vSelect from 'vue-select'
import { mask } from 'vue-the-mask'
import { maxLength, minLength, required } from 'vuelidate/lib/validators'

@Component({
  components: {
    vSelect
  },
  directives: {
    mask
  }
})
export default class extends Vue {
  services!: any
  message: any = {
    title: '',
    error: false
  }

  formData: any = {
    omsNum: '',
    service: null
  }

  asyncData (context: any) {
    return context.$axios.$get('/api/service').then(
      (response: any) => ({
        services: response
      })
    )
  }

  logout () {
    this.$axios.$get(process.env.API_ENDPOINT + '/logout').then(
      () => {
        this.$router.push('/login')
      }
    )
  }

  addUser () {
    this.$v.$touch()

    if (this.$v.$error) {
      return
    }

    this.$axios.$post(process.env.API_ENDPOINT + '/api/service-patient', this.formData).then(
      (response: any) => {
        if (response) {
          this.message.title = 'Пользователь записан на услугу'
        }

        setTimeout(() => {
          this.message.title = ''
          this.message.error = false
        }, 3000)
      }
    )
  }

  validations () {
    return {
      formData: {
        omsNum: {
          required,
          maxLength: maxLength(16),
          minLength: minLength(16)
        },
        service: {
          required
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #f0f0f0;
  min-height: 100vh;

  &__header {
    padding: 16px 0;
    background-color: white;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      font-size: 18px;
      font-weight: bold;

      img {
        margin-right: 16px;
      }
    }

    &__btn {
      border: 1px solid #ccc;
      border-radius: 3px;
      background-color: white;
      padding: 8px 32px;
    }
  }

  &__form {
    &__wrapper {
      background-color: white;
      padding: 32px;
      margin-top: 32px;
      box-shadow: 0 0 1px 0 black;
    }

    &__title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .message {
      margin-left: 15px;
      flex-grow: 1;
      line-height: 61px;
      border: 1px solid #216a61;
      color: #216a61;
      border-radius: 8px;
      background-color: rgba(33, 106, 97, .1);
      padding: 0 16px;

      &.error {
        background-color: rgba(205, 92, 92, .1);
        color: indianred;
        border-color: indianred;
      }
    }
  }
}
</style>

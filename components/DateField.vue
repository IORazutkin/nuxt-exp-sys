<template>
  <input
    id="bday"
    v-mask="'##.##.####'"
    name="birth_date"
    class="field no-icon"
    placeholder="Дата рождения"
    required
    :value="value.split('-').reverse().join('.')"
    @input="$emit('input', $event.target.value.split('.').reverse().join('-'))"
  >
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { mask } from 'vue-the-mask'

@Component({
  directives: {
    mask
  }
})
export default class extends Vue {
  @Prop({
    type: String,
    default: ''
  }) value!: string

  mounted () {
    this.$nextTick(() => {
      if (this.value) {
        this.$emit('input', this.value.split('.').reverse().join('-'))
      }
    })
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="detail-screen">
    <h1 class="brand-name align-items-center d-flex">
      <small @click="navigateToMain" class="mr-4" >
        <v-icon>mdi-arrow-left</v-icon>
      </small>
      {{brand.name}}
    </h1>
    <p>{{brand.available_date}}</p>
    <label class="headline">States</label>
    <v-list dense>
      <v-list-item
        v-for="state in brand.state_registrations"
        :key="state.registrationNumber"
      >
        <label>{{state.state}}</label>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "MainScreen",
  computed: {
    ...mapState(["brand"])
  },
  methods: {
    ...mapActions(["getBrand"]),
    navigateToMain() {
      this.$router.push({
        name: "Main"
      })
    }
  },
  mounted() {
    this.getBrand(this.$route.params.id)
  }
}
</script>
<style lang="scss" scoped>

</style>
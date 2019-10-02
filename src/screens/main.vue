<template>
  <div class="main-screen">
    <v-card
      width="300"
      v-for="brand in brands"
      :key="brand.entity_id"
    >
      <v-card-title>{{brand.name}}</v-card-title>
      <v-card-text>States: {{brand.state_registrations.length}}</v-card-text>
      <v-card-actions>
        <v-btn text @click="navigateToDetail(brand.entity_id)" >
          Show
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "MainScreen",
  computed: {
    ...mapState(["brands"])
  },
  methods: {
    ...mapActions(["getBrands"]),
    navigateToDetail(brand_id) {
      this.$router.push({
        name: "Detail",
        params: {
          id: brand_id
        }
      })
    }
  },
  mounted() {
    this.getBrands()
  }
}
</script>
<style lang="scss" scoped>
.main-screen {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
}
</style>
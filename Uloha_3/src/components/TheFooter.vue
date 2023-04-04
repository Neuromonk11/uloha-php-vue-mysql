<template>
  <footer class="border-t">
    <VContainer class="flex justify-between py-8 lg:py-6">
      <nav>
        <ul class="flex flex-wrap -mb-4 -mr-6 font-medium md:-mr-4 text-4">
          <li
            v-for="item in $store.getters.navInfoPages"
            :key="item.slug"
            class="mb-4 mr-6 md:mr-4"
          >
            <router-link
              :to="`/info/${item.slug}`"
              class="transition-colors duration-200 hover:text-black"
            >
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="font-medium text-4 lg:hidden">© 2023 Copyrighting</div>
    </VContainer>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  async mounted() {
    await this.$store.dispatch('fetchNavInfoPages');
  },
};
</script>

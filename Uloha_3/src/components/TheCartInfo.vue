<template>
  <div class="p-5 border lg:py-4 lg:border-0 lg:border-t lg:px-0">
    <div class="mb-4">
      <VTableRow>
        <div>Products:</div>
        <div>{{ $store.getters.cartProductsCount }}</div>
      </VTableRow>
      <VTableRow>
        <div>Summary:</div>
        <div>{{ $store.getters.cartProductsPrice }} EUR</div>
      </VTableRow>
      <VTableRow>
        <div>Delivery:</div>
        <div>{{ $store.getters.delivery }} EUR</div>
      </VTableRow>
      <VTableFooter>
        <div>Whole:</div>
        <div>{{ totalPrice }} EUR</div>
      </VTableFooter>
    </div>
    <VButton form="checkoutForm" type="submit" full>Order</VButton>
  </div>
</template>

<script>
import VButton from '@/components/base/VButton.vue';
import VTableRow from '@/components/base/VTableRow.vue';
import VTableFooter from '@/components/base/VTableFooter.vue';

export default {
  name: 'TheCartInfo',
  components: {
    VButton, VTableRow, VTableFooter,
  },
  computed: {
    totalPrice() {
      return this.$store.getters.cartProductsPrice + this.$store.getters.delivery;
    },
  },
};
</script>

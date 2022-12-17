<template>
  <div id="app">
    <model-viewer
      id="product-demo"
      ar
      ar-modes="webxr scene-viewer"
      camera-controls
      src="./static/SHOE_CABINET.gltf"
      alt="Chair"
    >
      <!-- <div slot="poster" class="loader-wrapper">
        <img src="loader.svg"/>
      </div>
      <div slot="progress-bar"></div>
      <div class="footer">
        <div class="counter">
          <button id="decrement-counter" onclick="decrementQuantity()" disabled>-</button>
          <span id="product-quantity">0</span>
          <button onclick="incrementQuantity()">+</button>
        </div>
        <button onclick="addToCart()" class="button">Add to Bag</button>
        <button onclick="goToCheckout()" class="button orange">Buy Now</button>
      </div> -->
    </model-viewer>
  </div>
</template>

<script>
export default {
  name: 'App',
  // TODO language change do we need it i18n required for that
};
</script>

<style lang="scss">
</style>

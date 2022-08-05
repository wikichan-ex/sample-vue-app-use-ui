<template>
  <div class="home">
    <h2>Demo of Web components</h2>
    <p></p>
    <p>Lit Web Component:</p>
    <p><sample-lit-test text="Test" /></p>
    <p></p>
    <p>Stencil Web Component:</p>
    <p><sample-stencil-test text="Test" /></p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
})
export default class HomeView extends Vue {}
</script>

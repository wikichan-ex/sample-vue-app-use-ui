<template>
  <div class="home">
    <h>Demo of Web components</h>
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

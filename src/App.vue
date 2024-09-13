<template>
  <div id="app">
    <TheHeader />
    <BaseCard>
      <ListContact />
    </BaseCard>
  </div>
</template>

<script>
import TheHeader from './components/Layouts/TheHeader.vue';
import BaseCard from './components/Ui/BaseCard.vue';
import ListContact from './components/Ui/ListContact.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    BaseCard,
    ListContact
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

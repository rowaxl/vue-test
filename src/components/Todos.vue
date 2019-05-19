<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :value="todo.done" />
        {{todo.text}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState('todos', ['todos']),
    ...mapGetters('todos', ['size']),
  },
});
</script>


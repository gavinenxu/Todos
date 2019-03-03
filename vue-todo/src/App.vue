<template>
  <div id="app" class="container my-5 shadow-none p-3 mb-5 bg-light rounded" style="width: 600px">
    <h1 class="text-success text-center">Todos</h1>
    <Todos />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    Todos: () => import('@/components/Todos')
  }
}
</script>

<style>
</style>

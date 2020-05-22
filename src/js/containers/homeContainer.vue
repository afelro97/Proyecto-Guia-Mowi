<template>
    <div>
      <p>¡Hola Mowi! Te damos la bienvenida</p>
  </div>
</template>

<script>
  import consultServices from './../utilities/consultServices.js'; //consulta servicios

  export default {
      name: "HomeContainer",
      components: {
        //LoadingComponent,
      },
      data: () => ({
          isLoading: true,
      }),
      async created () {
         this.isLoading = false;
  		},
      methods: {

      }
  }
</script>
<style scoped>
</style>
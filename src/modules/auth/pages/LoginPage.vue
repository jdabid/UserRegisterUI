<template>
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <form @submit.prevent="login">      
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
        <input type="text" class="form-control" v-model="myForm.username">       
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input type="password" class="form-control" v-model="myForm.password" minlength="8" maxlength="9">
      </div>      
      <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'register' }" href="#" class="hover:underline"
      >Registrarse Aquí</RouterLink
    >
  </div>
</template>

<script lang="ts" src="./LoginPage.ts"></script>

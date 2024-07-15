<template>
  <div>
    <h1>Registro de usuarios</h1>


    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="myForm.name">       
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
        <input type="text" class="form-control" v-model="myForm.username">       
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input type="password" class="form-control" v-model="myForm.password">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Repetir Contraseña</label>
        <input type="password" class="form-control" v-model="myForm.password2">
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
  </div>
</template>

<script lang="ts" src="./RegisterPage"></script>

<template>
  <div>
    <h1>Actualizar</h1>
    <!-- Add a form to update a user -->
    <form @submit.prevent="update">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="myForm.name">       
      </div>      
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
        <input type="password" class="form-control" v-model="myForm.password" minlength="8" maxlength="9">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Repetir Contraseña</label>
        <input type="password" class="form-control" v-model="myForm.password2" minlength="8" maxlength="9">
      </div>
      <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>
  </div>  
</template>

<script lang="ts" src="./UpdateUserPage.ts"></script>

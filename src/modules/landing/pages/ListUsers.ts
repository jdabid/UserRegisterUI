import type { User } from '@/interfaces/User';
import { defineComponent, ref } from 'vue';
import { getUsers } from '../../actions/get-users';
import { deleteUser } from '@/modules/actions/delete-user';
import router from '@/router';

export default defineComponent({
  setup() {
    console.log('ListUsers');
    const usersBD: User[] = [];
    const users = ref(usersBD);

    const loadUsers = async()=>{
      const response = await getUsers();
      if(response.ok){
        const data = await response.json();
        users.value = data;
      }
    }

    loadUsers();

    /*getUsers()
    .then((data) => {
        console.log(data);
        if(data){
            usersBD = data;
        }
        users.value = usersBD;
    })
    .catch((error) => {
        console.error('Error:', error);
    });*/
    
    const updateUser = (userid: number) => {
      router.push({ path: `/landing/updateuser/${userid}` });      
    };

    const deleteUser2 = async(idUser: number) => {      

      const res = confirm('¿Está seguro de eliminar el usuario?');
      if(!res){
          return;
      }

      const index = users.value.findIndex((u) => u.id === idUser);
      const response = await deleteUser(idUser);      
      console.log(response);
      if(response.ok){
          alert('Usuario eliminado');
          users.value.splice(index, 1);
      }      
      else{
          alert('Error al eliminar usuario');                
      }
    };

    return {
      users,
      updateUser,
      deleteUser2,
    };
  },
});

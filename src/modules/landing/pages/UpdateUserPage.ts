import type { User } from '@/interfaces/User';
import { defineComponent, ref } from 'vue';
import { getUserById } from '../../actions/get-user-by-id';
import type { UserCreate } from '@/interfaces/UserCreate';
import { updateUser } from '@/modules/actions/update-user';

export default defineComponent({
  props: {
    userid: {
      required: true,
    },
  },
  setup(props) {
    console.log('UpdateUserPage');
    console.log(props.userid);

    const user: UserCreate = {
        id: 0,
        name: '',
        username: '',
        password: '',    
        password2: '',    
    };

    const myForm = ref<UserCreate>(user);

    const loadUser = async()=>{
      const response = await getUserById(props.userid);
      if(response.ok){
        const data = await response.json();
        myForm.value = data;
      }
    }
    console.log('loadUser');
    loadUser();

    const update = async() => {
      if(myForm.value.name === '' || myForm.value.username === '' || myForm.value.password === '' || myForm.value.password2 === ''){
        alert('Campos vacios');
        return;
      }

      if(myForm.value.password !== myForm.value.password2){
        alert('Contraseñas son diferentes');
        return;
      }

      const res = await updateUser(myForm.value, props.userid);
      if(res.ok){
        alert('Usuario actualizado');
      }      
    };

    return {
      myForm,
      update,
    };
  },
});

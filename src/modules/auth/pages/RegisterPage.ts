import type { UserCreate } from '@/interfaces/UserCreate';
import { createUser } from '@/modules/actions/create-user';
import router from '@/router';
import { defineComponent, ref } from 'vue';


export default defineComponent({  
  setup() {

    console.log(import.meta.env.baseURL);

    const user: UserCreate = {
        id: 0,
        name: '',
        username: '',
        password: '',    
        password2: '',    
    };

    const myForm = ref<UserCreate>(user);

    const register = async() => {   

        if(myForm.value.name === '' || myForm.value.username === '' || myForm.value.password === '' || myForm.value.password2 === ''){
            alert('Campos vacios');
            return;
        }

        if(myForm.value.password !== myForm.value.password2){
            alert('Contraseñas son diferentes');
            return;
        }
        const response = await createUser(myForm.value);
        
        if(response.ok){            
            router.push('/auth/login');            
        }
    };

    return {
      myForm,
      register,      
    };
  },
});

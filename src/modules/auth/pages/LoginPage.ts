import type { User } from '@/interfaces/User';
import { loginUser } from '@/modules/actions/login-user';
import router from '@/router';
import { defineComponent, ref } from 'vue';


export default defineComponent({  
  setup() {

    console.log(import.meta.env.baseURL);

    const user: User = {
        id: 0,
        name: '',
        username: '',
        password: '',  
    };

    const myForm = ref<User>(user);

    const login = async() => {   

        if(myForm.value.username === '' || myForm.value.password === '' ){
            alert('Campos vacios');
            return;
        }
        
        const response = await loginUser(myForm.value);                
        if(response.ok){            
            const data = await response.json();

            if(data?.token){
                localStorage.setItem('token', data.token);
            }
            router.push('/landing/home');
        }
        else{
            alert('Usuario o contraseña incorrectos');
        }
    };

    return {
      myForm,
      login,      
    };
  },
});

import type { User } from '@/interfaces/User';

export const getUsers = () => {
    const token = localStorage.getItem('token');
    const baseURL = 'https://localhost:7105';
    const request = fetch(`${baseURL}/api/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return request;
};

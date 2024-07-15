import type { User } from "@/interfaces/User";

export const updateUser = (user: User, id: any) => {
const token = localStorage.getItem('token');
const baseURL = 'https://localhost:7105';
const request = fetch(`${baseURL}/api/user?id=${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(user),
});
return request;
}

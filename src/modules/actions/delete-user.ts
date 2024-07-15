export const deleteUser = (id: number) => {
const token = localStorage.getItem('token');
const baseURL = 'https://localhost:7105';
const request = fetch(`${baseURL}/api/user/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});
return request;
}

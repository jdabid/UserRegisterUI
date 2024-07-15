import type { User } from "@/interfaces/User";

export const loginUser = (user: User) => {
const baseURL = 'https://localhost:7105';
const request = fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
});
return request;
}
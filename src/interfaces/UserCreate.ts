import type { User } from "./User";

export interface UserCreate extends User {
    password2: string;
}
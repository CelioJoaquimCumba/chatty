import { User } from "./User";

export type Message = {
    id: string;
    text: string;
    createdAt: string;
    sender: User;
}
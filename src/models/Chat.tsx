import { Message } from "./Message"
import { User } from "./User"

export type Chat = {
    id: string,
    name: string,
    createdAt: string,
    image: string
    users : User[]
    messages: Message[],
}
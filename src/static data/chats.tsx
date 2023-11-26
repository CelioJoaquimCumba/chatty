import { Message } from "@/models/Message";
import { User } from "@/models/User";
import { Chat } from "@/models/chat";


// Sample users
const user1: User = {
    id: "1",
    name: "John Doe",
    avatar: "avatar1.jpg",
    description: "Description 1",
    username: "john_doe",
    email: "john@example.com",
    phone: "123-456-7890",
    website: "www.johndoe.com",
};

const user2: User = {
    id: "2",
    name: "Jane Smith",
    avatar: "avatar2.jpg",
    description: "Description 2",
    username: "jane_smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    website: "www.janesmith.com",
};

// Sample messages
const message1: Message = {
    id: "1",
    text: "Hello, how are you?",
    createdAt: "2023-01-01T12:00:00",
    sender: user1,
};

const message2: Message = {
    id: "2",
    text: "I'm good, thank you!",
    createdAt: "2023-01-01T12:05:00",
    sender: user2,
};

// Sample chats
const chat1: Chat = {
    id: "1",
    name: "Chat 1",
    users: [user1, user2],
    createdAt: "2023-01-01T12:00:00",
    messages: [message1, message2],
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2080x10000:format=jpg/path/s2217cd0bb1220415/image/i97fe02c4f7d30c86/version/1688683802/chinese-dragon.jpg"
};

const chat2: Chat = {
    id: "2",
    name: "Chat 2",
    users: [user1],
    createdAt: "2023-01-02T10:00:00",
    messages: [message1],
    image: "https://randomuser.me/api/portraits/women/3.jpg"
};

export const chats: Chat[] = [chat1, chat2];

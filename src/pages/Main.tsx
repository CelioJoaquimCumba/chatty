import { NavigationBar } from "@/components/atoms/NavigationBar"
import { Chat } from "@/components/molecules/Chat"
import { Chats } from "@/components/molecules/Chats"
import { Profile } from "@/components/molecules/Profile"
import { Loader } from "@/components/organisms/Loader"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { useAuth } from "@/firebase/auth"
import { auth } from "@/firebase/firebase"
import { chats } from "@/static data/chats"
import { GoogleAuthProvider } from "firebase/auth"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
const uiConfig = {
    signInFlow : 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        // EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID
    ]
}
export const Main = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {authUser, isLoading} = useAuth()
    if (isLoading) {
        return <Loader/>
    }
    return(
        <div className="flex flex-col h-[calc(100dvh)] inset-0">
            <ModeToggle/>
            <NavigationBar/>
            <div className={`${authUser ? "hidden" : "flex"} absolute  w-screen h-screen items-center justify-center bg-black bg-opacity-80 `}>
                <div className="flex p-8 bg-primary rounded-lg">
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}></StyledFirebaseAuth>
                </div>
            </div>
            <div className="flex h-full overflow-hidden pt-4">
                <Chats chats={chats} className="hidden w-full lg:flex lg:w-1/4"/>
                <Chat className="lg:w-2/4"/>
                <Profile className="hidden lg:flex w-1/4"/>
            </div>
        </div>
    )
}
import { Button } from "../ui/button"

export const Profile = () => {
    return(
        <div className="w-full h-full bg-background flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch px-4 flex-col justify-start items-start gap-2 flex">
                <div className="text-primary text-xl font-semibold  leading-7">profile</div>
            </div>
            <div className="self-stretch grow shrink basis-0 px-4 py-2 flex-col justify-start items-start gap-8 flex overflow-auto">
                <div className="self-stretch justify-start items-center gap-8 inline-flex">
                    <img className="w-32 h-32 rounded-lg" src="https://via.placeholder.com/128x128" />
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="flex-col justify-center items-start gap-0.5 flex">
                            <div className="text-primary text-xl font-semibold  leading-7">Celio Cumba</div>
                            <div className="text-foreground text-base font-light  leading-normal">That one guy</div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                            <Button variant={"outline"}>Link</Button>
                            <Button variant={"outline"}>Edit</Button>
                        </div>
                    </div>
                </div>
                <div className="self-stretch border border-gray-200"></div>
                <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                    <div className="text-foreground text-lg font-semibold  leading-7">biography</div>
                    <div className="self-stretch text-foreground text-base font-normal  leading-normal">just a guy trying to learn some stuff to succeed. Hope that I can make it :)</div>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                        <div  className="text-foreground text-base font-normal  leading-normal">+258 84 938 3897</div>
                    </div>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                        <div className="text-foreground text-base font-normal  underline leading-normal">celio-cumba/</div>
                    </div>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <img className="w-6 h-6" src="https://via.placeholder.com/24x24" />
                        <div className="text-foreground text-base font-normal  leading-normal">celio.joaquim.cumba@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { SideBar } from "./SideBar"

export const MainLayout = ({ children }) => {
    return (
        <main
            className="w-screen h-screen flex overflow-hidden"
        >
            <SideBar />

            <div
                className="bg-[#f5f7f9] w-full h-full overflow-y-scroll px-10 py-5"
            >
                {children}
            </div>
        </main>
    )
}

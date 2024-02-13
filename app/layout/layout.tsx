import Navbar from "~/components/navBar";


export default function Layout({children}:{children:JSX.Element}) {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <div className="h-[100vh] flex">
                <Navbar />
                <div className="flex h-[100vh] bg-[#292524] flex-[3] justify-center items-center overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}
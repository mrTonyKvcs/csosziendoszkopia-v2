import Navbar from "@/Components/UI/Navbar";

export default function Guest({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}

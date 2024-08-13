import Authbar from "../../../public/comp/Authbar";
import "../styles/globals.css";
import Footer from "../../../public/comp/Footer";

export default function AppointmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Authbar/>
            {children}
            <Footer />
        </>
    );
}
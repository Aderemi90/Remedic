import "../styles/globals.css";
import Footer from "../../../public/comp/Footer";

export default function AppointmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}
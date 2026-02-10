import Header from "../common/Header";
import Footer from "../common/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 px-6 py-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}

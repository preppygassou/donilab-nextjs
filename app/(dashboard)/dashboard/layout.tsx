import InfoBar from "@/components/global/infobar";
import BlurPage from "@/components/global/blur-page";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar-old";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  let allNoti: any = []

  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">{children}</main>
      </div>
    </>
  );
};

export default ProtectedLayout;

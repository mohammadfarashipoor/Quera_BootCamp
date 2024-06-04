import Menu from "@/views/Menu";
import SidebarRight from "@/views/SideBarRight";
import Header from "@/views/Header";

function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout flex justify-between">
      <Menu />
      <main id="main" className="main flex--2">
        <Header />
        {children}
      </main>
      <SidebarRight />
    </div>
  );
}

export default AppLayout;

import Sidebar from "../components/ui/docs/SideBar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen px-2">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 overflow-auto">
        <Sidebar />
      </div>
      {/* Mobile/Tablet Content - full width */}
      <div className="flex-1 overflow-auto md:ml-0">{children}</div>
    </div>
  );
}

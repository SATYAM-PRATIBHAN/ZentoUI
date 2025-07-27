import Sidebar from "../components/ui/docs/SideBar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen px-2">
      <div className="w-64 overflow-auto">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

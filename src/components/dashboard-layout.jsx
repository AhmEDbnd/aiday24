import MainSidebar from "./MainSidebar"
import SecondarySidebar from "./SecondarySidebar"

export function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <MainSidebar />
      <div className="flex flex-col flex-1">
        <SecondarySidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
import { Header } from '@/core/components/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 px-6 py-8">{children}</div>
    </div>
  )
}

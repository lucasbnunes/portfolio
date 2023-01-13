import { ContactBar } from "./ContactBar"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <ContactBar />
      <main className="flex-1 lg:ml-20 mb-40">
        {children}
      </main>
    </div>
  )
}

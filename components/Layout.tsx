import { ContactBar } from "./ContactBar"

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({children}: LayoutProps) {
  return (
    <div className="flex min-h-screen">
        <ContactBar />
        <main className="flex-1">
          {children}   
        </main>
    </div>
  )
}

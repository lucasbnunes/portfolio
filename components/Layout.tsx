import { ContactBar } from "./ContactBar"

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({children}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
        <ContactBar />
        <main className="flex-1 lg:ml-20">
          {children}   
        </main>
    </div>
  )
}

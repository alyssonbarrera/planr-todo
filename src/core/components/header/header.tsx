import { Button } from '@/core/components/ui/button'
import { LogOut } from 'lucide-react'
import { logoutAction } from './header.action'

export function Header() {
  return (
    <header className="border-b px-6">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <title>Planr Logo</title>
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="font-medium text-lg">Planr</span>
        </div>
        <form action={logoutAction}>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </header>
  )
}

import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import './globals.css'

export const metadata = {
  title: 'Moments',
  description: 'Logo analysis workspace with Clerk authentication',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <div className="page">
            <header className="topbar">
              <div className="brand">Moments</div>
              <div className="auth">
                <Show when="signed-out">
                  <SignInButton />
                  <SignUpButton />
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </div>
            </header>
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  )
}

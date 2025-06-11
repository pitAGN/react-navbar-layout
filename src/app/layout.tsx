import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Aplicación Multi-Página',
  description: 'Aplicación con múltiples páginas y layouts en Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-indigo-700 text-white p-4 shadow-md">
          <nav className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mi App</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-indigo-200">
                Inicio
              </Link>
              <Link href="/about" className="hover:text-indigo-200">
                Acerca
              </Link>
              <Link href="/services" className="hover:text-indigo-200">
                Servicios
              </Link>
              <Link href="/contact" className="hover:text-indigo-200">
                Contacto
              </Link>
              <Link href="/blog" className="hover:text-indigo-200">
                Blog
              </Link>
            </div>
            <div className='"flex items-center gap-4'>
              <SignedOut>
                <div className="flex gap-2">
                  <SignInButton mode="modal"/>
                  <SignUpButton mode="modal"/>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl='/' />
              </SignedIn>
            </div>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 Mi App. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
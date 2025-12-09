import './global.css';
import { Inter, Poppins } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '../components/navbar';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Nomos - Deputados',
  description: 'Aplicação para consulta de deputados',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-background-default text-text-primary font-sans">
        <Providers>
          <Navbar />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

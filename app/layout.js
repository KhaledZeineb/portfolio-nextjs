import './globals.css';

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio Next.js industrialisé avec Backstage',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

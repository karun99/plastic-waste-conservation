import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://plastic-waste-conservation.vercel.app'
  ),
  title: {
    default: 'Plastic Waste & Its Conservation Strategy',
    template: '%s | Plastic Waste Conservation'
  },
  description:
    "A Class 9 student project by Kunda Subramanya Satyanarayana, St John's English Medium School, Vijayawada - plastic waste literacy, six real-world case studies, and an AI tutor.",
  authors: [{ name: 'Kunda Subramanya Satyanarayana' }],
  keywords: [
    'plastic waste',
    'conservation',
    'microplastics',
    'recycling',
    'green computing',
    'case studies'
  ],
  openGraph: {
    title: 'Plastic Waste & Its Conservation Strategy',
    description:
      'Plastic literacy, six conservation case studies, and an AI tutor. Class 9 project, Vijayawada.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="container">
          {children}
        </main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}

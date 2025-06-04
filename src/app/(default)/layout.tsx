import BackToTop from '@/components/general/back-top-top';
import { Providers } from '@/components/general/providers';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { Toaster } from '@/components/ui/toaster';

export default function DefaultLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <BackToTop />
      <Header />
      {children}
      <Toaster />
      <Footer />
    </Providers>
  );
}



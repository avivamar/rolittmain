import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import PreOrderContent from './PreOrderContent';
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function PreOrderPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-background text-foreground">
        <PreOrderContent />
      </main>
      <Footer />
    </>
  );
}
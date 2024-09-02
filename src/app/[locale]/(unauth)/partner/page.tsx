import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import PartnerContent from './PartnerContent';
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-background text-foreground">
        <PartnerContent />
      </main>
      <Footer />
    </>
  );
}
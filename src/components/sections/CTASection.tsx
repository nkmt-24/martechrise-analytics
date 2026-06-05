import Container from '../layout/Container';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden mb-16 mx-4 lg:mx-auto max-w-7xl rounded-3xl bg-[#050505] border border-white/5 shadow-2xl">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Trust Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop making decisions on broken tracking. Let's build a scalable, privacy-first analytics architecture that gives you a crystal-clear view of your ROI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white border-transparent">
              Get a Free Audit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="w-full sm:w-auto text-white border-gray-600 hover:bg-gray-800 hover:border-gray-500">
              View Case Studies
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

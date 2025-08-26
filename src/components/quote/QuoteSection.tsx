import { motion } from 'framer-motion';
import { QuoteForm } from './QuoteForm';

export const QuoteSection = () => {
  return (
    <section id="cotizar" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Solicita una Cotización
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y nuestro equipo te contactará a la brevedad con una propuesta personalizada
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};
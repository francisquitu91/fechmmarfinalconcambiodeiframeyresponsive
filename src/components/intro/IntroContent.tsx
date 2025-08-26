import { motion } from 'framer-motion';
import { useTypewriter } from './hooks/useTypewriter';

interface IntroContentProps {
  duration: number;
}

const IntroContent = ({ duration }: IntroContentProps) => {
  const text = 'Navegando hacia la excelencia en servicios navales y marítimos';
  const typingDuration = duration - 2000;
  const charSpeed = Math.floor(typingDuration / text.length);

  const { displayText, isComplete } = useTypewriter(text, charSpeed);

  return (
    <div className="relative z-10 flex flex-col items-center justify-end h-screen pb-32">
      <div className="space-y-24 text-center">
        <motion.img
          src="https://i.ibb.co/D9jPFhP/opci-n-4.png"
          alt="Fechmmar Logo"
          className="w-72 h-auto mx-auto brightness-110"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide italic text-[#FFFFFF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            {displayText}
            <span 
              className={`inline-block w-0.5 h-6 ml-1 bg-[#FFFFFF] ${
                isComplete ? 'animate-none opacity-0' : 'animate-pulse'
              }`} 
            />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroContent;
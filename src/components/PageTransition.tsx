"use client"
import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" } // Delay to synchronize with StairTransition
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  duration?: number;
  stagger?: number;
  italicWord?: string;
  italicClassName?: string;
  animateOnMount?: boolean;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  wordClassName = '',
  as = 'h2',
  delay = 0,
  duration = 1.25,
  stagger = 0.06,
  italicWord,
  italicClassName = 'italic-serif text-[#176BFF]',
  animateOnMount = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const Tag = as as any;

  if (shouldReduceMotion) {
    return (
      <Tag className={className}>
        {words.map((word, i) => {
          const isItalic = italicWord && word.toLowerCase().includes(italicWord.toLowerCase());
          return (
            <span key={i} className={isItalic ? italicClassName : wordClassName}>
              {word}{' '}
            </span>
          );
        })}
      </Tag>
    );
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      {...(animateOnMount
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, margin: '-80px' } })}
      className={`inline-block ${className}`}
    >
      <Tag className="inline">
        {words.map((word, i) => {
          const isItalic = italicWord && word.toLowerCase().includes(italicWord.toLowerCase());
          return (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`inline-block mr-[0.28em] will-change-[transform,opacity,filter] ${
                isItalic ? italicClassName : wordClassName
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </Tag>
    </motion.div>
  );
};


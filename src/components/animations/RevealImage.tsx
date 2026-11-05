import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  variant?: 'clip' | 'scale' | 'fade' | 'parallax';
  delay?: number;
  priority?: boolean;
}

export const RevealImage: React.FC<RevealImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  variant = 'scale',
  delay = 0,
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-hidden ${containerClassName}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Animation variants
  if (variant === 'clip') {
    return (
      <motion.div
        ref={containerRef}
        initial={{ clipPath: 'inset(14% 0% 14% 0%)', opacity: 0 }}
        {...(priority
          ? { animate: { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 } }
          : {
              whileInView: { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 },
              viewport: { once: true, margin: '-80px' },
            })}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className={`overflow-hidden ${containerClassName}`}
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: 1.12 }}
          {...(priority
            ? { animate: { scale: 1 } }
            : {
                whileInView: { scale: 1 },
                viewport: { once: true },
              })}
          transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className={`w-full h-full object-cover will-change-transform ${className}`}
          referrerPolicy="no-referrer"
        />
      </motion.div>
    );
  }

  if (variant === 'parallax') {
    return (
      <div ref={containerRef} className={`overflow-hidden relative ${containerClassName}`}>
        <motion.img
          src={src}
          alt={alt}
          style={{ y: parallaxY, scale: 1.12 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.3, delay }}
          className={`w-full h-full object-cover will-change-transform ${className}`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 22 }}
      {...(priority
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-80px' },
          })}
      transition={{ duration: 1.35, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={`overflow-hidden ${containerClassName}`}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.09 }}
        {...(priority
          ? { animate: { scale: 1 } }
          : {
              whileInView: { scale: 1 },
              viewport: { once: true },
            })}
        transition={{ duration: 1.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className={`w-full h-full object-cover will-change-transform ${className}`}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};

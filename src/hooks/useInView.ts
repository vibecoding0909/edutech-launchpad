import { useInView as useIntersectionObserver } from 'react-intersection-observer';

export const useInView = (options?: { threshold?: number; triggerOnce?: boolean }) => {
  return useIntersectionObserver({
    threshold: options?.threshold || 0.1,
    triggerOnce: options?.triggerOnce !== false,
  });
};
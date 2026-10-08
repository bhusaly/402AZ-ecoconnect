import React, { type ReactNode } from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<LayoutProps> = ({ children, className = "" }) => (
  <div className={`max-w-9xl mx-auto px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);



interface SectionProps extends LayoutProps {
  bg?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", bg = "bg-white" }) => (
  <section className={`py-20 md:py-32 ${bg} ${className}`}>
    <Navbar />
    {children}
    <Footer />
  </section>
);
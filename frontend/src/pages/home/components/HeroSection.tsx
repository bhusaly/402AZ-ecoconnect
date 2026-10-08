import React from 'react';
import { Container } from '../../../compoments/Layout';
import { Heading, Text } from '../../../compoments/Typography';
import { Button } from '../../../compoments/Button';

interface HeroSectionProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ search, onSearchChange }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-12">
      <Container>
        <div className="bg-slate-50 border border-slate-200 rounded-lg py-16 px-6 text-center">
          <Heading level={1} className="mb-4 md:!text-5xl">
            Discover sustainable businesses <br />
            <span className="text-emerald-600">in Coventry &amp; Warwickshire</span>
          </Heading>

          <Text className="mb-8">
            Zero-waste shops, repair cafés and local food producers
          </Text>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search businesses..."
              className="flex-1 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500"
            />
            <Button variant="success">Search</Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

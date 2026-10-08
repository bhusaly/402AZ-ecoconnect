import React from 'react';
import { Container } from '../../../compoments/Layout';
import { Heading, Text } from '../../../compoments/Typography';
import { BusinessCard } from '../../directory/components/BusinessCard';
import type { Business } from '../../../data/businesses';

interface BusinessListingSectionProps {
  businesses: Business[];
}

export const BusinessListingSection: React.FC<BusinessListingSectionProps> = ({ businesses }) => {
  return (
    <section className="py-12">
      <Container>
        <Heading level={2} className="mb-8">
          Business
        </Heading>

        {businesses.length === 0 ? (
          <Text>No businesses found.</Text>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default BusinessListingSection;

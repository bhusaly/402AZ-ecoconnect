import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { BusinessListingSection } from './components/BusinessListingSection';
import type { Business } from '../../types/business';

// Dummy data — replace with the API later
const businesses: Business[] = [
  {
    id: 'green-bean-cafe',
    name: 'Green Bean Café',
    category: 'Food/Service',
    location: 'Coventry',
    rating: 4.1,
    reviewCount: 18,
    description: 'Local café with refill discounts and compostable packaging.',
    address: '14 Far Gosford St, Coventry CV1 5DZ',
    phone: '024 7600 1122',
    website: 'greenbeancafe.co.uk',
    openingHours: 'Mon–Sat 8:00–17:00',
    image: 'https://placehold.co/600x400/e0e0e0/666666?text=Green+Bean+Cafe',
  },
  {
    id: 'the-repair-hub',
    name: 'The Repair Hub',
    category: 'Repair Café',
    location: 'Coventry',
    rating: 4.3,
    reviewCount: 27,
    description: 'Community repair café fixing electronics, bikes and clothes.',
    address: 'Fargo Village, Far Gosford St, Coventry CV1 5ED',
    phone: '024 7655 0192',
    website: 'repairhubcoventry.org.uk',
    openingHours: 'Wed–Sat 10:00–16:00',
    image: 'https://placehold.co/600x400/e0e0e0/666666?text=The+Repair+Hub',
  },
  {
    id: 'reuse-coventry',
    name: 'ReUse Coventry',
    category: 'Zero-Waste Shop',
    location: 'Coventry',
    rating: 4.3,
    reviewCount: 15,
    description: 'Second-hand furniture, homeware and building materials.',
    address: 'Hertford St, Coventry CV1 1LF',
    phone: '024 7622 3344',
    website: 'reusecoventry.org.uk',
    openingHours: 'Tue–Sun 9:30–17:00',
    image: 'https://placehold.co/600x400/e0e0e0/666666?text=ReUse+Coventry',
  },
];

const Home = () => {
  const [search, setSearch] = useState('');

  const query = search.trim().toLowerCase();
  const filteredBusinesses = businesses.filter((business) =>
    [business.name, business.category, business.location, business.description]
      .join(' ')
      .toLowerCase()
      .includes(query)
  );

  return (
    <>
      <HeroSection search={search} onSearchChange={setSearch} />
      <BusinessListingSection businesses={filteredBusinesses} />
    </>
  );
};

export default Home;
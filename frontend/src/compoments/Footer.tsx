import React from 'react';
import { Container } from './Layout';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-300 text-gray-600">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-5 text-sm">
          <p>Coventry EcoConnect · A GreenLeap Initiative project</p>
          <p>SID: your-student-ID</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
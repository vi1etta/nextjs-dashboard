import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};


export default function Page() {
    console.log('Rendering Customer Page component');
    return <p>Customers Page</p>;
  }


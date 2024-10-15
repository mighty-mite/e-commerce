import CardField from '@/components/CardField';
import FilterSidebar from '@/components/FilterSidebar';

export default function Home() {
  return (
    <main className="container mx-auto mb-auto flex">
      <FilterSidebar />
      <div>
        <CardField />
      </div>
    </main>
  );
}

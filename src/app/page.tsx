import CardField from '@/components/CardField';
import FilterSidebar from '@/components/FilterSidebar';

interface IProps {
  searchParams: {
    skip?: string;
    category?: string;
    // [key: string]: string | undefined;
  };
}

export default function Home({ searchParams }: IProps) {
  return (
    <main className="container mx-auto mb-auto flex">
      <FilterSidebar />
      <div>
        <CardField searchParams={searchParams} />
      </div>
    </main>
  );
}

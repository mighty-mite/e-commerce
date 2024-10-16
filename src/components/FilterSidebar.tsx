import { Suspense } from 'react';
import Categories from './Categories';
import Sort from './Sort';
import Search from './Search';

export default async function FilterSidebar() {
  return (
    <div className="w-3/4">
      <div className="sticky top-28 border rounded-md border-gray-400 py-6 px-5 flex flex-col gap-6">
        <Suspense fallback={<h3>loading</h3>}>
          <Search />
        </Suspense>
        <Suspense fallback={<h3>loading</h3>}>
          <Categories />
        </Suspense>
        <Sort />
      </div>
    </div>
  );
}

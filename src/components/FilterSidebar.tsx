import Categories from './Categories';
import Sort from './Sort';

export default async function FilterSidebar() {
  return (
    <div className="w-3/4">
      <div className="sticky top-28 border rounded-md border-gray-400 py-6 px-5 flex flex-col gap-6">
        <Categories />
        <Sort />
      </div>
    </div>
  );
}

import Categories from './Categories';
import Sort from './Sort';

export default async function FilterSidebar() {
  return (
    <div className="py-6 px-5 border rounded-md border-gray-500 w-80 flex flex-col gap-6">
      <Categories />
      <Sort />
    </div>
  );
}

import CategoryItem from "./CategoryItem";

export default async function FilterSidebar() {
  const response = await fetch('https://dummyjson.com/products/category-list');
  const categories = await response.json();
  return (
    <div className='py-6 px-5 border rounded-md border-gray-500 w-64'>
      <h3>Categories</h3>
      <ul className="overflow-y-scroll h-96 categories">
        {categories.map((item: string, i: number) => <CategoryItem key={i} category={item} />)}
      </ul>
    </div>
  )
}
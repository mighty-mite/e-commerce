import CategoryItem from './CategoryItem';

export default async function Categories() {
  const response = await fetch('https://dummyjson.com/products/category-list');
  const categories = await response.json();
  return (
    <>
      <h3>Categories</h3>
      <ul className="overflow-y-scroll h-96 categories">
        {categories.map((item: string, i: number) => (
          <CategoryItem key={i} category={item} />
        ))}
      </ul>
    </>
  );
}

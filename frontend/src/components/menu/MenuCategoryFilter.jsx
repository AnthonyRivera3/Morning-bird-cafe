function MenuCategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="menu-category-filter">

      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className={
            selectedCategory === category
              ? "category-button active"
              : "category-button"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default MenuCategoryFilter;
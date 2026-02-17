import React, { useState, useCallback } from "react";
import { products, categories } from "../data/products";
import CategoryFilter from "../components/CategoryFilter";
import EnhancedProductGrid from "../components/EnhancedProductGrid";
import { Menu, Leaf, Drumstick } from "lucide-react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState("all");

  const handleCategoryChange = React.useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  const handleSearchChange = React.useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const toggleDietaryFilter = React.useCallback(() => {
    setDietaryFilter((prev) => {
      const filters = ["all", "veg", "non-veg"];
      const currentIndex = filters.indexOf(prev);
      const nextIndex = (currentIndex + 1) % filters.length;
      return filters[nextIndex];
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50/50 pb-12">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-neutral-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black italic text-[#FF6B00] tracking-tighter drop-shadow-sm font-heading">
            Maa Bakery
          </h1>

          <div className="flex items-center gap-2">
            {/* Header Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleDietaryFilter}
                className="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-full transition-all border border-neutral-200 shadow-sm"
              >
                <div
                  className={`w-3 h-3 rounded-full shadow-inner ${
                    dietaryFilter === "veg"
                      ? "bg-green-500"
                      : dietaryFilter === "non-veg"
                        ? "bg-red-500"
                        : "bg-orange-500"
                  }`}
                />
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600 hidden xs:block">
                  {dietaryFilter === "all"
                    ? "All"
                    : dietaryFilter === "veg"
                      ? "Veg"
                      : "Non-Veg"}
                </span>
                <div className="xs:hidden text-neutral-400">
                  {dietaryFilter === "veg" ? (
                    <Leaf className="w-3 h-3 text-green-600" />
                  ) : dietaryFilter === "non-veg" ? (
                    <Drumstick className="w-3 h-3 text-red-600" />
                  ) : (
                    <div className="w-1 h-1 bg-orange-500 rounded-full" />
                  )}
                </div>
              </button>

              <button className="p-2 text-neutral-600 hover:bg-neutral-50 rounded-full transition-colors relative">
                <Menu className="w-6 h-6" />
              </button>
            </div>

            <nav className="hidden lg:flex items-center gap-6 font-bold text-neutral-600 text-sm ml-4">
              <a href="#" className="hover:text-orange-600 transition-colors">
                Home
              </a>
              <a
                href="#"
                className="text-orange-600 border-b-2 border-orange-600 pb-1"
              >
                Menu
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                Order
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                History
              </a>
              <a href="#" className="hover:text-orange-600 transition-colors">
                Admin
              </a>
              <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-black shadow-lg shadow-orange-100 uppercase tracking-wider hover:bg-orange-700 transition-all">
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Filter Section */}
        <section className="bg-white p-4 sm:p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-neutral-50 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-grow w-full">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <EnhancedProductGrid
            products={products}
            activeCategory={activeCategory}
            searchTerm={searchTerm}
            dietaryFilter={dietaryFilter}
          />
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;

import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { fetchGateoryProducts } from "@/store/categorySlice/categorySlices";
import { setSearchQuery } from "@/store/Search/searchslice";
import CardCategory from "@/components/HomeComponents/Furit&Veges/CardCategory";

export default function SearchResults() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { items = [], loading, error } = useSelector((state) => state.categoryProducts);

  // Read query param safely
  const rawQueryParam = new URLSearchParams(location.search).get("query");
  const rawQuery = typeof rawQueryParam === "string" ? rawQueryParam : "";

  // Debounce query string
  const [debouncedQuery] = useDebounce(rawQuery.toLowerCase(), 300);

  // Update redux search query state
  useEffect(() => {
    dispatch(setSearchQuery(debouncedQuery));
  }, [dispatch, debouncedQuery]);

  // Fetch products if not loaded
  useEffect(() => {
    if (!items.length) dispatch(fetchGateoryProducts());
  }, [dispatch, items.length]);

  // Filter products manually by matching any of title, description or category fields
  const filteredProducts = useMemo(() => {
    if (!debouncedQuery.trim()) return items;

    return items.filter((product) => {
      const query = debouncedQuery.toLowerCase();

      return (
        (product.title?.toLowerCase().includes(query)) ||
        (product.description?.toLowerCase().includes(query)) ||
        (product.category?.toLowerCase().includes(query))
      );
    });
  }, [items, debouncedQuery]);

  if (loading === "pending") return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="container">
      <div className="w-full md:w-[70%] h-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 h-full p-4">
          {filteredProducts.map((product) => (
            <CardCategory key={product.id} product={product} discount className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}

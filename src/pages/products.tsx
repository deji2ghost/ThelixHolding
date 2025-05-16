import DropDown from "@/components/layouts/dropDown";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/const";
import { useAppDispatch } from "@/store/hook";
import { resetPage, setPage } from "@/store/pagination";
import { fetchProducts } from "@/store/productsSlice";
import type { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useAppDispatch();
  const { items: products, loading, error } = useSelector((state: RootState) => state.products);
  const { currentPage, itemsPerPage } = useSelector((state: RootState) => state.pagination);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const filtered = products?.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item?.category?.trim().toLowerCase() ===
        selectedCategory.trim().toLowerCase();

    const matchesSearch = item?.name
      ?.toLowerCase()
      .includes(searchProduct.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(e.target.value);
    dispatch(resetPage());
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    dispatch(resetPage());
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered?.length / itemsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <Input type="text" value={searchProduct} onChange={handleSearch}/>
      </div>
      <DropDown changeCategory={handleCategoryChange} selectedCategory={selectedCategory} data={categories} />
      <div className="flex flex-wrap gap-3">
        {currentItems?.map((item) => {
          return (
            <div key={item?.id} className="w-[30%] border border-red-700">
              <div className="w-[20%]">
                <img src={item?.imageUrl} />
              </div>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => dispatch(setPage(Math.max(currentPage - 1, 1)))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => dispatch(setPage(Math.min(currentPage + 1, totalPages)))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;

import DropDown from "@/components/layouts/dropDown";
import Modal from "@/components/layouts/modal";
import MosaicGrid from "@/components/layouts/mosaic";
import CustomSelect from "@/components/layouts/select";
import CustomSkeleton from "@/components/layouts/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AxiosInstance from "@/lib/axiosInstance";
import { allCategories, categories } from "@/lib/const";
import type { Product } from "@/lib/types";
import { useAppDispatch } from "@/store/hook";
import { resetPage, setPage } from "@/store/pagination";
import { fetchProducts } from "@/store/productsSlice";
import type { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryValue, setSelectedCategoryValue] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useAppDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state: RootState) => state.products);
  const { currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.pagination
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleModal = () => {
    setOpenModal((prev) => {
      const next = !prev;

      if (!next) {
        reset({
          name: "",
          price: "",
          imageUrl: "",
          category: "all",
        });
        setSelectedCategoryValue("");
      }

      return next;
    });
  };
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
  };

  const handleSave = async (productData: Product) => {
    try {
      const response = await AxiosInstance.post("/api/products", productData);
      if (response) {
        toast("Product added successfully");
        dispatch(fetchProducts());
        setOpenModal(false);
        reset({
          name: "",
          price: "",
          imageUrl: "",
          category: "all",
        });
        setSelectedCategoryValue("");
      } else {
        alert(`Failed: an error occured`);
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Something went wrong");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      imageUrl: "",
      category: "all",
    },
  });

  const [uploading, setUploading] = useState(false);
  const imageUrl = watch("imageUrl");

  const onSubmit = (data: Product) => {
    data.category = selectedCategoryValue;
    handleSave(data);
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const json = await res.json();
      if (json.secure_url) {
        setValue("imageUrl", json.secure_url, { shouldValidate: true });
      }
    } catch (error) {
      alert("Failed to upload image");
      console.error(error);
    }
    setUploading(false);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    dispatch(resetPage());
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered?.length / itemsPerPage);

  if (loading) return <div className="">
    <CustomSkeleton />
  </div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p>Search for an item here</p>
          <Input type="text" value={searchProduct} onChange={handleSearch} />
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <p>Filter:</p>
            <DropDown
              changeCategory={handleCategoryChange}
              selectedCategory={selectedCategory}
              data={categories}
            />
          </div>
          <Button onClick={handleModal}>add products</Button>
        </div>
      </div>
      <div className="flex flex-col justify-between h-screen">
        <div>
          <MosaicGrid items={currentItems} />
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          <Button
            onClick={() => dispatch(setPage(Math.max(currentPage - 1, 1)))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </Button>
          <span className="px-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() =>
              dispatch(setPage(Math.min(currentPage + 1, totalPages)))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      </div>
      <Modal
        Header={"Add new product"}
        open={openModal}
        body={
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="flex flex-col items-center gap-4 items-start">
              <Label htmlFor="name" className="text-right py-1">
                Name
              </Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="col-span-3 w-full"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="col-span-4 text-red-600 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center gap-4 items-start">
              <Label htmlFor="price" className="text-right py-1">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                  min: { value: 0.01, message: "Price must be positive" },
                })}
                className="col-span-3"
                aria-invalid={errors.price ? "true" : "false"}
              />
              {errors.price && (
                <p className="col-span-4 text-red-600 text-sm">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center gap-4 items-start">
              <Label htmlFor="image" className="text-right py-1">
                Image
              </Label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={uploadImage}
                className="col-span-3 border px-2 py-1 rounded-md w-full"
              />
              {uploading && (
                <p className="col-span-4 text-center">Uploading image...</p>
              )}
              {imageUrl && (
                <div className="col-span-4 text-center pt-2 h-[30px] w-[30px]">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="mx-auto max-h-40 rounded"
                  />
                </div>
              )}
            </div>
            <div>
              <Label className="py-1">select a category</Label>
              <CustomSelect
                data={allCategories}
                value={selectedCategoryValue}
                onChange={setSelectedCategoryValue}
              />
            </div>

            <Button type="submit" disabled={uploading}>
              Add product
            </Button>
            <Button
              variant="ghost"
              onClick={handleModal}
              type="button"
              className="ml-2"
            >
              Cancel
            </Button>
          </form>
        }
      />
    </div>
  );
};

export default Products;

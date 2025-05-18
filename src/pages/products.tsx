import DropDown from "@/components/layouts/dropDown";
import Modal from "@/components/layouts/modal";
import MosaicGrid from "@/components/layouts/mosaic";
import Pagination from "@/components/layouts/pagination";
import CustomSelect from "@/components/layouts/select";
import CustomSkeleton from "@/components/layouts/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AxiosInstance from "@/lib/axiosInstance";
import {
  allCategories,
  categories,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from "@/lib/const";
import type { Product } from "@/lib/types";
import { productSchema, type ProductFormData } from "@/lib/zodSchema";
import { useAppDispatch } from "@/store/hook";
import { closeModal, openModal } from "@/store/modal";
import { resetPage } from "@/store/pagination";
import { addProduct, fetchProducts } from "@/store/productsSlice";
import type { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateNumericId } from "@/lib/generateId";
import FormField from "@/components/layouts/formField";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchProduct, setSearchProduct] = useState("");
  const [uploading, setUploading] = useState(false);
  const openModalState = useSelector((state: RootState) => state.modal.isOpen);

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
    console.log(products);
  }, [products]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const resetFormState = () => {
    reset({ id: generateNumericId(), name: "", price: undefined, imageUrl: "", category: "" });
  };

  const handleModal = () => {
    if (openModalState) {
      dispatch(closeModal());
      resetFormState();
    } else {
      dispatch(openModal());
    }
  };

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
        dispatch(addProduct(response.data.product));
        dispatch(closeModal());
        resetFormState();
      } else {
        toast(`Failed: an error occured`);
      }
    } catch (error) {
      console.log(error);
      toast("Error saving product:");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      id: generateNumericId(),
      name: "",
      price: undefined,
      imageUrl: "",
      category: "",
    },
  });
  const imageUrl = watch("imageUrl");

  const onSubmit = (data: ProductFormData) => {
    console.log("clicked")
    console.log(errors)
    console.log(data);
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
      console.log(error);
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

  if (loading)
    return (
      <div className="">
        <CustomSkeleton />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between py-2">
        <div>
          <p>Search for an item here</p>
          <Input
            type="text"
            placeholder="search product"
            value={searchProduct}
            onChange={handleSearch}
          />
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
      <div className="flex flex-col justify-between min-h-screen">
        <div className="py-2">
          <MosaicGrid items={currentItems} />
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
      {openModalState && (
        <Modal
          MainHeader="Add product"
          Header={"Add new product"}
          open={openModalState}
          body={
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
              <FormField
                id="name"
                label="Name"
                type="text"
                placeholder="Enter a name"
                error={errors?.name}
                register={register}
                validationRules={{ required: "Name is required" }}
                ariaInvalid={errors.name ? true : false}
              />

              <FormField
                id="price"
                type="number"
                placeholder="Enter a price"
                min="0.01"
                step="0.01"
                error={errors?.price}
                register={register}
                validationRules={{
                    required: "Price is required",
                    valueAsNumber: true,
                    min: { value: 0.01, message: "Price must be positive" },
                  }}
                  label="Price"
                ariaInvalid={errors.price ? true : false}
              />

              <div className="flex flex-col">
                <FormField
                isFileInput={true}
                id="image"
                label="Image"
                type="text"
                placeholder="Choose an image"
                accept="image/*"
                onChange={uploadImage}
                error={errors?.imageUrl}
              />
                {uploading && (
                  <p className="col-span-4 text-center">Uploading image...</p>
                )}
                {imageUrl && (
                  <div className="col-span-4 overflow-y-hidden text-center py-2 h-[40px] w-[30px]">
                    <img
                      src={imageUrl}
                      alt="Uploaded"
                      className="mx-auto rounded"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start">
                <Label className="py-1">select a category</Label>
                <CustomSelect
                  placeholder="Select a category"
                  data={allCategories}
                  value={watch("category")}
                  onChange={(value) =>
                    setValue("category", value, { shouldValidate: true })
                  }
                />
                {errors.category && (
                  <p className="text-sm text-red">{errors.category.message}</p>
                )}
              </div>

              <Button type="submit" disabled={uploading || watch("price") <= 0}>
                { isSubmitting ? "Adding..." : "Add product"}
              </Button>
              <Button
                variant="ghost"
                onClick={handleModal}
                type="button"
                className="ml-2 border py-1"
              >
                Cancel
              </Button>
            </form>
          }
        />
      )}
    </div>
  );
};

export default Products;

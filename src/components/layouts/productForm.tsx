import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/layouts/select";
import type { Product } from "@/lib/types";

type ProductFormProps = {
  onSubmit: (data: Product) => void;
  uploading: boolean;
  imageUrl: string;
  selectedCategoryValue: string;
  setSelectedCategoryValue: (value: string) => void;
  uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
};

const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  uploading,
  imageUrl,
  selectedCategoryValue,
  setSelectedCategoryValue,
  uploadImage,
  handleCancel,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      <div className="flex flex-col items-start gap-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col items-start gap-4">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          step="0.01"
          {...register("price", {
            required: "Price is required",
            valueAsNumber: true,
            min: { value: 0.01, message: "Price must be positive" },
          })}
          aria-invalid={!!errors.price}
        />
        {errors.price && (
          <p className="text-red-600 text-sm">{errors.price.message}</p>
        )}
      </div>

      <div className="flex flex-col items-start gap-4">
        <Label htmlFor="image">Image</Label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={uploadImage}
          className="border px-2 py-1 rounded-md w-full"
        />
        {uploading && <p>Uploading image...</p>}
        {imageUrl && (
          <img src={imageUrl} alt="Uploaded" className="max-h-40 rounded" />
        )}
      </div>

      <div>
        <Label>Select a category</Label>
        <CustomSelect
          data={["shoes", "clothes", "accessories"]}
          value={selectedCategoryValue}
          onChange={setSelectedCategoryValue}
        />
      </div>

      <Button type="submit" disabled={uploading}>
        Add product
      </Button>
      <Button
        type="button"
        onClick={handleCancel}
        variant="ghost"
        className="ml-2 border"
      >
        Cancel
      </Button>
    </form>
  );
};

export default ProductForm;
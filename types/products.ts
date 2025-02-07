export interface Product {
  _id: string;
  productName: string;
  _type: "product";
  price: number;
  inventory: number;
  image?: {
    asset: {
      ref: string; // Sanity's image type for image field
      type: "image";
    };
  };
  description: string;
  slug: {
    _type: "slug";
    current: string;
  };
}

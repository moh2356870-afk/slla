import { memo } from 'react';
import { ProductCard } from '@salla.sa/twilight-components-react/product-card';

export interface Product {
  id: string | number;
  name: string;
  price?: string | number;
  promotion_title?: string;
  url?: string;
  image?: {
    url: string;
    alt?: string;
  };
  [key: string]: unknown;
}

export interface FeaturedProductsProps {
  data: {
    title?: string;
    subtitle?: string;
    products?: Product[];
    [key: string]: unknown;
  };
}

export const FeaturedProducts = memo(function FeaturedProducts({ data }: FeaturedProductsProps) {
  const products = data?.products || [];
  const title = data?.title || 'المنتجات المميزة';
  const subtitle = data?.subtitle;

  if (!products.length) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* عنوان القسم المميز */}
        <div className="text-center mb-10">
          {subtitle && (
            <span className="text-accent font-semibold text-sm mb-2 block tracking-wider uppercase">
              {subtitle}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {title}
          </h2>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-surface rounded-card shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between"
            >
              <ProductCard
                product={product}
                className="salla-product-card-custom"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
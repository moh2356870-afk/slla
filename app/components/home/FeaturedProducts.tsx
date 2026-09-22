import { memo } from 'react';
import { ProductCard } from '@salla.sa/twilight-components-react/product-card';
import { Link } from '@salla.sa/twilight-theme-engine/common';

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

export interface FixedProductsProps {
  data: {
    title?: string;
    subtitle?: string;
    products?: Product[];
    display_all_url?: string;
    show_display_all?: boolean;
    [key: string]: unknown;
  };
}

export const FixedProducts = memo(function FixedProducts({ data }: FixedProductsProps) {
  const products = data?.products || [];
  const title = data?.title;
  const subtitle = data?.subtitle;
  const displayAllUrl = data?.display_all_url;
  const showDisplayAll = data?.show_display_all !== false;

  if (!products.length) return null;

  return (
    <section className="py-12 bg-surface">
      <div className="container mx-auto px-4">
        {/* هيدر القسم والعنوان */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-200">
          <div>
            {subtitle && (
              <span className="text-accent font-semibold text-sm mb-1 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {title}
              </h2>
            )}
          </div>

          {showDisplayAll && displayAllUrl && (
            <Link
              href={displayAllUrl}
              className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors text-sm"
            >
              عرض الكل
              <svg
                className="w-4 h-4 mr-1 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-card shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between"
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
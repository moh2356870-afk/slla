import { memo } from 'react';
import { Link } from '@salla.sa/twilight-theme-engine/common';

export interface BrandItem {
  id: string | number;
  name?: string;
  url?: string;
  image?: {
    url: string;
    alt?: string;
  };
  [key: string]: unknown;
}

export interface BrandsProps {
  data: {
    title?: string;
    subtitle?: string;
    brands?: BrandItem[];
    [key: string]: unknown;
  };
}

export const Brands = memo(function Brands({ data }: BrandsProps) {
  const brands = data?.brands || [];
  const title = data?.title || 'شركاؤنا وشركات النجاح';
  const subtitle = data?.subtitle;

  if (!brands.length) return null;

  return (
    <section className="py-12 bg-surface border-y border-gray-100">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
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

        {/* شبكة العلامات التجارية */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={brand.url || '#'}
              className="bg-white p-6 rounded-card border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 flex items-center justify-center group h-28"
            >
              {brand.image?.url ? (
                <img
                  src={brand.image.url}
                  alt={brand.image.alt || brand.name || 'Brand'}
                  className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              ) : (
                <span className="font-semibold text-darkText group-hover:text-primary transition-colors text-sm">
                  {brand.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});
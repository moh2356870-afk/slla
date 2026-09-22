import { memo } from 'react';
import { Link } from '@salla.sa/twilight-theme-engine/common';

export interface CategoryItem {
  id: string | number;
  name: string;
  url?: string;
  image?: {
    url: string;
    alt?: string;
  };
  [key: string]: unknown;
}

export interface MainLinksProps {
  data: {
    title?: string;
    subtitle?: string;
    categories?: CategoryItem[];
    [key: string]: unknown;
  };
}

export const MainLinks = memo(function MainLinks({ data }: MainLinksProps) {
  const categories = data?.categories || [];
  const title = data?.title || 'تصفح أقسام المتجر';
  const subtitle = data?.subtitle;

  if (!categories.length) return null;

  return (
    <section className="py-12 bg-white">
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

        {/* شبكة التصنيفات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.url || '#'}
              className="group flex flex-col items-center bg-surface p-4 rounded-card border border-gray-100 hover:border-accent/40 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 text-center"
            >
              {category.image?.url && (
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 bg-white shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={category.image.url}
                    alt={category.image.alt || category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <span className="font-semibold text-darkText group-hover:text-primary transition-colors text-sm md:text-base">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});
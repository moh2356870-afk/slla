import { memo } from 'react';
import { Link } from '@salla.sa/twilight-theme-engine/common';

export interface BannerItem {
  id?: string | number;
  link?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  btnname?: string;
  [key: string]: unknown;
}

export interface EnhancedSquareBannersProps {
  data: {
    banners?: BannerItem[];
    square_banners?: BannerItem[];
    [key: string]: unknown;
  };
}

export const EnhancedSquareBanners = memo(function EnhancedSquareBanners({ data }: EnhancedSquareBannersProps) {
  const banners = data?.banners || data?.square_banners || [];

  if (!banners.length) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banners.map((banner, index) => (
            <div
              key={banner.id || index}
              className="relative overflow-hidden rounded-card bg-primary group shadow-sm hover:shadow-md transition-all duration-300"
              style={{ aspectRatio: '16/9' }}
            >
              {banner.image && (
                <img
                  src={banner.image}
                  alt={banner.title || 'Banner'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-right">
                {banner.subtitle && (
                  <span className="text-accent font-semibold text-xs md:text-sm mb-1 uppercase tracking-wider">
                    {banner.subtitle}
                  </span>
                )}
                {banner.title && (
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-4 leading-snug">
                    {banner.title}
                  </h3>
                )}
                {banner.link && (
                  <div>
                    <Link
                      href={banner.link}
                      className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-medium px-6 py-2.5 rounded-xl transition-all text-sm shadow-sm"
                    >
                      {banner.btnname || 'تسوق العرض'}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
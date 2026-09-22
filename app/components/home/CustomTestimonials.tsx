import { memo } from 'react';

export interface TestimonialItem {
  id: string | number;
  name?: string;
  comment?: string;
  rate?: number;
  image?: {
    url: string;
    alt?: string;
  };
  [key: string]: unknown;
}

export interface CustomTestimonialsProps {
  data: {
    title?: string;
    subtitle?: string;
    testimonials?: TestimonialItem[];
    [key: string]: unknown;
  };
}

export const CustomTestimonials = memo(function CustomTestimonials({ data }: CustomTestimonialsProps) {
  const testimonials = data?.testimonials || [];
  const title = data?.title || 'ماذا يقول عملاؤنا';
  const subtitle = data?.subtitle || 'تجربة تسوق مميزة نفتخر بها';

  if (!testimonials.length) {
    // محتوى افتراضي تجريبي في حال عدم وجود بيانات مضافة من لوحة التحكم
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm mb-2 block tracking-wider uppercase">
              {subtitle}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-surface p-8 rounded-card border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex text-accent mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-darkText text-base mb-6 leading-relaxed italic">
                    &ldquo;متجر راقي جداً، جودة المنتجات ممتازة وسرعة التوصيل فاقت توقعاتي. أنصح بالتعامل معه بقوة.&rdquo;
                  </p>
                </div>
                <div className="flex items-center pt-4 border-t border-gray-200/60">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center ml-3">
                    ع
                  </div>
                  <div>
                    <h4 className="font-bold text-darkText text-sm">عبدالله العمري</h4>
                    <span className="text-xs text-gray-500">عميل معتمد</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {subtitle && (
            <span className="text-accent font-semibold text-sm mb-2 block tracking-wider uppercase">
              {subtitle}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi) => (
            <div key={testi.id} className="bg-surface p-8 rounded-card border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-accent mb-4">
                  {[...Array(testi.rate || 5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-darkText text-base mb-6 leading-relaxed italic">
                  &ldquo;{testi.comment}&rdquo;
                </p>
              </div>
              <div className="flex items-center pt-4 border-t border-gray-200/60">
                {testi.image?.url ? (
                  <img src={testi.image.url} alt={testi.name || 'User'} className="w-10 h-10 rounded-full object-cover ml-3" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center ml-3">
                    {testi.name?.[0] || 'ع'}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-darkText text-sm">{testi.name}</h4>
                  <span className="text-xs text-gray-500">عميل معتمد</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
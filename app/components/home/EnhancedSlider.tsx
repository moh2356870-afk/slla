import { memo } from 'react';
import { SallaSlider } from '@salla.sa/twilight-components-react/slider';
import { Link } from '@salla.sa/twilight-theme-engine/common';

export interface SliderBanner {
  link?: string;
  image?: string;
  mobile_image?: string;
  video?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  btnname?: string;
  show_button?: boolean;
  direction?: string[];
  title_color?: string;
  subtitle_color?: string;
  btnname_color?: string;
  without_overlay?: boolean;
}

export interface EnhancedSliderProps {
  data: {
    slider_banner?: SliderBanner[];
    slides?: SliderBanner[];
    slider_view_height?: number;
    slider_animation_time?: number;
    slider_aniamtion_time?: number;
    slider_animation_enabled?: boolean;
    position?: number;
    in_container?: boolean;
    [key: string]: unknown;
  };
}

export const EnhancedSlider = memo(function EnhancedSlider({ data }: EnhancedSliderProps) {
  const slides = data.slider_banner || data.slides || [];
  const position = data.position ?? 1;
  const hasMultipleSlides = slides.length > 1;
  const inContainer = Boolean(data.in_container);

  if (!slides.length) return null;

  return (
    <SallaSlider
      id={`main-slider-${position}`}
      autoPlay
      sliderConfig={{ lazy: false, watchOverflow: true }}
      showControls={hasMultipleSlides}
      pagination={hasMultipleSlides}
      type="fullwidth"
      className={inContainer ? 'in-container container my-6' : undefined}
    >
      <div slot="items">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="swiper-slide w-full bg-primary relative overflow-hidden rounded-card shadow-sm"
            style={{ aspectRatio: '16/5' }}
          >
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.title || 'Slide'}
                className="w-full h-full object-cover"
              />
            )}
            
            {!slide.without_overlay && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
            )}

            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-right max-w-xl">
              {slide.subtitle && (
                <span className="text-accent font-semibold text-sm md:text-base mb-2">
                  {slide.subtitle}
                </span>
              )}
              {slide.title && (
                <h2 className="text-white font-bold text-2xl md:text-4xl mb-4 leading-tight">
                  {slide.title}
                </h2>
              )}
              {slide.description && (
                <p className="text-gray-200 text-sm md:text-base mb-6 line-clamp-2">
                  {slide.description}
                </p>
              )}
              {slide.show_button !== false && slide.btnname && (
                <div>
                  <Link
                    href={slide.link || '#'}
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {slide.btnname}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SallaSlider>
  );
});
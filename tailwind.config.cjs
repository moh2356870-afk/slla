/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3D3E', // الأخضر الزمردي الرئيسي للهيدر والأزرار
          light: '#185658',
          dark: '#072425',
        },
        accent: {
          DEFAULT: '#C5A880', // البرونزي الذهبي للتنبيهات وأزرار الشراء
          hover: '#B3946C',
        },
        surface: '#FAFAFC',   // خلفية ناعمة ومريحة للعين
        darkText: '#1E293B',  // لون العناوين والنصوص
      },
      fontFamily: {
        sans: ['Readex Pro', 'Tajawal', 'sans-serif'],
      },
      borderRadius: {
        'card': '1rem',
      },
    },
  },
  plugins: [],
};
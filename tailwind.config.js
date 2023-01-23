/* eslint-disable no-undef */
module.exports = {
    mode: 'jit',
    content: [
        './src/components/**/*.{html,js,jsx,ts,tsx}',
        './src/lib/**/*.{html,js,jsx,ts,tsx}'
    ],
    theme: {
        transparent: 'transparent',
        current: 'currentColor',
        'base-blue': '#1F7BE5',
        'hover-blue': '#005CC6',
        extend: {},
    },
    plugins: [
        require('tailwindcss-rtl'),
    ],
    corePlugins: {
        preflight: false,
    },
    prefix: 'tr-',
};

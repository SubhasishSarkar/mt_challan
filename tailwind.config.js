/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                sidebar: "100% auto", //for sidebar layout
                "sidebar-collapsed-desktop": "64px auto",
                "sidebar-collapsed-mobile": "0px auto", //for collapsed sidebar layout
            },
        },
    },
    plugins: [],
};

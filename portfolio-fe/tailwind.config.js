/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // bật dark mode bằng class 'dark'
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ----------------------------
        // Nền chính / Background
        // ----------------------------
        lightBg: "#E8F4FD", // Nền chính light mode
        darkBg: "#0f172a", // Nền chính dark mode
        lightSecondary: "#ffffff", // Card, panel light mode
        darkSecondary: "#1e293b", // Card, panel dark mode

        // ----------------------------
        // Text / Chữ
        // ----------------------------
        textPrimary: "#0f172a", // Nội dung chính light mode
        textDarkPrimary: "#f1f5f9", // Nội dung chính dark mode
        textSecondary: "#334155", // Subtext / label light mode
        textDarkSecondary: "#cbd5e1", // Subtext / label dark mode

        // ----------------------------
        // Buttons / Interactive
        // ----------------------------
        primary: "#0091FF", // Nút chính / links light mode
        primaryDark: "#3eaaff", // Nút chính / links dark mode
        secondary: "#E8F4FD", // Nút phụ / hover light mode
        secondaryDark: "#1e293b", // Nút phụ / hover dark mode

        // ----------------------------
        // Highlight / Accent
        // ----------------------------
        accent: "#fbbf24", // Badge, highlight text light mode
        accentDark: "#facc15", // Badge, highlight text dark mode

        // ----------------------------
        // Trạng thái / Status
        // ----------------------------
        info: "#3b82f6", // Info messages light mode
        infoDark: "#60a5fa", // Info messages dark mode
        success: "#22c55e", // Success messages light mode
        successDark: "#4ade80", // Success messages dark mode
        warning: "#f59e0b", // Warning messages light mode
        warningDark: "#fbbf24", // Warning messages dark mode
        danger: "#ef4444", // Error / critical light mode
        dangerDark: "#f87171", // Error / critical dark mode

        // ----------------------------
        // Shadow / Glow
        // ----------------------------
        shadowLight: "rgba(0,145,255,0.3)", // Shadow / glow light mode
        shadowDark: "rgba(62,170,255,0.4)", // Shadow / glow dark mode

        // ----------------------------
        // Blur
        // ----------------------------
        blurXl: "20px", // Blur overlay nhẹ
        blur2Xl: "50px", // Blur overlay trung bình
        blur3Xl: "150px", // Blur overlay mạnh / spotlight
      },
    },
  },
  plugins: [],
};

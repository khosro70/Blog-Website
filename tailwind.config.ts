import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF5FF",
          100: "#DBEAFF",
          200: "#BDD8FF",
          300: "#90BDFF",
          400: "#6CA7FF",
          500: "#4992FF",
          600: "#0066FF",
          700: "#0653C8",
          800: "#05419B",
          900: "#042D6A",
          950: "#031C41",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#080C14",
        },
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#03281E",
        },
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#3B1906",
        },
        error: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
          950: "#540A2D",
        },
        blue: {
          50: "#EEF5FF",
          100: "#DBEAFF",
          200: "#BDD8FF",
          300: "#90BDFF",
          400: "#6CA7FF",
          500: "#4992FF",
          600: "#0066FF",
          700: "#0653C8",
          800: "#05419B",
          900: "#042D6A",
          950: "#031C41",
        },
        "modern-gray": {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#080C14",
        },
        green: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#03281E",
        },
        yellow: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#3B1906",
        },
        red: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
          950: "#540A2D",
        },
        "background-base-default": "var(--background-base-default)",
        "background-base-surface": "var(--background-base-surface)",
        "background-base-hover": "var(--background-base-hover)",
        "background-base-pressed": "var(--background-base-pressed)",
        "background-base-disabled": "var(--background-base-disabled)",
        "background-neutral-filled-default":
          "var(--background-neutral-filled-default)",
        "background-neutral-tonal-default":
          "var(--background-neutral-tonal-default)",
        "background-neutral-tonal-hover":
          "var(--background-neutral-tonal-hover)",
        "background-neutral-tonal-pressed":
          "var(--background-neutral-tonal-pressed)",
        "background-neutral-tonal-selected":
          "var(--background-neutral-tonal-selected)",
        "background-neutral-tonal-disabled":
          "var(--background-neutral-tonal-disabled)",
        "background-primary-filled-default":
          "var(--background-primary-filled-default)",
        "background-primary-filled-hover":
          "var(--background-primary-filled-hover)",
        "background-primary-filled-pressed":
          "var(--background-primary-filled-pressed)",
        "background-primary-filled-selected":
          "var(--background-primary-filled-selected)",
        "background-primary-filled-disabled":
          "var(--background-primary-filled-disabled)",
        "background-primary-tonal-default":
          "var(--background-primary-tonal-default)",
        "background-primary-tonal-hover":
          "var(--background-primary-tonal-hover)",
        "background-primary-tonal-pressed":
          "var(--background-primary-tonal-pressed)",
        "background-primary-tonal-disabled":
          "var(--background-primary-tonal-disabled)",
        "background-success-filled-default":
          "var(--background-success-filled-default)",
        "background-success-filled-hover":
          "var(--background-success-filled-hover)",
        "background-success-filled-pressed":
          "var(--background-success-filled-pressed)",
        "background-success-tonal-default":
          "var(--background-success-tonal-default)",
        "background-success-tonal-hover":
          "var(--background-success-tonal-hover)",
        "background-warning-filled-default":
          "var(--background-warning-filled-default)",
        "background-warning-filled-hover":
          "var(--background-warning-filled-hover)",
        "background-warning-filled-pressed":
          "var(--background-warning-filled-pressed)",
        "background-warning-tonal-default":
          "var(--background-warning-tonal-default)",
        "background-error-filled-default":
          "var(--background-error-filled-default)",
        "background-error-filled-hover": "var(--background-error-filled-hover)",
        "background-error-filled-pressed":
          "var(--background-error-filled-pressed)",
        "background-error-filled-disabled":
          "var(--background-error-filled-disabled)",
        "background-error-tonal-default":
          "var(--background-error-tonal-default)",
        "background-error-tonal-hover": "var(--background-error-tonal-hover)",
        "background-error-tonal-pressed":
          "var(--background-error-tonal-pressed)",
        "background-error-tonal-disabled":
          "var(--background-error-tonal-disabled)",
        "background-control-default": "var(--background-control-default)",
        "background-control-hover": "var(--background-control-hover)",
        "background-control-disabled": "var(--background-control-disabled)",
        "background-switch-default": "var(--background-switch-default)",
        "background-dashboard-default": "var(--background-dashboard-default)",
        "background-blue-filled": "var(--background-blue-filled)",
        "background-blue-tonal": "var(--background-blue-tonal)",
        "border-default": "var(--border-default)",
        "border-disabled": "var(--border-disabled)",
        "border-separator": "var(--border-separator)",
        "border-primary": "var(--border-primary)",
        "border-mode": "var(--border-mode)",
        "label-white-default": "var(--text-label-white-default)",
        "label-white-disabled": "var(--text-label-white-disabled)",
        "label-neutral-default": "var(--text-label-neutral-default)",
        "label-neutral-hover": "var(--text-label-neutral-hover)",
        "label-neutral-disabled": "var(--text-label-neutral-disabled)",
        "label-primary-default": "var(--text-label-primary-default)",
        "label-primary-hover": "var(--text-label-primary-hover)",
        "label-primary-disabled": "var(--text-label-primary-disabled)",
        "label-error-default": "var(--text-label-error-default)",
        "label-error-disabled": "var(--text-label-error-disabled)",
        "label-success-default": "var(--text-label-success)",
        "label-warning-default": "var(--text-label-warning)",
        "label-blue-default": "var(--text-label-blue)",
        "description-neutral-default":
          "var(--text-description-neutral-default)",
        "description-neutral-disabled":
          "var(--text-description-neutral-disabled)",
        "description-primary": "var(--text-description-primary)",
        "description-success": "var(--text-description-success)",
        "description-error": "var(--text-description-error)",
        "input-default": "var(--text-input-default)",
        "input-placeholder": "var(--text-input-placeholder)",
        "input-disabled": "var(--text-input-disabled)",
        "category-default": "var(--text-category-default)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

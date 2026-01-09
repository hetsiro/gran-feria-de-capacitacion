import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const myriadPro = localFont({
  src: [
    {
      path: "../public/fonts/MyriadPro Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myriad-pro",
});

export const aktivGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/AktivGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/AktivGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aktiv-grotesk",
});

export const AlfaSlabOne = localFont({
  src: [
    {
      path: "../public/fonts/AlfaSlabOne-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alfa-slab-one",
});

export const BlackAlternate = localFont({
  src: [
    {
      path: "../public/fonts/DIN BlackAlternate Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alfa-slab-one",
});
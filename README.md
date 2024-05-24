[npm]: https://www.npmjs.com/package/next-google-fonts-loader

[![npm verison](https://img.shields.io/npm/v/next-google-fonts-loader)][npm]
[![npm bundle size](https://img.shields.io/bundlephobia/min/next-google-fonts-loader)][npm]
[![npm downloads](https://img.shields.io/npm/dm/next-google-fonts-loader)][npm]

# next-google-fonts-loader

A Next.js `ImageResponse` compatible loader for Google Fonts.

## Installation

```
npm install next-google-fonts-loader
```

## Usage

```tsx
import { ImageResponse } from "next/og";
import { loader } from "next-google-fonts-loader";

export async function GET() {
  const text = "hello world";
  const fonts = await loader([{ name: "Roboto", weights: [800], styles: ["italic"] }], text);
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto",
            fontWeight: 800,
            fontStyle: "italic",
          }}
        >
          {text}
        </h1>
      </div>
    ),
    { fonts },
  );
}
```
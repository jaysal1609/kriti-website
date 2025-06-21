# Image Assets Creation Guide for Kriti Systems

This guide provides step-by-step instructions for creating the image assets needed for the Kriti Systems website.

## 1. Creating Favicon Files

### Option 1: Using Favicon.io

1. Go to [Favicon.io](https://favicon.io/favicon-converter/)
2. Upload your `public/KritiSystemsLogo.png` file
3. Click "Download" to get the favicon package
4. Extract the following files from the downloaded package:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
5. Place these files in your `public` directory

### Option 2: Using RealFaviconGenerator

For more advanced options:

1. Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your `public/KritiSystemsLogo.png` file
3. Customize the favicon appearance for different platforms
4. Download the favicon package
5. Extract the required files and place them in your `public` directory

## 2. Creating OG Image (1200x630px)

### Option 1: Using Canva

1. Go to [Canva](https://www.canva.com/)
2. Create a new design with custom dimensions: 1200px × 630px
3. Upload your `public/KritiSystemsLogo.png` to Canva
4. Create a design with the following elements:
   - **Background**: Use a gradient from white to light gold (#F7F2E4)
   - **Logo**: Place the Kriti Systems logo prominently in the center or left side
   - **Text**: Add "Kriti Systems" in a large font and "Finance Tools Reimagined" as a tagline
   - **Colors**: Use the gold color from your logo (#F2BD4D) for accents and a complementary navy blue (#1A365D) for text
5. Download the image as a PNG or JPG file
6. Save it as `og-image.jpg` in your `public` directory

### Option 2: Using Figma

1. Go to [Figma](https://www.figma.com/)
2. Create a new design with frame size: 1200px × 630px
3. Import your `public/KritiSystemsLogo.png`
4. Design the OG image following the same guidelines as above
5. Export as PNG or JPG
6. Save it as `og-image.jpg` in your `public` directory

## Design Guidelines

### Colors
- Primary (Gold): #F2BD4D (from logo)
- Secondary (Navy): #1A365D
- Accent (Teal): #319795
- Background: White to light gold gradient

### Typography
- Headings: Merriweather (serif)
- Body: Nunito Sans (sans-serif)

## Implementation

Once you've created these files, place them in your `public` directory. The necessary HTML links have already been added to your layout.tsx file:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
```

The `site.webmanifest` file has also been created for you.

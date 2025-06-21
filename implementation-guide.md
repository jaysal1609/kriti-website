# Kriti Systems Website Restoration Guide

## Color Scheme Analysis

Based on the logo, the primary color is a gold/yellow (#F2BD4D or similar). This should be maintained as the primary accent color for the website. The current implementation already uses this color, which is appropriate since it matches the logo.

## Layout Restoration

The following changes are needed to restore the layout to match the production site while maintaining the logo-based color scheme.

### 1. Layout.tsx

Change the body background from gradient to simple white background:

```tsx
// Current
<body className="bg-gradient-to-br from-white via-slate-100 to-gray-200 font-sans">

// Change to
<body className="bg-white font-sans">
```

### 2. Header.tsx

Simplify the header styling while maintaining the gold accent color:

```tsx
// Current
<header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
  <div className="flex items-center space-x-2">
    <Image
      src="/KritiSystemsLogo.png"
      alt="Kriti Systems Logo"
      width={48}
      height={48}
      className="object-contain"
      priority
    />
    <span className="text-xl sm:text-2xl font-serif font-semibold text-[#1A365D]">Kriti Systems</span>
  </div>
  <nav className="flex gap-6 text-gray-700 font-medium items-center">
    <Link href="/" className="hover:text-[#F2BD4D] transition-colors">Home</Link>
    <Link href="/tools" className="hover:text-[#F2BD4D] transition-colors">Tools</Link>
    <Link href="/about" className="hover:text-[#F2BD4D] transition-colors">About</Link>
    <Link href="/profile" className="hover:text-[#F2BD4D] transition-colors">Profile</Link>
    {!user ? (
      <Link 
        href="/auth" 
        className="bg-[#F2BD4D] hover:bg-[#E0A922] text-white px-4 py-2 rounded-md transition-colors"
      >
        Login
      </Link>
    ) : (
      <button 
        onClick={logout} 
        className="text-[#1A365D] border border-[#1A365D] hover:bg-[#1A365D] hover:text-white px-4 py-2 rounded-md transition-colors"
      >
        Logout
      </button>
    )}
  </nav>
</header>

// Change to
<header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
  <div className="flex items-center space-x-1 sm:space-x-2">
    <Image
      src="/KritiSystemsLogo.png"
      alt="Kriti Logo"
      width={48}
      height={48}
      className="rounded-full object-contain"
      priority
    />
    <span className="text-xl sm:text-2xl font-semibold text-gray-800">Kriti Systems</span>
  </div>
  <nav className="flex gap-6 text-gray-600 font-medium items-center">
    <Link href="/">Home</Link>
    <Link href="/tools">Tools</Link>
    <Link href="/about">About</Link>
    <Link href="/profile">Profile</Link>
    {!user ? (
      <Link href="/auth" className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-4 py-2 rounded-md transition-colors">
        Login
      </Link>
    ) : (
      <button onClick={logout} className="text-[#FF5722] font-semibold hover:underline">
        Logout
      </button>
    )}
  </nav>
</header>
```

### 3. globals.css

Update the color variables to match the logo while maintaining the original layout styling:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  
  /* Brand Colors - Based on Logo */
  --color-primary: #F2BD4D;        /* Gold from logo */
  --color-primary-dark: #E0A922;   /* Darker gold for hover states */
  --color-secondary: #1A365D;      /* Deep navy - complementary */
  --color-accent: #319795;         /* Teal for accents */
  
  /* Neutral Colors */
  --color-gray-100: #F7FAFC;
  --color-gray-200: #EDF2F7;
  --color-gray-300: #E2E8F0;
  --color-gray-400: #CBD5E0;
  --color-gray-500: #A0AEC0;
  --color-gray-600: #718096;
  --color-gray-700: #4A5568;
  --color-gray-800: #2D3748;
  --color-gray-900: #1A202C;
}

/* Change to */
:root {
  --background: #ffffff;
  --foreground: #171717;
  
  /* Brand Colors - Based on Logo */
  --color-primary: #FF5722;        /* Orange for buttons */
  --color-primary-dark: #E64A19;   /* Darker orange for hover states */
  --color-secondary: #F2BD4D;      /* Gold from logo for accents */
  --color-secondary-dark: #E0A922; /* Darker gold for hover states */
  
  /* Neutral Colors */
  --color-gray-100: #F7FAFC;
  --color-gray-200: #EDF2F7;
  --color-gray-300: #E2E8F0;
  --color-gray-400: #CBD5E0;
  --color-gray-500: #A0AEC0;
  --color-gray-600: #718096;
  --color-gray-700: #4A5568;
  --color-gray-800: #2D3748;
  --color-gray-900: #1A202C;
}
```

### 4. tailwind.config.mjs

Update the Tailwind configuration to match the color scheme:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2BD4D',
        'primary-dark': '#E0A922',
        secondary: '#1A365D',
        'secondary-light': '#2C5282',
        accent: '#319795',
        'accent-light': '#4FD1C5',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

// Change to
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',
        'primary-dark': '#E64A19',
        secondary: '#F2BD4D',
        'secondary-dark': '#E0A922',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### 5. Tools Page (tools/page.tsx)

Restore the original card styling with simpler borders and orange buttons:

```tsx
// Current
<main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 py-12 px-6">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
    🧮 Financial Tools Dashboard
  </h1>
  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {tools.map((tool) => (
      <div
        key={tool.name}
        className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg transition"
      >
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          {tool.name}
          {tool.available ? (
            <span className="text-sm text-orange-500 animate-pulse">✨</span>
          ) : (
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
              Coming Soon
            </span>
          )}
        </h2>
        <p className="text-gray-600 mt-2">{tool.description}</p>
        {tool.available ? (
          <Link
            href={tool.path}
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              backgroundColor: '#F2BD4D',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E0A922'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F2BD4D'}
          >
            Open
          </Link>
        ) : (
          <button
            disabled
            className="inline-block mt-4 bg-gray-300 text-white px-4 py-2 rounded-md cursor-not-allowed"
          >
            Coming Soon
          </button>
        )}
      </div>
    ))}
  </div>
</main>

// Change to
<main className="min-h-screen bg-white py-12 px-6">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
    🧮 Financial Tools Dashboard
  </h1>
  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
    {tools.map((tool) => (
      <div
        key={tool.name}
        className="bg-white border rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          {tool.name}
          {tool.available ? (
            <span className="text-sm text-orange-500">✨</span>
          ) : (
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
              Coming Soon
            </span>
          )}
        </h2>
        <p className="text-gray-600 mt-2">{tool.description}</p>
        {tool.available ? (
          <Link
            href={tool.path}
            className="inline-block mt-4 bg-[#FF5722] text-white px-4 py-2 rounded-md hover:bg-[#E64A19] transition"
          >
            Open
          </Link>
        ) : (
          <button
            disabled
            className="inline-block mt-4 bg-gray-300 text-white px-4 py-2 rounded-md cursor-not-allowed"
          >
            Coming Soon
          </button>
        )}
      </div>
    ))}
  </div>
</main>
```

### 6. EMI Calculator (tools/emi/page.tsx)

Restore the original button styling with orange color:

```tsx
// Current
<button
  onClick={calculateEMI}
  style={{
    width: '100%',
    backgroundColor: '#F2BD4D',
    color: 'white',
    padding: '0.5rem 0',
    borderRadius: '0.25rem',
    fontWeight: '500',
    transition: 'background-color 0.3s'
  }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E0A922'}
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F2BD4D'}
>
  Calculate EMI
</button>

// Change to
<button
  onClick={calculateEMI}
  className="w-full bg-[#FF5722] text-white py-2 rounded hover:bg-[#E64A19] transition-colors"
>
  Calculate EMI
</button>
```

### 7. Homepage (page.tsx)

Restore the original card styling and update color scheme:

```tsx
// Current
<div className="grid gap-6 md:grid-cols-3 mb-14">
  <Link
    href="/tools"
    className="p-6 bg-white rounded-xl shadow hover:shadow-lg border-t-2 border-yellow-400 transition-all duration-300 text-left"
  >
    <h2 className="text-xl font-serif font-semibold text-yellow-500 mb-2">🧮 Tools</h2>
    <p className="text-sm text-gray-600">Explore EMI, SIP, Loan comparison & more.</p>
  </Link>
  <Link
    href="/profile"
    className="p-6 bg-white rounded-xl shadow hover:shadow-lg border-t-2 border-yellow-400 transition-all duration-300 text-left"
  >
    <h2 className="text-xl font-serif font-semibold text-yellow-500 mb-2">👤 Profile</h2>
    <p className="text-sm text-gray-600">Manage your personal financial data.</p>
  </Link>
  <Link
    href="/about"
    className="p-6 bg-white rounded-xl shadow hover:shadow-lg border-t-2 border-yellow-400 transition-all duration-300 text-left"
  >
    <h2 className="text-xl font-serif font-semibold text-yellow-500 mb-2">📘 About</h2>
    <p className="text-sm text-gray-600">Learn about our mission and upcoming features.</p>
  </Link>
</div>

// Change to
<div className="grid gap-6 md:grid-cols-3 mb-14">
  <Link
    href="/tools"
    className="p-6 bg-white border rounded-lg text-left"
  >
    <h2 className="text-xl font-semibold text-[#FF5722] mb-2">🧮 Tools</h2>
    <p className="text-sm text-gray-600">Explore EMI, SIP, Loan comparison & more.</p>
  </Link>
  <Link
    href="/profile"
    className="p-6 bg-white border rounded-lg text-left"
  >
    <h2 className="text-xl font-semibold text-[#FF5722] mb-2">👤 Profile</h2>
    <p className="text-sm text-gray-600">Manage your personal financial data.</p>
  </Link>
  <Link
    href="/about"
    className="p-6 bg-white border rounded-lg text-left"
  >
    <h2 className="text-xl font-semibold text-[#FF5722] mb-2">📘 About</h2>
    <p className="text-sm text-gray-600">Learn about our mission and upcoming features.</p>
  </Link>
</div>
```

## Summary of Color Changes

1. **Primary Button Color**: Change from gold (#F2BD4D) to orange (#FF5722)
2. **Hover States**: Change from darker gold (#E0A922) to darker orange (#E64A19)
3. **Accent Colors**: Use the gold color from the logo (#F2BD4D) as an accent color rather than the primary button color
4. **Background**: Simplify to white instead of gradients

These changes will restore the layout to match the production site while maintaining a color scheme that complements the gold/yellow logo.

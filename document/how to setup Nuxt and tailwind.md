# របៀបដំឡើង Nuxt 3 ជាមួយ Tailwind CSS

ឯកសារនេះបង្ហាញពីរបៀបដំឡើង និងកំណត់រចនាប័ទ្ម **Nuxt 3** ជាមួយ **Tailwind CSS** យ៉ាងលម្អិត និងងាយស្រួលយល់។

---

## វិធីសាស្ត្រទី ១: ប្រើប្រាស់ `@nuxtjs/tailwindcss` Module (របៀបដែលល្អបំផុត និងងាយស្រួលបំផុត)

ការប្រើប្រាស់ Official Module `@nuxtjs/tailwindcss` គឺជាវិធីសាស្ត្រដែល Nuxt ណែនាំ ព្រោះវា Auto-configure រាល់ការកំណត់ Tailwind CSS ដោយស្វ័យប្រវត្តិ។

### ជំហានទី ១: បង្កើតគម្រោង Nuxt 3 ថ្មី

បើក Terminal ហើយរត់ Command ខាងក្រោមដើម្បីបង្កើត Nuxt App ថ្មី៖

```bash
npx nuxi@latest init my-nuxt-app
```

បន្ទាប់មកចូលទៅក្នុង Folder គម្រោង៖

```bash
cd my-nuxt-app
```

---

### ជំហានទី ២: ដំឡើង Module `@nuxtjs/tailwindcss`

រត់ Command ដំឡើង `@nuxtjs/tailwindcss` ជា `devDependencies`៖

```bash
# សម្រាប់ npm
npm install -D @nuxtjs/tailwindcss

# ឬ សម្រាប់ pnpm
pnpm add -D @nuxtjs/tailwindcss

# ឬ សម្រាប់ yarn
yarn add -D @nuxtjs/tailwindcss
```

---

### ជំហានទី ៣: បន្ថែម Module ទៅក្នុង `nuxt.config.ts`

បើកឯកសារ `nuxt.config.ts` ហើយបន្ថែម `@nuxtjs/tailwindcss` ទៅក្នុង array `modules`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
```

---

### ជំហានទី ៤: បង្កើតឯកសារ `tailwind.config.js` (ជម្រើសបន្ថែម / Optional)

ប្រសិនបើអ្នកចង់កំណត់ Custom Color, Font ឬ Theme ផ្សេងៗ អ្នកអាចបង្កើតឯកសារ `tailwind.config.js` បានដោយរត់ Command:

```bash
npx tailwindcss init
```

ឬបង្កើតឯកសារ `tailwind.config.js` នៅ root directory ដោយផ្ទាល់៖

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
      }
    },
  },
  plugins: [],
}
```

---

### ជំហានទី ៥: បង្កើត Custom CSS (ជម្រើសបន្ថែម / Optional)

ប្រសិនបើអ្នកចង់បន្ថែម Custom CSS ឬ `@layer` អ្នកអាចបង្កើតឯកសារ `assets/css/main.css`៖

```css
/* assets/css/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-slate-50 text-slate-900;
  }
}
```

បន្ទាប់មកភ្ជាប់វាក្នុង `nuxt.config.ts`៖

```typescript
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss']
})
```

---

## វិធីសាស្ត្រទី ២: ដំឡើងជាមួយ Tailwind CSS v4 (តាម Vite Plugin)

ប្រសិនបើអ្នកចង់ប្រើប្រាស់ **Tailwind CSS v4** ចុងក្រោយបំផុត៖

### ជំហានទី ១: ដំឡើង Tailwind v4 និង `@tailwindcss/vite`

```bash
npm install tailwindcss @tailwindcss/vite
```

### ជំហានទី ២: កំណត់ `nuxt.config.ts`

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
```

### ជំហានទី ៣: បង្កើត `assets/css/main.css`

```css
@import "tailwindcss";
```

---

## ការតេស្តជោគជ័យ (Testing in `app.vue`)

បើកឯកសារ `app.vue` ហើយសាកល្បងសរសេរ Code ខាងក្រោម៖

```vue
<template>
  <div class="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
    <div class="max-w-md w-full bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700 text-center">
      <h1 class="text-3xl font-extrabold text-blue-400 mb-4">
        Nuxt 3 + Tailwind CSS 🚀
      </h1>
      <p class="text-slate-300 mb-6">
        ការដំឡើងជោគជ័យ! អ្នកអាចចាប់ផ្តើមសរសេរ UI ដ៏ស្រស់ស្អាតជាមួយ Tailwind utility classes បានហើយ។
      </p>
      <button class="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200">
        Get Started
      </button>
    </div>
  </div>
</template>
```

---

## ជំហានដំណើការ Project (Run Dev Server)

រត់ Command ខាងក្រោមដើម្បីដំណើរការ Server៖

```bash
npm run dev
```

បើក Browser ហើយចូលទៅកាន់: `http://localhost:3000` នោះអ្នកនឹងឃើញ UI ដែលបានដំឡើង Tailwind CSS រួចរាល់! 🎉

---

## សង្ខេប Command សំខាន់ៗ

| ការងារ | Command |
| :--- | :--- |
| បង្កើត Nuxt Project | `npx nuxi@latest init <project-name>` |
| ដំឡើង Tailwind Module | `npm install -D @nuxtjs/tailwindcss` |
| ដំណើរការ Dev Server | `npm run dev` |
| បង្កើត Tailwind Config | `npx tailwindcss init` |

# LaraBeauty - PrimeVue Component Showcase

A comprehensive **PrimeVue component showcase** built with Laravel 12, Vue 3, and Inertia.js. This project demonstrates 90+ PrimeVue components with interactive examples, designed as a reference for Laravel developers integrating PrimeVue into their applications.

[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org)
[![PrimeVue](https://img.shields.io/badge/PrimeVue-4-41B883?style=flat-square&logo=primevue&logoColor=white)](https://primevue.org)
[![Inertia.js](https://img.shields.io/badge/Inertia.js-2-9553E9?style=flat-square)](https://inertiajs.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

---

## Features

- **90+ PrimeVue Components** - Comprehensive demos covering all major component categories
- **Interactive Examples** - Every component includes working, interactive demonstrations
- **Dark Mode Support** - Full dark/light theme support using PrimeVue's Aura theme
- **AI-Agent Friendly** - Clean, well-documented code patterns for AI-assisted development
- **Modern Stack** - Laravel 12 + Vue 3 + Inertia.js + Tailwind CSS 4
- **Type-Safe** - Full TypeScript support throughout the application

---

## Component Categories

| Category | Components | Description |
|----------|------------|-------------|
| **Form** | InputText, Textarea, Password, InputMask, InputNumber, InputOtp, AutoComplete, Select, MultiSelect, CascadeSelect, TreeSelect, DatePicker, ColorPicker, Checkbox, RadioButton, ToggleSwitch, Slider, Knob, Rating, Editor | Complete form input components |
| **Data** | DataTable, Tree, TreeTable, OrderList, PickList, Timeline, Paginator, VirtualScroller | Data display and manipulation |
| **Overlay** | Dialog, Drawer, Popover, ConfirmDialog, ConfirmPopup, Tooltip | Modal and overlay components |
| **Button** | Button, SplitButton, SpeedDial, SelectButton, ToggleButton | Interactive button variants |
| **Menu** | Menu, Menubar, TieredMenu, MegaMenu, ContextMenu, Breadcrumb | Navigation components |
| **Panel** | Accordion, Tabs, Stepper, Card, Fieldset, Splitter, ScrollPanel | Container and layout panels |
| **Messages** | Message, Toast | Notification and feedback |
| **Media** | Image, Galleria, Carousel | Media display components |
| **Chart** | Bar, Line, Pie, Doughnut, Radar, PolarArea | Data visualization with Chart.js |
| **File** | FileUpload | File upload with drag-drop |
| **Misc** | Avatar, Badge, Chip, Tag, Skeleton, ProgressBar, ProgressSpinner, MeterGroup | Utility components |

---

## Screenshots

### Overview Dashboard
![Overview](https://via.placeholder.com/800x400?text=PrimeVue+Demo+Overview)

### DataTable Component
![DataTable](https://via.placeholder.com/800x400?text=DataTable+Demo)

### Form Components
![Forms](https://via.placeholder.com/800x400?text=Form+Components)

*Replace with actual screenshots after deployment*

---

## Quick Start

### Prerequisites

- PHP 8.2+
- Node.js 18+
- Composer 2+
- MySQL/PostgreSQL/SQLite

### Installation

```bash
# Clone the repository
git clone https://github.com/yogesh-joshi-0333/larabeauty.git
cd larabeauty

# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate

# Build frontend assets
npm run build

# Start the development server
php artisan serve
```

### Development

```bash
# Start Laravel development server
php artisan serve

# Start Vite dev server (in another terminal)
npm run dev

# Or run both together
composer run dev
```

Visit `http://localhost:8000` to see the application.

---

## Tech Stack

### Backend
- **[Laravel 12](https://laravel.com)** - PHP framework
- **[Laravel Fortify](https://laravel.com/docs/fortify)** - Authentication backend
- **[Inertia.js](https://inertiajs.com)** - Modern monolith SPA adapter

### Frontend
- **[Vue 3](https://vuejs.org)** - Progressive JavaScript framework
- **[PrimeVue 4](https://primevue.org)** - Rich UI component library
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev)** - Next-generation frontend tooling

### Additional Libraries
- **[Chart.js](https://www.chartjs.org)** - JavaScript charting library
- **[Quill](https://quilljs.com)** - Rich text editor
- **[Lucide Icons](https://lucide.dev)** - Beautiful icon library

---

## Project Structure

```
larabeauty/
├── app/
│   ├── Http/Controllers/     # Laravel controllers
│   └── Models/               # Eloquent models
├── resources/
│   ├── js/
│   │   ├── components/       # Reusable Vue components
│   │   │   └── ui/          # shadcn/ui style components
│   │   ├── layouts/         # Page layouts
│   │   ├── pages/           # Inertia page components
│   │   │   └── demos/       # PrimeVue demo pages
│   │   │       ├── form/    # Form component demos
│   │   │       ├── data/    # Data component demos
│   │   │       ├── overlay/ # Overlay component demos
│   │   │       └── ...      # Other categories
│   │   └── types/           # TypeScript type definitions
│   └── css/                 # Stylesheets
├── routes/
│   ├── web.php              # Web routes
│   └── demos.php            # Demo routes
└── tests/                   # Pest test files
```

---

## Usage Examples

### Basic PrimeVue Component Usage

```vue
<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const name = ref('');
</script>

<template>
    <div class="flex gap-2">
        <InputText v-model="name" placeholder="Enter your name" />
        <Button label="Submit" @click="handleSubmit" />
    </div>
</template>
```

### DataTable with Sorting and Filtering

```vue
<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = ref([
    { name: 'Product A', price: 100, category: 'Electronics' },
    { name: 'Product B', price: 200, category: 'Clothing' },
]);
</script>

<template>
    <DataTable :value="products" sortable paginator :rows="10">
        <Column field="name" header="Name" sortable />
        <Column field="price" header="Price" sortable />
        <Column field="category" header="Category" sortable />
    </DataTable>
</template>
```

### Toast Notifications

```vue
<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import Toast from 'primevue/toast';

const toast = useToast();

const showSuccess = () => {
    toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Operation completed',
        life: 3000
    });
};
</script>

<template>
    <Toast />
    <Button label="Show Toast" @click="showSuccess" />
</template>
```

---

## Configuration

### PrimeVue Theme Configuration

The application uses PrimeVue's Aura theme with dark mode support. Configuration is in `resources/js/app.ts`:

```typescript
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark',
        },
    },
});
```

### Adding New Components

1. Import the component from PrimeVue
2. Create a demo section in the appropriate category page
3. Add interactive examples with state management

---

## Testing

```bash
# Run all tests
php artisan test

# Run with coverage
php artisan test --coverage

# Run specific test file
php artisan test tests/Feature/DashboardTest.php
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style and patterns
- Write tests for new features
- Update documentation as needed
- Keep commits atomic and well-described

---

## Roadmap

- [ ] Add more component variations and examples
- [ ] Add form validation examples with VeeValidate
- [ ] Create component comparison guides
- [ ] Add accessibility documentation
- [ ] Deploy live demo site
- [ ] Add Storybook integration

---

## Resources

- [PrimeVue Documentation](https://primevue.org/documentation)
- [Laravel Documentation](https://laravel.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide)
- [Inertia.js Documentation](https://inertiajs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Author

**Yogesh Joshi**

- GitHub: [@yogesh-joshi-0333](https://github.com/yogesh-joshi-0333)
- Email: yjoshi.techark@gmail.com

---

## License

This project is open-sourced software licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [PrimeVue](https://primevue.org) - For the amazing component library
- [Laravel](https://laravel.com) - For the elegant PHP framework
- [Vue.js](https://vuejs.org) - For the progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com) - For the utility-first CSS framework

---

<p align="center">
  <sub>Built with ❤️ for the Laravel community</sub>
</p>

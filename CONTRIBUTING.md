# Contributing to LaraBeauty

First off, thank you for considering contributing to LaraBeauty! It's people like you that make this project a great resource for the Laravel community.

## Code of Conduct

By participating in this project, you are expected to uphold a welcoming, inclusive, and respectful environment.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, screenshots)
- **Describe the behavior you observed and expected**
- **Include your environment details** (OS, PHP version, Node version, browser)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternative solutions** you've considered

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Follow the coding style** used throughout the project
3. **Write meaningful commit messages**
4. **Add tests** if you're adding new functionality
5. **Update documentation** as needed
6. **Ensure all tests pass** before submitting

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/larabeauty.git
cd larabeauty

# Install dependencies
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Run migrations
php artisan migrate

# Start development servers
composer run dev
```

## Coding Standards

### PHP

- Follow PSR-12 coding standards
- Use Laravel Pint for formatting: `vendor/bin/pint`
- Use type hints and return types
- Write descriptive method and variable names

### Vue/TypeScript

- Use Composition API with `<script setup>`
- Use TypeScript for type safety
- Follow Vue 3 best practices
- Use PrimeVue components consistently

### CSS

- Use Tailwind CSS utility classes
- Avoid custom CSS when Tailwind utilities suffice
- Follow mobile-first responsive design

## Adding New Component Demos

When adding a new PrimeVue component demo:

1. **Create the demo page** in the appropriate category folder under `resources/js/pages/demos/`

2. **Follow the existing pattern:**

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Import PrimeVue component
import NewComponent from 'primevue/newcomponent';

// Define state
const value = ref('');
</script>

<template>
    <Head title="Component Name - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Component Name</CardTitle>
                        <CardDescription>
                            Brief description of the component.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <!-- Interactive demo -->
                        <NewComponent v-model="value" />
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>
```

3. **Add the route** in `routes/demos.php`

4. **Update navigation** if creating a new category

## Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat: add DatePicker component demo
fix: resolve dark mode styling issue in DataTable
docs: update README with new installation steps
style: format code with Pint
refactor: simplify form validation logic
test: add tests for overlay components
```

## Testing

```bash
# Run all tests
php artisan test

# Run specific test
php artisan test --filter=DemoTest

# Run with coverage
php artisan test --coverage
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing! 🎉

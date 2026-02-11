<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { index as demosIndex } from '@/routes/demos';
import {
    index as formIndex,
    inputsBasic,
    inputsAdvanced,
    selects,
    datePickers,
    toggles,
    sliders,
    editor,
} from '@/routes/demos/form';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'PrimeVue Demos',
        href: demosIndex().url,
    },
    {
        title: 'Form',
        href: formIndex().url,
    },
];

const formPages = [
    {
        title: 'Basic Inputs',
        description: 'InputText, Textarea, Password components',
        href: inputsBasic(),
    },
    {
        title: 'Advanced Inputs',
        description: 'InputMask, InputNumber, InputOtp components',
        href: inputsAdvanced(),
    },
    {
        title: 'Select Components',
        description: 'Select, MultiSelect, AutoComplete, CascadeSelect',
        href: selects(),
    },
    {
        title: 'Date & Color Pickers',
        description: 'DatePicker and ColorPicker components',
        href: datePickers(),
    },
    {
        title: 'Toggle Components',
        description: 'Checkbox, RadioButton, ToggleSwitch, ToggleButton',
        href: toggles(),
    },
    {
        title: 'Sliders & Ratings',
        description: 'Slider, Knob, Rating components',
        href: sliders(),
    },
    {
        title: 'Rich Text Editor',
        description: 'Quill-based WYSIWYG editor component',
        href: editor(),
    },
];
</script>

<template>
    <Head title="Form Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-6">
                <div>
                    <h2 class="text-xl font-semibold">Form Components</h2>
                    <p class="text-muted-foreground">
                        PrimeVue provides a comprehensive set of form components for building rich user interfaces.
                    </p>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                    <Link
                        v-for="page in formPages"
                        :key="page.title"
                        :href="page.href"
                    >
                        <Card class="h-full transition-colors hover:border-primary/50">
                            <CardHeader>
                                <CardTitle class="text-base">{{ page.title }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{{ page.description }}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

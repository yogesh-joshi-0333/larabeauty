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
    index as dataIndex,
    datatable,
    tree,
    lists,
    misc,
} from '@/routes/demos/data';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'PrimeVue Demos',
        href: demosIndex().url,
    },
    {
        title: 'Data',
        href: dataIndex().url,
    },
];

const dataPages = [
    {
        title: 'DataTable',
        description: 'Feature-rich data grid with sorting, filtering, pagination, and selection',
        href: datatable(),
    },
    {
        title: 'Tree Components',
        description: 'Tree and TreeTable for hierarchical data display',
        href: tree(),
    },
    {
        title: 'List Components',
        description: 'OrderList and PickList for list manipulation',
        href: lists(),
    },
    {
        title: 'Misc Data Components',
        description: 'Timeline, Paginator, VirtualScroller, and DataView',
        href: misc(),
    },
];
</script>

<template>
    <Head title="Data Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-6">
                <div>
                    <h2 class="text-xl font-semibold">Data Components</h2>
                    <p class="text-muted-foreground">
                        PrimeVue provides powerful components for displaying and manipulating data.
                    </p>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                    <Link
                        v-for="page in dataPages"
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

<script setup lang="ts">
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { index as demosIndex } from '@/routes/demos';
import { index as dataIndex } from '@/routes/demos/data';
import { type BreadcrumbItem } from '@/types';

import Timeline from 'primevue/timeline';
import Paginator from 'primevue/paginator';
import DataView from 'primevue/dataview';
import Tag from 'primevue/tag';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Data', href: dataIndex().url },
    { title: 'Misc Data Components' },
];

// Timeline data
const events = ref([
    { status: 'Ordered', date: '15/10/2025 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { status: 'Processing', date: '15/10/2025 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2025 16:15', icon: 'pi pi-truck', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2025 10:00', icon: 'pi pi-check', color: '#4CAF50' },
]);

const customEvents = ref([
    { status: 'Ordered', date: '15/10/2025', icon: 'pi pi-shopping-cart', color: '#9C27B0', description: 'Order placed successfully' },
    { status: 'Processing', date: '15/10/2025', icon: 'pi pi-cog', color: '#673AB7', description: 'Order is being processed' },
    { status: 'Shipped', date: '15/10/2025', icon: 'pi pi-truck', color: '#FF9800', description: 'Package dispatched' },
    { status: 'Delivered', date: '16/10/2025', icon: 'pi pi-check', color: '#4CAF50', description: 'Package delivered' },
]);

// Paginator state
const first = ref(0);
const rows = ref(10);
const totalRecords = ref(120);

// DataView data
const products = ref([
    { id: '1', name: 'Bamboo Watch', category: 'Accessories', price: 65, inventoryStatus: 'INSTOCK', rating: 5 },
    { id: '2', name: 'Black Watch', category: 'Accessories', price: 72, inventoryStatus: 'INSTOCK', rating: 4 },
    { id: '3', name: 'Blue Band', category: 'Fitness', price: 79, inventoryStatus: 'LOWSTOCK', rating: 3 },
    { id: '4', name: 'Blue T-Shirt', category: 'Clothing', price: 29, inventoryStatus: 'INSTOCK', rating: 5 },
    { id: '5', name: 'Bracelet', category: 'Accessories', price: 15, inventoryStatus: 'OUTOFSTOCK', rating: 4 },
    { id: '6', name: 'Brown Purse', category: 'Accessories', price: 120, inventoryStatus: 'INSTOCK', rating: 4 },
]);

const layout = ref<'list' | 'grid'>('list');

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
};

const getSeverity = (status: string) => {
    switch (status) {
        case 'INSTOCK': return 'success';
        case 'LOWSTOCK': return 'warn';
        case 'OUTOFSTOCK': return 'danger';
        default: return null;
    }
};
</script>

<template>
    <Head title="Misc Data Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Timeline -->
                <Card>
                    <CardHeader>
                        <CardTitle>Timeline</CardTitle>
                        <CardDescription>
                            Component for displaying a sequence of events in chronological order.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-8">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic</label>
                            <Timeline :value="events">
                                <template #content="{ item }">
                                    <div class="text-sm">{{ item.status }}</div>
                                    <div class="text-xs text-muted-foreground">{{ item.date }}</div>
                                </template>
                            </Timeline>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Custom Markers</label>
                            <Timeline :value="customEvents" align="alternate">
                                <template #marker="{ item }">
                                    <span
                                        class="flex h-8 w-8 items-center justify-center rounded-full text-white shadow"
                                        :style="{ backgroundColor: item.color }"
                                    >
                                        <i :class="item.icon" />
                                    </span>
                                </template>
                                <template #content="{ item }">
                                    <Card class="mt-2">
                                        <CardHeader class="p-3">
                                            <CardTitle class="text-sm">{{ item.status }}</CardTitle>
                                        </CardHeader>
                                        <CardContent class="p-3 pt-0">
                                            <p class="text-xs text-muted-foreground">{{ item.description }}</p>
                                            <p class="mt-1 text-xs">{{ item.date }}</p>
                                        </CardContent>
                                    </Card>
                                </template>
                            </Timeline>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Horizontal</label>
                            <Timeline :value="events" layout="horizontal" align="top">
                                <template #content="{ item }">
                                    <div class="text-sm">{{ item.status }}</div>
                                </template>
                            </Timeline>
                        </div>
                    </CardContent>
                </Card>

                <!-- Paginator -->
                <Card>
                    <CardHeader>
                        <CardTitle>Paginator</CardTitle>
                        <CardDescription>
                            Standalone pagination component for navigating through data.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic</label>
                            <Paginator
                                v-model:first="first"
                                :rows="rows"
                                :total-records="totalRecords"
                            />
                            <p class="text-xs text-muted-foreground">
                                Showing {{ first + 1 }} to {{ Math.min(first + rows, totalRecords) }} of {{ totalRecords }}
                            </p>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Rows Per Page</label>
                            <Paginator
                                v-model:first="first"
                                v-model:rows="rows"
                                :total-records="totalRecords"
                                :rows-per-page-options="[10, 20, 30]"
                            />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Jump To Page</label>
                            <Paginator
                                v-model:first="first"
                                :rows="rows"
                                :total-records="totalRecords"
                                template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown"
                            />
                        </div>
                    </CardContent>
                </Card>

                <!-- DataView -->
                <Card>
                    <CardHeader>
                        <CardTitle>DataView</CardTitle>
                        <CardDescription>
                            Component for displaying data in list or grid layout.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataView :value="products" :layout="layout">
                            <template #header>
                                <div class="flex justify-end">
                                    <div class="flex gap-1 rounded-lg border p-1">
                                        <button
                                            type="button"
                                            class="rounded p-2"
                                            :class="{ 'bg-muted': layout === 'list' }"
                                            @click="layout = 'list'"
                                        >
                                            <i class="pi pi-list" />
                                        </button>
                                        <button
                                            type="button"
                                            class="rounded p-2"
                                            :class="{ 'bg-muted': layout === 'grid' }"
                                            @click="layout = 'grid'"
                                        >
                                            <i class="pi pi-th-large" />
                                        </button>
                                    </div>
                                </div>
                            </template>

                            <template #list="{ items }">
                                <div class="flex flex-col divide-y">
                                    <div
                                        v-for="(item, index) in items"
                                        :key="index"
                                        class="flex items-center gap-4 p-4"
                                    >
                                        <div class="flex-1">
                                            <div class="font-medium">{{ item.name }}</div>
                                            <div class="text-sm text-muted-foreground">{{ item.category }}</div>
                                        </div>
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item.inventoryStatus)" />
                                        <div class="font-semibold">{{ formatCurrency(item.price) }}</div>
                                    </div>
                                </div>
                            </template>

                            <template #grid="{ items }">
                                <div class="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
                                    <div
                                        v-for="(item, index) in items"
                                        :key="index"
                                        class="rounded-lg border p-4"
                                    >
                                        <div class="mb-2 font-medium">{{ item.name }}</div>
                                        <div class="mb-2 text-sm text-muted-foreground">{{ item.category }}</div>
                                        <div class="flex items-center justify-between">
                                            <span class="font-semibold">{{ formatCurrency(item.price) }}</span>
                                            <Tag :value="item.inventoryStatus" :severity="getSeverity(item.inventoryStatus)" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </DataView>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

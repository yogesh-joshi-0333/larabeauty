<script setup lang="ts">
import { ref, onMounted } from 'vue';
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

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Tag from 'primevue/tag';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Data', href: dataIndex().url },
    { title: 'DataTable' },
];

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    inventoryStatus: string;
    category: string;
    rating: number;
}

// Demo data
const products = ref<Product[]>([]);
const selectedProducts = ref<Product[]>([]);
const filters = ref({ global: { value: '', matchMode: 'contains' } });

onMounted(() => {
    products.value = [
        { id: '1000', code: 'f230fh0g3', name: 'Bamboo Watch', description: 'Product Description', price: 65, quantity: 24, inventoryStatus: 'INSTOCK', category: 'Accessories', rating: 5 },
        { id: '1001', code: 'nvklal433', name: 'Black Watch', description: 'Product Description', price: 72, quantity: 61, inventoryStatus: 'INSTOCK', category: 'Accessories', rating: 4 },
        { id: '1002', code: 'zz21cz3c1', name: 'Blue Band', description: 'Product Description', price: 79, quantity: 2, inventoryStatus: 'LOWSTOCK', category: 'Fitness', rating: 3 },
        { id: '1003', code: '244wgerg2', name: 'Blue T-Shirt', description: 'Product Description', price: 29, quantity: 25, inventoryStatus: 'INSTOCK', category: 'Clothing', rating: 5 },
        { id: '1004', code: 'h456wer53', name: 'Bracelet', description: 'Product Description', price: 15, quantity: 73, inventoryStatus: 'INSTOCK', category: 'Accessories', rating: 4 },
        { id: '1005', code: 'av2231fwg', name: 'Brown Purse', description: 'Product Description', price: 120, quantity: 0, inventoryStatus: 'OUTOFSTOCK', category: 'Accessories', rating: 4 },
        { id: '1006', code: 'bib36pfvm', name: 'Chakra Bracelet', description: 'Product Description', price: 32, quantity: 5, inventoryStatus: 'LOWSTOCK', category: 'Accessories', rating: 3 },
        { id: '1007', code: 'mbvjkgip5', name: 'Galaxy Earrings', description: 'Product Description', price: 34, quantity: 23, inventoryStatus: 'INSTOCK', category: 'Accessories', rating: 5 },
        { id: '1008', code: 'vbb124btr', name: 'Game Controller', description: 'Product Description', price: 99, quantity: 2, inventoryStatus: 'LOWSTOCK', category: 'Electronics', rating: 4 },
        { id: '1009', code: 'cm230f032', name: 'Gaming Set', description: 'Product Description', price: 299, quantity: 63, inventoryStatus: 'INSTOCK', category: 'Electronics', rating: 3 },
    ];
});

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
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
    <Head title="DataTable - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Basic DataTable -->
                <Card>
                    <CardHeader>
                        <CardTitle>Basic DataTable</CardTitle>
                        <CardDescription>
                            Simple data table with columns displaying product information.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable :value="products" table-style="min-width: 50rem">
                            <Column field="code" header="Code" />
                            <Column field="name" header="Name" />
                            <Column field="category" header="Category" />
                            <Column field="quantity" header="Quantity" />
                        </DataTable>
                    </CardContent>
                </Card>

                <!-- DataTable with Features -->
                <Card>
                    <CardHeader>
                        <CardTitle>Full-Featured DataTable</CardTitle>
                        <CardDescription>
                            DataTable with sorting, filtering, pagination, and row selection.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex justify-end">
                            <span class="relative">
                                <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <InputText
                                    v-model="filters.global.value"
                                    placeholder="Search..."
                                    class="pl-10"
                                />
                            </span>
                        </div>

                        <DataTable
                            v-model:selection="selectedProducts"
                            v-model:filters="filters"
                            :value="products"
                            :paginator="true"
                            :rows="5"
                            :rows-per-page-options="[5, 10, 20]"
                            :global-filter-fields="['name', 'code', 'category']"
                            table-style="min-width: 50rem"
                            selection-mode="multiple"
                            data-key="id"
                            removable-sort
                        >
                            <Column selection-mode="multiple" header-style="width: 3rem" />
                            <Column field="code" header="Code" sortable />
                            <Column field="name" header="Name" sortable />
                            <Column field="category" header="Category" sortable />
                            <Column field="price" header="Price" sortable>
                                <template #body="{ data }">
                                    {{ formatCurrency(data.price) }}
                                </template>
                            </Column>
                            <Column field="quantity" header="Quantity" sortable />
                            <Column field="inventoryStatus" header="Status" sortable>
                                <template #body="{ data }">
                                    <Tag
                                        :value="data.inventoryStatus"
                                        :severity="getSeverity(data.inventoryStatus)"
                                    />
                                </template>
                            </Column>
                        </DataTable>

                        <p class="text-xs text-muted-foreground">
                            Selected: {{ selectedProducts.length }} products
                        </p>
                    </CardContent>
                </Card>

                <!-- Striped & Gridlines -->
                <Card>
                    <CardHeader>
                        <CardTitle>Table Styles</CardTitle>
                        <CardDescription>
                            DataTable with striped rows and gridlines.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            :value="products.slice(0, 5)"
                            striped-rows
                            show-gridlines
                            table-style="min-width: 50rem"
                        >
                            <Column field="code" header="Code" />
                            <Column field="name" header="Name" />
                            <Column field="category" header="Category" />
                            <Column field="price" header="Price">
                                <template #body="{ data }">
                                    {{ formatCurrency(data.price) }}
                                </template>
                            </Column>
                        </DataTable>
                    </CardContent>
                </Card>

                <!-- Scrollable -->
                <Card>
                    <CardHeader>
                        <CardTitle>Scrollable DataTable</CardTitle>
                        <CardDescription>
                            DataTable with fixed height and scrollable content.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            :value="products"
                            scrollable
                            scroll-height="300px"
                            table-style="min-width: 50rem"
                        >
                            <Column field="code" header="Code" />
                            <Column field="name" header="Name" />
                            <Column field="category" header="Category" />
                            <Column field="quantity" header="Quantity" />
                            <Column field="inventoryStatus" header="Status">
                                <template #body="{ data }">
                                    <Tag
                                        :value="data.inventoryStatus"
                                        :severity="getSeverity(data.inventoryStatus)"
                                    />
                                </template>
                            </Column>
                        </DataTable>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

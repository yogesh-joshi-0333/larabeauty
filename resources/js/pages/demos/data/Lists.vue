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

import OrderList from 'primevue/orderlist';
import PickList from 'primevue/picklist';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Data', href: dataIndex().url },
    { title: 'List Components' },
];

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
}

// OrderList data
const products = ref<Product[]>([
    { id: '1', name: 'Bamboo Watch', category: 'Accessories', price: 65 },
    { id: '2', name: 'Black Watch', category: 'Accessories', price: 72 },
    { id: '3', name: 'Blue Band', category: 'Fitness', price: 79 },
    { id: '4', name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
    { id: '5', name: 'Bracelet', category: 'Accessories', price: 15 },
]);

// PickList data
const pickListProducts = ref<Product[][]>([
    [
        { id: '1', name: 'Bamboo Watch', category: 'Accessories', price: 65 },
        { id: '2', name: 'Black Watch', category: 'Accessories', price: 72 },
        { id: '3', name: 'Blue Band', category: 'Fitness', price: 79 },
        { id: '4', name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
    ],
    [
        { id: '5', name: 'Bracelet', category: 'Accessories', price: 15 },
    ],
]);

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};
</script>

<template>
    <Head title="List Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- OrderList -->
                <Card>
                    <CardHeader>
                        <CardTitle>OrderList</CardTitle>
                        <CardDescription>
                            List component with reordering capabilities using drag and drop or buttons.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <OrderList
                            v-model="products"
                            list-style="height: auto"
                            data-key="id"
                        >
                            <template #header>Products</template>
                            <template #item="{ item }">
                                <div class="flex flex-wrap items-center gap-4 p-2">
                                    <div class="flex-1">
                                        <span class="font-medium">{{ item.name }}</span>
                                        <div class="text-sm text-muted-foreground">
                                            {{ item.category }}
                                        </div>
                                    </div>
                                    <span class="font-semibold">
                                        {{ formatCurrency(item.price) }}
                                    </span>
                                </div>
                            </template>
                        </OrderList>
                    </CardContent>
                </Card>

                <!-- PickList -->
                <Card>
                    <CardHeader>
                        <CardTitle>PickList</CardTitle>
                        <CardDescription>
                            Dual list component for moving items between source and target lists.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PickList
                            v-model="pickListProducts"
                            list-style="height: 250px"
                            data-key="id"
                            breakpoint="1024px"
                        >
                            <template #sourceheader>Available</template>
                            <template #targetheader>Selected</template>
                            <template #item="{ item }">
                                <div class="flex flex-wrap items-center gap-4 p-2">
                                    <div class="flex-1">
                                        <span class="font-medium">{{ item.name }}</span>
                                        <div class="text-sm text-muted-foreground">
                                            {{ item.category }}
                                        </div>
                                    </div>
                                    <span class="font-semibold">
                                        {{ formatCurrency(item.price) }}
                                    </span>
                                </div>
                            </template>
                        </PickList>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

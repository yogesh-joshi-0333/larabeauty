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
import { type BreadcrumbItem } from '@/types';

import Chart from 'primevue/chart';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Chart' },
];

const barData = ref();
const barOptions = ref();
const lineData = ref();
const lineOptions = ref();
const pieData = ref();
const pieOptions = ref();
const doughnutData = ref();
const radarData = ref();
const radarOptions = ref();
const polarData = ref();
const polarOptions = ref();

onMounted(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#6c757d';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#dfe7ef';

    // Bar Chart
    barData.value = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales 2024',
                backgroundColor: '#6366f1',
                borderColor: '#6366f1',
                data: [65, 59, 80, 81, 56, 55, 40],
            },
            {
                label: 'Sales 2025',
                backgroundColor: '#22c55e',
                borderColor: '#22c55e',
                data: [28, 48, 40, 19, 86, 27, 90],
            },
        ],
    };

    barOptions.value = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: { color: textColor },
            },
        },
        scales: {
            x: {
                ticks: { color: textColorSecondary },
                grid: { color: surfaceBorder },
            },
            y: {
                ticks: { color: textColorSecondary },
                grid: { color: surfaceBorder },
            },
        },
    };

    // Line Chart
    lineData.value = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Revenue',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#6366f1',
                tension: 0.4,
            },
            {
                label: 'Expenses',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#ef4444',
                tension: 0.4,
            },
        ],
    };

    lineOptions.value = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: { color: textColor },
            },
        },
        scales: {
            x: {
                ticks: { color: textColorSecondary },
                grid: { color: surfaceBorder },
            },
            y: {
                ticks: { color: textColorSecondary },
                grid: { color: surfaceBorder },
            },
        },
    };

    // Pie Chart
    pieData.value = {
        labels: ['Electronics', 'Clothing', 'Home', 'Sports', 'Other'],
        datasets: [
            {
                data: [540, 325, 702, 421, 230],
                backgroundColor: ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'],
                hoverBackgroundColor: ['#4f46e5', '#16a34a', '#d97706', '#dc2626', '#7c3aed'],
            },
        ],
    };

    pieOptions.value = {
        plugins: {
            legend: {
                labels: { color: textColor },
            },
        },
    };

    // Doughnut Chart
    doughnutData.value = {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [
            {
                data: [300, 500, 100],
                backgroundColor: ['#6366f1', '#22c55e', '#f59e0b'],
                hoverBackgroundColor: ['#4f46e5', '#16a34a', '#d97706'],
            },
        ],
    };

    // Radar Chart
    radarData.value = {
        labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
        datasets: [
            {
                label: 'Product A',
                borderColor: '#6366f1',
                pointBackgroundColor: '#6366f1',
                pointBorderColor: '#6366f1',
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: '#6366f1',
                data: [65, 59, 90, 81, 56],
            },
            {
                label: 'Product B',
                borderColor: '#22c55e',
                pointBackgroundColor: '#22c55e',
                pointBorderColor: '#22c55e',
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: '#22c55e',
                data: [28, 48, 40, 19, 96],
            },
        ],
    };

    radarOptions.value = {
        plugins: {
            legend: {
                labels: { color: textColor },
            },
        },
        scales: {
            r: {
                grid: { color: surfaceBorder },
                pointLabels: { color: textColorSecondary },
            },
        },
    };

    // Polar Area Chart
    polarData.value = {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
        datasets: [
            {
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['#ef4444', '#22c55e', '#f59e0b', '#6b7280', '#3b82f6'],
            },
        ],
    };

    polarOptions.value = {
        plugins: {
            legend: {
                labels: { color: textColor },
            },
        },
        scales: {
            r: {
                grid: { color: surfaceBorder },
            },
        },
    };
});
</script>

<template>
    <Head title="Chart Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Bar Chart -->
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart</CardTitle>
                        <CardDescription>
                            Vertical bar chart for comparing categorical data.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Chart type="bar" :data="barData" :options="barOptions" class="h-80" />
                    </CardContent>
                </Card>

                <!-- Line Chart -->
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart</CardTitle>
                        <CardDescription>
                            Line chart for visualizing trends over time.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Chart type="line" :data="lineData" :options="lineOptions" class="h-80" />
                    </CardContent>
                </Card>

                <!-- Pie and Doughnut -->
                <div class="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pie Chart</CardTitle>
                            <CardDescription>
                                Pie chart for showing parts of a whole.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Chart type="pie" :data="pieData" :options="pieOptions" class="mx-auto w-full max-w-xs" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Doughnut Chart</CardTitle>
                            <CardDescription>
                                Doughnut chart with a hollow center.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Chart type="doughnut" :data="doughnutData" :options="pieOptions" class="mx-auto w-full max-w-xs" />
                        </CardContent>
                    </Card>
                </div>

                <!-- Radar and Polar Area -->
                <div class="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Radar Chart</CardTitle>
                            <CardDescription>
                                Radar chart for comparing multiple variables.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Chart type="radar" :data="radarData" :options="radarOptions" class="mx-auto w-full max-w-md" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Polar Area Chart</CardTitle>
                            <CardDescription>
                                Polar area chart showing data in circular form.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Chart type="polarArea" :data="polarData" :options="polarOptions" class="mx-auto w-full max-w-xs" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

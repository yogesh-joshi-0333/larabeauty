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
import { index as formIndex } from '@/routes/demos/form';
import { type BreadcrumbItem } from '@/types';

import DatePicker from 'primevue/datepicker';
import ColorPicker from 'primevue/colorpicker';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Form', href: formIndex().url },
    { title: 'Date & Color Pickers' },
];

// Demo state
const basicDate = ref<Date | null>(null);
const dateWithTime = ref<Date | null>(null);
const dateRange = ref<Date[] | null>(null);
const multipleDate = ref<Date[] | null>(null);
const monthPicker = ref<Date | null>(null);
const yearPicker = ref<Date | null>(null);
const inlineDate = ref<Date | null>(null);
const colorValue = ref('1976D2');
const colorInline = ref('ff0000');
</script>

<template>
    <Head title="Date & Color Pickers - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- DatePicker -->
                <Card>
                    <CardHeader>
                        <CardTitle>DatePicker</CardTitle>
                        <CardDescription>
                            Comprehensive date selection component with various modes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-4 md:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Basic</label>
                                <DatePicker v-model="basicDate" placeholder="Select a date" />
                                <p class="text-xs text-muted-foreground">
                                    Value: {{ basicDate?.toLocaleDateString() || 'None' }}
                                </p>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">With Icon</label>
                                <DatePicker v-model="basicDate" show-icon icon-display="input" />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Date & Time</label>
                                <DatePicker
                                    v-model="dateWithTime"
                                    show-time
                                    hour-format="12"
                                    placeholder="Select date and time"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Date Range</label>
                                <DatePicker
                                    v-model="dateRange"
                                    selection-mode="range"
                                    placeholder="Select range"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Multiple Dates</label>
                                <DatePicker
                                    v-model="multipleDate"
                                    selection-mode="multiple"
                                    placeholder="Select multiple"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Month Picker</label>
                                <DatePicker
                                    v-model="monthPicker"
                                    view="month"
                                    date-format="mm/yy"
                                    placeholder="Select month"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Year Picker</label>
                                <DatePicker
                                    v-model="yearPicker"
                                    view="year"
                                    date-format="yy"
                                    placeholder="Select year"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">With Button Bar</label>
                                <DatePicker
                                    v-model="basicDate"
                                    show-button-bar
                                    placeholder="With today/clear"
                                />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Inline Calendar</label>
                            <DatePicker v-model="inlineDate" inline show-week />
                        </div>
                    </CardContent>
                </Card>

                <!-- ColorPicker -->
                <Card>
                    <CardHeader>
                        <CardTitle>ColorPicker</CardTitle>
                        <CardDescription>
                            Color selection component with overlay and inline modes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-6 md:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Overlay</label>
                                <div class="flex items-center gap-4">
                                    <ColorPicker v-model="colorValue" />
                                    <span class="text-sm">#{{ colorValue }}</span>
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Inline</label>
                                <ColorPicker v-model="colorInline" inline />
                                <p class="text-xs text-muted-foreground">#{{ colorInline }}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

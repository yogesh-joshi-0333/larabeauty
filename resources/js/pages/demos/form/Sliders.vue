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

import Slider from 'primevue/slider';
import Knob from 'primevue/knob';
import Rating from 'primevue/rating';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Form', href: formIndex().url },
    { title: 'Sliders & Ratings' },
];

// Demo state
const sliderValue = ref(50);
const rangeValue = ref([20, 80]);
const verticalValue = ref(50);
const stepValue = ref(40);
const knobValue = ref(60);
const knobMin = ref(25);
const ratingValue = ref(3);
const ratingReadonly = ref(4);
</script>

<template>
    <Head title="Sliders & Ratings - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Slider -->
                <Card>
                    <CardHeader>
                        <CardTitle>Slider</CardTitle>
                        <CardDescription>
                            Range input component for selecting numeric values.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-8">
                        <div class="space-y-4">
                            <label class="text-sm font-medium">Basic</label>
                            <Slider v-model="sliderValue" class="w-full" />
                            <p class="text-xs text-muted-foreground">Value: {{ sliderValue }}</p>
                        </div>

                        <div class="space-y-4">
                            <label class="text-sm font-medium">Range</label>
                            <Slider v-model="rangeValue" range class="w-full" />
                            <p class="text-xs text-muted-foreground">
                                Range: {{ rangeValue[0] }} - {{ rangeValue[1] }}
                            </p>
                        </div>

                        <div class="space-y-4">
                            <label class="text-sm font-medium">With Step (10)</label>
                            <Slider v-model="stepValue" :step="10" class="w-full" />
                            <p class="text-xs text-muted-foreground">Value: {{ stepValue }}</p>
                        </div>

                        <div class="flex gap-8">
                            <div class="space-y-4">
                                <label class="text-sm font-medium">Vertical</label>
                                <Slider v-model="verticalValue" orientation="vertical" class="h-48" />
                                <p class="text-xs text-muted-foreground">{{ verticalValue }}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Knob -->
                <Card>
                    <CardHeader>
                        <CardTitle>Knob</CardTitle>
                        <CardDescription>
                            Circular input for numeric values with drag interaction.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="flex flex-wrap gap-8">
                            <div class="space-y-2 text-center">
                                <label class="text-sm font-medium">Basic</label>
                                <Knob v-model="knobValue" />
                                <p class="text-xs text-muted-foreground">{{ knobValue }}</p>
                            </div>

                            <div class="space-y-2 text-center">
                                <label class="text-sm font-medium">Min/Max (0-50)</label>
                                <Knob v-model="knobMin" :min="0" :max="50" />
                            </div>

                            <div class="space-y-2 text-center">
                                <label class="text-sm font-medium">Step (10)</label>
                                <Knob v-model="stepValue" :step="10" />
                            </div>

                            <div class="space-y-2 text-center">
                                <label class="text-sm font-medium">With Template</label>
                                <Knob v-model="knobValue" value-template="{value}%" />
                            </div>

                            <div class="space-y-2 text-center">
                                <label class="text-sm font-medium">Stroke Width</label>
                                <Knob v-model="knobValue" :stroke-width="5" />
                            </div>

                            <div class="space-y-2 text-center">
                                <label class="text-sm font-medium">Size (200)</label>
                                <Knob v-model="knobValue" :size="200" />
                            </div>

                            <div class="space-y-2 text-center">
                                <label class="text-sm font-medium">Readonly</label>
                                <Knob v-model="knobValue" readonly />
                            </div>

                            <div class="space-y-2 text-center">
                                <label class="text-sm font-medium">Disabled</label>
                                <Knob v-model="knobValue" disabled />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Rating -->
                <Card>
                    <CardHeader>
                        <CardTitle>Rating</CardTitle>
                        <CardDescription>
                            Star-based rating component for feedback and reviews.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic</label>
                            <Rating v-model="ratingValue" />
                            <p class="text-xs text-muted-foreground">Value: {{ ratingValue }}</p>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Without Cancel</label>
                            <Rating v-model="ratingValue" :cancel="false" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">10 Stars</label>
                            <Rating v-model="ratingValue" :stars="10" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Readonly</label>
                            <Rating v-model="ratingReadonly" readonly :cancel="false" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Disabled</label>
                            <Rating v-model="ratingValue" disabled :cancel="false" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

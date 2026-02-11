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
import { type BreadcrumbItem } from '@/types';

import Image from 'primevue/image';
import Galleria from 'primevue/galleria';
import Carousel from 'primevue/carousel';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Media' },
];

// Sample images using picsum.photos
const images = ref([
    { itemImageSrc: 'https://picsum.photos/800/600?random=1', thumbnailImageSrc: 'https://picsum.photos/80/60?random=1', alt: 'Image 1', title: 'Beautiful Landscape 1' },
    { itemImageSrc: 'https://picsum.photos/800/600?random=2', thumbnailImageSrc: 'https://picsum.photos/80/60?random=2', alt: 'Image 2', title: 'Beautiful Landscape 2' },
    { itemImageSrc: 'https://picsum.photos/800/600?random=3', thumbnailImageSrc: 'https://picsum.photos/80/60?random=3', alt: 'Image 3', title: 'Beautiful Landscape 3' },
    { itemImageSrc: 'https://picsum.photos/800/600?random=4', thumbnailImageSrc: 'https://picsum.photos/80/60?random=4', alt: 'Image 4', title: 'Beautiful Landscape 4' },
    { itemImageSrc: 'https://picsum.photos/800/600?random=5', thumbnailImageSrc: 'https://picsum.photos/80/60?random=5', alt: 'Image 5', title: 'Beautiful Landscape 5' },
]);

// Carousel items
const carouselItems = ref([
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$100', image: 'https://picsum.photos/300/200?random=10' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$150', image: 'https://picsum.photos/300/200?random=11' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$200', image: 'https://picsum.photos/300/200?random=12' },
    { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$250', image: 'https://picsum.photos/300/200?random=13' },
    { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$300', image: 'https://picsum.photos/300/200?random=14' },
    { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$350', image: 'https://picsum.photos/300/200?random=15' },
]);

const responsiveOptions = ref([
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
]);

const galleriaResponsiveOptions = ref([
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 },
]);

const displayFullscreen = ref(false);
const activeIndex = ref(0);
</script>

<template>
    <Head title="Media Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Image -->
                <Card>
                    <CardHeader>
                        <CardTitle>Image</CardTitle>
                        <CardDescription>
                            Image component with preview mode and placeholder support.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-4 md:grid-cols-3">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Basic</label>
                                <Image src="https://picsum.photos/300/200?random=20" alt="Basic Image" width="250" />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">With Preview</label>
                                <Image src="https://picsum.photos/300/200?random=21" alt="Preview Image" width="250" preview />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">With Indicator</label>
                                <Image src="https://picsum.photos/300/200?random=22" alt="Indicator Image" width="250" preview>
                                    <template #indicatoricon>
                                        <i class="pi pi-search" />
                                    </template>
                                </Image>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Galleria -->
                <Card>
                    <CardHeader>
                        <CardTitle>Galleria</CardTitle>
                        <CardDescription>
                            Advanced image gallery with thumbnails and various display modes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic with Thumbnails</label>
                            <Galleria
                                :value="images"
                                :responsive-options="galleriaResponsiveOptions"
                                :num-visible="5"
                                container-style="max-width: 640px"
                            >
                                <template #item="{ item }">
                                    <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%; display: block" />
                                </template>
                                <template #thumbnail="{ item }">
                                    <img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block" />
                                </template>
                            </Galleria>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Indicators</label>
                            <Galleria
                                :value="images"
                                :num-visible="5"
                                container-style="max-width: 640px"
                                :show-thumbnails="false"
                                :show-indicators="true"
                            >
                                <template #item="{ item }">
                                    <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%; display: block" />
                                </template>
                            </Galleria>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Captions</label>
                            <Galleria
                                :value="images"
                                :num-visible="5"
                                container-style="max-width: 640px"
                                :show-thumbnails="false"
                                :show-indicators="true"
                            >
                                <template #item="{ item }">
                                    <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%; display: block" />
                                </template>
                                <template #caption="{ item }">
                                    <div class="bg-black/50 p-4 text-center text-white">
                                        <h4 class="font-medium">{{ item.title }}</h4>
                                    </div>
                                </template>
                            </Galleria>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Fullscreen</label>
                            <div class="flex items-center gap-4">
                                <img
                                    v-for="(image, index) in images"
                                    :key="index"
                                    :src="image.thumbnailImageSrc"
                                    :alt="image.alt"
                                    class="cursor-pointer rounded"
                                    @click="activeIndex = index; displayFullscreen = true"
                                />
                            </div>
                            <Galleria
                                v-model:visible="displayFullscreen"
                                v-model:active-index="activeIndex"
                                :value="images"
                                :num-visible="5"
                                full-screen
                                :show-thumbnails="true"
                                :show-item-navigators="true"
                            >
                                <template #item="{ item }">
                                    <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%; display: block" />
                                </template>
                                <template #thumbnail="{ item }">
                                    <img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block" />
                                </template>
                            </Galleria>
                        </div>
                    </CardContent>
                </Card>

                <!-- Carousel -->
                <Card>
                    <CardHeader>
                        <CardTitle>Carousel</CardTitle>
                        <CardDescription>
                            Content slider component for displaying multiple items.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic Carousel</label>
                            <Carousel
                                :value="carouselItems"
                                :num-visible="3"
                                :num-scroll="1"
                                :responsive-options="responsiveOptions"
                            >
                                <template #item="{ data }">
                                    <div class="m-2 rounded-lg border p-4 text-center">
                                        <img :src="data.image" :alt="data.name" class="mx-auto mb-4 w-full rounded" />
                                        <h4 class="mb-1 font-medium">{{ data.name }}</h4>
                                        <p class="mb-2 text-sm text-muted-foreground">{{ data.description }}</p>
                                        <span class="font-semibold text-primary">{{ data.price }}</span>
                                    </div>
                                </template>
                            </Carousel>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Circular Carousel</label>
                            <Carousel
                                :value="carouselItems"
                                :num-visible="3"
                                :num-scroll="1"
                                :responsive-options="responsiveOptions"
                                circular
                            >
                                <template #item="{ data }">
                                    <div class="m-2 rounded-lg border p-4 text-center">
                                        <img :src="data.image" :alt="data.name" class="mx-auto mb-4 w-full rounded" />
                                        <h4 class="mb-1 font-medium">{{ data.name }}</h4>
                                        <span class="font-semibold text-primary">{{ data.price }}</span>
                                    </div>
                                </template>
                            </Carousel>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Vertical Carousel</label>
                            <Carousel
                                :value="carouselItems.slice(0, 4)"
                                :num-visible="2"
                                :num-scroll="1"
                                orientation="vertical"
                                vertical-view-port-height="300px"
                            >
                                <template #item="{ data }">
                                    <div class="m-2 rounded-lg border p-4">
                                        <div class="flex items-center gap-4">
                                            <img :src="data.image" :alt="data.name" class="h-16 w-16 rounded object-cover" />
                                            <div>
                                                <h4 class="font-medium">{{ data.name }}</h4>
                                                <span class="text-sm text-primary">{{ data.price }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </Carousel>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

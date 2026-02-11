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

import Button from 'primevue/button';
import SplitButton from 'primevue/splitbutton';
import SpeedDial from 'primevue/speeddial';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Button' },
];

const toast = useToast();
const loading = ref(false);

const loadData = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const splitItems = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => toast.add({ severity: 'success', summary: 'Updated', life: 3000 }),
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => toast.add({ severity: 'warn', summary: 'Deleted', life: 3000 }),
    },
    { separator: true },
    {
        label: 'Home',
        icon: 'pi pi-home',
    },
];

const speedDialItems = [
    { label: 'Add', icon: 'pi pi-plus', command: () => toast.add({ severity: 'info', summary: 'Add clicked', life: 2000 }) },
    { label: 'Update', icon: 'pi pi-pencil', command: () => toast.add({ severity: 'info', summary: 'Update clicked', life: 2000 }) },
    { label: 'Delete', icon: 'pi pi-trash', command: () => toast.add({ severity: 'info', summary: 'Delete clicked', life: 2000 }) },
    { label: 'Upload', icon: 'pi pi-upload', command: () => toast.add({ severity: 'info', summary: 'Upload clicked', life: 2000 }) },
];
</script>

<template>
    <Head title="Button Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <Toast />

            <div class="space-y-8">
                <!-- Button Severities -->
                <Card>
                    <CardHeader>
                        <CardTitle>Button Severities</CardTitle>
                        <CardDescription>
                            Buttons with different severity levels for various actions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex flex-wrap gap-2">
                            <Button label="Primary" />
                            <Button label="Secondary" severity="secondary" />
                            <Button label="Success" severity="success" />
                            <Button label="Info" severity="info" />
                            <Button label="Warning" severity="warn" />
                            <Button label="Help" severity="help" />
                            <Button label="Danger" severity="danger" />
                            <Button label="Contrast" severity="contrast" />
                        </div>
                    </CardContent>
                </Card>

                <!-- Button Variants -->
                <Card>
                    <CardHeader>
                        <CardTitle>Button Variants</CardTitle>
                        <CardDescription>
                            Different button styles: raised, rounded, text, outlined, and link.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Raised</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Primary" raised />
                                <Button label="Secondary" severity="secondary" raised />
                                <Button label="Success" severity="success" raised />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Rounded</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Primary" rounded />
                                <Button label="Secondary" severity="secondary" rounded />
                                <Button label="Success" severity="success" rounded />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Text</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Primary" text />
                                <Button label="Secondary" severity="secondary" text />
                                <Button label="Success" severity="success" text />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Outlined</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Primary" outlined />
                                <Button label="Secondary" severity="secondary" outlined />
                                <Button label="Success" severity="success" outlined />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Link</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Link" link />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Buttons with Icons -->
                <Card>
                    <CardHeader>
                        <CardTitle>Icons & Loading</CardTitle>
                        <CardDescription>
                            Buttons with icons and loading state.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Icons</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Submit" icon="pi pi-check" />
                                <Button label="Edit" icon="pi pi-pencil" severity="secondary" />
                                <Button label="Cancel" icon="pi pi-times" severity="danger" />
                                <Button icon="pi pi-search" aria-label="Search" />
                                <Button icon="pi pi-user" aria-label="User" rounded outlined />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Loading</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Load Data" icon="pi pi-sync" :loading="loading" @click="loadData" />
                                <Button label="Always Loading" loading />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Sizes</label>
                            <div class="flex flex-wrap items-center gap-2">
                                <Button label="Small" size="small" />
                                <Button label="Normal" />
                                <Button label="Large" size="large" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- SplitButton -->
                <Card>
                    <CardHeader>
                        <CardTitle>SplitButton</CardTitle>
                        <CardDescription>
                            Button with dropdown menu for additional actions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex flex-wrap gap-2">
                            <SplitButton label="Save" icon="pi pi-check" :model="splitItems" />
                            <SplitButton label="Save" icon="pi pi-check" :model="splitItems" severity="secondary" />
                            <SplitButton label="Save" icon="pi pi-check" :model="splitItems" severity="success" />
                            <SplitButton label="Save" icon="pi pi-check" :model="splitItems" severity="danger" />
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <SplitButton label="Save" icon="pi pi-check" :model="splitItems" outlined />
                            <SplitButton label="Save" icon="pi pi-check" :model="splitItems" severity="success" outlined />
                        </div>
                    </CardContent>
                </Card>

                <!-- SpeedDial -->
                <Card>
                    <CardHeader>
                        <CardTitle>SpeedDial</CardTitle>
                        <CardDescription>
                            Floating action button with popup menu items.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="relative h-80">
                            <SpeedDial
                                :model="speedDialItems"
                                direction="up"
                                :style="{ position: 'absolute', left: '1rem', bottom: '1rem' }"
                            />

                            <SpeedDial
                                :model="speedDialItems"
                                direction="right"
                                :style="{ position: 'absolute', left: '1rem', top: '1rem' }"
                            />

                            <SpeedDial
                                :model="speedDialItems"
                                direction="down"
                                :style="{ position: 'absolute', right: '1rem', top: '1rem' }"
                            />

                            <SpeedDial
                                :model="speedDialItems"
                                direction="left"
                                :style="{ position: 'absolute', right: '1rem', bottom: '1rem' }"
                            />

                            <SpeedDial
                                :model="speedDialItems"
                                type="circle"
                                :radius="80"
                                :style="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 'calc(50% - 2rem)' }"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

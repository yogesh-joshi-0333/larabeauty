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

import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Data', href: dataIndex().url },
    { title: 'Tree Components' },
];

// Tree data
const nodes = ref([
    {
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '0-0',
                label: 'Work',
                data: 'Work Folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                    { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' },
                ],
            },
            {
                key: '0-1',
                label: 'Home',
                data: 'Home Folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    { key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices Text File' },
                ],
            },
        ],
    },
    {
        key: '1',
        label: 'Events',
        data: 'Events Folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar', data: 'Meeting' },
            { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar', data: 'Product Launch' },
            { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar', data: 'Report Review' },
        ],
    },
    {
        key: '2',
        label: 'Movies',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '2-0',
                label: 'Al Pacino',
                icon: 'pi pi-fw pi-star',
                data: 'Al Pacino',
                children: [
                    { key: '2-0-0', label: 'Godfather', icon: 'pi pi-fw pi-video', data: 'Godfather Movie' },
                    { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' },
                ],
            },
            {
                key: '2-1',
                label: 'Robert De Niro',
                icon: 'pi pi-fw pi-star',
                data: 'Robert De Niro',
                children: [
                    { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
                    { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' },
                ],
            },
        ],
    },
]);

// TreeTable data
const treeTableNodes = ref([
    {
        key: '0',
        data: { name: 'Applications', size: '100kb', type: 'Folder' },
        children: [
            {
                key: '0-0',
                data: { name: 'Vue', size: '25kb', type: 'Folder' },
                children: [
                    { key: '0-0-0', data: { name: 'vue.app', size: '10kb', type: 'Application' } },
                    { key: '0-0-1', data: { name: 'native.app', size: '10kb', type: 'Application' } },
                ],
            },
            { key: '0-1', data: { name: 'editor.app', size: '25kb', type: 'Application' } },
            { key: '0-2', data: { name: 'settings.app', size: '50kb', type: 'Application' } },
        ],
    },
    {
        key: '1',
        data: { name: 'Cloud', size: '20kb', type: 'Folder' },
        children: [
            { key: '1-0', data: { name: 'backup-1.zip', size: '10kb', type: 'Zip' } },
            { key: '1-1', data: { name: 'backup-2.zip', size: '10kb', type: 'Zip' } },
        ],
    },
    {
        key: '2',
        data: { name: 'Desktop', size: '150kb', type: 'Folder' },
        children: [
            { key: '2-0', data: { name: 'note-meeting.txt', size: '50kb', type: 'Text' } },
            { key: '2-1', data: { name: 'note-todo.txt', size: '100kb', type: 'Text' } },
        ],
    },
]);

const selectedKey = ref<Record<string, boolean>>({});
const selectedKeys = ref<Record<string, boolean>>({});
const expandedKeys = ref<Record<string, boolean>>({ '0': true, '0-0': true });
</script>

<template>
    <Head title="Tree Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Tree -->
                <Card>
                    <CardHeader>
                        <CardTitle>Tree</CardTitle>
                        <CardDescription>
                            Hierarchical tree component for displaying nested data.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-6 lg:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Basic</label>
                                <Tree :value="nodes" class="w-full" />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Single Selection</label>
                                <Tree
                                    v-model:selection-keys="selectedKey"
                                    :value="nodes"
                                    selection-mode="single"
                                    class="w-full"
                                />
                                <p class="text-xs text-muted-foreground">
                                    Selected: {{ Object.keys(selectedKey).join(', ') || 'None' }}
                                </p>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Multiple Selection</label>
                                <Tree
                                    v-model:selection-keys="selectedKeys"
                                    :value="nodes"
                                    selection-mode="multiple"
                                    class="w-full"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Checkbox Selection</label>
                                <Tree
                                    v-model:selection-keys="selectedKeys"
                                    :value="nodes"
                                    selection-mode="checkbox"
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Controlled Expansion -->
                <Card>
                    <CardHeader>
                        <CardTitle>Controlled Expansion</CardTitle>
                        <CardDescription>
                            Tree with programmatically controlled expanded nodes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tree
                            v-model:expanded-keys="expandedKeys"
                            :value="nodes"
                            class="w-full"
                        />
                        <p class="mt-2 text-xs text-muted-foreground">
                            Expanded: {{ Object.keys(expandedKeys).join(', ') || 'None' }}
                        </p>
                    </CardContent>
                </Card>

                <!-- TreeTable -->
                <Card>
                    <CardHeader>
                        <CardTitle>TreeTable</CardTitle>
                        <CardDescription>
                            Tree structure combined with a data table for columnar display.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TreeTable :value="treeTableNodes" table-style="min-width: 50rem">
                            <Column field="name" header="Name" expander />
                            <Column field="size" header="Size" />
                            <Column field="type" header="Type" />
                        </TreeTable>
                    </CardContent>
                </Card>

                <!-- TreeTable with Selection -->
                <Card>
                    <CardHeader>
                        <CardTitle>TreeTable with Selection</CardTitle>
                        <CardDescription>
                            TreeTable with row selection and sorting capabilities.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TreeTable
                            v-model:selection-keys="selectedKeys"
                            :value="treeTableNodes"
                            selection-mode="checkbox"
                            table-style="min-width: 50rem"
                        >
                            <Column field="name" header="Name" expander sortable />
                            <Column field="size" header="Size" sortable />
                            <Column field="type" header="Type" sortable />
                        </TreeTable>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

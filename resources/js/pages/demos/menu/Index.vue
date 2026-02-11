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

import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import TieredMenu from 'primevue/tieredmenu';
import ContextMenu from 'primevue/contextmenu';
import Breadcrumb from 'primevue/breadcrumb';
import PanelMenu from 'primevue/panelmenu';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Menu' },
];

const toast = useToast();
const menuRef = ref();
const tieredMenuRef = ref();
const contextMenuRef = ref();

const menuItems = [
    {
        label: 'Options',
        items: [
            { label: 'Refresh', icon: 'pi pi-refresh', command: () => toast.add({ severity: 'success', summary: 'Refreshed', life: 2000 }) },
            { label: 'Export', icon: 'pi pi-upload' },
        ],
    },
    {
        label: 'Account',
        items: [
            { label: 'Settings', icon: 'pi pi-cog' },
            { label: 'Logout', icon: 'pi pi-sign-out' },
        ],
    },
];

const menubarItems = [
    {
        label: 'File',
        icon: 'pi pi-file',
        items: [
            { label: 'New', icon: 'pi pi-plus', shortcut: 'Ctrl+N' },
            { label: 'Open', icon: 'pi pi-folder-open', shortcut: 'Ctrl+O' },
            { separator: true },
            { label: 'Save', icon: 'pi pi-save', shortcut: 'Ctrl+S' },
            { label: 'Save As...', icon: 'pi pi-save' },
        ],
    },
    {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [
            { label: 'Undo', icon: 'pi pi-undo', shortcut: 'Ctrl+Z' },
            { label: 'Redo', icon: 'pi pi-replay', shortcut: 'Ctrl+Y' },
            { separator: true },
            { label: 'Cut', icon: 'pi pi-scissors', shortcut: 'Ctrl+X' },
            { label: 'Copy', icon: 'pi pi-copy', shortcut: 'Ctrl+C' },
            { label: 'Paste', icon: 'pi pi-clipboard', shortcut: 'Ctrl+V' },
        ],
    },
    {
        label: 'View',
        icon: 'pi pi-eye',
        items: [
            { label: 'Zoom In', icon: 'pi pi-search-plus' },
            { label: 'Zoom Out', icon: 'pi pi-search-minus' },
        ],
    },
    {
        label: 'Help',
        icon: 'pi pi-question-circle',
    },
];

const tieredMenuItems = [
    {
        label: 'File',
        icon: 'pi pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                items: [
                    { label: 'Document', icon: 'pi pi-file' },
                    { label: 'Image', icon: 'pi pi-image' },
                    { label: 'Video', icon: 'pi pi-video' },
                ],
            },
            { label: 'Open', icon: 'pi pi-folder-open' },
            { separator: true },
            { label: 'Quit', icon: 'pi pi-times' },
        ],
    },
    {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [
            { label: 'Cut', icon: 'pi pi-scissors' },
            { label: 'Copy', icon: 'pi pi-copy' },
            { label: 'Paste', icon: 'pi pi-clipboard' },
        ],
    },
];

const contextMenuItems = [
    { label: 'Copy', icon: 'pi pi-copy' },
    { label: 'Cut', icon: 'pi pi-scissors' },
    { label: 'Paste', icon: 'pi pi-clipboard' },
    { separator: true },
    { label: 'Delete', icon: 'pi pi-trash' },
];

const breadcrumbItems = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Electronics' },
    { label: 'Computers' },
    { label: 'Laptops' },
];

const panelMenuItems = [
    {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
            { label: 'Documents', icon: 'pi pi-file-pdf' },
            { label: 'Images', icon: 'pi pi-image' },
            { label: 'Videos', icon: 'pi pi-video' },
        ],
    },
    {
        label: 'Users',
        icon: 'pi pi-users',
        items: [
            { label: 'Add User', icon: 'pi pi-user-plus' },
            { label: 'Remove User', icon: 'pi pi-user-minus' },
            { label: 'Search Users', icon: 'pi pi-search' },
        ],
    },
    {
        label: 'Settings',
        icon: 'pi pi-cog',
        items: [
            { label: 'General', icon: 'pi pi-sliders-h' },
            { label: 'Security', icon: 'pi pi-shield' },
            { label: 'Notifications', icon: 'pi pi-bell' },
        ],
    },
];

const toggleMenu = (event: Event) => {
    menuRef.value.toggle(event);
};

const toggleTieredMenu = (event: Event) => {
    tieredMenuRef.value.toggle(event);
};

const onContextMenu = (event: Event) => {
    contextMenuRef.value.show(event);
};
</script>

<template>
    <Head title="Menu Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <Toast />

            <div class="space-y-8">
                <!-- Menubar -->
                <Card>
                    <CardHeader>
                        <CardTitle>Menubar</CardTitle>
                        <CardDescription>
                            Horizontal menu bar with dropdown submenus.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Menubar :model="menubarItems" />
                    </CardContent>
                </Card>

                <!-- Menu -->
                <Card>
                    <CardHeader>
                        <CardTitle>Menu</CardTitle>
                        <CardDescription>
                            Popup menu triggered by a button click.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button type="button" label="Toggle Menu" icon="pi pi-bars" @click="toggleMenu" />
                        <Menu ref="menuRef" :model="menuItems" :popup="true" />
                    </CardContent>
                </Card>

                <!-- TieredMenu -->
                <Card>
                    <CardHeader>
                        <CardTitle>TieredMenu</CardTitle>
                        <CardDescription>
                            Menu with nested submenus appearing on hover.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <Button type="button" label="Toggle Menu" icon="pi pi-bars" @click="toggleTieredMenu" />
                        <TieredMenu ref="tieredMenuRef" :model="tieredMenuItems" :popup="true" />

                        <div>
                            <label class="text-sm font-medium">Inline</label>
                            <TieredMenu :model="tieredMenuItems" />
                        </div>
                    </CardContent>
                </Card>

                <!-- ContextMenu -->
                <Card>
                    <CardHeader>
                        <CardTitle>ContextMenu</CardTitle>
                        <CardDescription>
                            Menu triggered by right-click on a target element.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div
                            class="flex h-40 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed"
                            @contextmenu="onContextMenu"
                        >
                            <p class="text-muted-foreground">Right-click here to open context menu</p>
                        </div>
                        <ContextMenu ref="contextMenuRef" :model="contextMenuItems" />
                    </CardContent>
                </Card>

                <!-- Breadcrumb -->
                <Card>
                    <CardHeader>
                        <CardTitle>Breadcrumb</CardTitle>
                        <CardDescription>
                            Navigation component showing the current location path.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Breadcrumb :model="breadcrumbItems" :home="{ icon: 'pi pi-home', url: '/' }" />
                    </CardContent>
                </Card>

                <!-- PanelMenu -->
                <Card>
                    <CardHeader>
                        <CardTitle>PanelMenu</CardTitle>
                        <CardDescription>
                            Vertical accordion-style menu with expandable panels.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PanelMenu :model="panelMenuItems" class="w-full md:w-80" />
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

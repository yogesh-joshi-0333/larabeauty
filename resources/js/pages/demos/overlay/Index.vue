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

import Dialog from 'primevue/dialog';
import Drawer from 'primevue/drawer';
import Popover from 'primevue/popover';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Overlay' },
];

const confirm = useConfirm();
const toast = useToast();

// Dialog state
const basicDialog = ref(false);
const headerFooterDialog = ref(false);
const maximizableDialog = ref(false);

// Drawer state
const leftDrawer = ref(false);
const rightDrawer = ref(false);
const topDrawer = ref(false);
const bottomDrawer = ref(false);

// Popover ref
const popoverRef = ref();

const togglePopover = (event: Event) => {
    popoverRef.value.toggle(event);
};

const showConfirm = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true,
        },
        acceptProps: {
            label: 'Confirm',
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        },
    });
};

const showDeleteConfirm = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true,
        },
        acceptProps: {
            label: 'Delete',
            severity: 'danger',
        },
        accept: () => {
            toast.add({ severity: 'success', summary: 'Deleted', detail: 'Record deleted successfully', life: 3000 });
        },
    });
};

const showToast = (severity: 'success' | 'info' | 'warn' | 'error') => {
    const messages = {
        success: { summary: 'Success', detail: 'Operation completed successfully' },
        info: { summary: 'Info', detail: 'This is an informational message' },
        warn: { summary: 'Warning', detail: 'Please review before proceeding' },
        error: { summary: 'Error', detail: 'An error occurred during operation' },
    };
    toast.add({ severity, ...messages[severity], life: 3000 });
};
</script>

<template>
    <Head title="Overlay Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <Toast />
            <ConfirmDialog />

            <div class="space-y-8">
                <!-- Dialog -->
                <Card>
                    <CardHeader>
                        <CardTitle>Dialog</CardTitle>
                        <CardDescription>
                            Modal dialog component for displaying content in an overlay.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex flex-wrap gap-2">
                            <Button label="Basic" @click="basicDialog = true" />
                            <Button label="With Header & Footer" severity="secondary" @click="headerFooterDialog = true" />
                            <Button label="Maximizable" severity="info" @click="maximizableDialog = true" />
                        </div>

                        <!-- Basic Dialog -->
                        <Dialog v-model:visible="basicDialog" modal header="Basic Dialog" :style="{ width: '25rem' }">
                            <p class="text-muted-foreground">
                                This is a basic dialog with a header and content area.
                            </p>
                        </Dialog>

                        <!-- Header & Footer Dialog -->
                        <Dialog v-model:visible="headerFooterDialog" modal header="Edit Profile" :style="{ width: '30rem' }">
                            <div class="space-y-4">
                                <p class="text-muted-foreground">Update your profile information.</p>
                                <div class="space-y-2">
                                    <label class="text-sm font-medium">Name</label>
                                    <input type="text" class="w-full rounded border p-2" placeholder="Enter your name" />
                                </div>
                            </div>
                            <template #footer>
                                <Button label="Cancel" text severity="secondary" @click="headerFooterDialog = false" />
                                <Button label="Save" @click="headerFooterDialog = false" />
                            </template>
                        </Dialog>

                        <!-- Maximizable Dialog -->
                        <Dialog v-model:visible="maximizableDialog" modal header="Maximizable Dialog" maximizable :style="{ width: '50vw' }">
                            <p class="text-muted-foreground">
                                This dialog can be maximized to fill the entire viewport.
                                Click the maximize button in the header to expand it.
                            </p>
                        </Dialog>
                    </CardContent>
                </Card>

                <!-- Drawer -->
                <Card>
                    <CardHeader>
                        <CardTitle>Drawer</CardTitle>
                        <CardDescription>
                            Slide-out panel component from any edge of the screen.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex flex-wrap gap-2">
                            <Button label="Left" icon="pi pi-arrow-right" @click="leftDrawer = true" />
                            <Button label="Right" icon="pi pi-arrow-left" severity="secondary" @click="rightDrawer = true" />
                            <Button label="Top" icon="pi pi-arrow-down" severity="info" @click="topDrawer = true" />
                            <Button label="Bottom" icon="pi pi-arrow-up" severity="success" @click="bottomDrawer = true" />
                        </div>

                        <Drawer v-model:visible="leftDrawer" header="Left Drawer">
                            <p>This drawer slides in from the left side.</p>
                        </Drawer>

                        <Drawer v-model:visible="rightDrawer" header="Right Drawer" position="right">
                            <p>This drawer slides in from the right side.</p>
                        </Drawer>

                        <Drawer v-model:visible="topDrawer" header="Top Drawer" position="top">
                            <p>This drawer slides in from the top.</p>
                        </Drawer>

                        <Drawer v-model:visible="bottomDrawer" header="Bottom Drawer" position="bottom">
                            <p>This drawer slides in from the bottom.</p>
                        </Drawer>
                    </CardContent>
                </Card>

                <!-- Popover -->
                <Card>
                    <CardHeader>
                        <CardTitle>Popover</CardTitle>
                        <CardDescription>
                            Overlay panel that appears near its target element.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button type="button" label="Show Popover" @click="togglePopover" />

                        <Popover ref="popoverRef">
                            <div class="p-4">
                                <h4 class="mb-2 font-medium">Popover Content</h4>
                                <p class="text-sm text-muted-foreground">
                                    This is a popover that appears near the button.
                                </p>
                            </div>
                        </Popover>
                    </CardContent>
                </Card>

                <!-- ConfirmDialog -->
                <Card>
                    <CardHeader>
                        <CardTitle>ConfirmDialog</CardTitle>
                        <CardDescription>
                            Dialog component for confirmation prompts with accept/reject actions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex flex-wrap gap-2">
                            <Button label="Confirm" icon="pi pi-check" @click="showConfirm" />
                            <Button label="Delete" icon="pi pi-trash" severity="danger" @click="showDeleteConfirm" />
                        </div>
                    </CardContent>
                </Card>

                <!-- Toast -->
                <Card>
                    <CardHeader>
                        <CardTitle>Toast</CardTitle>
                        <CardDescription>
                            Notification messages displayed as growl-style popups.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex flex-wrap gap-2">
                            <Button label="Success" severity="success" @click="showToast('success')" />
                            <Button label="Info" severity="info" @click="showToast('info')" />
                            <Button label="Warn" severity="warn" @click="showToast('warn')" />
                            <Button label="Error" severity="danger" @click="showToast('error')" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

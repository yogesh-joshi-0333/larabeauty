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

import Message from 'primevue/message';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Messages' },
];

const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Operation completed successfully', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'This is an informational message', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please review before proceeding', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error', detail: 'An error occurred', life: 3000 });
};

const showSticky = () => {
    toast.add({ severity: 'info', summary: 'Sticky', detail: 'This message will not auto-hide' });
};

const showMultiple = () => {
    toast.add({ severity: 'info', summary: 'Message 1', detail: 'First message', life: 3000 });
    toast.add({ severity: 'success', summary: 'Message 2', detail: 'Second message', life: 3000 });
    toast.add({ severity: 'warn', summary: 'Message 3', detail: 'Third message', life: 3000 });
};

const showTopLeft = () => {
    toast.add({ severity: 'info', summary: 'Top Left', detail: 'Message positioned top-left', life: 3000, group: 'tl' });
};

const showTopCenter = () => {
    toast.add({ severity: 'info', summary: 'Top Center', detail: 'Message positioned top-center', life: 3000, group: 'tc' });
};

const showBottomCenter = () => {
    toast.add({ severity: 'info', summary: 'Bottom Center', detail: 'Message positioned bottom-center', life: 3000, group: 'bc' });
};

const showBottomLeft = () => {
    toast.add({ severity: 'info', summary: 'Bottom Left', detail: 'Message positioned bottom-left', life: 3000, group: 'bl' });
};

const showBottomRight = () => {
    toast.add({ severity: 'info', summary: 'Bottom Right', detail: 'Message positioned bottom-right', life: 3000, group: 'br' });
};

const clearAll = () => {
    toast.removeAllGroups();
};

const closableMessages = ref([
    { severity: 'success', content: 'Success Message', closable: true },
    { severity: 'info', content: 'Info Message', closable: true },
    { severity: 'warn', content: 'Warning Message', closable: true },
    { severity: 'error', content: 'Error Message', closable: true },
]);
</script>

<template>
    <Head title="Message Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <!-- Toast components for different positions -->
            <Toast />
            <Toast position="top-left" group="tl" />
            <Toast position="top-center" group="tc" />
            <Toast position="bottom-center" group="bc" />
            <Toast position="bottom-left" group="bl" />
            <Toast position="bottom-right" group="br" />

            <div class="space-y-8">
                <!-- Message -->
                <Card>
                    <CardHeader>
                        <CardTitle>Message</CardTitle>
                        <CardDescription>
                            Inline message component for displaying feedback.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <Message severity="success">Success: Operation completed</Message>
                        <Message severity="info">Info: This is an informational message</Message>
                        <Message severity="warn">Warning: Please review before proceeding</Message>
                        <Message severity="error">Error: An error has occurred</Message>
                        <Message severity="secondary">Secondary: Additional information</Message>
                        <Message severity="contrast">Contrast: High visibility message</Message>
                    </CardContent>
                </Card>

                <!-- Closable Messages -->
                <Card>
                    <CardHeader>
                        <CardTitle>Closable Messages</CardTitle>
                        <CardDescription>
                            Messages with close button that can be dismissed.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <Message
                            v-for="(msg, index) in closableMessages"
                            :key="index"
                            :severity="msg.severity"
                            :closable="msg.closable"
                        >
                            {{ msg.content }}
                        </Message>
                    </CardContent>
                </Card>

                <!-- Message with Icon -->
                <Card>
                    <CardHeader>
                        <CardTitle>Custom Icons</CardTitle>
                        <CardDescription>
                            Messages with custom icons.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <Message severity="info" icon="pi pi-send">Custom icon message</Message>
                        <Message severity="success" icon="pi pi-check-circle">
                            Operation completed successfully
                        </Message>
                    </CardContent>
                </Card>

                <!-- Toast -->
                <Card>
                    <CardHeader>
                        <CardTitle>Toast</CardTitle>
                        <CardDescription>
                            Growl-style notification messages.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Severities</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Success" severity="success" @click="showSuccess" />
                                <Button label="Info" severity="info" @click="showInfo" />
                                <Button label="Warn" severity="warn" @click="showWarn" />
                                <Button label="Error" severity="danger" @click="showError" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Options</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Sticky (No Auto-Hide)" severity="secondary" @click="showSticky" />
                                <Button label="Multiple" severity="secondary" @click="showMultiple" />
                                <Button label="Clear All" severity="secondary" outlined @click="clearAll" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Positions</label>
                            <div class="flex flex-wrap gap-2">
                                <Button label="Top Left" size="small" severity="secondary" @click="showTopLeft" />
                                <Button label="Top Center" size="small" severity="secondary" @click="showTopCenter" />
                                <Button label="Top Right (Default)" size="small" severity="secondary" @click="showInfo" />
                                <Button label="Bottom Left" size="small" severity="secondary" @click="showBottomLeft" />
                                <Button label="Bottom Center" size="small" severity="secondary" @click="showBottomCenter" />
                                <Button label="Bottom Right" size="small" severity="secondary" @click="showBottomRight" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

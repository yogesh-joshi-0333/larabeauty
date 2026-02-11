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

import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'File' },
];

const toast = useToast();

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const onSelect = (event: { files: File[] }) => {
    toast.add({ severity: 'info', summary: 'Selected', detail: `${event.files.length} file(s) selected`, life: 3000 });
};

const onError = () => {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Upload failed', life: 3000 });
};

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref<File[]>([]);

const onRemoveTemplatingFile = (
    file: File,
    removeFileCallback: (index: number) => void,
    index: number
) => {
    removeFileCallback(index);
    totalSize.value -= file.size;
    totalSizePercent.value = Math.round((totalSize.value / 1000000) * 100);
};

const onClearTemplatingUpload = (clear: () => void) => {
    clear();
    totalSize.value = 0;
    totalSizePercent.value = 0;
};

const onSelectedFiles = (event: { files: File[] }) => {
    files.value = event.files;
    files.value.forEach((file) => {
        totalSize.value += file.size;
    });
    totalSizePercent.value = Math.round((totalSize.value / 1000000) * 100);
};

const formatSize = (bytes: number) => {
    const k = 1024;
    const dm = 3;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
};
</script>

<template>
    <Head title="File Upload - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <Toast />

            <div class="space-y-8">
                <!-- Basic Upload -->
                <Card>
                    <CardHeader>
                        <CardTitle>Basic File Upload</CardTitle>
                        <CardDescription>
                            Simple file upload with automatic upload on selection.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FileUpload
                            mode="basic"
                            name="demo[]"
                            url="/api/upload"
                            accept="image/*"
                            :max-file-size="1000000"
                            @upload="onUpload"
                            @select="onSelect"
                        />
                    </CardContent>
                </Card>

                <!-- Advanced Upload -->
                <Card>
                    <CardHeader>
                        <CardTitle>Advanced File Upload</CardTitle>
                        <CardDescription>
                            Full-featured upload with preview and multiple files support.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FileUpload
                            name="demo[]"
                            url="/api/upload"
                            @upload="onUpload"
                            @error="onError"
                            :multiple="true"
                            accept="image/*"
                            :max-file-size="1000000"
                        >
                            <template #empty>
                                <span>Drag and drop files here to upload.</span>
                            </template>
                        </FileUpload>
                    </CardContent>
                </Card>

                <!-- Custom Template Upload -->
                <Card>
                    <CardHeader>
                        <CardTitle>Custom Template</CardTitle>
                        <CardDescription>
                            File upload with customized templates for header, content, and empty states.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FileUpload
                            name="demo[]"
                            url="/api/upload"
                            @upload="onUpload"
                            @select="onSelectedFiles"
                            :multiple="true"
                            accept="image/*"
                            :max-file-size="1000000"
                        >
                            <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                                <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
                                    <div class="flex gap-2">
                                        <button
                                            type="button"
                                            class="rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                            @click="chooseCallback()"
                                        >
                                            <i class="pi pi-images mr-2" />
                                            Choose
                                        </button>
                                        <button
                                            type="button"
                                            class="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
                                            :disabled="!files || files.length === 0"
                                            @click="uploadCallback()"
                                        >
                                            <i class="pi pi-cloud-upload mr-2" />
                                            Upload
                                        </button>
                                        <button
                                            type="button"
                                            class="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
                                            :disabled="!files || files.length === 0"
                                            @click="onClearTemplatingUpload(clearCallback)"
                                        >
                                            <i class="pi pi-times mr-2" />
                                            Clear
                                        </button>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-sm text-muted-foreground">
                                            {{ formatSize(totalSize) }}
                                        </span>
                                        <div class="h-2 w-32 rounded-full bg-muted">
                                            <div
                                                class="h-2 rounded-full bg-primary transition-all"
                                                :style="{ width: Math.min(totalSizePercent, 100) + '%' }"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #content="{ files, removeFileCallback }">
                                <div v-if="files.length > 0" class="mt-4 space-y-2">
                                    <div
                                        v-for="(file, index) of files"
                                        :key="file.name + file.type + file.size"
                                        class="flex items-center justify-between rounded-lg border p-3"
                                    >
                                        <div class="flex items-center gap-4">
                                            <img
                                                role="presentation"
                                                :alt="file.name"
                                                :src="(file as any).objectURL"
                                                class="h-16 w-16 rounded object-cover"
                                            />
                                            <div>
                                                <p class="font-medium">{{ file.name }}</p>
                                                <p class="text-sm text-muted-foreground">{{ formatSize(file.size) }}</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            class="rounded p-2 text-red-600 hover:bg-red-100"
                                            @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                                        >
                                            <i class="pi pi-times" />
                                        </button>
                                    </div>
                                </div>
                            </template>
                            <template #empty>
                                <div class="flex flex-col items-center justify-center py-8 text-center">
                                    <i class="pi pi-cloud-upload mb-4 text-4xl text-muted-foreground" />
                                    <p class="mb-1 text-lg font-medium">Drag and drop files here</p>
                                    <p class="text-sm text-muted-foreground">or click Choose to select files</p>
                                </div>
                            </template>
                        </FileUpload>
                    </CardContent>
                </Card>

                <!-- Auto Upload -->
                <Card>
                    <CardHeader>
                        <CardTitle>Auto Upload</CardTitle>
                        <CardDescription>
                            Files are uploaded automatically when selected.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FileUpload
                            mode="basic"
                            name="demo[]"
                            url="/api/upload"
                            accept="image/*"
                            :max-file-size="1000000"
                            :auto="true"
                            choose-label="Select Image"
                            @upload="onUpload"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

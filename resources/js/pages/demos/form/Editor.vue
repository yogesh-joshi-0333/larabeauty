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

import Editor from 'primevue/editor';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Form', href: formIndex().url },
    { title: 'Rich Text Editor' },
];

// Demo state
const editorValue = ref('<p>Hello <strong>World</strong>!</p><p>This is a <em>rich text</em> editor powered by <a href="https://quilljs.com/">Quill</a>.</p>');
const readonlyValue = ref('<h2>Welcome to PrimeVue</h2><p>PrimeVue is a rich set of open source UI Components for Vue.</p>');
</script>

<template>
    <Head title="Rich Text Editor - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Editor -->
                <Card>
                    <CardHeader>
                        <CardTitle>Editor</CardTitle>
                        <CardDescription>
                            Rich text editor based on Quill with comprehensive formatting options.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic Editor</label>
                            <Editor v-model="editorValue" editor-style="height: 320px" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Output HTML</label>
                            <div class="rounded-md border bg-muted/50 p-4">
                                <pre class="text-xs overflow-auto whitespace-pre-wrap">{{ editorValue }}</pre>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Readonly Editor -->
                <Card>
                    <CardHeader>
                        <CardTitle>Readonly Mode</CardTitle>
                        <CardDescription>
                            Editor in readonly mode for displaying formatted content.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Editor v-model="readonlyValue" readonly editor-style="height: 200px" />
                    </CardContent>
                </Card>

                <!-- Custom Toolbar -->
                <Card>
                    <CardHeader>
                        <CardTitle>Custom Toolbar</CardTitle>
                        <CardDescription>
                            Editor with a customized toolbar using header slot.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Editor v-model="editorValue" editor-style="height: 320px">
                            <template #toolbar>
                                <span class="ql-formats">
                                    <select class="ql-header">
                                        <option value="1">Heading 1</option>
                                        <option value="2">Heading 2</option>
                                        <option value="3">Heading 3</option>
                                        <option selected>Normal</option>
                                    </select>
                                </span>
                                <span class="ql-formats">
                                    <button class="ql-bold" type="button" />
                                    <button class="ql-italic" type="button" />
                                    <button class="ql-underline" type="button" />
                                    <button class="ql-strike" type="button" />
                                </span>
                                <span class="ql-formats">
                                    <select class="ql-color" />
                                    <select class="ql-background" />
                                </span>
                                <span class="ql-formats">
                                    <button class="ql-list" value="ordered" type="button" />
                                    <button class="ql-list" value="bullet" type="button" />
                                </span>
                                <span class="ql-formats">
                                    <button class="ql-link" type="button" />
                                    <button class="ql-image" type="button" />
                                </span>
                                <span class="ql-formats">
                                    <button class="ql-clean" type="button" />
                                </span>
                            </template>
                        </Editor>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

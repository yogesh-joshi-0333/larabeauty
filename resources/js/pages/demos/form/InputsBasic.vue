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

import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Form', href: formIndex().url },
    { title: 'Basic Inputs' },
];

// Demo state
const basicText = ref('');
const floatLabelText = ref('');
const iconFieldText = ref('');
const disabledText = ref('Disabled input');
const invalidText = ref('');
const textareaValue = ref('');
const autoResizeText = ref('');
const passwordValue = ref('');
const passwordWithFeedback = ref('');
</script>

<template>
    <Head title="Basic Inputs - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- InputText -->
                <Card>
                    <CardHeader>
                        <CardTitle>InputText</CardTitle>
                        <CardDescription>
                            Basic text input component with various states and variants.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic</label>
                            <InputText v-model="basicText" placeholder="Enter text" />
                            <p class="text-xs text-muted-foreground">Value: {{ basicText }}</p>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Float Label</label>
                            <FloatLabel>
                                <InputText id="float-label" v-model="floatLabelText" />
                                <label for="float-label">Username</label>
                            </FloatLabel>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Icon</label>
                            <IconField>
                                <InputIcon class="pi pi-search" />
                                <InputText v-model="iconFieldText" placeholder="Search" />
                            </IconField>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Disabled</label>
                            <InputText v-model="disabledText" disabled />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Invalid</label>
                            <InputText v-model="invalidText" invalid placeholder="Invalid input" />
                        </div>

                        <div class="grid grid-cols-3 gap-4">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Small</label>
                                <InputText placeholder="Small" size="small" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Normal</label>
                                <InputText placeholder="Normal" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Large</label>
                                <InputText placeholder="Large" size="large" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Textarea -->
                <Card>
                    <CardHeader>
                        <CardTitle>Textarea</CardTitle>
                        <CardDescription>
                            Multi-line text input with auto-resize capability.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic Textarea</label>
                            <Textarea v-model="textareaValue" rows="3" placeholder="Enter your message" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Auto Resize</label>
                            <Textarea
                                v-model="autoResizeText"
                                auto-resize
                                rows="2"
                                placeholder="This textarea auto-resizes as you type"
                            />
                        </div>
                    </CardContent>
                </Card>

                <!-- Password -->
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Password input with toggle visibility and strength indicator.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic Password</label>
                            <Password v-model="passwordValue" :feedback="false" toggle-mask />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Strength Indicator</label>
                            <Password v-model="passwordWithFeedback" toggle-mask />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

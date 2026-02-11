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

import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputOtp from 'primevue/inputotp';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Form', href: formIndex().url },
    { title: 'Advanced Inputs' },
];

// Demo state
const phoneNumber = ref('');
const dateValue = ref('');
const ssnValue = ref('');
const basicNumber = ref(0);
const currencyValue = ref(1500);
const percentValue = ref(25);
const prefixSuffixValue = ref(20);
const minMaxValue = ref(50);
const otpValue = ref('');
const otpIntegerValue = ref('');
</script>

<template>
    <Head title="Advanced Inputs - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- InputMask -->
                <Card>
                    <CardHeader>
                        <CardTitle>InputMask</CardTitle>
                        <CardDescription>
                            Input with mask for formatted data entry like phone numbers, dates, etc.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-4 md:grid-cols-3">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Phone Number</label>
                                <InputMask
                                    v-model="phoneNumber"
                                    mask="(999) 999-9999"
                                    placeholder="(999) 999-9999"
                                />
                                <p class="text-xs text-muted-foreground">Value: {{ phoneNumber }}</p>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Date</label>
                                <InputMask
                                    v-model="dateValue"
                                    mask="99/99/9999"
                                    placeholder="MM/DD/YYYY"
                                    slot-char="mm/dd/yyyy"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">SSN</label>
                                <InputMask
                                    v-model="ssnValue"
                                    mask="999-99-9999"
                                    placeholder="999-99-9999"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- InputNumber -->
                <Card>
                    <CardHeader>
                        <CardTitle>InputNumber</CardTitle>
                        <CardDescription>
                            Numeric input with formatting, currency, and button controls.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-4 md:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Basic</label>
                                <InputNumber v-model="basicNumber" />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">With Buttons</label>
                                <InputNumber v-model="basicNumber" show-buttons />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Currency</label>
                                <InputNumber
                                    v-model="currencyValue"
                                    mode="currency"
                                    currency="USD"
                                    locale="en-US"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Percent</label>
                                <InputNumber
                                    v-model="percentValue"
                                    prefix="%"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Prefix & Suffix</label>
                                <InputNumber
                                    v-model="prefixSuffixValue"
                                    prefix="$"
                                    suffix=" per month"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Min (0) & Max (100)</label>
                                <InputNumber
                                    v-model="minMaxValue"
                                    :min="0"
                                    :max="100"
                                    show-buttons
                                />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Vertical Buttons</label>
                            <InputNumber
                                v-model="basicNumber"
                                show-buttons
                                button-layout="vertical"
                                style="width: 4rem"
                            />
                        </div>
                    </CardContent>
                </Card>

                <!-- InputOtp -->
                <Card>
                    <CardHeader>
                        <CardTitle>InputOtp</CardTitle>
                        <CardDescription>
                            One-time password input for verification codes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Basic (6 digits)</label>
                            <InputOtp v-model="otpValue" :length="6" />
                            <p class="text-xs text-muted-foreground">Value: {{ otpValue }}</p>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Integer Only</label>
                            <InputOtp v-model="otpIntegerValue" :length="4" integer-only />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Masked</label>
                            <InputOtp v-model="otpValue" :length="6" mask />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

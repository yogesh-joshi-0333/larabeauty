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

import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';
import ToggleButton from 'primevue/togglebutton';
import SelectButton from 'primevue/selectbutton';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Form', href: formIndex().url },
    { title: 'Toggle Components' },
];

// Demo state
const checked = ref(false);
const selectedIngredients = ref<string[]>([]);
const selectedCity = ref('');
const switchValue = ref(false);
const toggleValue = ref(false);
const selectButtonValue = ref('One');
const selectButtonMultiple = ref<string[]>([]);
const justifyValue = ref('left');

const ingredients = ['Cheese', 'Mushroom', 'Pepper', 'Onion'];
const cities = [
    { name: 'New York', key: 'NY' },
    { name: 'Rome', key: 'RM' },
    { name: 'London', key: 'LDN' },
    { name: 'Paris', key: 'PRS' },
];
const options = ['One', 'Two', 'Three'];
const justifyOptions = [
    { icon: 'pi pi-align-left', value: 'left' },
    { icon: 'pi pi-align-center', value: 'center' },
    { icon: 'pi pi-align-right', value: 'right' },
    { icon: 'pi pi-align-justify', value: 'justify' },
];
</script>

<template>
    <Head title="Toggle Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Checkbox -->
                <Card>
                    <CardHeader>
                        <CardTitle>Checkbox</CardTitle>
                        <CardDescription>
                            Boolean selection component for single or multiple choices.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-4">
                            <div class="flex items-center gap-2">
                                <Checkbox v-model="checked" input-id="basic" binary />
                                <label for="basic" class="text-sm">Accept terms and conditions</label>
                            </div>
                            <p class="text-xs text-muted-foreground">Checked: {{ checked }}</p>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Multiple Selection</label>
                            <div class="flex flex-wrap gap-4">
                                <div
                                    v-for="ingredient in ingredients"
                                    :key="ingredient"
                                    class="flex items-center gap-2"
                                >
                                    <Checkbox
                                        v-model="selectedIngredients"
                                        :input-id="ingredient"
                                        :value="ingredient"
                                    />
                                    <label :for="ingredient" class="text-sm">{{ ingredient }}</label>
                                </div>
                            </div>
                            <p class="text-xs text-muted-foreground">
                                Selected: {{ selectedIngredients.join(', ') || 'None' }}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <!-- RadioButton -->
                <Card>
                    <CardHeader>
                        <CardTitle>RadioButton</CardTitle>
                        <CardDescription>
                            Single selection from a list of options.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex flex-wrap gap-4">
                            <div
                                v-for="city in cities"
                                :key="city.key"
                                class="flex items-center gap-2"
                            >
                                <RadioButton
                                    v-model="selectedCity"
                                    :input-id="city.key"
                                    :value="city.name"
                                />
                                <label :for="city.key" class="text-sm">{{ city.name }}</label>
                            </div>
                        </div>
                        <p class="text-xs text-muted-foreground">
                            Selected: {{ selectedCity || 'None' }}
                        </p>
                    </CardContent>
                </Card>

                <!-- ToggleSwitch -->
                <Card>
                    <CardHeader>
                        <CardTitle>ToggleSwitch</CardTitle>
                        <CardDescription>
                            Switch component for binary options.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="flex items-center gap-4">
                            <ToggleSwitch v-model="switchValue" />
                            <span class="text-sm">{{ switchValue ? 'On' : 'Off' }}</span>
                        </div>

                        <div class="flex items-center gap-4">
                            <ToggleSwitch v-model="switchValue" disabled />
                            <span class="text-sm text-muted-foreground">Disabled</span>
                        </div>
                    </CardContent>
                </Card>

                <!-- ToggleButton -->
                <Card>
                    <CardHeader>
                        <CardTitle>ToggleButton</CardTitle>
                        <CardDescription>
                            Button that toggles between two states.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <ToggleButton
                            v-model="toggleValue"
                            on-label="Yes"
                            off-label="No"
                            on-icon="pi pi-check"
                            off-icon="pi pi-times"
                        />
                        <p class="text-xs text-muted-foreground">Value: {{ toggleValue }}</p>
                    </CardContent>
                </Card>

                <!-- SelectButton -->
                <Card>
                    <CardHeader>
                        <CardTitle>SelectButton</CardTitle>
                        <CardDescription>
                            Button group for single or multiple selection.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Single Selection</label>
                            <SelectButton v-model="selectButtonValue" :options="options" />
                            <p class="text-xs text-muted-foreground">Selected: {{ selectButtonValue }}</p>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Multiple Selection</label>
                            <SelectButton v-model="selectButtonMultiple" :options="options" multiple />
                            <p class="text-xs text-muted-foreground">
                                Selected: {{ selectButtonMultiple.join(', ') || 'None' }}
                            </p>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">With Icons</label>
                            <SelectButton
                                v-model="justifyValue"
                                :options="justifyOptions"
                                option-label="icon"
                                option-value="value"
                                data-key="value"
                            >
                                <template #option="{ option }">
                                    <i :class="option.icon" />
                                </template>
                            </SelectButton>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

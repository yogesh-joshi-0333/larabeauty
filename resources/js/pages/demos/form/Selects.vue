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

import Select from 'primevue/select';
import MultiSelect from 'primevue/multiselect';
import AutoComplete from 'primevue/autocomplete';
import CascadeSelect from 'primevue/cascadeselect';
import Listbox from 'primevue/listbox';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Form', href: formIndex().url },
    { title: 'Select Components' },
];

// Options data
const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
];

const countries = [
    {
        name: 'Australia',
        code: 'AU',
        states: [
            { name: 'New South Wales', cities: [{ cname: 'Sydney', code: 'A-SY' }, { cname: 'Newcastle', code: 'A-NE' }] },
            { name: 'Queensland', cities: [{ cname: 'Brisbane', code: 'A-BR' }, { cname: 'Townsville', code: 'A-TO' }] },
        ],
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            { name: 'Quebec', cities: [{ cname: 'Montreal', code: 'C-MO' }, { cname: 'Quebec City', code: 'C-QU' }] },
            { name: 'Ontario', cities: [{ cname: 'Ottawa', code: 'C-OT' }, { cname: 'Toronto', code: 'C-TO' }] },
        ],
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            { name: 'California', cities: [{ cname: 'Los Angeles', code: 'US-LA' }, { cname: 'San Francisco', code: 'US-SF' }] },
            { name: 'Texas', cities: [{ cname: 'Austin', code: 'US-AU' }, { cname: 'Dallas', code: 'US-DA' }] },
        ],
    },
];

const allCities = ['New York', 'Rome', 'London', 'Istanbul', 'Paris', 'Tokyo', 'Berlin', 'Sydney', 'Toronto', 'Dubai'];

// Demo state
const selectedCity = ref(null);
const selectedCityEditable = ref(null);
const selectedCities = ref([]);
const autoCompleteValue = ref('');
const autoCompleteSuggestions = ref<string[]>([]);
const cascadeValue = ref(null);
const listboxValue = ref(null);
const listboxMultiple = ref([]);

const searchCity = (event: { query: string }) => {
    autoCompleteSuggestions.value = allCities.filter((city) =>
        city.toLowerCase().includes(event.query.toLowerCase())
    );
};
</script>

<template>
    <Head title="Select Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Select -->
                <Card>
                    <CardHeader>
                        <CardTitle>Select</CardTitle>
                        <CardDescription>
                            Dropdown selection component with various features.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-4 md:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Basic</label>
                                <Select
                                    v-model="selectedCity"
                                    :options="cities"
                                    option-label="name"
                                    placeholder="Select a City"
                                    class="w-full"
                                />
                                <p class="text-xs text-muted-foreground">
                                    Selected: {{ selectedCity?.name || 'None' }}
                                </p>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Editable</label>
                                <Select
                                    v-model="selectedCityEditable"
                                    :options="cities"
                                    option-label="name"
                                    editable
                                    placeholder="Select or type"
                                    class="w-full"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">With Filter</label>
                                <Select
                                    v-model="selectedCity"
                                    :options="cities"
                                    option-label="name"
                                    filter
                                    placeholder="Search cities"
                                    class="w-full"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Disabled</label>
                                <Select
                                    :options="cities"
                                    option-label="name"
                                    placeholder="Disabled"
                                    disabled
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- MultiSelect -->
                <Card>
                    <CardHeader>
                        <CardTitle>MultiSelect</CardTitle>
                        <CardDescription>
                            Select multiple items from a dropdown list.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-4 md:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Basic</label>
                                <MultiSelect
                                    v-model="selectedCities"
                                    :options="cities"
                                    option-label="name"
                                    placeholder="Select Cities"
                                    class="w-full"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">With Chips</label>
                                <MultiSelect
                                    v-model="selectedCities"
                                    :options="cities"
                                    option-label="name"
                                    placeholder="Select Cities"
                                    display="chip"
                                    class="w-full"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">With Filter</label>
                                <MultiSelect
                                    v-model="selectedCities"
                                    :options="cities"
                                    option-label="name"
                                    filter
                                    placeholder="Search and select"
                                    class="w-full"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Max Selected (2)</label>
                                <MultiSelect
                                    v-model="selectedCities"
                                    :options="cities"
                                    option-label="name"
                                    :selection-limit="2"
                                    placeholder="Select up to 2"
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- AutoComplete -->
                <Card>
                    <CardHeader>
                        <CardTitle>AutoComplete</CardTitle>
                        <CardDescription>
                            Input with suggestions as you type.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-4 md:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Basic</label>
                                <AutoComplete
                                    v-model="autoCompleteValue"
                                    :suggestions="autoCompleteSuggestions"
                                    @complete="searchCity"
                                    placeholder="Type a city name"
                                />
                                <p class="text-xs text-muted-foreground">
                                    Value: {{ autoCompleteValue }}
                                </p>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Dropdown</label>
                                <AutoComplete
                                    v-model="autoCompleteValue"
                                    :suggestions="autoCompleteSuggestions"
                                    @complete="searchCity"
                                    dropdown
                                    placeholder="Type or click dropdown"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- CascadeSelect -->
                <Card>
                    <CardHeader>
                        <CardTitle>CascadeSelect</CardTitle>
                        <CardDescription>
                            Hierarchical selection with nested options.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Country > State > City</label>
                            <CascadeSelect
                                v-model="cascadeValue"
                                :options="countries"
                                option-label="cname"
                                option-group-label="name"
                                :option-group-children="['states', 'cities']"
                                placeholder="Select a City"
                                class="w-full md:w-80"
                            />
                        </div>
                    </CardContent>
                </Card>

                <!-- Listbox -->
                <Card>
                    <CardHeader>
                        <CardTitle>Listbox</CardTitle>
                        <CardDescription>
                            List-based selection component.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="grid gap-4 md:grid-cols-2">
                            <div class="space-y-2">
                                <label class="text-sm font-medium">Single Selection</label>
                                <Listbox
                                    v-model="listboxValue"
                                    :options="cities"
                                    option-label="name"
                                    class="w-full"
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium">Multiple Selection</label>
                                <Listbox
                                    v-model="listboxMultiple"
                                    :options="cities"
                                    option-label="name"
                                    multiple
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

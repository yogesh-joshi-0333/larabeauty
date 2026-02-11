<script setup lang="ts">
import { ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import {
    Card as ShadCard,
    CardContent as ShadCardContent,
    CardDescription as ShadCardDescription,
    CardHeader as ShadCardHeader,
    CardTitle as ShadCardTitle,
} from '@/components/ui/card';
import { index as demosIndex } from '@/routes/demos';
import { type BreadcrumbItem } from '@/types';

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Divider from 'primevue/divider';
import ScrollPanel from 'primevue/scrollpanel';
import Button from 'primevue/button';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Panel' },
];

const activeStep = ref('1');
</script>

<template>
    <Head title="Panel Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Accordion -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>Accordion</ShadCardTitle>
                        <ShadCardDescription>
                            Expandable panels for displaying content in collapsible sections.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent>
                        <Accordion value="0">
                            <AccordionPanel value="0">
                                <AccordionHeader>What is PrimeVue?</AccordionHeader>
                                <AccordionContent>
                                    <p class="text-muted-foreground">
                                        PrimeVue is a rich set of open source UI components for Vue.js.
                                        It provides a wide range of components from basic inputs to complex
                                        data tables, all with a consistent design and excellent accessibility.
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                            <AccordionPanel value="1">
                                <AccordionHeader>Why choose PrimeVue?</AccordionHeader>
                                <AccordionContent>
                                    <p class="text-muted-foreground">
                                        PrimeVue offers 90+ components, multiple themes, excellent documentation,
                                        and is backed by PrimeTek, the company behind other popular UI libraries.
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                            <AccordionPanel value="2">
                                <AccordionHeader>How to get started?</AccordionHeader>
                                <AccordionContent>
                                    <p class="text-muted-foreground">
                                        Install PrimeVue via npm, configure it in your Vue application,
                                        and start importing components you need. The documentation provides
                                        detailed examples for each component.
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                        </Accordion>
                    </ShadCardContent>
                </ShadCard>

                <!-- Tabs -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>Tabs</ShadCardTitle>
                        <ShadCardDescription>
                            Tabbed navigation for organizing content into panels.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent>
                        <Tabs value="0">
                            <TabList>
                                <Tab value="0">Header I</Tab>
                                <Tab value="1">Header II</Tab>
                                <Tab value="2">Header III</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel value="0">
                                    <p class="p-4 text-muted-foreground">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </TabPanel>
                                <TabPanel value="1">
                                    <p class="p-4 text-muted-foreground">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium.
                                    </p>
                                </TabPanel>
                                <TabPanel value="2">
                                    <p class="p-4 text-muted-foreground">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti.
                                    </p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ShadCardContent>
                </ShadCard>

                <!-- Stepper -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>Stepper</ShadCardTitle>
                        <ShadCardDescription>
                            Multi-step workflow component for guided processes.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent>
                        <Stepper v-model:value="activeStep" linear>
                            <StepList>
                                <Step value="1">Personal Info</Step>
                                <Step value="2">Address</Step>
                                <Step value="3">Payment</Step>
                            </StepList>
                            <StepPanels>
                                <StepPanel v-slot="{ activateCallback }" value="1">
                                    <div class="space-y-4 p-4">
                                        <p class="text-muted-foreground">Enter your personal information</p>
                                        <div class="flex gap-2">
                                            <Button label="Next" icon="pi pi-arrow-right" icon-pos="right" @click="activateCallback('2')" />
                                        </div>
                                    </div>
                                </StepPanel>
                                <StepPanel v-slot="{ activateCallback }" value="2">
                                    <div class="space-y-4 p-4">
                                        <p class="text-muted-foreground">Enter your address details</p>
                                        <div class="flex gap-2">
                                            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
                                            <Button label="Next" icon="pi pi-arrow-right" icon-pos="right" @click="activateCallback('3')" />
                                        </div>
                                    </div>
                                </StepPanel>
                                <StepPanel v-slot="{ activateCallback }" value="3">
                                    <div class="space-y-4 p-4">
                                        <p class="text-muted-foreground">Complete payment information</p>
                                        <div class="flex gap-2">
                                            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                                            <Button label="Complete" icon="pi pi-check" severity="success" />
                                        </div>
                                    </div>
                                </StepPanel>
                            </StepPanels>
                        </Stepper>
                    </ShadCardContent>
                </ShadCard>

                <!-- Card -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>PrimeVue Card</ShadCardTitle>
                        <ShadCardDescription>
                            Content container with header, body, and footer sections.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent>
                        <div class="grid gap-4 md:grid-cols-2">
                            <Card>
                                <template #title>Simple Card</template>
                                <template #content>
                                    <p class="text-muted-foreground">
                                        This is a basic PrimeVue card with a title and content.
                                    </p>
                                </template>
                            </Card>

                            <Card>
                                <template #header>
                                    <div class="h-32 rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-500" />
                                </template>
                                <template #title>Card with Header</template>
                                <template #subtitle>Subtitle text</template>
                                <template #content>
                                    <p class="text-muted-foreground">Card with custom header image.</p>
                                </template>
                                <template #footer>
                                    <div class="flex gap-2">
                                        <Button label="Cancel" severity="secondary" outlined />
                                        <Button label="Save" />
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </ShadCardContent>
                </ShadCard>

                <!-- Fieldset -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>Fieldset</ShadCardTitle>
                        <ShadCardDescription>
                            Grouping component with a legend and optional toggle functionality.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent class="space-y-4">
                        <Fieldset legend="Basic Fieldset">
                            <p class="text-muted-foreground">
                                Content within a fieldset is grouped together with a legend.
                            </p>
                        </Fieldset>

                        <Fieldset legend="Toggleable Fieldset" toggleable>
                            <p class="text-muted-foreground">
                                This fieldset can be collapsed by clicking the legend.
                            </p>
                        </Fieldset>
                    </ShadCardContent>
                </ShadCard>

                <!-- Panel -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>Panel</ShadCardTitle>
                        <ShadCardDescription>
                            Container with header and optional toggle/header icons.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent class="space-y-4">
                        <Panel header="Basic Panel">
                            <p class="text-muted-foreground">
                                Panel is a container with a header and content area.
                            </p>
                        </Panel>

                        <Panel header="Toggleable Panel" toggleable>
                            <p class="text-muted-foreground">
                                This panel can be collapsed using the toggle button in the header.
                            </p>
                        </Panel>
                    </ShadCardContent>
                </ShadCard>

                <!-- Splitter -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>Splitter</ShadCardTitle>
                        <ShadCardDescription>
                            Resizable split panes for flexible layouts.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent>
                        <Splitter style="height: 200px">
                            <SplitterPanel :size="40" :min-size="20">
                                <div class="flex h-full items-center justify-center">Panel 1</div>
                            </SplitterPanel>
                            <SplitterPanel :size="60" :min-size="20">
                                <div class="flex h-full items-center justify-center">Panel 2</div>
                            </SplitterPanel>
                        </Splitter>
                    </ShadCardContent>
                </ShadCard>

                <!-- Divider -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>Divider</ShadCardTitle>
                        <ShadCardDescription>
                            Visual separator between content sections.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent>
                        <p class="text-muted-foreground">Content above the divider</p>
                        <Divider />
                        <p class="text-muted-foreground">Content below the divider</p>
                        <Divider align="center">
                            <span class="text-sm">OR</span>
                        </Divider>
                        <p class="text-muted-foreground">Content with centered text divider</p>
                    </ShadCardContent>
                </ShadCard>

                <!-- ScrollPanel -->
                <ShadCard>
                    <ShadCardHeader>
                        <ShadCardTitle>ScrollPanel</ShadCardTitle>
                        <ShadCardDescription>
                            Customizable scrollable container with styled scrollbars.
                        </ShadCardDescription>
                    </ShadCardHeader>
                    <ShadCardContent>
                        <ScrollPanel style="width: 100%; height: 200px">
                            <div class="space-y-4 p-4">
                                <p v-for="i in 10" :key="i" class="text-muted-foreground">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris.
                                </p>
                            </div>
                        </ScrollPanel>
                    </ShadCardContent>
                </ShadCard>
            </div>
        </div>
    </AppLayout>
</template>

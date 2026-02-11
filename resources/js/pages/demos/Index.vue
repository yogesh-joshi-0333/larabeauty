<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import {
    Boxes,
    ChartPie,
    FileUp,
    FormInput,
    LayoutPanelTop,
    Layers,
    Menu,
    MessageCircle,
    MousePointerClick,
    Image,
    SquareMousePointer,
} from 'lucide-vue-next';
import AppLayout from '@/layouts/AppLayout.vue';
import Heading from '@/components/Heading.vue';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    index as demosIndex,
    button,
    chart,
    file,
    media,
    menu,
    messages,
    misc,
    overlay,
    panel,
} from '@/routes/demos';
import { index as formIndex } from '@/routes/demos/form';
import { index as dataIndex } from '@/routes/demos/data';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Overview',
        href: demosIndex().url,
    },
];

const categories = [
    {
        title: 'Form Components',
        description: 'InputText, Select, DatePicker, Checkbox, Slider, Editor and more',
        href: formIndex(),
        icon: FormInput,
        count: '20+ components',
    },
    {
        title: 'Data Components',
        description: 'DataTable, Tree, TreeTable, OrderList, PickList, Timeline',
        href: dataIndex(),
        icon: Layers,
        count: '10+ components',
    },
    {
        title: 'Overlay Components',
        description: 'Dialog, Drawer, Popover, ConfirmDialog, Tooltip',
        href: overlay(),
        icon: SquareMousePointer,
        count: '7 components',
    },
    {
        title: 'Button Components',
        description: 'Button, SplitButton, SpeedDial, SelectButton, ToggleButton',
        href: button(),
        icon: MousePointerClick,
        count: '5 components',
    },
    {
        title: 'Menu Components',
        description: 'Menu, Menubar, TieredMenu, MegaMenu, ContextMenu, Dock',
        href: menu(),
        icon: Menu,
        count: '8 components',
    },
    {
        title: 'Panel Components',
        description: 'Accordion, Tabs, Stepper, Card, Fieldset, Splitter',
        href: panel(),
        icon: LayoutPanelTop,
        count: '10 components',
    },
    {
        title: 'Message Components',
        description: 'Message, Toast notifications with various severities',
        href: messages(),
        icon: MessageCircle,
        count: '2 components',
    },
    {
        title: 'Media Components',
        description: 'Image, Galleria, Carousel, ImageCompare',
        href: media(),
        icon: Image,
        count: '4 components',
    },
    {
        title: 'Chart Components',
        description: 'Bar, Line, Pie, Doughnut, Radar, PolarArea charts',
        href: chart(),
        icon: ChartPie,
        count: '6 chart types',
    },
    {
        title: 'File Components',
        description: 'FileUpload with drag-drop, multiple files, and progress',
        href: file(),
        icon: FileUp,
        count: '1 component',
    },
    {
        title: 'Misc Components',
        description: 'Avatar, Badge, Chip, Tag, Skeleton, ProgressBar and more',
        href: misc(),
        icon: Boxes,
        count: '15+ components',
    },
];
</script>

<template>
    <Head title="PrimeVue Components" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <Heading
                title="PrimeVue Components"
                description="Interactive showcase of PrimeVue components with Tailwind CSS integration"
            />

            <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link
                    v-for="category in categories"
                    :key="category.title"
                    :href="category.href"
                    class="group"
                >
                    <Card class="h-full transition-colors hover:border-primary/50">
                        <CardHeader>
                            <div class="flex items-center gap-3">
                                <div class="rounded-lg bg-primary/10 p-2">
                                    <component
                                        :is="category.icon"
                                        class="h-5 w-5 text-primary"
                                    />
                                </div>
                                <div>
                                    <CardTitle class="text-base">
                                        {{ category.title }}
                                    </CardTitle>
                                    <span class="text-xs text-muted-foreground">
                                        {{ category.count }}
                                    </span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                {{ category.description }}
                            </CardDescription>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    </AppLayout>
</template>

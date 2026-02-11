<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
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
import Heading from '@/components/Heading.vue';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { toUrl } from '@/lib/utils';
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
import { type NavItem } from '@/types';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Overview',
        href: demosIndex(),
        icon: Boxes,
    },
    {
        title: 'Form',
        href: formIndex(),
        icon: FormInput,
    },
    {
        title: 'Data',
        href: dataIndex(),
        icon: Layers,
    },
    {
        title: 'Overlay',
        href: overlay(),
        icon: SquareMousePointer,
    },
    {
        title: 'Button',
        href: button(),
        icon: MousePointerClick,
    },
    {
        title: 'Menu',
        href: menu(),
        icon: Menu,
    },
    {
        title: 'Panel',
        href: panel(),
        icon: LayoutPanelTop,
    },
    {
        title: 'Messages',
        href: messages(),
        icon: MessageCircle,
    },
    {
        title: 'Media',
        href: media(),
        icon: Image,
    },
    {
        title: 'Chart',
        href: chart(),
        icon: ChartPie,
    },
    {
        title: 'File',
        href: file(),
        icon: FileUp,
    },
    {
        title: 'Misc',
        href: misc(),
        icon: Boxes,
    },
];

const { isCurrentUrl } = useCurrentUrl();
</script>

<template>
    <div class="px-4 py-6">
        <Heading
            title="PrimeVue Components"
            description="Interactive showcase of PrimeVue components with Tailwind CSS integration"
        />

        <div class="flex flex-col lg:flex-row lg:space-x-12">
            <aside class="w-full max-w-xl lg:w-48">
                <nav
                    class="flex flex-col space-y-1 space-x-0"
                    aria-label="Demo Categories"
                >
                    <Button
                        v-for="item in sidebarNavItems"
                        :key="toUrl(item.href)"
                        variant="ghost"
                        :class="[
                            'w-full justify-start',
                            { 'bg-muted': isCurrentUrl(item.href) },
                        ]"
                        as-child
                    >
                        <Link :href="item.href">
                            <component :is="item.icon" class="h-4 w-4" />
                            {{ item.title }}
                        </Link>
                    </Button>
                </nav>
            </aside>

            <Separator class="my-6 lg:hidden" />

            <div class="flex-1">
                <section class="space-y-8">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>

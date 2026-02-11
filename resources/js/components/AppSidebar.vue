<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import {
    BookOpen,
    Boxes,
    ChartPie,
    FileUp,
    Folder,
    FormInput,
    Image,
    LayoutGrid,
    LayoutPanelTop,
    Layers,
    Menu,
    MessageCircle,
    Moon,
    MousePointerClick,
    SquareMousePointer,
    Sun,
} from 'lucide-vue-next';
import { useAppearance } from '@/composables/useAppearance';
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';

const { appearance, updateAppearance } = useAppearance();

const toggleTheme = () => {
    updateAppearance(appearance.value === 'dark' ? 'light' : 'dark');
};
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
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
import AppLogo from './AppLogo.vue';

const mainNavItems: NavItem[] = [
    {
        title: 'Overview',
        href: demosIndex(),
        icon: LayoutGrid,
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

const footerNavItems: NavItem[] = [
    {
        title: 'GitHub Repo',
        href: 'https://github.com/yogesh-joshi-0333/larabeauty',
        icon: Folder,
    },
    {
        title: 'PrimeVue Docs',
        href: 'https://primevue.org/documentation',
        icon: BookOpen,
    },
];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="demosIndex()">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" />
        </SidebarContent>

        <SidebarFooter>
            <NavFooter :items="footerNavItems" />
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton @click="toggleTheme" tooltip="Toggle theme">
                        <Sun v-if="appearance === 'dark'" class="size-4" />
                        <Moon v-else class="size-4" />
                        <span>{{ appearance === 'dark' ? 'Light Mode' : 'Dark Mode' }}</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>

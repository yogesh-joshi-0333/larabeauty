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

import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import Chip from 'primevue/chip';
import Tag from 'primevue/tag';
import Skeleton from 'primevue/skeleton';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import MeterGroup from 'primevue/metergroup';
import Inplace from 'primevue/inplace';
import InputText from 'primevue/inputtext';
import ScrollTop from 'primevue/scrolltop';
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'PrimeVue Demos', href: demosIndex().url },
    { title: 'Misc' },
];

const blocked = ref(false);
const inplaceValue = ref('Click to Edit');
const progressValue = ref(50);

const meterValues = ref([
    { label: 'Apps', value: 25, color: '#6366f1' },
    { label: 'Messages', value: 15, color: '#22c55e' },
    { label: 'Media', value: 20, color: '#f59e0b' },
    { label: 'System', value: 10, color: '#ef4444' },
]);

const blockPanel = () => {
    blocked.value = true;
    setTimeout(() => {
        blocked.value = false;
    }, 3000);
};
</script>

<template>
    <Head title="Misc Components - PrimeVue Demos" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="px-4 py-6">
            <div class="space-y-8">
                <!-- Avatar -->
                <Card>
                    <CardHeader>
                        <CardTitle>Avatar</CardTitle>
                        <CardDescription>
                            Avatar component for displaying user images, icons, or labels.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Labels</label>
                            <div class="flex flex-wrap items-center gap-4">
                                <Avatar label="P" />
                                <Avatar label="V" shape="circle" />
                                <Avatar label="U" size="large" />
                                <Avatar label="X" size="xlarge" shape="circle" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Icons</label>
                            <div class="flex flex-wrap items-center gap-4">
                                <Avatar icon="pi pi-user" />
                                <Avatar icon="pi pi-user" shape="circle" />
                                <Avatar icon="pi pi-user" size="large" />
                                <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Images</label>
                            <div class="flex flex-wrap items-center gap-4">
                                <Avatar image="https://i.pravatar.cc/150?img=1" shape="circle" />
                                <Avatar image="https://i.pravatar.cc/150?img=2" size="large" shape="circle" />
                                <Avatar image="https://i.pravatar.cc/150?img=3" size="xlarge" shape="circle" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Avatar Group</label>
                            <AvatarGroup>
                                <Avatar image="https://i.pravatar.cc/150?img=4" shape="circle" />
                                <Avatar image="https://i.pravatar.cc/150?img=5" shape="circle" />
                                <Avatar image="https://i.pravatar.cc/150?img=6" shape="circle" />
                                <Avatar image="https://i.pravatar.cc/150?img=7" shape="circle" />
                                <Avatar label="+2" shape="circle" />
                            </AvatarGroup>
                        </div>
                    </CardContent>
                </Card>

                <!-- Badge -->
                <Card>
                    <CardHeader>
                        <CardTitle>Badge</CardTitle>
                        <CardDescription>
                            Small status indicators and notification badges.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Severities</label>
                            <div class="flex flex-wrap items-center gap-4">
                                <Badge value="2" />
                                <Badge value="8" severity="secondary" />
                                <Badge value="4" severity="success" />
                                <Badge value="12" severity="info" />
                                <Badge value="3" severity="warn" />
                                <Badge value="5" severity="danger" />
                                <Badge value="9" severity="contrast" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Sizes</label>
                            <div class="flex flex-wrap items-center gap-4">
                                <Badge value="2" size="small" />
                                <Badge value="5" />
                                <Badge value="8" size="large" />
                                <Badge value="12" size="xlarge" />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Overlay Badge</label>
                            <div class="flex flex-wrap items-center gap-8">
                                <OverlayBadge value="2">
                                    <i class="pi pi-bell text-2xl" />
                                </OverlayBadge>
                                <OverlayBadge value="4" severity="danger">
                                    <i class="pi pi-envelope text-2xl" />
                                </OverlayBadge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Chip -->
                <Card>
                    <CardHeader>
                        <CardTitle>Chip</CardTitle>
                        <CardDescription>
                            Compact element for displaying entities like tags and categories.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex flex-wrap gap-2">
                            <Chip label="Action" />
                            <Chip label="Comedy" />
                            <Chip label="Mystery" />
                            <Chip label="Thriller" removable />
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <Chip label="Amy Elsner" image="https://i.pravatar.cc/150?img=1" />
                            <Chip label="Asiya Javayant" image="https://i.pravatar.cc/150?img=2" />
                            <Chip label="Onyama Limba" image="https://i.pravatar.cc/150?img=3" removable />
                        </div>

                        <div class="flex flex-wrap gap-2">
                            <Chip label="Apple" icon="pi pi-apple" />
                            <Chip label="Facebook" icon="pi pi-facebook" />
                            <Chip label="Google" icon="pi pi-google" />
                        </div>
                    </CardContent>
                </Card>

                <!-- Tag -->
                <Card>
                    <CardHeader>
                        <CardTitle>Tag</CardTitle>
                        <CardDescription>
                            Tag component for categorizing content with severity levels.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="flex flex-wrap gap-2">
                            <Tag value="Primary" />
                            <Tag value="Secondary" severity="secondary" />
                            <Tag value="Success" severity="success" />
                            <Tag value="Info" severity="info" />
                            <Tag value="Warning" severity="warn" />
                            <Tag value="Danger" severity="danger" />
                            <Tag value="Contrast" severity="contrast" />
                        </div>

                        <div class="mt-4 flex flex-wrap gap-2">
                            <Tag value="New" icon="pi pi-check" />
                            <Tag value="Sale" icon="pi pi-percentage" severity="success" />
                            <Tag value="Featured" icon="pi pi-star" severity="warn" rounded />
                        </div>
                    </CardContent>
                </Card>

                <!-- Skeleton -->
                <Card>
                    <CardHeader>
                        <CardTitle>Skeleton</CardTitle>
                        <CardDescription>
                            Placeholder animation for loading content.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <Skeleton width="100%" height="2rem" />
                            <Skeleton width="75%" height="1rem" />
                            <Skeleton width="50%" height="1rem" />
                        </div>

                        <div class="flex items-center gap-4">
                            <Skeleton shape="circle" size="4rem" />
                            <div class="flex-1 space-y-2">
                                <Skeleton width="100%" height="1rem" />
                                <Skeleton width="75%" height="1rem" />
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-4">
                            <Skeleton height="8rem" />
                            <Skeleton height="8rem" />
                            <Skeleton height="8rem" />
                        </div>
                    </CardContent>
                </Card>

                <!-- Progress -->
                <Card>
                    <CardHeader>
                        <CardTitle>Progress</CardTitle>
                        <CardDescription>
                            ProgressBar and ProgressSpinner components for loading states.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">ProgressBar</label>
                            <ProgressBar :value="progressValue" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">Indeterminate</label>
                            <ProgressBar mode="indeterminate" style="height: 6px" />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium">ProgressSpinner</label>
                            <div class="flex items-center gap-4">
                                <ProgressSpinner style="width: 50px; height: 50px" stroke-width="4" />
                                <ProgressSpinner style="width: 50px; height: 50px" stroke-width="8" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- MeterGroup -->
                <Card>
                    <CardHeader>
                        <CardTitle>MeterGroup</CardTitle>
                        <CardDescription>
                            Group of horizontal meters for showing usage or distribution.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <MeterGroup :value="meterValues" />
                    </CardContent>
                </Card>

                <!-- Inplace -->
                <Card>
                    <CardHeader>
                        <CardTitle>Inplace</CardTitle>
                        <CardDescription>
                            Component for inline editing with display and edit modes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <Inplace>
                            <template #display>
                                <span class="cursor-pointer text-primary hover:underline">
                                    {{ inplaceValue || 'Click to Edit' }}
                                </span>
                            </template>
                            <template #content="{ closeCallback }">
                                <span class="inline-flex items-center gap-2">
                                    <InputText v-model="inplaceValue" auto-focus />
                                    <Button icon="pi pi-check" text @click="closeCallback" />
                                </span>
                            </template>
                        </Inplace>
                    </CardContent>
                </Card>

                <!-- BlockUI -->
                <Card>
                    <CardHeader>
                        <CardTitle>BlockUI</CardTitle>
                        <CardDescription>
                            Overlay component for blocking user interaction during loading.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button label="Block Panel" @click="blockPanel" />
                        <BlockUI :blocked="blocked" class="mt-4">
                            <div class="rounded-lg border p-6">
                                <h4 class="mb-2 font-medium">Panel Content</h4>
                                <p class="text-muted-foreground">
                                    This panel will be blocked for 3 seconds when you click the button.
                                </p>
                            </div>
                        </BlockUI>
                    </CardContent>
                </Card>

                <!-- ScrollTop -->
                <Card>
                    <CardHeader>
                        <CardTitle>ScrollTop</CardTitle>
                        <CardDescription>
                            Button to scroll back to top of the page or container.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p class="text-muted-foreground">
                            Scroll down the page to see the ScrollTop button appear in the bottom-right corner.
                        </p>
                        <ScrollTop />
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

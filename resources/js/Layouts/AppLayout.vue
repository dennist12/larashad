<script setup>
import Avatar from "@/Components/ui/avatar/Avatar.vue";
import AvatarFallback from "@/Components/ui/avatar/AvatarFallback.vue";
import AvatarImage from "@/Components/ui/avatar/AvatarImage.vue";
import DropdownMenu from "@/Components/ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuContent from "@/Components/ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuGroup from "@/Components/ui/dropdown-menu/DropdownMenuGroup.vue";
import DropdownMenuItem from "@/Components/ui/dropdown-menu/DropdownMenuItem.vue";
import DropdownMenuLabel from "@/Components/ui/dropdown-menu/DropdownMenuLabel.vue";
import DropdownMenuSeparator from "@/Components/ui/dropdown-menu/DropdownMenuSeparator.vue";
import DropdownMenuTrigger from "@/Components/ui/dropdown-menu/DropdownMenuTrigger.vue";
import Sidebar from "@/Components/ui/sidebar/Sidebar.vue";
import SidebarContent from "@/Components/ui/sidebar/SidebarContent.vue";
import SidebarFooter from "@/Components/ui/sidebar/SidebarFooter.vue";
import SidebarGroup from "@/Components/ui/sidebar/SidebarGroup.vue";
import SidebarHeader from "@/Components/ui/sidebar/SidebarHeader.vue";
import SidebarInset from "@/Components/ui/sidebar/SidebarInset.vue";
import SidebarMenu from "@/Components/ui/sidebar/SidebarMenu.vue";
import SidebarMenuButton from "@/Components/ui/sidebar/SidebarMenuButton.vue";
import SidebarMenuItem from "@/Components/ui/sidebar/SidebarMenuItem.vue";
import SidebarProvider from "@/Components/ui/sidebar/SidebarProvider.vue";
import SidebarRail from "@/Components/ui/sidebar/SidebarRail.vue";
import { Link, router } from "@inertiajs/vue3";
import {
    ChevronsUpDown,
    CircleUser,
    House,
    Image,
    LogOut,
    Sparkles,
    User,
} from "lucide-vue-next";
import { ref } from "vue";
import AppHeader from "./AppHeader.vue";

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(
        route("current-team.update"),
        {
            team_id: team.id,
        },
        {
            preserveState: false,
        }
    );
};

const logout = () => {
    router.post(route("logout"));
};
</script>

<template>
    <SidebarProvider>
        <Sidebar collapsible="icon" v-if="$page.props.auth.user">
            <SidebarHeader class="">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div
                                class="flex items-center justify-center rounded-lg size-10 aspect-square bg-sidebar-primary text-sidebar-primary-foreground"
                            >
                                <Image class="size-6" />
                            </div>
                            <div class="grid flex-1 leading-tight">Logo</div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton as-child>
                                <Link :href="route('dashboard')">
                                    <House />
                                    <span>Dashboard</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <!-- More Menu -->
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                                <SidebarMenuButton
                                    size="lg"
                                    class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar class="w-8 h-8 rounded-full shadow">
                                        <AvatarImage
                                            :src="
                                                $page.props.auth.user
                                                    .profile_photo_url
                                            "
                                        />
                                        <AvatarFallback>{{
                                            $page.props.auth.user.name
                                        }}</AvatarFallback>
                                    </Avatar>
                                    <div
                                        class="grid flex-1 text-sm leading-tight text-left"
                                    >
                                        <span class="font-semibold truncate">{{
                                            $page.props.auth.user.name
                                        }}</span>
                                        <span class="text-xs truncate">{{
                                            $page.props.auth.user.email
                                        }}</span>
                                    </div>
                                    <ChevronsUpDown class="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg ml-3 mt-3"
                                side="bottom"
                                align="end"
                                :side-offset="4"
                            >
                                <DropdownMenuLabel class="p-0 font-normal">
                                    <div
                                        class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                                    >
                                        <Avatar
                                            class="w-8 h-8 rounded-full shadow"
                                        >
                                            <AvatarImage
                                                :src="
                                                    $page.props.auth.user
                                                        .profile_photo_url
                                                "
                                            />
                                            <AvatarFallback>{{
                                                $page.props.auth.user.name
                                            }}</AvatarFallback>
                                        </Avatar>
                                        <div
                                            class="grid flex-1 text-sm leading-tight text-left"
                                        >
                                            <span
                                                class="font-semibold truncate"
                                                >{{
                                                    $page.props.auth.user.name
                                                }}</span
                                            >
                                            <span class="text-xs truncate">{{
                                                $page.props.auth.user.email
                                            }}</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        @click="
                                            router.visit(route('profile.show'))
                                        "
                                    >
                                        <a
                                            class="flex flex-row items-center gap-2"
                                        >
                                            <CircleUser class="size-4" />
                                            <span>Profile</span>
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        @click="router.post(route('logout'))"
                                    >
                                        <a
                                            class="flex flex-row items-center gap-2"
                                            ><LogOut class="size-4" />
                                            <span>Logout</span>
                                        </a>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
        <SidebarInset>
            <AppHeader />
            <div class="flex flex-col flex-1">
                <div class="min-h-[100vh] min:min-h-min">
                    <slot />
                </div>
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

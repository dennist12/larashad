<script setup lang="ts">
import Sidebar from "@/Components/ui/sidebar/Sidebar.vue";
import SidebarTrigger from "@/Components/ui/sidebar/SidebarTrigger.vue";
</script>

<template>
    <header
        v-if="$page.props.auth.user"
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
    >
        <SidebarTrigger class="ml-2 text-foreground" />
    </header>
</template>

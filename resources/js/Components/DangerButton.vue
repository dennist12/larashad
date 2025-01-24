<script setup>
import { Button } from "@/components/ui/button";
defineProps({
    type: {
        type: String,
        default: "button",
    },
    variant: {
        type: null,
        default: () => "destructive",
    },
});
</script>

<template>
    <Button :type="type" :variant="variant">
        <slot />
    </Button>
</template>

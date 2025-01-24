<script setup lang="ts">
import { Button } from "@/components/ui/button";
defineProps({
    type: {
        type: String,
        default: "submit",
    },

    variant: {
        type: null,
        default: () => "default",
    },
});
</script>

<template>
    <Button :variant="variant" :type="type"><slot /></Button>
</template>

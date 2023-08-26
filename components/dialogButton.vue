<template>
    <div @click="$emit('updateState', currentState, dialog)">
        <p> {{ dialog.dialog }}</p>
    </div>
</template>

<script setup lang="ts">
    import DialogOption from '@/types/DialogOption'

    const props = defineProps<{
        dialog: DialogOption
        currentState: string
    }>();
    const emits = defineEmits(
        ['updateState']
    )
</script>

<style scoped>

</style>
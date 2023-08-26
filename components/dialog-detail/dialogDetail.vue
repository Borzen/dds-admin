<template>
    <div>
        <div>
            <label for="tb_tag">Dialog Tag</label>
            <input type="text" id="tb_tag" :value="dialogOption.dialogTag" @input="updateTag"/>
        </div>
        <div>
            <label for="tb_voTag">Voice Over Tag</label>
            <input type="text" id="tb_voTag" :value="dialogOption.voTag" @input="updateVoTag"/>
        </div>
        <div>
            <label for="tb_dialog">Dialog Text</label>
            <input type="text" id="tb_dialog" :value="dialogOption.dialog" @input="updateDialog"/>
        </div>
        <div>
            <label>LoopBack</label>
            <input type="checkbox" true-value="yes">
        </div>
        <div>
            <div>
                <button type="submit" @click="$emit('saveCancelChanges', 'save')">SaveThisStuff</button>
            </div>
            <div>
                <button type='button' @click="$emit('saveCancelChanges', 'cancel')">Undo</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import DialogOption from 'types/DialogOption';

    const props = defineProps<{
        dialogOption : DialogOption
    }>();

    const emits = defineEmits(['update:tag','update:voiceOverTag', 'update:dialog', 'saveCancelChanges']);
    
    const updateTag = (e: Event) => {
        emits('update:tag',(e.target as HTMLInputElement).value)
    };

    const updateVoTag = (e: Event) => {
        emits('update:voiceOverTag', (e.target as HTMLInputElement).value)
    };

    const updateDialog = (e: Event) => {
        emits('update:dialog', (e.target as HTMLInputElement).value)
    };

</script>

<style scoped>

</style>
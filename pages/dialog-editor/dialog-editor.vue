<template>
    <div class="grid grid-cols-3 divide-x">
        <div class="text-left">
            <DialogButton @update-state="DialogEventManager" :current-state="'left'" :dialog="prevDialog"></DialogButton>
        </div>
        <div class="text-center">
            <DialogButton @update-state="DialogEventManager" :current-state="'active'" :dialog="currentSelectedDialog"></DialogButton>
            <DialogDetail v-if="detailOpen" v-model:dialogOption="currentSelectedDialog"
                                            @save-cancel-changes="SaveCancelDetailChanges"></DialogDetail>
        </div>
        <ul role="list" class="divide-y divide-gray-100">
            <li v-for="dialogOption in rightDialogs" :key="dialogOption.dialogId"
                class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                    <div class="min-w-0 flex-auto">
                        <DialogButton @test-emit="DialogEventManager" :currentState="'right'" :dialog="dialogOption"></DialogButton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import DialogOption from 'types/DialogOption';

let _beforeEditCache: DialogOption;

let detailOpen = ref(false);

let dialogTag = ref('Act1Choice3');
let voTag = ref('A1C3MattT5');

let prevDialog = reactive<DialogOption>({dialogId: 3, 
                                         dialog: 'This is a previous selected option',
                                         dialogTag: 'Act1Choice2',
                                         voTag:'A1C2MattT5'
                                        });
                                         
let currentSelectedDialog = reactive<DialogOption>({dialogId: 15,
                                                    dialog: 'this is the current selected option',
                                                    dialogTag: 'Act1Choice3',
                                                    voTag:'A1C3MattT5'
                                                   });

let rightDialogs = reactive<DialogOption[]>([
                                            { 
                                               dialogId: 1,
                                               dialog: "this is a test",
                                               dialogTag:'Act1Choice4',
                                               voTag:'A1C4MattT5' 
                                            }, 
                                            { 
                                               dialogId: 2, 
                                               dialog: "another 1",
                                               dialogTag:'Act1Choice5',
                                               voTag:'A1C5MattT5',
                                               isLoop: true
                                            }
                                            ]);

function DialogEventManager(currentState: string, dialog: DialogOption){
    if(currentState === 'left'){
        //get left related dialog
        //move active data right
        //set as active
    }
    if(currentState === 'right')
    {
        //move active left
        //move right to active
        //get new right related dialog
    }
    if(currentState === 'active') {
        if(detailOpen.value)
        {
            detailOpen.value = false;
        }
        else
        {
            _beforeEditCache = Object.assign({},dialog)
            detailOpen.value = true;
        }
    }
}

function SaveCancelDetailChanges(buttonType: string){
    if(buttonType === 'save')
    {

    }
    else if(buttonType === 'cancel')
    {
        currentSelectedDialog.dialog = _beforeEditCache.dialog;
        currentSelectedDialog.dialogTag = _beforeEditCache.dialogTag;
        currentSelectedDialog.voTag = _beforeEditCache.voTag;
        detailOpen.value = false;
    }
}

</script>

<style scoped></style>
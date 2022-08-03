<script lang="ts">
    import { AddLog } from '$lib/utils';
    let collapsed: boolean;
</script>

<div on:click={() => {
    if (!collapsed)
        AddLog('display socials', 'Displaying socials...', 'Done!')
}} 
    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
    <input type="checkbox" bind:checked={collapsed} /> 
    <div class="collapse-title text-xl font-medium"><i class="fa-solid fa-square-share-nodes"></i> Socials</div>
    <div class="collapse-content"> 
    </div>
</div>
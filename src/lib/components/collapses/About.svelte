<script lang="ts">
    import { AddLog } from '$lib/utils';
    let collapsed: boolean = true;
</script>

<div on:click={() => {
    if (!collapsed)
        AddLog('display about', 'Displaying about...', 'Done!')
}} 
    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
    <input type="checkbox" bind:checked={collapsed} /> 
    <div class="collapse-title text-xl font-medium"><i class="fa-solid fa-address-card"></i> About</div>
    <div class="collapse-content"> 
        
    </div>
</div>
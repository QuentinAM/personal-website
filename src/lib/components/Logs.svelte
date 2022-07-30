<script lang="ts">
    import { cascade } from 'svelte-typewriter';
    import { logs } from '../store/utils';
    import { slide } from 'svelte/transition';
</script>

<div class="mockup-code max-h-96 overflow-auto" style="--cursor-color:white;">
    {#each $logs as log}
        <div use:cascade={{ interval: 30 }} in:slide|local>
            {#each log as node}
                <pre data-prefix={node.prefix} class={node.class}><code>{node.content}</code></pre>
            {/each}
        </div>
    {/each}
</div>
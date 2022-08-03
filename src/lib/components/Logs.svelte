<script lang="ts">
    import { infosValue } from '../store/utils';
    import { cascade } from 'svelte-typewriter';
    import { logs } from '../store/utils';
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';

    let dummy: HTMLElement;
    onMount(() => {
        logs.subscribe(() => {
            setTimeout(() =>{
                dummy.scrollIntoView({ behavior: 'smooth'});
            }, 200);

            // Progress
            // if ($infosValue === 0){
            //     setTimeout(() => {
            //         infosValue.set(1);
            //     }, 1000);
            // }
        });
    });

</script>

<div class="mockup-code max-h-96 overflow-auto" style="--cursor-color:white;">
    {#each $logs as log}
        <div use:cascade={{ interval: 30 }} in:slide|local>
            {#each log as node}
                <pre data-prefix={node.prefix} class={node.class}><code>{node.content}</code></pre>

                <!-- {#if node.progress}
                    <pre data-prefix=' '><code><progress class="text-white bg-transparent" value={$infosValue}></progress></code></pre>
                {/if} -->

            {/each}
        </div>
    {/each}
    <div bind:this={dummy}></div>
</div>
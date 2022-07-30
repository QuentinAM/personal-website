<script lang="ts">
    import Logs from '$lib/components/Logs.svelte';
    import Repos from '$lib/components/collapses/Repos.svelte';
    import About from '$lib/components/collapses/About.svelte';
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="flex flex-row w-full h-full max-h-screen p-2 space-x-3">
        <div class="w-1/2">
            <div class="flex flex-row justify-center items-center">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        <img src="img/pp.png" alt=""/>
                    </div>
                </div>
                <div class="mb-5 ml-1">
                    <h1 class="text-7xl font-bold">
                        Quentin AM
                    </h1>
                </div>
            </div>
            <div class="mt-5">
                <About/>
                <Repos/>
            </div>
        </div>
        <div class="w-1/2">
            <Logs/>
        </div>
    </div>
</div>
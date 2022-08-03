<script lang="ts">
    import Logs from '$lib/components/Logs.svelte';
    import Repos from '$lib/components/collapses/Repos.svelte';
    import About from '$lib/components/collapses/About.svelte';
    import Social from '$lib/components/collapses/Social.svelte';
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="flex lg:flex-row flex-col w-full h-full max-h-screen p-2 space-x-3">
        <div class="lg:w-1/2 w-full">
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
                <Social/>
            </div>
        </div>
        <div class="lg:w-1/2 w-[99]">
            <div class="flex flex-col h-full">
                <div class="h-1/2">
                    <Logs/>
                </div>
                <div class="h-1/2 w-full flex justify-center">
                    <div class="mt-20">
                        <p class="h-20 -mb-20 animate-bounce">⚙️ Site in dev...</p>
                        <div class="divider"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
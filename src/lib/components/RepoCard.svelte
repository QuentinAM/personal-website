<script lang="ts">
    export let title: string;
    export let description: string;
    export let url: string;
    export let tags: string[];
    export let stars: string;
    export let language: string;
    export let archived: boolean;
</script>

<a class="flex flex-row relative hover:bg-slate-600 rounded cursor-pointer p-2" href={url} target="_blank">
    <div class="flex flex-col">
        <p class="text-lg font-semibold">
            {title}
            {#if archived}
                <div class="badge">
                    archived
                </div>
            {/if}
        </p>
        <p>{description}</p>
    </div>
    {#if language}
        <div class="absolute right-1 top-1">
            {language}
        </div>
    {/if}
    <div class="absolute right-1 bottom-1">
        <p>
            {#each tags as tag}
                <div class="badge badge-primary ml-1">
                    {tag}
                </div>
            {/each}
            {stars} <i class="fa-solid fa-star text-warning"></i>
        </p>
    </div>
</a>
<script lang="ts">
    import { onMount } from 'svelte';
    import { AddLog } from '$lib/utils';
    import RepoCard from '../RepoCard.svelte';

    let repos: any[] = [];
    let collapsed: boolean;

    onMount(async () => {
        const res = await fetch('https://api.github.com/users/quentinam/repos');
        const data = await res.json();
        console.log(data);
        repos = data;
    })

</script>

<div on:click={() => {
    if (!collapsed)
        AddLog('display github repos', 'Downloading quentinam repos...', 'Done!')
}} 
    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
    <input type="checkbox" bind:checked={collapsed} /> 
    <div class="collapse-title text-xl font-medium"><i class="fa-brands fa-github"></i> Github repos</div>
    <div class="collapse-content"> 
        {#if repos}
            {#each repos as repo}
                <RepoCard
                    title={repo.name}
                    description={repo.description}
                    url={repo.html_url}
                    tags={repo.topics}
                    stars={repo.stargazers_count}
                    language={repo.language}
                    archived={repo.archived}
                />
            {/each}
        {/if}
    </div>
</div>
<script lang="ts">
    import { cascade } from 'svelte-typewriter';
    import { onMount } from 'svelte';
    import RepoCard from '../lib/components/RepoCard.svelte';

    let repos: any[] = [];

    let logs = [[{
        prefix: '$',
        class: '',
        content: 'npm install quentinam && display'
    },
    {
        prefix: '>',
        class: 'text-warning',
        content: 'Installing...'
    },
    {
        prefix: '>',
        class: 'text-success',
        content: 'Done!'
    },
    {
        prefix: '>',
        class: 'text-warning',
        content: 'Displaying infos...'
    },
    {
        prefix: '>',
        class: 'text-success',
        content: 'Done!'
    }]];

    function AddLog(first: string, second: string, third: string){
        
        const log = [
            {
                prefix: '$',
                class: '',
                content: first
            },
            {
                prefix: '>',
                class: 'text-warning',
                content: second
            },
            {
                prefix: '>',
                class: 'text-success',
                content: third
            }
        ]
        
        logs = [...logs, log];
    }

    onMount(async () => {
        const res = await fetch('https://api.github.com/users/quentinam/repos');
        const data = await res.json();
        console.log(data);
        repos = data;
    })

</script>

<div class="hero min-h-screen bg-base-200">
    <div class="flex flex-row w-full h-full p-2 space-x-3">
        <div class="w-1/2">
            <h1 class="text-4xl font-bold mb-5">Quentin AM</h1>
            <div on:click={() => AddLog('display github repos', 'Downloading quentinam repos...', 'Done!')} class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" /> 
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
                            />
                        {/each}
                    {/if}
                </div>
            </div>
        </div>
        <div class="w-1/2">
            <div class="mockup-code max-h-96 overflow-auto" style="--cursor-color:white;">
                {#each logs as log}
                    <div use:cascade={{ interval: 30 }}>
                        {#each log as node}
                            <pre data-prefix={node.prefix} class={node.class}><code>{node.content}</code></pre>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
<script lang="ts">
    import { AddLog } from '$lib/utils';
    import { Firebase, Svelte, CSharp, ConfigPython, CPlusPlus, OCaml, Tailwind, Flask } from 'svelte-file-icons';
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
        <p class="font-semibold">19yo</p>
        <div class="divider"></div>
        <p class="font-semibold text-xl">Skills:</p>
        <div>
            <p>Love to use moderns tools to develop website, softwares, tools...</p>
        </div>
        <div class="font-semibold mt-3">Languages I am familiar with</div>
        <div class="flex space-x-3 mt-1">
            <div class="badge bg-orange-500 text-black text-xl p-3"><i class="fa-brands fa-java"></i>&nbsp;Java</div>
            <div class="badge badge-warning text-xl p-3"><i class="fa-brands fa-square-js"></i>&nbsp;Javascript</div>
            <div class="badge badge-error text-xl p-3"><Svelte/>Svelte</div>
            <div class="badge badge-primary text-xl p-3"><CSharp/>C#</div>
            <div class="badge badge-success text-xl p-3"><i class="fa-brands fa-c"></i>&nbsp;C</div>
            <div class="badge bg-blue-600 text-black text-xl p-3"><CPlusPlus/>C++</div>
            <div class="badge badge-info text-xl p-3"><ConfigPython/>Python</div>
            <div class="badge badge-warning text-xl p-3"><OCaml/>OCaml</div>
        </div>
        <div class="font-semibold mt-3">Tools I am familiar with</div>
        <div class="flex space-x-3 mt-1">
            <div class="badge text-xl p-3"><Firebase class="text-warning"/>Firebase</div>
            <div class="badge text-xl p-3"><Tailwind class="text-blue-600"/>TailwindCSS</div>
            <div class="badge text-xl p-3"><i class="fa-brands fa-unity"></i>&nbsp;Unity</div>
            <div class="badge text-xl p-3"><i class="fa-brands fa-git-alt"></i>&nbsp;Git</div>
            <div class="badge text-xl p-3"><i class="fa-brands fa-react text-blue-400"></i>&nbsp;React</div>
            <div class="badge text-xl p-3"><i>Ex</i>&nbsp;Express</div>
            <div class="badge text-xl p-3"><Flask/>Flask</div>
        </div>
        <div class="divider"></div>
        <p class="font-semibold text-xl">Studies:</p>
        <ul class="steps steps-vertical w-full">
            <li data-content="🎓" class="step step-info">
                <div class="w-full">
                    <a class="text-blue-500 hover:underline font-semibold" href="https://www.epita.fr/" target="_blank">Epita</a>
                    student to become engineer in IT
                    <div>
                        ACDC: Teaching assistant for first year student in programming
                        <div class=" badge badge-primary">C#</div>
                        <div class=" badge badge-warning">Ocaml</div>
                    </div>
                    <p class="italic">2020-2025</p>
                </div>
            </li>
            <li data-content="" class="step step-info">
                <div class="w-full">
                    High school diploma at
                    <span class="font-semibold">d'Arsonval High School</span>
                    <div class="badge badge-info font-semibold">Lower second-class honors</div>
                    <p class="italic">2017-2020</p>
                </div>
            </li>
        </ul>
    </div>
</div>
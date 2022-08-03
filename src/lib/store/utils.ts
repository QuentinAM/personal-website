import { writable } from "svelte/store";
import { tweened, type Tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

export const infosValue = tweened(0, {
    duration: 2000,
    easing: cubicOut,
});

export const logs = writable<any[]>([[{
    prefix: '$',
    class: '',
    content: 'npm install quentinam && display'
},
{
    prefix: '>',
    class: 'text-warning',
    content: 'Installing...',
    progress: true,
    id: "infos"
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
}]]);
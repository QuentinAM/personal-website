import { writable } from "svelte/store";
export const logs = writable<any[]>([[{
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
}]]);
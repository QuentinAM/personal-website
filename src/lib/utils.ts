import { logs } from "$lib/store/utils";

export function AddLog(first: string, second: string, third: string){
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
    ];
    logs.update(l => [...l, log]);
}
import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export const chainStore: Writable<ChainBlock | undefined> = writable()

export type ChainBlock = {
    slot: number,
    blockProducer: string,
    votes: number,
    difficulty: number
}
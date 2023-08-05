import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export const chainStore: Writable<ChainBlock | undefined> = writable()

export type ChainBlock = {
    slot: number,
    blockProducer: string,
    votes: number,
    difficulty: number,
    dockerStatistics: DockerStatistic[],
    migrations?: Map<String, MigrationPlan>,
}

export type DockerStatistic = {
    publicKey: string,
    containers: DockerContainer[],
    slot: number,
    timestamp: number,
    totalCPU: number
}

export type DockerContainer = {
    id: string,
    processes: number,
    memoryUsage: number[],
    cpuUsage: number[],
    updated: number,
    latestSnapshot: string
}

export type MigrationPlan = {
    from: string,
    to: string,
    container: string
}
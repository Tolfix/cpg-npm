import { IConfig } from "../Interfaces/Configs";

export type TConfigD = keyof IConfig
export const CacheConfig = new Map<TConfigD, IConfig[TConfigD]>();
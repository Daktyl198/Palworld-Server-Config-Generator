import {writable} from 'svelte/store';
import { settingslist } from './data/settingslist.mjs';

export const data = writable();
data.set(settingslist);

import {writable} from 'svelte/store';
import { categories, settingslist } from './settingslist.mjs';

export const data = writable();
data.set(settingslist);

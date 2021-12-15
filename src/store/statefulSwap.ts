import { writable } from "svelte/store";

export default function statefulSwap(initialState: string) {
	const state = writable<string>(initialState);
	const lastState = writable<string>(initialState);

	let nextState = initialState;
	function transitionTo(newState: string) {
		if (nextState === newState) return;
		nextState = newState;
		state.set(null);
		lastState.set(nextState);
	}

	function onOutro() {
		state.set(nextState);
	}

	return {
		state,
		lastState,
		transitionTo,
		onOutro,
	};
}

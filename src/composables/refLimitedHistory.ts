import { watch, type Ref, toValue } from "vue";
import { useRefHistory } from "./refHistory";

export function useRefLimitedHisotry<T>(source: Ref<T>, capacity: number | Ref<number>) {
	const {history, undo} = useRefHistory(source)
	watch(source, (newVal, oldVal) => {
		if (history.value.length > toValue(capacity)) {
			history.value.shift()
		}
	})
	return {
		history, undo
	}

}

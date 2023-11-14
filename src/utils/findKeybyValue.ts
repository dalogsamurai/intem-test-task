// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export const findKeyByValue = (item: any, value: any) => {
	return Object.keys(item).find((key) => item[key] === value);
};

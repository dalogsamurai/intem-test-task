import { useState } from "react";

const useLoading = () => {
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);

	return { isLoading, isError, setLoading, setError };
};

export default useLoading;

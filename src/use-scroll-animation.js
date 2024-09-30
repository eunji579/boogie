import { useRef, useState, useEffect } from "react";

const useScrollAnimation = () => {
	const [isInViewport, setIsInViewport] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		if (!ref.current) return;

		const callback = (entries) => {
			const intersecting = entries.some((entry) => entry.isIntersecting);
			if (intersecting) {
				setIsInViewport(true);
			}
		};

		const options = { root: null, rootMargin: "0px", threshold: 0.7 };

		const observer = new IntersectionObserver(callback, options);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return { isInViewport, ref };
};

export default useScrollAnimation;

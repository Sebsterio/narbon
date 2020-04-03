const SCROLL_MESSAGE_INTERVAL = 200;
let scrollTimeout;
let scrollReady = true;

export const debounce = callback => {
	if (!scrollReady) return;
	scrollReady = false;
	clearTimeout(scrollTimeout);
	scrollTimeout = setTimeout(() => {
		scrollReady = true;
	}, SCROLL_MESSAGE_INTERVAL);
	callback();
};

export const isScrollNearBottom = (threshold = 0) => {
	const D = document;
	const docHeight = Math.max(
		D.body.scrollHeight,
		D.body.offsetHeight,
		D.body.clientHeight
	);
	return window.scrollY + window.innerHeight + threshold >= docHeight - 1;
};

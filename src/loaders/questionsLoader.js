import { API_URL, DEFAULT_PAGE_COUNT } from '@constans';

export const getQuestions = async ({ request }) => {
	const url = new URL(request.url);
	const page = url.searchParams.get('_page') || 1;
	const perPage = url.searchParams.get('_per_page') || DEFAULT_PAGE_COUNT;
	const sort = url.searchParams.get('_sort') || '';
	const res = await fetch(`${API_URL}/react?_page=${page}&_per_page=${perPage}&_sort=${sort}`);
	if (!res.status === 'ok') {
		throw new Response("Question not found", { status: 404 });
	}

	const questions = await res.json();

	return { questions, sort, page, perPage };
};

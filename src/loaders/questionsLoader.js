import { API_URL } from '@constans';

export const getQuestions = async ({ request }) => {
	const url = new URL(request.url);
	const sort = url.searchParams.get('_sort') || '';
	const res = await fetch(`${API_URL}/react?_sort=${sort}`);
	if (!res.status === 'ok') {
		throw new Response("Question not found", { status: 404 });
	}

	const questions = await res.json();

	return { questions, sort };
};

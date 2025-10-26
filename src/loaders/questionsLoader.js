import { API_URL } from '@constans';

export const getQuestions = async () => {
	const res = await fetch(`${API_URL}/react`);
	if (!res.status === 'ok') {
		throw new Response("Question not found", { status: 404 });
	}

	const questions = await res.json();
	console.log(questions);

	return questions;
};

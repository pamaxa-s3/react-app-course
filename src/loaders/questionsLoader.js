import { API_URL } from '@constans';

export const getQuestions = async () => {
	const res = await fetch(API_URL);
	if (!res.status === 'ok') {
		throw new Error(`Fail server request: ${error.message}`);
	}

	const questions = res.json();

	return questions;
};

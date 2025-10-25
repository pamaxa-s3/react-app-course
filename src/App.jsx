import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@components/MainLayout';
import { Home } from '@page/Home';
import { About } from '@page/About';
import { AddQuestion } from '@page/AddQuestion';
import { Forbiden } from '@page/Forbiden';
import { ErrorBoundary } from '@page/ErrorBoundary';
import { QuestionPage } from '@page/QuestionPage';
import { NotFound } from '@page/NotFound';
import { getQuestions } from '@loaders/questionsLoader.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: getQuestions,
				errorElement: <ErrorBoundary />
			},
			{
				path: 'about',
				element: <About />,
				errorElement: <ErrorBoundary />
			},
			{
				path: 'question/:id',
				element: <QuestionPage />,
				errorElement: <ErrorBoundary />
			},
			{
				path: 'addquestion',
				element: <AddQuestion />,
				errorElement: <ErrorBoundary />
			},
			{
				path: 'forbiden',
				element: <Forbiden />,
				errorElement: <ErrorBoundary />
			},
			{
				path: '*',
				element: <NotFound />,
				errorElement: <ErrorBoundary />
			}
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

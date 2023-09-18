import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"

export const PageNotFound = () => {
	useTitle('Page Not Found');

	return (
		<main>
			<section className="flex flex-col justify-center px-2">
				<div className="flex flex-col items-center mt-4">
					<p className="text-5xl text-gray-700 font-bold my-10 dark:text-white">Page Not Found</p>
					<p className="text-xl text-gray-700  dark:text-white">Oops! We couldn't found the page that you're looking for.</p>
					<p className="text-xl text-gray-700  dark:text-white">Please check the address and try again.</p>
					<div className="flex flex-row justify-center">
						<p className="text-md text-gray-700 font-bold my-7 dark:text-white">Error code:</p>
						<p className="text-md text-gray-700  my-7 dark:text-white px-2">404</p>
					</div>
					
				</div>
				<div className="flex justify-center my-4">
					<Link to="/">
						<button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">Back to Cineforum</button>
					</Link>
					
				</div>
			</section>
		</main>
	)
}

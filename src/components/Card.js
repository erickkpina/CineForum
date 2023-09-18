import { Link } from "react-router-dom"
import Backup from "../assets/images/backup.png"

export const Card = ({movie}) => {
	const {id, original_title, overview, poster_path} = movie;
	const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup ;

	return (

		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
			<Link to={`/movie/${id}`}>
				<img className="rounded-t-lg" src={image} alt="" />
			</Link>
			<div className="p-5">
				<Link to={`/movie/${id}`}>
					<h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h1>
				</Link>
				<p className="mb-3 pb-8 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
				<Link to={`/movie/${id}`} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
					Read more
				</Link>
			</div>
		</div>
	)
}

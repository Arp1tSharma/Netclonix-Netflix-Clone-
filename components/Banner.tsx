import Image from "next/image"
import { useEffect, useState } from "react"
import { Movie } from "../typings"
import {baseUrl} from '../constants/movie'
import {FaPlay} from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/solid"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"

interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [showModal,setShowModal] = useRecoilState(modalState);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random()*netflixOriginals.length)])
    }, [netflixOriginals])


    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end">
            <div className="absolute top-0 -z-10 left-0 h-[95vh] w-full">
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout="fill" 
                objectFit="cover"
                />
            </div>

            <h1 className="text-2xl md:text-4xl font-bold lg:text-7xl" >{movie?.title||movie?.name||movie?.original_name}</h1>
            <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

            <div className="flex space-x-3">
                <button className="bannerButton md:py-2.5 md:px-8 px-5 py-1.5 bg-gray-100 text-black"> <FaPlay className="h-4 w-4 text-black md:h-5 md:w-5"/> Play</button>
                <button className="bannerButton md:py-2.5 md:px-8 px-5 py-1.5 bg-[gray]/70"
                onClick={()=>{
                    setCurrentMovie(movie)
                    setShowModal(true)
                }}
                >More info <InformationCircleIcon className="h-4 w-4 md:h-6 md:w-6"/> </button>
            </div>
        </div>
    )
}

export default Banner

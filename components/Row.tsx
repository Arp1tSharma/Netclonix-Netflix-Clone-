import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import { useRef, useState } from "react"
import { Movie } from "../typings"
import MovieCard from "./MovieCard"

interface Props {
    title: string
    movies: Movie[]
    // movies:Movie[] | DocumentData[]
}

const Row = ({ title, movies }: Props) => {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved,setIsMoved] = useState(false)

    const handleClick = (dir:string) => {
        setIsMoved(true)
        if(rowRef.current){
            const {scrollLeft, clientWidth} = rowRef.current
            const scrollTo = dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
            rowRef.current?.scrollTo({left:scrollTo, behavior:"smooth"})
            if(scrollTo <= 10) setIsMoved(false);
        }
    }

    return (
        <div className=" space-y-1 md:space-y-2" >
            <h2 className="w-56 cursor-default text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
            <div className="group relative md:-ml-2">
                <ChevronLeftIcon className={`absolute cursor-pointer top-0 bottom-0 left-2 z-40 m-auto h-9  w-9 transition hover:scale-125 opacity-0 group-hover:opacity-100 ${!isMoved && "hidden"}`} onClick={()=>handleClick('left')}/>

                <div ref={rowRef} className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
                    {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                </div>

                <ChevronRightIcon className="absolute cursor-pointer top-0 bottom-0 right-2 z-40 m-auto h-9  w-9 transition hover:scale-125 opacity-0 group-hover:opacity-100" onClick={()=>handleClick('right')}/>
            </div>
        </div>
    )
}

export default Row
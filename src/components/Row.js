import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import MovieModal from '../MovieModal';
import "./Row.css";

export default function Row({ isLargeRow, title, id, fetchUrl }) {

    const [movies, setMoives] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    // 필요한 정보 가져오기
    useEffect(() => {
        fetchMovieData();  // 함수 콜
    }, [fetchUrl]);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);  // axios 서버에 비동기 요청
        setMoives(request.data.results);  // 영화 정보들을 movies에 넣어줌
    };

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

    return (
        <section className='row'>
            <h2>{title}</h2>
            <div className='slider'>

                <div className='slider__arrow-left'>
                    <span
                        className='arrow'
                        onClick={() => {
                            document.getElementById(id).scrollLeft -= window.innerWidth - 80;  // 슬라이드 기능
                        }}
                    >
                        {"<"}
                    </span>
                </div>

                <div id={id} className="row__posters">
                    {movies.map(movie => (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}   // isLargeRow면 row__posterLarge 스타일링
                            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path  // isLargeRow 일 때는 포스터 이미지
                                }`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)} // 모달
                        />
                    ))}
                </div>

                <div className='slider__arrow-right'>
                    <span
                        className='arrow'
                        onClick={() => {
                            document.getElementById(id).scrollLeft += window.innerWidth - 80;
                        }}
                    >{">"}</span>
                </div>

            </div>
                        
                        {
                            modalOpen && <MovieModal {...movieSelected} setModalOpen = {setModalOpen}/>
                        }
        </section>
    );
}


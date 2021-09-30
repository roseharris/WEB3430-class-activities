import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { MovieContext } from "./MovieList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function MovieForm() {
    let {movies, setMovies} = useContext(MovieContext)
    let{mid} = useParams()

    let movie = mid ? movies.find(m => m.id == mid) : {}
    let [title, setTitle] = useState(movie.title)
    let [year, setYear] = useState(movie.year)
    let [genre, setGenre] = useState(movie.genre)
    let [plot, setPlot] = useState(movie.plot)
    let [poster, setPoster] = useState(movie.poster)
    let [rating, setRating] = useState(movie.rating)
    let [votes, setVotes] = useState(movie.votes)
    let [imdbID, setimdbID] = useState(movie.imdbID)
    let [reviews, setReviews] = useState(movie.reviews)
    
    const history = useHistory()
    const submit = e => {
        e.preventDefault()
    }
    return(
        <form onSubmit={submit}>
            <h1>Adding/Editing a movie</h1>
            <div className="field">
                <label htmlFor="title">Title</label>
                <div className="control">
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                    <p className="help">Title is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="year">Year</label>
                <div className="control">
                    <input type="number" name="year" max="2021" min="1900" value={year} onChange={e => setYear(e.target.value)}/>
                    <p className="help">Year is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="rating">Rating</label>
                <div className="control">
                    <input type="text" name="rating" value={rating} onChange={e => setRating(e.target.value)}/>
                    <p className="help">Rating is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="genre">Genre</label>
                <div className="control">
                    <input type="text" name="genre" value={genre} onChange={e => setGenre(e.target.value)}/>
                    <p className="help">Genre is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="plot">Plot</label>
                <div className="control">
                    <textarea type="text" name="plot" value={plot} onChange={e => setPlot(e.target.value)}/>
                    <p className="help">Plot is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="poster">Poster</label>
                <div className="control">
                    <input type="url" name="poster" value={poster} onChange={e => setPoster(e.target.value)}/>
                    <p className="help">Poster is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="rating">Rating</label>
                <div className="control">
                    <input type="text" name="rating" value={rating} onChange={e => setRating(e.target.value)}/>
                    <p className="help">Rating is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="votes">Votes</label>
                <div className="control">
                    <input type="number" name="votes" min="1" value={votes} onChange={e => setVotes(e.target.value)}/>
                    <p className="help">Votes is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="imdbID">imdbID</label>
                <div className="control">
                    <input type="text" name="imdbID" value={imdbID} onChange={e => setimdbID(e.target.value)}/>
                    <p className="help">imdbID is required</p>

                </div>
            </div>
            <div className="field">
                <label htmlFor="reviews">Reviews</label>
                <div className="control">
                    <input type="text" name="reviews" value={reviews} onChange={e => setReviews(e.target.value)}/>
                    <p className="help">***Reviews are optional***</p>

                </div>
            </div>
            <div className="field">
                <label></label>
                <div className="control">
                    <button className="primary">Submit</button>
                    <button className="primary" onClick={()=>history.push('/movies')}>Cancel</button>
                </div>
            </div>

        </form>
    )
}
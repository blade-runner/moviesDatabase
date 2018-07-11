import React from 'react'

export default class MovieEditForm extends React.Component {
    constructor(props) {
        super(props);

        const sourceMovie = this.cloneMovie(this.props.movie);

        this.state = {
            movie: this.props.movie,           
            sourceMovie: sourceMovie,
            addGenre: '',
            error: ''
        };
    }

    cloneMovie(movie) {
        return Object.assign({}, {
            ...movie, 
            genres: movie.genres.map(genre => genre)
        }); 
    }

    onSubmit = () => (e) => {
        e.preventDefault();

        const isValid = !Array.from(e.target).some(input => {
            let required = input.getAttribute('data-required') == 'true';
            return (required && input.value.trim() === '');
        });

        if (isValid) {
            this.props.onSaveMovie(this.state.movie);
        }

        this.setState({
            error: isValid ? '' : 'Ошибка валидации данных. Поля Заголовок, Картинка и Описание должны быть заполнены'
        })
    }

    changeItem = (itemName) => (e) => {
        const { value } = e.target;
        let movie = { ...this.state.movie, [itemName]: value };
        this.setState({
            movie: movie
        });
    }

    changeAddGenre = () => (e) => {
        const { value } = e.target;
        this.setState({
            addGenre: value
        })
    }

    onAddGenre = () => () => {
        if (this.state.addGenre !== '') {
            let movie = { ...this.state.movie, genres: [...this.state.movie.genres, this.state.addGenre] };

            this.setState({
                movie: movie,
                addGenre: ''
            });
        }
    }

    removeGenre = (genre) => () => {
        let reducedGenre = this.state.movie.genres.filter((item) => {
            return item !== genre;
        });

        let movie = { ...this.state.movie, genres: reducedGenre };

        this.setState({
            movie: movie,
            addGenre: ''
        });
    }

    cancel = () => () => {
        this.setState({
            movie: this.cloneMovie(this.state.sourceMovie),
            error: ''
        })
    }

    render() {
        const { movie, addGenre, error } = this.state;

        return (
            <div>
                {
                    movie.posterUrl && <img src={movie.posterUrl} />
                }
                <form onSubmit={this.onSubmit()}>
                    <ul className="movie__edit">
                        <li>Заголовок: <input value={movie.title} name={'title'} onChange={this.changeItem('title')} data-required="true" /></li>
                        <li>Картинка: <input value={movie.posterUrl} name={'posterUrl'} onChange={this.changeItem('posterUrl')} data-required="true" /></li>
                        <li>Дата выпуска: <input value={movie.year} name={'year'} onChange={this.changeItem('year')} /></li>
                        <li>Режиссер:  <input value={movie.director} name={'director'} onChange={this.changeItem('director')} /></li>
                        <li>Продолжительность:  <input value={movie.runtime} name={'runtime'} onChange={this.changeItem('runtime')} /> мин </li>
                        <li>Описание: <textarea value={movie.plot} name={'plot'} onChange={this.changeItem('plot')} data-required="true"></textarea></li>
                        <li>В ролях: <input value={movie.actors} name={'actors'} onChange={this.changeItem('actors')} /></li>
                        <li>Жанр:
                            <ul>
                                <li><input onChange={this.changeAddGenre()} value={addGenre} /> <input type="button" onClick={this.onAddGenre()} value=" + " /></li>
                                {
                                    movie.genres.map((genre, i) => <li key={i}>{genre} <input type="button" value=" - " onClick={this.removeGenre(genre)} /></li>)
                                }
                            </ul>
                        </li>
                    </ul>
                    <ul className="movie__controls">
                        <li>
                            <button type="submit">Save</button>
                            <input type="button" onClick={this.cancel()} value="Cancel" />
                        </li>
                        { error !== '' && <li>{error}</li> }
                    </ul>
                </form>
            </div>
        );
    }
}
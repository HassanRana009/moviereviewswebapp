import './Movie.css'
const Movie = (props) => {
  return (
    <>
    <div className='card'>
        <img src={props.Poster} className="imgcard" alt="" />
        <div>
        <h2 className='cardtitle'>{props.Title}</h2>
        <h4 className='cardyear'><span className='yearleft'>{props.Year}</span><span className='runtimeright'>{props.Runtime}</span></h4>
        
        </div>
        </div>

    </>
  )
}

export default Movie
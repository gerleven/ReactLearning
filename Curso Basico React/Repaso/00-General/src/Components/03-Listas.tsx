import data from "./data.json"

interface TvShow{
    score: any,
    show: any
}

const Listas = ()=>
{
    return <>
    <h6>TV SHOWS with Rating &gt; 8:</h6>
        {data.filter(
            (x:TvShow)=>(x.show.rating.average>8)
            ).map(
                (tvShow: TvShow)=>(
                    <div className='componente'>
                        <p>Show Name: {tvShow.show.name}</p>
                        <p>Rating: {tvShow.show.rating.average}</p>
                    </div>
                )
            )
        }
    </>
}
    
export default Listas;
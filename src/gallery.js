import React, {useState,useEffect} from 'react'

export default function  Gallery(){
return 
  const[tours,setours]= useState([]);
  const[loading, setLoading]=useState(true);
  const[error,setError]=useState(null);

};
 function fetchTour (aysnc){
 const response = await fetch('https://course-api.com/react-tours-project');
} 
Fetchtours();{[setLoading,setError,setTours]}
if (loading) return
 <h2 className='loading'>Loading..</h2> 
if (error)return 
<h2 classname='error'>{error}</h2>;

catch (error) {
  setError('Failed to Load tour information ')}
;
return await response.json()
setTours(data);
  function removetour(id){
     const setnewtour = tour.filter((tour)=> tour.id !==d); };

  return(
    <div>
       
        <title className>Tour Information !</title>
        <article className="tour"/>
        <img src={tour.image} alt={tour.name}></>
        <h2 className="tourname">{tour.name}</h2>
        <h2 className="tourprice">${tour.price}</h2>
        {tour.moreinfo?< h2 className="Moretourinfo">${tour.info} </h2>:(null) }
        <button onCLick={setTours(tour.id)}
        {tour.moreinfo? 'Show Less': 'Show More'}>
        </button>
        </article>
        </div>
           )

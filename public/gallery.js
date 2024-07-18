import React, {useState,Usecontext} from 'react'

export default Gallery(){
    
    const fetchTour()
    const[tours,setours]= useState([]);

};

aysnc function fetchTour (){
 const response = await fetch('https://course-api.com/react-tours-project')
 const data= await response.json()
 setTours(data);
 setLoading(false);

}
catch (error){
    throwerror('Failed to Load tour information ')
    setLoading(false);
};
Fetchtours();{[setLoading,setError,setTours]}
if (loading) return <div Classname='loading'>Loading..</div> 
if (error)return <div Classname='error'>{error}</div>;


return(
    
  data.map(tour)) =>(
<tour key ={tour.id} {...tour} />

  );
  return(
    <div>
        <title Classname>Tour Information !</title>
        <article Classname="tour"/>
        <img src={tour.image} alt={tour.name}></>
        <h2 ClassName="tourname">{tour.name}</h2>
        <h2 ClassName="tourprice">${tour.price}</h2>

        {moreinfo?< h2 ClassName="Moreinfo">${tour.info} </h2> :()}
        <button onCLick ={(SetReadMore(tour.id))}
        {tour.moreinfo? 'Show Less': 'Show More'}>
        </button>
        </div>
        </article>
      





    </div> 
  )

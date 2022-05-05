export default function Characters(props) {
  const {Characters,setCharacters} =props;

  const resertCharacters =() => {
      setCharacters (null);
  }



    return (
        <div className="characters">


            <h1> Personajes  </h1>
            <span className="back-home" onClick={resertCharacters}>Volver a la home </span> 

            <div className="container-characters">
                {Characters.map ((Character,index) =>(
                    <div className="characters-container" key={index}>
                        <div>
                            <img src={Character.image} alt={Character.name}/>
                     </div>

                    <div>

                        <h3> {Character.name} </h3>
                        <h6> {Character.status ===  "alive" ?(
                            <>
                            
                            <span className="alive" />
                            </>
                            ) : (
                                <>
                                <span className="dead" />
                                </>
                            )}
                        </h6>
                        <p >
                            <span className="text-grey"> Episodios :</span>

                            <span> {Character.episode.length} </span>

                        </p>
                        <p>
                            <span className="text-grey"> Especie : </span>
                            <span>{Character.species}</span>
                        </p>
                    </div>
                    </div>
                ) )}
                <span className="back-home" onClick={resertCharacters}>Volver a la home </span> 
            </div>
        </div>
    );

}

import { useState, useEffect } from "react";

export function Gallery() {
    const [gallery, setGallery] = useState([]);

    const fetchGallery = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((r) => r.json())
          .then((data) => {
            let response = data.results;
            setGallery(response);
            console.log(response);
            console.log("datanext" + data.next);
            // setNextUrl(data.next);
            // setPrevUrl(data.previous);
            // setLoading(false);
          })
          .catch((error) => console.log("error"));
      };
      console.log(gallery);

      useEffect(() => {
        fetchGallery();
      }, []);

    return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Gallery
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
}
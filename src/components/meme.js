import React from "react";


export default function Meme() {
    const [allMemes, setAllMemes] = React.useState([])
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json()) //parsing json into javascript
    //         .then(myData => setAllMemes(myData.data.memes));
    // }, [])
    //another way to do is using async await in useEffect
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();

    }, [])


    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    function getMemeImage() {
        const memesArr = allMemes;
        const randomNumber = Math.floor(Math.random() * memesArr.length);
        const url = memesArr[randomNumber].url;
        setMeme((prevData) => ({
            ...prevData,
            randomImage: url
        }))
    }


    return (
        <main>
            <div action="" className="form">


                <input
                    type="text"
                    placeholder="Shut up"
                    className="form--input"
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                />

                <input
                    type="text"
                    placeholder="and take my money"
                    className="form--input"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                />

                <button
                    className="form--button"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage}
                    alt="broken"
                    className="meme--image " />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
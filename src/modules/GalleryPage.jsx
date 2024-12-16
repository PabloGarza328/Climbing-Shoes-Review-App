// import lsu from '../assets/the-money-game-lsu-screenshot_.png'
// import gear from '../assets/climbing-gear.jpeg'
// import india from '../assets/pablo-india-travels-2.jpeg'
// import hiking from '../assets/hiking-hobbies.jpeg'
// import potrero from '../assets/potrero-chico-sunrise.jpeg'

const images = [
    {
        filepath: '/assets/the-money-game-lsu-screenshot_.png',
        caption: 'Poster from the documentary series I edited, "The Money Game LSU" about student athletes.',
        title: "&copy; 2022 Pablo Garza"
    },
    {
        filepath: '/assets/climbing-gear.jpeg',
        caption: 'Some of my climbing equipment laid out before a day out.',
        title: "&copy; 2022 Pablo Garza"
    },
    {
        filepath: '/assets/pablo-india-travels-2.jpeg',
        caption: 'My father and I visiting an ancient stepwell in India.',
        title: "&copy; 2022 Pablo Garza"
    },
    {
        filepath: '/assets/hiking-hobbies.jpeg',
        caption: 'Photography taken by me while hiking down a volcano.',
        title: "&copy; 2022 Pablo Garza"
    },
    {
        filepath: '/assets/potrero-chico-sunrise.jpeg',
        caption: 'Photography taken by me of sport climbing mecca "Potrero Chico".',
        title: "&copy; 2022 Pablo Garza"
    }, 
]

function GalleryPage(){
    // const images =[lsu, gear, india, hiking, potrero]
    return (
        <>
        <p>Photo gallery showcasing a variety of hobbies of mine</p>
            <section><h2>Gallery</h2> </section>
        <article className="gallery">
                {
                images.map((image) =>
                    <figure>
                    <img src={image.filepath} alt={image.caption} title={image.title}/>
                    <figcaption>{image.caption}</figcaption>
                    </figure>
            )
                }
        </article>  
               
            {/* <figure>
                <img src="src/assets/climbing-gear.jpeg" alt="Climbing Gear. An image showcasing various tools made specifically for sport climbing."/>
                <figcaption>Some of my climbing equipment laid out before a day out.</figcaption>
            </figure>
            <figure>
                <img src="src/assets/pablo-india-travels-2.jpeg" alt="Photograph of my father and I visiting an anctient stepwell in India."/>  
                <figcaption>My father and I visiting an ancient stepwell in India.</figcaption>
            </figure>
            <figure>
                <img src="src/assets/hiking-hobbies.jpeg" alt="Photo I took while hiking down a volcano. There's a blue sky in the horizon, and a person hiking down a path."/>
                <figcaption>Photography taken by me while hiking down a volcano.</figcaption>
            </figure>
            <figure>
                <img src="src/assets/potrero-chico-sunrise.jpeg" alt="Photo I took of the climbing destination known as Potrero Chico during sunrise. An imposing mountain with a flat face"/>
                <figcaption>Photography taken by me of sport climbing mecca "Potrero Chico".</figcaption>
            </figure> */}
        {/* </article>   */}
        </>
    )
}
export default GalleryPage;
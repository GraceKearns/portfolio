import Reacted from '../img/react.png'
import Nextjs from '../img/nextjs.png'
import MaterialUI from '../img/materialui.png'
import Tailwind from '../img/tailwind.png'
import Node from '../img/node.png'
import PHP from '../img/php.png'
import Laravel from '../img/laravel.png'
import PostgreSql from '../img/postgresql.png'
import firebase from '../img/firebase.png'
import Docker from '../img/docker.png'
import Expo from '../img/expo.png'
import Flask from '../img/flask.png'
import Postman from '../img/postman.png'
import Python from '../img/python.png'
import ReactNative from '../img/react-native.png'
import SoapUI from '../img/soapui.png'
import js3 from '../img/3js.png'
import redvox1 from '../img/redvox1.gif'
import redvox2 from '../img/redvox2.gif'
import redvox3 from '../img/redvox3.gif'
import cloud1 from '../img/1.gif'
import cloud2 from '../img/2.gif'
import cloud3 from '../img/3.gif'
import vine1 from '../img/vine1.gif'
import vine2 from '../img/vine2.gif'
import vine3 from '../img/vine3.gif'
import word1 from '../img/word1.gif'
import word2 from '../img/word2.gif'
import word3 from '../img/word3.gif'
import rick1 from '../img/rick1.gif'
import rick2 from '../img/rick2.gif'
import rick3 from '../img/rick3.gif'


import farm1 from '../img/farm.gif'
import farm2 from '../img/farm2.gif'


const Projects = () => {
    const myProjects =
        [
            {
                name: "RedVox Band Page",
                description: "Recognizing the unique position of Red Vox as a relatively smaller band, I undertook the initiative to develop a tailored website to cater to their specific needs. Embracing the opportunity to innovate within the realm of band websites, I introduced experimental elements to set it apart from conventional platforms. A notable feature of the website is the integration of a cutting-edge 3D music player, exemplified by the 3js music player. This sophisticated player not only facilitates streaming of the band's music but also incorporates dynamic visualizations synchronized with the rhythm, thereby elevating the overall user experience. Despite the band's absence from touring circuits at present, my endeavor is driven by the ambition to enhance their online presence and foster deeper engagement with their music. Through the website, fans are provided with an immersive platform to explore Red Vox's discography and connect with their music on a more profound level. To optimize performance and ensure seamless user interaction, the website is developed using Next.js, known for its efficient loading speeds, while Tailwind CSS is employed for sleek and responsive styling. This combination of technologies contributes to a smooth and engaging browsing experience for visitors. In summary, the Red Vox website stands as a testament to my dedication to supporting smaller bands and promoting their artistry in innovative ways. By leveraging advanced technology and design principles, the website aims to amplify Red Vox's presence in the digital landscape and cultivate a vibrant community of fans eager to engage with their music.",
                technologies: "NextJS, React, Postman, SoapUI, 3JS",
                visit: "https://redvoxfan.com",
                github: null,
                background: "bg-portfolio1",
                images: [redvox1, redvox2, redvox3],
                techImages: [Nextjs, Reacted, Postman, SoapUI, js3, Tailwind],

            },
            {
                name: "Vinesauce",
                description: "Vinesauce is a renowned collective of streamers, each maintaining individual Twitch channels with daily streaming schedules. Collectively, the group boasts a substantial online presence, with over 3 million subscribers on YouTube and a follower base exceeding one million on Twitch.tv. The Vinesauce website serves as a centralized platform for showcasing the diverse content produced by each streamer. Users can easily access and view videos and streams by clicking on the respective streamers' icons. To ensure seamless functionality and efficient processing, the website leverages Next.js, a React framework known for its optimization capabilities. Additionally, Tailwind CSS is employed for styling, providing a streamlined and visually appealing user interface. The integration of YouTube and Twitch APIs enables the website to dynamically retrieve and display video content directly from YouTube.com and stream data from Twitch.com. This approach ensures that users have access to up-to-date and engaging content from their favorite Vinesauce streamers. Overall, the Vinesauce website serves as a comprehensive hub for fans to explore and enjoy the diverse array of content produced by the collective's talented streamers, leveraging Next.js, Tailwind CSS, and API integrations to deliver an immersive and user-friendly experience.",
                technologies: "NextJS, React, Postman, SoapUI",
                visit: "https://statuesque-gelato-0a3520.netlify.app",
                github: null,
                background: "bg-portfolio2",
                images: [vine1, vine2, vine3],
                techImages: [Nextjs, Reacted, Postman, SoapUI, Tailwind],

            },
            {
                name: "Cloud Comparison Tool",
                description: "The Cloud Comparison Tool is a sophisticated web application developed with the React framework and enhanced with Material UI for styling. Its primary objective is to empower users to evaluate and determine the most suitable cloud service provider based on their individual requirements and preferences. The tool leverages both Rule-Based Reasoning (RBR) and Case-Based Reasoning (CBR) methodologies to aid users in decision-making. RBR employs a predefined set of rules stored in a JSON file to analyze user input and determine the optimal cloud service provider. On the other hand, CBR utilizes data stored in a Firebase backend to make decisions by considering past user data and experiences. To enrich the decision-making process, the tool aggregates pricing information from various vendors, including AWS, Azure, Google Cloud, and other private cloud providers. By fetching and presenting these prices, users gain valuable insights into the cost implications associated with each cloud service option. Through its intelligent integration of RBR, CBR, and real-time pricing data, the Cloud Comparison Tool offers users a comprehensive platform for making informed decisions regarding cloud service selection. This approach ensures that users can identify the cloud solution that best aligns with their unique needs and budgetary considerations.",
                technologies: "React, Postman, Firebase, MaterialUI",
                visit: null,
                github: "",
                background: "bg-portfolio3",
                images: [cloud1, cloud2, cloud3],
                techImages: [Reacted, Postman, firebase, MaterialUI],

            },
            {
                name: "Rick and Morty Script AI",
                description: "The Rick and Morty AI Script is an innovative scripting machine designed to generate unique episodes for the Rick and Morty TV show. Unlike conventional methods, this AI is built entirely from scratch, devoid of any reliance on ChatGPT or similar models. The system operates through an API, communicating via Flask to produce fresh scripts, which are then displayed on a frontend webpage.It's important to note that while the AI strives to generate coherent and entertaining scripts, the novelty of each episode may occasionally result in nonsensical or unexpected outcomes. This is attributed to the limited availability of training data, as the dataset for the series may not encompass a broad spectrum of scenarios and character interactions. Nonetheless, the Rick and Morty AI Script offers a novel approach to script generation, providing fans with a continuous stream of original content inspired by the beloved animated series. Through its use of custom-built technology and Flask integration, the system delivers an engaging and dynamic experience for enthusiasts of Rick and Morty.",
                technologies: "Flask, Postman, Python, Machine Learning",
                visit: null,
                github: "",
                background: "bg-portfolio4",
                images: [rick1, rick2, rick3],
                techImages: [Flask, Postman, Python, Docker],

            },
            {
                name: "Defined",
                description: "Word Guess is a compelling mobile application that derives inspiration from the enduring game WORDLE. It offers a unique twist: instead of guessing a five-letter word, players decipher the corresponding word based on its provided definition. This engaging word game fosters the application of users' vocabulary and problem-solving skills in an enjoyable and intellectually stimulating manner. To facilitate its functionality, the game utilizes a Firebase database for storing user data, including high scores, completed words, and earned points. Moreover, it is developed using React Native integrated with Expo, ensuring compatibility with both Android and iOS devices. This choice of technology enhances accessibility and user reach, contributing to the overall appeal and success of the application.",
                technologies: "React-Native, Postman,Firebase",
                visit: null,
                github: "",
                background: "bg-portfolio5",
                images: [word1, word2, word3],
                techImages: [ReactNative, Postman, firebase, Expo],

            },
            {
                name: "Farm Simulator",
                description: "Farm Simulator represents an ongoing project aimed at providing users with an immersive MMO gaming experience centered on agriculture, resource management, and combat. The project entails a web-based signup form allowing users to create accounts, granting access to the MMO game environment. The signup process is facilitated through Laravel, a PHP framework, with user data securely stored in a PostgreSQL database. Tailwind CSS is utilized for website styling, ensuring a visually appealing and responsive user interface. Within the game environment, users engage in activities such as crop cultivation and farm defense against both other players and various monsters. Node.js is employed to dynamically render unique tilesets and on-screen enemies, enhancing the gameplay experience. To enable real-time multiplayer interaction, the game utilizes WebSockets for networking, allowing seamless communication between players and facilitating collaborative or competitive gameplay elements. Overall, Farm Simulator combines the functionalities of Laravel, PostgreSQL, Tailwind CSS, Node.js, and WebSockets to deliver an engaging and immersive MMO gaming experience, where users can cultivate their farms, engage in combat, and interact with other players in a dynamic virtual world.",
                technologies: "Php, Laravel, Node, PostgreSQL",
                visit: null,
                github: "",
                background: "bg-portfolio6",
                images: [farm1, farm2],
                techImages: [PHP, Laravel, Node, PostgreSql, Tailwind],

            },
        ]

    return (
        <section id="Projects"  className="min-h-lvh text-white">
            {myProjects.map((item, upperindex) => (
                <div key={upperindex} className={`h-1/4 ${item.background} sm:p-12`}>
                    <div className='flex p-8 flex-col lg:flex-row justify-between '>
                        <div className='flex flex-col lg:w-2/3 justify-between'>
                            <div className=''>
                                <h2 className='text-3xl'>{item.name}</h2>
                                <hr></hr>
                                <p className='text-xl mt-8'>{item.description}</p>
                            </div>

                            <div className='flex flex-col '>
                                {item.visit ? (
                                    <div>
                                        <a href={item.visit}> <p className='text-2xl underline '>Visit The site</p></a>

                                    </div>
                                ) : <div>
                                    <a href={item.github}> <p className='text-2xl underline '>Source code</p></a>

                                </div>}
                                <div>
                                    <p className='text-xl mb-8'>This project uses the following technologies:</p>
                                </div>
                                <div className='flex lg:justify-normal justify-center flex-row'>
                                    {item.techImages.map((image, index) => (
                                        <div className='w-32' key={index} style={{ animationDelay: `${index * 0.4 + 1}s` }}>
                                            <img src={image} alt={index} style={{ animation: `bounce ${index * 0.4 + 1}s infinite` }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='flex text-center items-center flex-col gap-4'>
                            {item.images.map((image, index) => (
                                <div className='flex justify-center rounded-xl' key={index}>
                                    <img className={`w-full max-w-md rounded-xl ${upperindex === 4 ? 'lg:h-64' : ''}`} src={image} alt="vox" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
export default Projects
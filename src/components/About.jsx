import John from "../img/john.png";
import Swin from "../img/swinburne.png";
import Telstra from '../img/telstra.png'
import Tru from '../img/tru.jpg';
import Question from '../img/Question.png'
import { useState, useEffect, useRef } from "react"
import { createRoot } from 'react-dom/client';  // Corrected import statement
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Scene } from "three";
const Item = ({ path }) => {
    const [animationFrame, setAnimationFrame] = useState(0);
    const ref = useRef();
    const useNum = useRef(-1)
    const [rotationDirection, setRotationDirection] = useState(-1); // 1 for clockwise, -1 for counterclockwise
    // Use the loader callback to handle the loaded model
    const telstra = useLoader(GLTFLoader, path);

    let rotationSpeed = 0.005;
    const rotateObjects = () => {
        if (ref.current && telstra) {
            const clockwiseLimit = 0.3; // Replace with the desired clockwise rotation limit in degrees
            const counterclockwiseLimit = -0.3; // Replace with the desired counterclockwise rotation limit in degrees
            let rotationIncrement = rotationSpeed * useNum.current;
            let currentRotation = ref.current.rotation.z;
            currentRotation -= rotationIncrement;
            ref.current.rotation.z = currentRotation;

            if (
                (useNum.current === -1 && currentRotation >= clockwiseLimit) ||
                (useNum.current === 1 && currentRotation <= counterclockwiseLimit)
            ) {
                useNum.current = (useNum.current *= -1); // Use callback to ensure the correct updated value

                rotationSpeed = 0.003
            }
            // Ensure that the rotation is continuous
            setAnimationFrame(requestAnimationFrame(rotateObjects));
        }
    };
    useEffect(() => {
        // Ensure the GLTF objects are loaded before adjusting their properties
        if (telstra) {
            // Create a new instance of the model
            const clonedModel = telstra.scene.clone();

            ref.current.position.set(0, 0, 0.3); // Adjust as needed
            ref.current.rotation.set(1.5, 0, 0); // Adjust as needed
            ref.current.scale.set(1, 1, 1);

            // Add the cloned model to the scene
            ref.current.add(clonedModel);

            // Adjust camera position to zoom in
            const zoomFactor = -3; // Experiment with different values for desired zoom
            ref.current.position.z -= zoomFactor;

            // Initiate rotation animation
            setAnimationFrame(requestAnimationFrame(rotateObjects));
        }

        // Cleanup function to cancel animation frame on component unmount
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return <group ref={ref} />;
};

const About = () => {
    const data = [
        {
            name: "John Paul College",
            degree: "",
            merit: "Class of 2017",
            model: "/gltf/john.gltf"
        },
        {
            name: "Swinburne University of Technology",
            degree: "Diploma of Ict",
            merit: "GPA - 3.2",
            model: "/gltf/swinburne.gltf"
        },
        {
            name: "Swinburne University of Technology",
            degree: "Bachelore of Computer Science",
            merit: "GPA - 3.0",
            model: "/gltf/swinburne.gltf"
        },
        {
            name: "Telstra",
            degree: "Software Developer",
            merit: "2021 (Mar) - 2021 (Dec)",
            model: "/gltf/telstra.gltf"
        },
        {
            name: "Tru Recognition",
            degree: "Software Developer",
            merit: "2022 (Jan) - 2023 (Jul)",
            model: "/gltf/Tru.gltf"
        },
        {
            name: "Your company?",
            degree: "Software Developer",
            merit: "2024 (feb) - ??? (???))",
            model: "/gltf/question.gltf"
        },
    ]
    return (
        <section id="About" className="min-h-lvh bg-white text-black .OpenSans sm:p-24">
            <div className="justify-evenly text-center pb-32 mb-32 ">
                <h1 className="text-center text-3xl">Education</h1>
                <div className="flex justify-evenly flex-col lg:flex-row  text-center flex-grow">
                    {data.slice(0, 3).map((model, index) => (
                        <div className="flex flex-col justify-center p-8" key={index} style={{ flex: 1, alignItems: "center" }}>
                            <div style={{ position: 'relative', width: '100%', maxWidth: '300px', height: '250px' }}>
                                <Canvas style={{ width: '100%', height: '100%' }}>
                                    <ambientLight intensity={3} />
                                    <Item path={model.model} />
                                </Canvas>
                                <h2 className="text-2xl">{model.name}</h2>
                                <hr />
                                <p className="text-xl">{model.degree}</p>
                                <p className="text-xl">{model.merit}</p>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-center text-3xl">Work Experience</h1>
            <div className="flex justify-evenly flex-col lg:flex-row text-center">
                {data.slice(3, 6).map((model, index) => (
                    <div className="flex flex-col justify-center pb-24" key={index} style={{ flex: 1, alignItems: "center" }}>
                        <div style={{ position: 'relative', width: '100%', maxWidth: '300px', height: '300px' }}>
                            <Canvas style={{ width: '100%', height: '100%' }}>
                                <ambientLight intensity={3} />
                                <Item path={model.model} />
                            </Canvas>
                            <h2 className="text-2xl">{model.name}</h2>
                            <hr />
                            <p className="text-xl">{model.degree}</p>
                            <p className="text-xl">{model.merit}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default About
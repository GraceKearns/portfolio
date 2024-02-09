import { useState, useEffect, useRef } from "react";
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LinkedIn from '../img/LinkedIn.png';
import Github from '../img/github.png';
function Thing() {
    const ref = useRef();
    const backend = useLoader(GLTFLoader, '/gltf/duck.glb');

    const [animationFrame, setAnimationFrame] = useState(0);
    const [animationFinished, setAnimationFinished] = useState(false)
    // Ensure the GLTF objects are loaded before adjusting their properties
    useEffect(() => {

        if (ref.current && backend.scene) {
            backend.scene.scale.set(0.05, 0.05, 0.05);

            ref.current.add(backend.scene);
            backend.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material.transparent = true;
                    child.material.opacity = 0;
                }
            });


            if (!animationFinished) {
                backend.scene.position.set(0, 5.2, 1);

                backend.scene.rotation.set(0, 0, 0.1)

            }
            else if (animationFinished) {
                rotateObjects()
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [backend.scene, ref, animationFinished]);
    const rotateObjects = () => {
        if (ref.current && backend.scene) {
            // Add rotation logic here
            backend.scene.rotation.y += 0.005;


            setAnimationFrame(requestAnimationFrame(rotateObjects));
        }
    };
    // Animation function to fade in and move objects into position
    const fadeInAndMoveObjects = () => {
        if (ref.current && backend.scene) {
            const animationSpeed = 0.004; // Adjust as needed

            backend.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material.opacity += animationSpeed;
                }
            });



            if (backend.scene.position.y > -0.5) {
                backend.scene.position.y -= animationSpeed;

            }
            else {
                setAnimationFinished(true)
            }

            setAnimationFrame(requestAnimationFrame(fadeInAndMoveObjects));
        }
    };

    // Start the animation on mount
    useEffect(() => {
        setAnimationFrame(requestAnimationFrame(fadeInAndMoveObjects));
        return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fadeInAndMoveObjects]);

    return <group ref={ref} />;
}


const Nav = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const text = "Hello my name is Grace Kearns,\n and I am a Fullstack developer"
    useEffect(() => {
        let timeout;

        if (currentIndex <= text.length - 1) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 10);

        }
        return () => clearTimeout(timeout);
    }, [currentIndex, text]);
    return (
        <div>

            <nav className="bg-gray-900 text-white p-4 flex justify-center items-center">
                <div className="flex items-center justify-center h-full">
                    <ul className="flex text-md lg:text-2xl gap-12 lg:gap-24 text-center justify-between items-center">
                        <li><a href="#About" className="hover:text-gray-300">About</a></li>
                        <li><a href="#Skills" className="hover:text-gray-300">Skills</a></li>
                        <li><a href="#Projects" className="hover:text-gray-300">Projects</a></li>
                    </ul>
                </div>

    
            </nav>
            <header className="relative min-h-screen   flex flex-col lg:flex-row justify-center lg:justify-around OpenSans .OpenSans bg-slate-800 items-center p-8">
                <div className="flex lg:w-1/2 flex-col text-center lg:text-left text-white p-6 lg:p-8 mx-4 lg:mx-12">
                    <div>
                        <h1 className="text-4xl lg:text-5xl mx-2 lg:mx-8">{currentText}</h1>
                    </div>
                    <div className="flex mx-2 justify-center lg:justify-normal lg:mx-8">
                        <div>
                            <a href="https://www.linkedin.com/in/grace-kearns-69459b1b5/">
                                <img src={LinkedIn} alt="linkedIn" style={{ width: "80px", height: "80px" }} />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/GraceKearns">
                                <img src={Github} alt="Github" style={{ width: "80px", height: "80px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-2 w-full  lg:w-1/2 mx-4 lg:mx-24" style={{ flex: '1' }}>
                    <div style={{ position: 'relative', paddingBottom: '105%' }}>
                        <Canvas style={{ position: 'absolute', width: '100%', height: '100%' }}>
                            <ambientLight intensity={3} />
                            <Thing />
                        </Canvas>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Nav
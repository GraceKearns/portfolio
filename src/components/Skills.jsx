import HTML from '../img/html.png'
import CSS from '../img/css.png'
import Javascript from '../img/javascrit.png'
import Reacted from '../img/react.png'
import Nextjs from '../img/nextjs.png'
import Vue from '../img/vue.png'
import MaterialUI from '../img/materialui.png'
import Tailwind from '../img/tailwind.png'
import Node from '../img/node.png'
import NestJs from '../img/nestjs.png'
import Nginx from '../img/nginx.png'
import PHP from '../img/php.png'
import Swagger from '../img/swagger.png'
import Laravel from '../img/laravel.png'
import Mongodb from '../img/mongodb.png'
import RabbitMq from '../img/rabbitmq.png'
import Kafka from '../img/kafka.png'
import Couchbase from '../img/couchbase.png'
import PostgreSql from '../img/postgresql.png'
import mysql from '../img/sql.png'
import firebase from '../img/firebase.png'
import AndroidSDK from '../img/android sdk.png'
import AWS from '../img/aws.png'
import Azure from '../img/azure.png'
import Bitbucket from '../img/bitbucket.png'
import CSharp from '../img/csharp.png'
import C from '../img/c.png'
import Deepstream from '../img/nvidia deepstream.png'
import Docker from '../img/docker.png'
import Expo from '../img/expo.png'
import Flask from '../img/flask.png'
import Golang from '../img/golang.png'
import Java from '../img/java.png'
import Kotlin from '../img/kotlin.png'
import Lua from '../img/lua.png'
import Postman from '../img/postman.png'
import Python from '../img/python.png'
import ReactNative from '../img/react-native.png'
import RPGMaker from '../img/rpgmaker.png'
import SoapUI from '../img/soapui.png'
import TypeScript from '../img/typescript.png'
import Unity from '../img/unity.png'
import VMware from '../img/vmware.png'
import Wix from '../img/wix.png'
import WordPress from '../img/wordpress.png'
import { useState, useEffect, useRef } from "react"
const Skills = () => {
    const Items = {
        Frontend: [
            {
                name: "HTML",
                img: HTML,
            },
            {
                name: "CSS",
                img: CSS,
            },
            {
                name: "Javascript",
                img: Javascript,
            },
            {
                name: "React",
                img: Reacted,
            },
            {
                name: "NextJS",
                img: Nextjs,
            },
            {
                name: "Vue",
                img: Vue,
            },
            {
                name: "MaterialUI",
                img: MaterialUI,
            },
            {
                name: "Tailwind",
                img: Tailwind,
            },
        ],
        Backend: [
            {
                name: "Node",
                img: Node,
            },
            {
                name: "NestJS",
                img: NestJs,
            },
            {
                name: "PHP",
                img: PHP,
            },
            {
                name: "Swagger",
                img: Swagger,
            },
            {
                name: "Laravel",
                img: Laravel,
            },
        ],

        Database: [
            {
                name: "MongoDB",
                img: Mongodb,
            },
            {
                name: "RabbitMQ",
                img: RabbitMq,
            },
            {
                name: "Kafka",
                img: Kafka,
            },
            {
                name: "Couchbase",
                img: Couchbase,
            },
            {
                name: "PostgreSQL",
                img: PostgreSql,
            },
            {
                name: "Mysql",
                img: mysql,
            },
            {
                name: "Firebase",
                img: firebase,
            },
        ],

        Devops: [
            {
                name: "Azure",
                img: Azure,
            },
            {
                name: "AWS",
                img: AWS,
            },
            {
                name: "VMware",
                img: VMware,
            },
            {
                name: "Docker",
                img: Docker,
            },
            {
                name: "NGINX",
                img: Nginx,
            },
        ],

        Mobile: [
            {
                name: "React Native",
                img: ReactNative,
            },
            {
                name: "Java",
                img: Java,
            },
            {
                name: "Kotlin",
                img: Kotlin,
            },
            {
                name: "Unity",
                img: Unity,
            },
            {
                name: "Android SDK",
                img: AndroidSDK,
            },
        ],

        "Other tools": [
            {
                name: "Deepstream",
                img: Deepstream,
            },
            {
                name: "BitBucket",
                img: Bitbucket,
            },
            {
                name: "Postman",
                img: Postman,
            },
            {
                name: "Rpgmaker",
                img: RPGMaker,
            },
            {
                name: "Flask",
                img: Flask,
            },
            {
                name: "Expo",
                img: Expo,
            },
            {
                name: "Wordpress",
                img: WordPress,
            },
            {
                name: "Wix",
                img: Wix,
            },
            {
                name: "SoapUI",
                img: SoapUI,
            },
        ],

        Languages: [
            {
                name: "Html",
                img: HTML,
            },
            {
                name: "CSS",
                img: CSS,
            },
            {
                name: "Javascript",
                img: Javascript,
            },
            {
                name: "Typescript",
                img: TypeScript,
            },
            {
                name: "PHP",
                img: PHP,
            },
            {
                name: "Lua",
                img: Lua,
            },
            {
                name: "Python",
                img: Python,
            },
            {
                name: "Go",
                img: Golang,
            },
            {
                name: "C#",
                img: CSharp,
            },
            {
                name: "C",
                img: C,
            },
        ]
    }

    const skillsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    const rowColors = [
        'bg-red-200',
        'bg-blue-200',
        'bg-green-200',
        'bg-yellow-200',
        'bg-purple-200',
        'bg-indigo-200',
        'bg-pink-200'
        // Add more colors as needed
    ];
    return (
        <section id="Skills" ref={skillsRef} className={`min-h-screen bg-slate-800 text-white p-4 `}>
            <div className={`flex flex-col items-center`}>
                {Object.keys(Items).map((category, index) => (
                    <div className={`flex flex-col ${isVisible ? '' : 'hidden'} items-center justify-center lg:justify-end mb-8`} key={index}>
                        <div className='lg:text-xl text-4xl text-center lg:text-left mb-4 lg:mb-0 lg:mr-4'>
                            <h2 className='text-2xl'>{category}</h2>
                        </div>
                        <div className='flex flex-wrap justify-center lg:justify-end mx-4 lg:mx-2'>
                            {Items[category].map((item, idx) => (
                                <div key={idx} className={`flex w-24 h-24 ${rowColors[index % rowColors.length]}  text-black hover-container xl:w-36 xl:h-36 overflow-hidden flex-col opacity-0 rounded-full p-2 items-center m-2 animate-roll-and-fade`} style={{ animationDelay: `${idx * 0.3}s`}}>
                                    <p className='text-center'>{item.name}</p>
                                    <img src={item.img} height="40%" width="70%" alt={item.name} className="rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );

}
export default Skills
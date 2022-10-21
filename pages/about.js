import styles from '../styles/About.module.css'
import Head from 'next/head';
import Image from 'next/image';


export default function About() {
    return(
        <div>
            <h1>About Me</h1>
            <p>`Hi I am Elijah, Im a software engineer now`</p>


            {/* load an mage locally */}
            <Image
                src='/vercel.svg'
                alt='logo'
                width={300}
                height={300}
            />

            {/* load an image hosted on anothe domain */}
            <Image
                src='https://placekitten.com/400/500'
                alt='portflio cat'
                width={400}
                height={500}
            />

        </div>
    )
};
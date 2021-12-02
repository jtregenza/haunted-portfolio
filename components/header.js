import Head from 'next/head';
import { useEffect } from 'react';
import { Navbar } from "./navbar";


export const siteTitle = 'Josh Tregenza | Storyteller';

export default function Header() {
    //const router = useRouter();
    useEffect(() => {
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on('init', (user) => {
            if (!user) {
              window.netlifyIdentity.on('login', () => {
                document.location.href = '/admin/'
              })
            }
          })
        }
      }, [])
    return (
        
        <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="icon" href="/favicon/favicon.ico" />
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Monda:wght@400;700&display=swap" rel="stylesheet"/> 
            <meta
            name="description"
            content="Josh Tregenza"
            />
            <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
            siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
            
 
            <Navbar />
            </>
            
    )
}
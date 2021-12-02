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
            <Navbar />
            </>
            
    )
}
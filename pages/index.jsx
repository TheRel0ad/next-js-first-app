import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../comps/Navbar'

export default function Home() {
  return ( 
    <div className='content'>
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus quidem eos, fuga quas nulla inventore non, voluptates rem nihil debitis corrupti in ut vel officia laudantium, saepe at magni.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus quidem eos, fuga quas nulla inventore non, voluptates rem nihil debitis corrupti in ut vel officia laudantium, saepe at magni.</p>
      <Link href="/dalers">
        <a>See Daler listing</a>
      </Link>
    </div>
  )
}
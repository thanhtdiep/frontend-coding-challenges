import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Rating from '../components/Rating';
import Comment from '../components/Comment';
import React from 'react';
import Section from '../components/layout/Section'

export default function Home() {
  // Rating
  const [rating, setRating] = React.useState<number | null>(null)
  // Comment

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Coding Challenges</title>
        <meta name="description" content="My Solution for Frontend Coding Interview Challenges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-1 flex-col justify-center items-center my-[10rem]'>
        {/* Star Rating */}
        <Section
          numbering='1'
          heading='Star Rating'
          description='Create a star rating utility highlights on hover and selects to click'
        >
          <Rating value={rating} length={5} className='mt-[2rem]'
            onClick={(v) => setRating(v)} />
        </Section>
        {/* Comment Box */}
        <Section
          numbering='2'
          heading='Comment box'
          description='Develop an N level comment box'
        >
          <Comment className='' />
        </Section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Rating from '../components/Rating';
import Autocomplete from '../components/Autocomplete';
import Comment from '../components/Comment';
import React from 'react';
import Section from '../components/layout/Section'
import DATA from '../statics.json';

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
          <div className='flex flex-1 justify-center items-center'>
            <Rating value={rating} length={5} className='mt-[2rem]'
              onClick={(v) => setRating(v)} />
          </div>
        </Section>
        {/* Comment Box */}
        <Section
          numbering='2'
          heading='Comment box'
          description='Develop an N level comment box'
        >
          <Comment comment={DATA.comments} className='mt-[2rem]' />
        </Section>
        {/* Autocomplete/Typeadhead */}
        <Section
          numbering='3'
          heading='Autocomplete/Typeahead'
          childClassName='min-h-[15rem]'
          description='Design an auto suggestion input which shows suggestion on user input'
        >
          <div className='flex flex-col flex-1 max-h-[14rem] mt-[1rem]'>
            <Autocomplete suggestions={DATA.suggestions} />
          </div>
        </Section>
        {/* Todo List */}
        <Section
          numbering='4'
          heading='Todo List'
          description='Create a Todo list app to perform CRUD operations'
        >

        </Section>
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  )
}


import ReadMoreButton from '@/Components/ReadMoreButton';
import { formatDate } from '@/utils/formatDate';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react'



const Home = async() => {

  const response = await fetch(`${process.env.NEWS_API_BASE_URL}top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
  const {articles} = await response.json();
  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-5'>Top Headlines</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {
        articles?.map((news:any, index:number) => (
          <div key={index}
          className='bg-gray-800 p-4 mb-4 rounded-lg flex flex-col items-center justify-center '
          >
            <img src={news.urlToImage} className='h-40 w-80 hover:scale-105 transition-all transition' />
            <h2 className='mt-2 text-justify font-semibold text-sm text-indigo-300 line-clamp-2 '>{news.title}</h2>
            <p className='text-xs line-clamp-3 mt-4 text-justify font-extralight'>{news.description}</p>
            <div className='flex justify-between w-full items-center mt-4'>
              <ReadMoreButton id={news?.source?.id} />
            <p className='text-xs font-light text-gray-400'>
              {formatDate(news.publishedAt)}
            </p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Home

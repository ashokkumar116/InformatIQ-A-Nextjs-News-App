import React from 'react'

const page = ({params}:{params:React.ReactNode}) => {

    const {id}:number = params;

  return (
    <div>
      details page {id}
    </div>
  )
}

export default page

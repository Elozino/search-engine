import React from 'react'
import { Puff } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      {/* <Loader type="Puff" color="#00bfff" height={550} width={80} /> */}
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loading
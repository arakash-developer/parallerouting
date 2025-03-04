import React from 'react'
import Layout from './Layout'

const loading = () => {
  let data = true;
  return (
    <>
    <Layout Load={data} />
    </>
  )
}

export default loading

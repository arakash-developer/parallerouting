import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Interceptor</h2>
      <p className="text-gray-600">
        You can intercept the routes here.
      </p>
      <div className="flex items-center mt-4">
        <Link href="/interceptor/folder1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to folder1
        </Link>
      </div>
    </div>
  )
}

export default page
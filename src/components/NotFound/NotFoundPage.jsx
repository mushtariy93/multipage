import React from 'react'

const NotFoundPage = () => {
  return (
    <section className="h-[900px]  container  flex justify-center items-center flex-col gap-4 bg-auto bg-no-repeat bg-center bg-[url('https://storage.googleapis.com/pod_public/1300/151089.jpg')]">
      <h2 className="text-5xl font-bold text-red-500">This route not found</h2>
      <p className="text-4xl font-medium">404</p>
    </section>
  );
}

export default NotFoundPage

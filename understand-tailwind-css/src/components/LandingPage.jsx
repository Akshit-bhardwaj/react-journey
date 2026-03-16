const LandingPage = () => {
  return (
    <>
    <nav className="bg-blue-500 p-5 flex justify-evenly sticky top-0" >
        <h1>Home</h1>
        <h1>About us</h1>
        <h1>Contact</h1>
        <h1>Login</h1>
    </nav>
      <div className="bg-black h-screen w-screen flex">
        <div className="h-full w-6/12 bg-black text-white flex flex-col justify-center">
          <h1 className="font-bold text-6xl mx-10 my-20">
            Learn from the
            <div className="text-green-500">coolest coding platform</div>in India.
            </h1>
          <button className="bg-blue-600 rounded-xl p-3 mx-20 font-bold hover:bg-gray-600 ">Explore more</button>
        </div>
        <div className="h-full w-6/12 bg-green-200">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1602010997530-092d52fa3ba6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDE3fHx8ZW58MHx8fHx8D"
            alt="Human image"
            srcset=""
          />
          </div>
      </div>
    </>
  );
};

export default LandingPage;

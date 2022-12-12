
import ecommerce from "../assets/ecommerce.jpg"
import foodDelivery from "../assets/food-delivery.jpg"
import vawulens from "../assets/vawulens.jpg"
import crypto from "../assets/crypto.jpg"
import delivery from "../assets/delivery.jpg"
import travel from "../assets/travel.jpg"
import nike from "../assets/nikeec.jpg"
import realtor from "../assets/realtor.jpg"
import dashboard from "../assets/dashboard.jpg"
import ecom from "../assets/ecom.jpg"

const Work = () => {
  return (
    <div id="work" className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 '>Work</p>
          <p className='py-6 hover:text-[#61dafb]'>/ / Check out some of my recent work</p>
        </div>

        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
         
           {/*} <img src={WorkImg} alt="work" className="shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto hover:scale-700"/>*/}


          {/**grid */}
          <div 
            style={{backgroundImage:`url(${ecommerce})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-md font-bold text-white tracking-wider">
                React/Redux E-commerce 
              </span>
              <div className="pt-8 text-center">
                <a href="https://ecommerce-annaierchenko.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/ecommerce">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>

        {/**grid */}
          <div 
            style={{backgroundImage:`url(${foodDelivery})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-xl font-bold text-white tracking-wider">
                React Delivery Food
              </span>
              <div className="pt-8 text-center">
                <a href="https://delivery-food-git-main-annaierchenko.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/delivery-food">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>
           {/**grid */}
   
          <div 
            style={{backgroundImage:`url(${realtor})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-md font-bold text-white tracking-wider">
              Realtor app with firebase (login, add advertisement)
              </span>
              <div className="pt-8 text-center">
                <a href="http://realtor-psi-mocha.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/realtor">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>
           {/**grid */}
   
          <div 
            style={{backgroundImage:`url(${ecom})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-md font-bold text-white tracking-wider">
              React/redux-toolkit ecommerce (firebase login)
              </span>
              <div className="pt-8 text-center">
                <a href="https://commerce-firebase-annaierchenko.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/commerce-firebase">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>


          <div 
            style={{backgroundImage:`url(${crypto})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-md font-bold text-white tracking-wider">
               React(with API)
               Check cryptocurrency in real time
              </span>
              <div className="pt-8 text-center">
                <a href="https://cryptocurrency-annaierchenko.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/cryptocurrency">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>
          {/**grid */}
          <div 
            style={{backgroundImage:`url(${dashboard})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-md font-bold text-white tracking-wider">
                React Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://dashboard-mui-theta.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/dashboard-mui">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>
          {/**grid */}
          <div 
            style={{backgroundImage:`url(${nike})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-md font-bold text-white tracking-wider">
                React store
              </span>
              <div className="pt-8 text-center">
                <a href="http://nike-store-ecommerce.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/nike-store-ecommerce">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>

          {/**grid */}
          <div 
            style={{backgroundImage:`url(${vawulens})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-md font-bold text-white tracking-wider">
                React Fitness website
              </span>
              <div className="pt-8 text-center">
                <a href="https://vawulens-annaierchenko.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/vawulens">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>

            {/**grid */}
          <div 
            style={{backgroundImage:`url(${delivery})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div'>
            {/**hover effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="text-md font-bold text-white tracking-wider ">
                React App Delivery (firebase login)
              </span>
              <div className="pt-8 text-center">
                <a href="https://delivery-78d1b.web.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AnnaIerchenko/delivery">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white
                  text-gray-700 font-bold text-lg hover:bg-[#aaaaaa] hover:transition hover:duration-150 hover:scale-[0.9]">
                    Code
                  </button>
                </a>
             </div>
            </div>
          </div>
  
   


        </div>
      </div>
    </div>
  )
}

export default Work
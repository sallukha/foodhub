import './Footer.css'
const Footer = () => {
  return (
    <div className="w-full h-[100vh]    py-8 flex flex-col lg:flex-row gap-5 mt-5 ">
      <div className="h-full w-2/3 bg-black hero rounded-lg ">
       
      </div>
      <div className="h-full w-1/3    flex gap-3 flex-col">
           <div className="w-full h-1/2 bg-orange-500 hero1 rounded-lg">
                 
           </div>
           <div className="w-full h-1/2  bg-orange-500 hero2 rounded-lg">

           </div>
      </div>
    </div>
  );
};

export default Footer;

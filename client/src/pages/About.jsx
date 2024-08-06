import PrashantImage from "../assets/Prashant.jpg";
import AnkitImage from "../assets/Ankit.jpg";
import KritanImage from "../assets/Kritan.jpg";
import RohanImage from "../assets/Rohan.jpeg";
const About = () => {
  const founders = [
    {
      id: 1,
      name: "Prashant Pokhrel",
      title: "UI/UX Engineer",
      image: PrashantImage,
    },
    { name: "Ankit Gyawali", id: 2, title: "Data Engineer", image: AnkitImage },
    {
      name: "Kritan Aryal",
      id: 3,
      title: "Network & Security Engineer",
      image: KritanImage,
    },
    {
      name: "Rohan Nepal",
      id: 4,
      title: "Software Engineer",
      image: RohanImage,
    },
  ];
  return (
    <div className="mt-28 flex flex-col gap-5 p-5 ">
      <div>
        <h1 className="text-2xl font-bold text-green-600 text-center mb-3">
          About Art Sewa
        </h1>
        <p className="text-gray-500 text-medium  sm:text-lg text-justify">
        Welcome to The Art Sewa, your ultimate destination for discovering and acquiring unique art pieces. Our platform connects talented artists with art enthusiasts, offering a diverse range of artworks, including clay sculptures, digital masterpieces, paper crafts, and stunning paintings. Whether you're an artist looking to showcase and sell your creations or an art lover seeking to enrich your collection, The Art Sewa provides a seamless and inspiring experience. Our mission is to celebrate creativity and foster a vibrant community where art in all its forms can be appreciated and shared. Join us in bringing the beauty of art to life, one masterpiece at a time.
        </p>
      </div>
      {/* founders */}
      <div className="flex flex-col bg-white">
      <span className="text-2xl  text-center font-bold text-green-600  mt-4">Founders</span>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4  p-5 gap-10 items-center mb-3 mx-auto bg-white ">
        {founders?.map((founder) => {
          return (
            <>
              <div
                key={founder.id}
                className="shadow-md hover:scale-100 shadow-gray-800 mt-4 bg-gray-200 h-56 w-72 rounded-lg p-3 flex flex-col items-center justify-center"
              >
                <div className="h-30 w-36 rounded-[50%]  overflow-hidden">
                  <img
                    src={founder.image}
                    alt={`${founder.name}'s profile image`}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="font-semibold text-green-600  text-center">
                    {founder.name}
                  </h2>
                  <p className="font-medium text-gray-700 text-center">{founder.title}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default About;

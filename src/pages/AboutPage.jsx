import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function AboutPage() {
    return (
        <div className='no-scrollbar'>
            <div className="flex flex-col md:flex-row items-center w-screen h-auto bg-white mb-8 p-8 md:p-16">
                <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src="/about.jpg"
                        alt="About Us"
                        className="w-full max-w-xs md:max-w-md rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 text-left flex flex-col justify-center md:justify-evenly mt-8 md:mt-0">
                    <h1 className="text-3xl md:text-5xl text-[#6A9C89] mb-10 md:mb-20 font-black">
                        ABOUT US
                    </h1>
                    <p className="text-sm md:text-md text-gray-600 mb-6 md:mb-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ullam, eum sed quibusdam neque sit temporibus impedit eligendi animi harum pariatur. Odit, minus debitis, sit alias ratione soluta fugit omnis tempora ex, nostrum nisi dolore? Consequuntur esse minus iusto officia illum commodi nisi iure veniam, dolores accusamus accusantium impedit sapiente sunt consequatur in. Quibusdam, ab. Dolores cupiditate doloremque dolorum eligendi blanditiis hic neque eveniet architecto, aliquam ex veritatis et tempora.
                    </p>
                    <Link to={'/support'}>
                        <button className="px-6 py-3 text-lg font-extrabold text-white bg-[#6A9C89] hover:bg-[#16423C] mt-8 md:mt-20 rounded-3xl">
                            CONTACT NOW!
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

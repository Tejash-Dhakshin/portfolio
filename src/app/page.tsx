import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I am <br /><span className="text-accent">Tejash Dhakshin S</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I consider myself as a organized and disciplined
              person. I am dedicated to my work and I am a
              team player. I perform my best when i work with
              my teammates. I have knowledge about the
              industries through my internship At Priga
              solutions. I am the team leader of our team .
            </p>
            <div className=" flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className=" uppercase flex items-center gap-2">
                <span >Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className=" mb-8 xl:mb-8">
                <Social containerStyle=" flex gap-6" iconStyles=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home
import Image from "next/image";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Mahesa Fadhillah Andre - Profile</title>
      </Head>
      <main className="bg-gray-900 min-h-screen p-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <Image 
            src="/photo.jpg" 
            alt="Mahesa Fadhillah Andre"
            width={300}
            height={300}
            className="rounded-3xl mx-auto shadow-lg transform hover:scale-110 transition-transform duration-500 ease-in-out"
          />
          <div className="p-7 rounded-lg shadow-lg mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold mt-6 text-teal-200">
              Mahesa Fadhillah Andre
            </h1>
            <p className="text-gray-200 space-y-2 mt-2">
              Student at Institut Teknologi Bandung. I take interest in software engineering and data science. I also like tennis and golfing.
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <section className="flex items-center justify-center mb-12">
          <div className="flex-shrink-0 mr-8">
            <Image
              src="/fam.jpg"
              alt="fam"
              width={300}
              height={300}
              className="rounded-3xl shadow-lg transform hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="p-7 flex-1 rounded-lg shadow-lg text-gray-200 flex flex-col justify-between">
            <h2 className="text-3xl font-semibold text-teal-200">About Me</h2>
            <div className="flex-grow flex items-center">
              <p className="text-md mt-3 ml-4 font-small text-justify">
                My name is Mahesa. I was born on 2 August 2005 in Jakarta. I am the oldest of 2. I've spent most of my life in Jakarta. I live with my parents and also grandparents. My hobbies are golfing, tennis, jogging, working out, listening to music, journaling, reading, and basketball. I enjoy a lot of sports because my dad introduced me to a bunch of sports since I was a kid. I also like to play video games, watch movies, but mostly I enjoy spending time with people. I may seem like the person to be introverted, and even though I am, I like having social interactions.
              </p>
            </div>
            <div>
              <p className="text-md mt-3 ml-4 font-small text-justify">
                My overarching goal is to be a successful entrepreneur. I believe having your own business is better than being an employee at a company. In your own business you don't work for anyone but for yourself. So in order for me to reach my goal, I have participated in activities that give me the opportunity to learn the skills I need. I have been participating in activities related to software engineering, finance, marketing and branding, and sales.
              </p>
              <p className="text-md mt-3 ml-4 font-small text-justify">
                In the coming weeks or maybe months, I have a short-term goal, which is to join HMIF ITB as a member. I aim to network with the people in HMIF ITB and have a position in their ranks. I want to learn how to lead, become a proper software engineer, and how to sharpen my problem-solving skills.
              </p>
            </div>
          </div>
        </section>

        {/* Sections in Row */}
        <section className="flex mb-12 space-x-8">
          {/* Interests Section */}
          <div className="flex-1 p-7 bg-gray-800 rounded-lg shadow-lg text-gray-200">
            <h2 className="text-3xl font-semibold text-teal-200">Interests</h2>
            <ul className="text-lg font-medium list-disc list-inside ml-4 mt-4 text-gray-200 space-y-2">
              <li>Software Engineering</li>
              <li>Data Science</li>
              <li>Entrepreneurship</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="flex-1 p-7 bg-gray-800 rounded-lg shadow-lg text-gray-200">
            <h2 className="text-3xl font-semibold text-teal-200">Skills</h2>
            <ul className="text-lg font-medium list-disc list-inside ml-4 mt-4 text-gray-200 space-y-2">
              <li>Programming Languages: Python, HTML, Haskell</li>
              <li>Video Editing: Capcut, iMovie</li>
              <li>Marketing and Branding</li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="flex-1 p-7 bg-gray-800 rounded-lg shadow-lg text-gray-200">
            <h2 className="text-3xl font-semibold text-teal-200">Experience</h2>
            <ul className="text-lg font-medium list-disc list-inside ml-4 mt-4 text-gray-200 space-y-2">
              <li>Creative Marketing Associate in TEC Festival 2024</li>
              <li>Finance Staff in Badan Pengurus Angkatan STEI-K 2023</li>
              <li>Member in Techno Entrepreneur Club ITB</li>
              <li>Coordinator of Extracurricular Supervision Commission in MPK SMAS Islam Al-Azhar 1</li>
            </ul>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12 p-7 rounded-lg shadow-lg text-gray-200">
          <h2 className="text-3xl font-semibold text-teal-200">Achievements</h2>
          <p className="text-lg mt-2 ml-4 font-medium text-gray-200 text-justify">
            In 2023 I was accepted by all the top 3 universities. I was accepted into Bandung Institute of Technology. I was also accepted into the University of Indonesia and Gadjah Mada University. Besides those achievements I have mentioned, I haven't been active in competitions and other similar activities.
          </p>
        </section>

        {/* Contact Section */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-semibold text-teal-200">Contact</h2>
          <div className="text-md font-semibold">
            <p className="mt-2">Email me at <a href="mailto:mahesa0208@gmail.com" className="text-blue-500">mahesa0208@gmail.com</a></p>
            <p className="mt-2">Visit my <a href="https://id.linkedin.com/in/mahesa-andre-2696002b8" className="text-blue-500">LinkedIn</a></p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;

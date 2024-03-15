import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-5 pt-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        <p className="text-xl mt-10">
        Seeking a challenging career with a progressive Organization that
provides an opportunity to capitalize my technical skills & abilities
of Engineering and Marketing in the fields.A result_oriented professional with 4 years experience in mobile
application development & enchancement.
        </p>
      </div>
    </div>
  );
};

export default About;

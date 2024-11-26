import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Flutter Intern',
    company: 'Bibaabo',
    location: 'Kathmandu, Nepal',
    period: 'Jan,2024 - July,2024',
    description: [
      'Developed and maintained the mobile app using Flutter',
      'Implemented new features and fixed bugs reported by users',
      'Collaborated with the design team to create a seamless user experience'
    ]
  },
  {
    title: 'UI/UX Designer',
    company: 'Bib',
    location: 'Menlo Park, CA',
    period: '2019 - 2021',
    description: [
      'Developed and maintained critical features for the main Facebook app',
      'Reduced load time by 60% through performance optimizations',
      'Collaborated with designers to implement pixel-perfect UI components'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Amazon',
    location: 'Seattle, WA',
    period: '2017 - 2019',
    description: [
      'Built and maintained e-commerce features serving millions of users',
      'Implemented automated testing that reduced bugs by 35%',
      'Contributed to internal developer tools and documentation'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over the years, I've had the privilege to work with some amazing companies and talented people.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'
                } md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-purple-600">{experience.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
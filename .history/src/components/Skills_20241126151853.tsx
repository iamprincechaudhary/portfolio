import { Code2, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SASS']
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Java', 'Express', 'Spring Boot', 'Django', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Kotlin', 'Swift']
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision']
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase']
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in a wide range of technologies and tools, constantly learning and adapting to new challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Github, Linkedin, Twitter, Send, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

export default function Hero() {
  const styles = useSpring({
    from: { transform: 'translate3d(0,100px,0)', opacity: 0 },
    to: { transform: 'translate3d(0,0,0)', opacity: 1 },
    delay: 300,
  });

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-dark-bg">
      <div className="absolute inset-0 bg-network-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <animated.div style={styles}>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi There,
            <br />
            I'm Jigar <span className="text-orange-500">Sable</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I Am Into <span className="text-red-800 dark:text-red-400">Web Develop</span>
          </motion.p>
          <motion.a
            href="#about"
            className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.a>

          <div className="flex space-x-4">
            {[Github, Linkedin, Twitter, Send, Instagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-2 bg-black dark:bg-gray-800 rounded-full text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </animated.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-[400px] h-[400px] bg-yellow-400 rounded-full overflow-hidden mx-auto animate-float">
            <img
              src="https://raw.githubusercontent.com/jigar-sable/Portfolio-Website/master/assets/images/hero.png"
              alt="Profile Avatar"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
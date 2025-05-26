import Link from 'next/link';
import { FiGithub, FiExternalLink, FiClock, FiCheckCircle, FiTrendingUp, FiBarChart2, FiDollarSign, FiSliders, FiPieChart, FiBriefcase } from 'react-icons/fi';

const Projects = () => {
  const projects = {
    ongoing: [
      {
        id: 2,
        title: "Comparing ML Models for Stock Price Prediction",
        description: "Evaluating Decision Trees, Random Forests, and Linear Regression for stock forecasting using MSE, RMSE, and R-squared metrics.",
        tags: ["Python", "Scikit-learn", "XGBoost", "TensorFlow"],
        github: "#",
        live: "#",
        status: "ongoing",
        icon: <FiBarChart2 className="text-accent" />,
        year: "2025"
      },
      {
        id: 3,
        title: "Modeling Stock Price Volatility",
        description: "Implementing and comparing ARCH, GARCH, and EWMA models to analyze volatility clustering in different market conditions.",
        tags: ["Python", "ARCH", "NumPy", "Matplotlib"],
        github: "#",
        live: "#",
        status: "ongoing",
        icon: <FiDollarSign className="text-accent" />,
        year: "2025"
      },
      {
        id: 4,
        title: "Pricing Financial Options using Mathematical Models",
        description: "Implementing Black-Scholes, Binomial Tree, and Monte Carlo models for option pricing with sensitivity analysis.",
        tags: ["Python", "QuantLib", "NumPy", "SciPy"],
        github: "#",
        live: "#",
        status: "ongoing",
        icon: <FiSliders className="text-accent" />,
        year: "2025"
      }
    ],
    completed: [
      {
        id: 1,
        title: "Predictive Analytics of Stock Prices using Linear Regression",
        description: "Applying linear regression to predict stock prices with thorough diagnostic checks for multicollinearity, homoskedasticity, normality of residuals, autocorrelation, and linearity.",
        tags: ["Python", "StatsModels", "Scikit-learn", "Pandas"],
        github: "#",
        live: "#",
        status: "completed",
        icon: <FiTrendingUp className="text-accent" />,
        year: "2025"
      },
      {
        id: 5,
        title: "Investment Portfolio Analysis",
        description: "Portfolio construction and risk assessment using Alpha, Beta, Sharpe Ratio, VaR, and Expected Shortfall metrics.",
        tags: ["Python", "Pandas", "Riskfolio-Lib", "Plotly"],
        github: "#",
        live: "#",
        status: "completed",
        icon: <FiPieChart className="text-accent" />,
        year: "2025"
      },
      {
        id: 6,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with modern web technologies.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/sneakytyper/sourav_portfolio",
        live: "https://sourav-portfolio-five.vercel.app/",
        status: "completed",
        icon: <FiBriefcase className="text-accent" />,
        year: "2025"
      }
    ]
  };

  return (
    <section className="py-12 px-[--container-padding] bg-primary">
      <div className={`mx-auto ${process.env.NODE_ENV === 'development' ? 'debug-screens' : ''} max-w-[90rem]`}>
        <div className="mb-12">
          <p className="text-xl text-gray-300 max-w-5xl mx-auto">
            These are some of my projects, which I have been working till now. Projects are majorly based on Quant Finance, ML and mathematical models and their implementation.
          </p>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 w-full">
            <FiClock className="text-2xl text-accent" />
            <h2 className="text-2xl font-semibold text-white">Ongoing Projects</h2>
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="px-4 py-2 bg-gray-800 text-accent rounded-full text-sm font-mono">
              {projects.ongoing.length} Projects in progress
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.ongoing.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div>
          <div className="flex items-center gap-4 mb-10 w-full">
            <FiCheckCircle className="text-2xl text-green-400" />
            <h2 className="text-2xl font-semibold text-white">Completed Projects</h2>
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm font-mono">
              {projects.completed.length} Projects Completed
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.completed.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#232329] rounded-xl overflow-hidden border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 w-full h-full flex flex-col">
      <div className="p-6 flex-grow">
        {/* Year placed above title */}
        <div className="flex justify-between items-start mb-1">
          <span className="text-accent text-md font-mono">{project.year}</span>
          {project.status === "ongoing" ? (
            <span className="flex items-center gap-1 px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Ongoing
            </span>
          ) : (
            <span className="flex items-center gap-1 px-3 py-1 text-xs bg-green-400/10 text-green-400 rounded-full">
              <FiCheckCircle className="text-green-400" size={12} />
              Completed
            </span>
          )}
        </div>

        <Link href={project.github || "#"} passHref>
          <h3 className="text-xl font-semibold text-white cursor-pointer flex items-start gap-3 mb-5 group-hover:text-accent">
            {project.icon && <span className="mt-1">{project.icon}</span>}
            <span>{project.title}</span>
          </h3>
        </Link>
        
        <p className="text-gray-400 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <div className="flex gap-4 pt-4 border-t border-gray-700">
          {project.github && (
            <Link 
              href={project.github} 
              className="px-4 py-2 bg-white/5 hover:bg-accent text-gray-300 hover:text-[#1c1c22] rounded-md transition-colors flex items-center gap-2 text-sm"
              title="View Research Code"
            >
              <FiGithub size={16} />
              <span>Code Repository</span>
            </Link>
          )}
          {project.live && (
            <Link 
              href={project.live} 
              className="px-4 py-2 bg-white/5 hover:bg-green-400 text-gray-300 hover:text-[#1c1c22] rounded-md transition-colors flex items-center gap-2 text-sm"
              title="View Live Analysis"
            >
              <FiExternalLink size={16} />
              <span>Live Results</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
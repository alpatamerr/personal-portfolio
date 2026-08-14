export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              I'm an AI Product Engineer at an early-stage startup in London, building LLM-powered
              recruiting workflows in Python, TypeScript, and React. Before that, I shipped data
              pipelines and customer-facing features as a software engineer at a US legal-tech
              company, and completed an MSc in Computer Science at the University of Birmingham.
            </p>

            <p className="mb-6">
              I specialize in turning complex workflows into reliable products — most recently a
              live crisis-response prototype on Palantir Foundry that gives operations teams
              real-time situational awareness across a city. My background across software
              engineering, data analysis, and international relations helps me bridge technical and
              non-technical stakeholders.
            </p>

            <p>
              Based in Greater London, I hold a valid UK work permit and enjoy building practical AI
              products that people actually use.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

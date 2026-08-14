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
              MSc Computer Science graduate and AI Product Engineer at an early-stage startup,
              building LLM-powered recruiting workflows in Python, TypeScript, and React. Previously
              shipped data pipelines and customer-facing features as a US legal-tech company software
              engineer.
            </p>

            <p className="mb-6">
              I specialize in turning complex workflows into reliable products with Python, FastAPI,
              React, PostgreSQL, LLM APIs, vector search, real-time integrations, and data pipelines.
              My background across software engineering, data analysis, and international relations
              helps me bridge technical and non-technical stakeholders.
            </p>

            <p>
              Based in Greater London, I hold a valid UK work permit and enjoy building practical AI
              products that create measurable value for their users.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

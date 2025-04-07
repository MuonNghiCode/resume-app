const ExperienceSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Experience</h2>
      <div className="mb-6">
        <h3 className="font-bold text-xl">Front-End Developer Intern</h3>
        <p className="text-sm text-gray-600">
          FPT Software | Jan 2025 - Mar 2025
        </p>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3">
          <li>
            Collaborated with a team to develop responsive web applications
            using React.js and TypeScript.
          </li>
          <li>
            Optimized UI components for better performance and accessibility.
          </li>
          <li>
            Gained hands-on experience with Agile methodologies and version
            control systems like Git.
          </li>
          <li>
            Contributed to debugging and resolving front-end issues in live
            projects.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;

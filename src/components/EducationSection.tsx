const EducationSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Education</h2>
      <div>
        <h3 className="font-bold text-xl">Responsive Web Design</h3>
        <p className="text-sm text-gray-600">freeCodeCamp | Earned 2024</p>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3">
          <li>
            Completed coursework covering HTML, CSS, and responsive design
            principles.
          </li>
          <li>
            Built multiple projects to demonstrate proficiency in creating
            responsive and accessible web layouts.
          </li>
        </ul>
        <a
          href="https://www.freecodecamp.org/certification/fcc94b44b33-3ff8-4c08-b494-f7e88b1f2a5d/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-base mt-4 inline-block"
        >
          View Certification
        </a>
      </div>
    </section>
  );
};

export default EducationSection;

const SkillsSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Skills</h2>
      <div>
        <h3 className="font-bold text-xl">Soft Skills</h3>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3">
          <li>Excellent communication and public speaking skills.</li>
          <li>Strong teamwork and collaboration abilities.</li>
          <li>Adaptability and problem-solving mindset.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="font-bold text-xl">Hard Skills</h3>
        <ul className="list-disc pl-5 mt-4 text-base text-gray-700 space-y-3">
          <li>Proficient in HTML, CSS, JavaScript, and TypeScript.</li>
          <li>Experienced with React.js and modern front-end frameworks.</li>
          <li>
            Knowledge of responsive design and cross-browser compatibility.
          </li>
          <li>Familiar with version control systems like Git.</li>
          <li>Basic understanding of Agile methodologies and workflows.</li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;

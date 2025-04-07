import { Phone, Mail, Facebook, Github } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="space-y-6">
      <p className="text-base text-gray-700 leading-relaxed">
        Passionate front-end developer with a focus on creating responsive,
        user-friendly, and visually appealing web applications. Skilled in
        modern web technologies and committed to delivering high-quality code.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Phone size={24} className="text-blue-500" />
          <a href="tel:0375727245" className="text-blue-600 hover:underline">
            0375727245
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={24} className="text-blue-500" />
          <a
            href="mailto:minhquanpm1610@gmail.com"
            className="text-blue-600 hover:underline"
          >
            minhquanpm1610@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Facebook size={24} className="text-blue-500" />
          <a
            href="https://www.facebook.com/minhqquan.pham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Minh Quân
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Github size={24} className="text-blue-500" />
          <a
            href="https://github.com/MuonNghiCode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            MuonNghiCode
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

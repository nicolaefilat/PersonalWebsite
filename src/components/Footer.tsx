
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import personalData from '@config/personal.yaml';

import siteData from '@config/site.yaml';

interface SiteConfig {
  footerText: string;
}

interface PersonalInfo {
  name: string;
  email: string;
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    name: string;
    url: string;
  };
}

const Footer = () => {
  const personal: PersonalInfo = personalData as PersonalInfo;
  const siteConfig: SiteConfig = siteData as SiteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            {siteConfig.footerText.replace('{year}', year.toString())}
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href={personal.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

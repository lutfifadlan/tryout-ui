import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Showcase your competences"
    description="A platform for evaluating and improving the skills of software engineers. Our platform is designed to help software engineers showcase their skills and capabilities, and to provide companies with the tools and insights they need to identify, hire, and retain top talent"
  >
    <VerticalFeatureRow
      title="Customized technical assessments"
      description="With Tryout, software engineers can take customized technical assessments that measure their knowledge of programming languages, algorithms and data structures, and software development best practices. Our evaluators provide detailed feedback and coaching to help engineers improve their skills and advance their careers"
      image="/assets/images/monitor.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Enhance your professional development"
      description="Our skills evaluation platform is designed specifically for software engineers and offers a variety of questions that cover a wide range of programming languages and technologies. Our comprehensive evaluations are tailored to your skill level and will help you identify areas of strength and opportunities for growth"
      image="/assets/images/growth.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Keep best practices up-to-date"
      description="Our evaluations are using the latest best practices and industry standards"
      image="/assets/images/industry.svg"
      imageAlt="Second feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

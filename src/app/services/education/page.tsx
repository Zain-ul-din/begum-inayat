import MarkdownPage from "@/components/markdown-page";

const content = `
# Education: Empowering Young Minds

At Begum Inayat Welfare Society, we believe that education is the key to breaking the cycle of poverty and opening the door to endless opportunities. Our mission is to empower every child under our care with quality education, helping them to reach their full potential.

## How We Help

- **Access to Quality Education**: We provide comprehensive educational programs that cater to each child’s unique needs. From primary education to college preparatory courses, we ensure that our children have access to the best learning resources and opportunities.
  
- **Tutoring and Mentorship**: Our dedicated staff and volunteers offer tutoring and mentoring, helping students to excel in their studies and build confidence. We focus on nurturing a love for learning and encouraging curiosity.

- **Scholarship Programs**: For those who show exceptional promise, we provide scholarships to help them pursue higher education. We are proud to support students who have gone on to attend university, breaking barriers and setting an example for others.

- **Extracurricular Activities**: Education goes beyond the classroom. We offer various extracurricular activities, including sports, arts, and technology programs, to help children develop a wide range of skills and interests.
`;

// pages/education.js
export default function Education() {
  return <MarkdownPage>{content}</MarkdownPage>;
}

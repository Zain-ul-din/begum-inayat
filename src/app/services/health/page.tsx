import MarkdownPage from "@/components/markdown-page";

const content = `
# Health: Nurturing Well-Being

The well-being of our children is our top priority. At Begum Inayat Welfare Society, we understand that a healthy body is essential for a thriving mind and spirit. We are committed to providing comprehensive healthcare and nutrition, ensuring that every child grows up strong and healthy.

## How We Help

- **Medical Care**: Regular health check-ups and medical care are provided to all children. We have partnerships with healthcare professionals who ensure that our children receive the best possible care.
  
- **Nutritious Meals**: A balanced diet is vital for growing children. We provide nutritious meals that cater to the dietary needs of our children, ensuring they have the energy and vitality needed to learn and play.

- **Health Education**: We educate our children about the importance of hygiene, nutrition, and overall health. Knowledge is power, and we empower our children to take care of their bodies and make healthy choices.

- **Mental Health Support**: Recognizing the importance of mental health, we offer counseling and support services to help children cope with any emotional or psychological challenges they may face.
`;

// pages/health.js
export default function Health() {
  return <MarkdownPage>{content}</MarkdownPage>;
}

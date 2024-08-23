import MarkdownPage from "@/components/markdown-page";

const content = `
# Emotional Support: Healing Hearts

The journey of life can be challenging, especially for children who have faced loss and hardship. At Begum Inayat Welfare Society, we are dedicated to providing emotional support to help our children heal, grow, and build resilience.

## How We Help

- **Counseling Services**: We provide professional counseling to help children process their emotions and experiences. Our counselors are trained to offer compassionate support, helping children to heal from trauma and develop a positive outlook on life.
  
- **Safe and Loving Environment**: Creating a sense of family and belonging is at the heart of what we do. Our orphanage is a safe haven where children feel loved, valued, and supported. We foster a warm and nurturing environment that helps children to thrive.

- **Support Groups**: We organize support groups where children can share their feelings and experiences with their peers. These groups offer a sense of community and understanding, helping children to know they are not alone in their journey.

- **Personal Development Programs**: We focus on building self-esteem, confidence, and resilience through personal development programs. Children are encouraged to explore their interests, develop their talents, and pursue their dreams.
`;

// pages/emotion.js
export default function Emotion() {
  return <MarkdownPage>{content}</MarkdownPage>;
}

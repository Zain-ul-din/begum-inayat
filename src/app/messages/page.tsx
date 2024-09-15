import VolunteerMessage from "@/components/volunteer-message";
import { gqlEndPoint, gqlHeaders } from "@/lib/gql-client";
import MessagesQueryRes from "@/types/messages-query";

const query = `
  query GetMessages {
    messagesCollection {
      items {
        message {
          json
        }
        role
        author
        postedAt
        _id
        picture {
          url
        }
        order
      }
    }
  }
`;

export default async function Messages() {
  const res = await fetch(gqlEndPoint, {
    method: "POST",
    body: JSON.stringify({
      query
    }),
    headers: {
      ...gqlHeaders,
      "Content-Type": "application/json"
    },
    next: { revalidate: 60 }
  });
  const messages = (await res.json()) as MessagesQueryRes;

  return (
    <div className="max-w-screen-xl mx-auto mt-12 p-2 sm:p-4 relative grid md:grid-cols-2 gap-6">
      {messages.data.messagesCollection.items.map((msg, i) => {
        return <VolunteerMessage key={i} message={msg} />;
      })}
    </div>
  );
}

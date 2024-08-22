import VolunteerMessage from "@/components/volunteer-message";

export default function Messages() {
  return (
    <div className="max-w-screen-xl mx-auto mt-12 p-2 sm:p-4 relative grid md:grid-cols-2 gap-6">
      <VolunteerMessage />
      <VolunteerMessage />
    </div>
  );
}

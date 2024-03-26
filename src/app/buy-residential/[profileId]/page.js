
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";

async function profileDetails({ params: { profileId } }) {
  try {
    await connectDB();
    const profile = await Profile.findOne({ _id: profileId });

    if (!profile) {
      return <h3>connection have problem</h3>;
    }

    return <DetailsPage data={profile} />;
  } catch (error) {
    console.error("Error fetching profile details:", error);
    return <h3>Error fetching profile details</h3>;
  }
}

export default profileDetails;

export const generateMetadata = async ({ params: { profileId } }) => {
  try {
    await connectDB();
    const profile = await Profile.findOne({ _id: profileId });
    
    if (!profile) {
      return {
        title: "con not found profile",
        description: "پروفایل مورد نظر یافت نشد.",
      };
    }

    return {
      title: profile.title,
      description: profile.description,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error generating metadata",
      description: "Error generating metadata",
    };
  }
};

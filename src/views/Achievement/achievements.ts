import achievementIcon1 from "../../assets/achievment1-big.png";
import achievementIcon2 from "../../assets/achievment2-big.png";
import achievementThumbnail1 from "../../assets/achievment1.png";
import achievementThumbnail2 from "../../assets/achievment2.png";

interface AchievementI {
  id: number;
  title: string;
  description: string;
  icon: string;
  thumbnail: string;
}

export const achievements: AchievementI[] = [
  {
    id: 1,
    title: "Eco Warrior In Training",
    description:
      "For those brave souls commencing their eco-friendly quest and reaping the seeds of their green deeds. This is your first badge for championing environmental activities",
    icon: achievementIcon1,
    thumbnail: achievementThumbnail1,
  },
  {
    id: 2,
    title: "Altruism Apprentice",
    description:
      "For those who are just starting their journey of lending a helping hand. Behold your inaugural badge for supporting charitable causes.",
    icon: achievementIcon2,
    thumbnail: achievementThumbnail2,
  },
];

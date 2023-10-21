import DONATE_IMG from "../../assets/donate.png";
import PLANT_IMG from "../../assets/plant.png";

interface Step {
  title: string;
  description: string;
  img?: string;
}

const steps: Step[] = [
  {
    title: "Contribute with other apps",
    description: `Download apps that collaborate with Carbbyn, like Forest or Endomondo, for a sustainable lifestyle.`,
    img: PLANT_IMG,
  },
  {
    title: "Reduce personal carbon footprint",
    description:
      "Accumulate Carbon Credits (CC) by practicing eco-friendly habits that reduce your personal carbon footprint.",
    img: PLANT_IMG,
  },
  {
    title: "Donate Global Goals",
    description:
      "Contribute to Global Goals by selling your earned Carbon Credits (CC) to support eco-projects and initiatives.",
    img: DONATE_IMG,
  },
];

export default steps;

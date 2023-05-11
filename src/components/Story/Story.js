import useReveal from "../../hooks/use-reveal";
import StoryItem from "./StoryItem";

const DUMMY_DATA = [
  [
    "https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/ETQ-FitpicsHQ-0855-26-04-22-Packing-Boxes_crob_LR_15_400x.png?v=1672415228",
    "Modular Packaging",
    "Unboxing like never before",
  ],
  [
    "https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/ETQ-FitpicsHQ-0855-26-04-22-Packing-Boxes_crob_LR_17_400x.png?v=1682003114",
    "Who we are",
    "Our journey explained.",
  ],
  [
    "https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/ETQ-LT_01_Premium_Suede-Flatlay_GIF-Compressed-4x5-v01_400x.gif?v=16795965783",
    "How it's made",
    "Sneakers made like...",
  ],
];

const Story = function () {
  const [isReveal, sectionRef] = useReveal();
  const revealClasses = !isReveal ? "section-reveal" : "";

  return (
    <section
      className={`story-section ${revealClasses} container`}
      ref={sectionRef}
    >
      {DUMMY_DATA.map((ele, ind) => {
        const [imageUrl, heading, describe] = ele;
        return (
          <StoryItem
            imageUrl={imageUrl}
            heading={heading}
            describe={describe}
            key={ind}
          />
        );
      })}
    </section>
  );
};

export default Story;

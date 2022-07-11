import useReveal from "../../hooks/use-reveal";
import StoryItem from "./StoryItem";

const DUMMY_DATA = [
  [
    "https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/ETQ-FitpicsHQ-0845-26-04-22-Packing-Boxes-Crob_400x.jpg?v=1652433511",
    "Modular Packaging",
    "Unboxing like never before",
  ],
  [
    "https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/WhatsApp_Image_2022-04-11_at_3.53.14_PM_400x.jpg?v=1649941950",
    "Who we are",
    "Our journey explained.",
  ],
  [
    "https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/Journal_HowIt_sMade_Small2_400x.jpg?v=1621353623",
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

const StoryItem = (props) => {
  return (
    <div className="story__item">
      <div className="story__images">
        <img src={props.imageUrl} alt="Item 1" className="story__img" />
      </div>
      <div className="story__detail">
        <p className="sub-heading">{props.heading}</p>
        <p className="text-describe mg-bt-small">{props.describe}</p>
        <a href="#" className="btn-default">
          Read story
        </a>
      </div>
    </div>
  );
};

export default StoryItem;

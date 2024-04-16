import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./index.css";

const Comparison = () => {
  const wordList = ["CAMEL", "GYM", "PASSION", "SWAN", "TELESCOPE"];
  const modelList = ["input","Gen-2",  "DynamiCrafter", "LiveSketch", "Ours"];
  const promptList = [
    "A camel walks steadily across the desert",
    "A man doing exercise by lifting two dumbbells in both hands",
    "Two people kiss each other, one holding the others chin with his hand",
    "A fat swan is swimming elegantly and stretching its neck on the water",
    "A hand holding a monocular telescope turns towards the camera",
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div style={{ width: "100%" }}>
      <h2 className="title">Comparison</h2>
      <div style={{ marginBlock: "1rem" }}>
        We compare our method with three baseline models: two pixel-based
        models( t2v model Gen-2, i2v model DynamiCrafter) and one vector-based
        animation model(LiveSketch). For text-to-video generation, we append the
        prompt with “which looks like a letter §,” where § represents the
        specific letter to be animated. In the image-to-video case, we use the
        stylized letter generated by the word-as-image as the conditioning
        image. Within the vector-based scenario, we utilize LiveSketch as a
        framework to animate vector images. To ensure a fair comparison, we
        condition the animation on the stylized letter generated by the
        word-as-image as well
      </div>
      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          {wordList.map((word, idx) => (
            <div key={idx}>
              <div className="prompt">{promptList[idx]}</div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {modelList.map((model, mIdx) => (
                  <div key={mIdx}>
                    <div style={{ position: "relative" }}>
                      <img
                        style={{
                          width: "10vw",
                          height: "10vw",
                          border: "1px solid gray",
                        }}
                        src={`${
                          import.meta.env.BASE_URL
                        }comparison/${word}_${model}.${
                          model === "input" ? "png" : "gif"
                        }`}
                      />
                      {["DynamiCrafter", "LiveSketch"].includes(model) && (
                        <img
                          src={`${
                            import.meta.env.BASE_URL
                          }comparison/${word}_input_img.png`}
                          style={{
                            position: "absolute",
                            bottom: "-1rem",
                            right: "-1rem",
                            width: "4vw",
                            height: "4vw",
                            border: "1px solid gray",
                          }}
                        />
                      )}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "1rem" }}>{model}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Comparison;

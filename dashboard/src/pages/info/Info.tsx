import img1 from '../../../public/info/IMG_6864.png'
import img2 from "../../../public/info/IMG_6863.png";
import img3 from "../../../public/info/IMG_6862.png";
import img4 from "../../../public/info/IMG_6861.png";
import img5 from "../../../public/info/IMG_6860.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface InfoProps {}

export const Info: React.FC<InfoProps> = () => {
    return (
        <div>
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <div>
                        <img src={"/info/IMG_6864.png"} alt="Image 1" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div>
                        <img src={"/info/IMG_6863.png"} alt="Image 1" />
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};

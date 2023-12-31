import Slider from "react-slick";
import Image from "next/image";
import { useScreenSize } from "@/hooks/useScreenSize";
import AltImage from "../../../../../public/images/common/NoImageAvailable.jpg";
import styles from "./ProductImages.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderImageStyles.scss";

const ProductImages = ({ product, openModal }) => {
    const screenSizeName = useScreenSize();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <button className={`slick-arrow slick-next`}></button>,
        prevArrow: <button className={`slick-arrow slick-prev`}></button>,
        customPaging: function (i) {
            if (screenSizeName === "tablet" || screenSizeName === "desktop") {
                return (
                    <img
                        src={product.urls[0 + i]}
                        className={styles.custom__img}
                    />
                );
            }
            return <div className={styles.custom__dots}>{i}</div>;
        },
    };

    return (
        <div className={styles.slider__wrapper}>
            {product.urls.length ? (
                <Slider {...settings} className="image-slider">
                    {product.urls.map((img, index) => {
                        return (
                            <img
                                key={index}
                                src={img}
                                alt={product.desc.title}
                                width={"100%"}
                                height={"100%"}
                                className={styles.slider__image}
                                onClick={openModal}
                            />
                        );
                    })}
                </Slider>
            ) : (
                <div className={styles.slider__image}>
                    <Image
                        src={AltImage}
                        alt={product.desc.title}
                        fill
                        className={styles.slider__image}
                    />
                </div>
            )}
        </div>
    );
};

export default ProductImages;

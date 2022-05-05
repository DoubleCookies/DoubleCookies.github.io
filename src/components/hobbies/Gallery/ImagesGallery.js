import { Image } from "antd";
import React from "react";


function ImagesGallery() {
    return (
        <Image.PreviewGroup>
            <Image
                width={150}
                alt={"Pigeon image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_0935_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_0935.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Glass image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_2171_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_2171.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Butterfly image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_2456_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_2456.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Apple tree image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_2901_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_2901.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Sunset image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_2929_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_2929.jpg'
                }}
            />

            <Image
                width={150}
                alt={"Glass with ice image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_3823_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_3823.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Fireworks image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_4043_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_4043.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Sunset river image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_6172_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_6172.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Tree and old building image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_6600_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_6600.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Flower image"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_6290_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_6290.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Blossom tree"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_9081_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_9081.jpg'
                }}
            />
            <Image
                width={150}
                alt={"Two ducks"}
                src={process.env.PUBLIC_URL + '/previewImages/IMG_9225_preview.jpg'}
                preview={{
                    src: process.env.PUBLIC_URL + '/images/IMG_9225.jpg'
                }}
            />
        </Image.PreviewGroup>
    );
}

export default ImagesGallery;
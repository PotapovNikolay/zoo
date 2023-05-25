import { treangle } from "@/public/map/layers/icons";
import { AddReview } from "@/src/pages/guests/reviews/AddReview";
import Image from "next/image";
import { axios } from "@/src/utils/fetcher";
import Head from "next/head";
import quote from "@icons/quote.svg";

function Review({ review, index }: any) {
    return (
        <div className={"w-72 mx-10 mb-10"}>
            <div className="bg-white rounded-xl p-4   mb-4 relative shadow-md">
                <Image src={quote} alt="quote" className="w-10" />
                <div>{review.text}</div>
                <div className="bg-white w-6 h-6 rotate-45 skew-y-[20deg] rounded-sm absolute -bottom-2 "></div>
            </div>
            <div className="flex items-center space-x-4 mt-5 ">
                <div className="w-8 h-8 rounded-full bg-main-blue"></div>
                <div>
                    {review.name} 
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const {
        data: { reviews },
    } = await axios.get<any>("/reviews");

    if (!reviews) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            reviews,
        },
    };
}

export default function Reviews({ reviews }: any) {
    return (
        <div className="bg-main-gray">
            <Head>
                <title>Отзывы</title>
            </Head>
            <div className="bg-main-blue rounded-b-2xl h-40"></div>
            <div className=" flex flex-wrap justify-center  text-main-blue px-20 -translate-y-24">
                <div className="flex flex-col">
                    {reviews.map((review: any, key: number) => {
                        if (key < 2 && review.publish) {
                            return (
                                <Review
                                    key={key}
                                    index={key + 1}
                                    review={review}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                <div className="flex flex-col">
                    <h2 className="hidden lg:block text-center uppercase text-white text-4xl w-72 mx-10 my-10">
                        Отзывы
                    </h2>
                    {reviews.map((review: any, key: number) => {
                        if (key >= 2 && key < 4 && review.publish) {
                            return (
                                <Review
                                    key={key}
                                    index={key + 1}
                                    review={review}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                <div className="flex flex-col">
                    {reviews.map((review: any, key: number) => {
                        if (key >= 4 && key < 6 && review.publish) {
                            return (
                                <Review
                                    key={key}
                                    index={key + 1}
                                    review={review}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            <AddReview />
        </div>
    );
}

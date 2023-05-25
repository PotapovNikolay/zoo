import Image, { StaticImageData } from "next/image";
import wolf from "@icons/free-icon-wolf-1553249.png";
import ficus from "@icons/free-icon-ficus-6350107.png";
import earth from "@icons/earth.png";

type Card={
    image: StaticImageData,
    stats:number,
    units?:string,
    label:string,
}

interface Statsprops{

}

export const Stats:React.FC<Statsprops> = () =>{

    const cards: Array<Card> = [{image:wolf, stats:100, label:"Видов животных"},
                                {image:ficus, stats:267, label:"Видов растений"},
                                {image:earth, stats:25,units:"Га", label:"Площадь зоопарка"}]

    

    return <div  className="bg-main-blue pt-10  lg:pt-24 rounded-b-3xl flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 lg:space-x-24">
        {
            cards.map((card:Card, key:number)=>{

                return <div key={key} className="bg-white w-56 translate-y-16 text-main-blue rounded-xl flex flex-col items-center justify-center shadow-[4.0px_6.0px_10px_rgba(0,0,0,0.4)]">

                        <div className="-translate-y-10 rounded-full w-20 h-20 p-3 flex items-center justify-center bg-gradient-to-r from-[#fe9c64] to-[#fe804c]">
                            <Image className="invert" src={card.image} alt="arrow" width={50} height={50}/>
                        </div>

                        <div className="-translate-y-5 font-bold text-3xl ">
                            {card.stats} {card.units}
                        </div>
                        <div className="-translate-y-5 font-semibold">
                            {card.label} 
                        </div>
                    </div>

            })
        }
    </div>
}
import Image from "next/image";
import ticket1 from '@images/tickets/ticket1.png'
import ticket2 from "@images/tickets/ticket2.png";

interface TicketsProps{

}

export const Tickets:React.FC<TicketsProps> = () =>{

    return (
        <div className="flex flex-col items-center text-main-blue mt-16 lg:mt-24 mx-6 lg:mx-16">
            <div className="text-center">
                <h2>БИЛЕТЫ В НАШЕМ ЗООПАРКЕ</h2>
                <h6 className="xl:text-center">
                    Мы за сохранение природы и поэтому стараемся отходить <br />{" "}
                    от привычных для всех бумажных билетов
                </h6>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-20 mt-6 lg:mt-10 ">
                <Image src={ticket1} width={600} quality={100} alt="ticket1" />

                <Image src={ticket2} width={600} quality={100} alt="ticket2" />
            </div>
        </div>
    );
}
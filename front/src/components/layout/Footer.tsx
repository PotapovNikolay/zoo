import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import vk from '@icons/social/vk.png'
import viber from "@icons/social/viber.png";
import whatsapp from "@icons/social/whatsapp.png";
import telegram from "@icons/social/telegram.png";


export function Footer() {
  return (
      <footer className="bg-main-gray  text-zinc-600 pt-16 lg:pt-10  lg:text-normal">
          <div className=" grid grid-cols-2 place-content-center mx-8 lg:mx-0 gap-6 md:flex  justify-center lg:space-x-16">
              <div className="flex flex-col">
                  <Link
                      href="/animals"
                      className="font-bold text-main-orange mb-2"
                  >
                      О нас
                  </Link>
                  <Link href="/about">Актуальное</Link>
                  <Link href="/about">Благотворительность</Link>
                  <Link href="specialists">QR-коды</Link>
                  <Link href="/guests">Интерактивная карта</Link>
              </div>

              <div className="flex flex-col">
                  <Link
                      href="/animals"
                      className="font-bold text-main-blue mb-2"
                  >
                      О животных
                  </Link>
                  <Link href="/about">Млекопитающие</Link>
                  <Link href="/about">Птицы</Link>
                  <Link href="specialists">Рыбы</Link>
                  <Link href="/guests">Рептилии</Link>
              </div>

              <div className="flex flex-col">
                  <Link
                      href="/animals"
                      className="font-bold text-main-blue mb-2"
                  >
                      Гостям
                  </Link>
                  <Link href="/guests">Контакты</Link>
                  <Link href="/tickets">Билеты</Link>
                  <Link href="/reviews">Отзывы</Link>
                  <Link href="/FAQ">Вопрос ответ</Link>
                  <Link href="/guests/rules">Правила поведения</Link>
              </div>

              <div className="flex flex-col">
                  <Link
                      href="/animals"
                      className="font-bold text-main-blue mb-2"
                  >
                      Специалистам
                  </Link>
                  <Link href="/about">Ищем предлагаем животных</Link>
                  <Link href="/about">Вакансии</Link>
                  <Link href="specialists">Документы</Link>
              </div>
          </div>
          <div className="flex items-center space-x-5 mx-20 mt-16 pb-20">
              <div className= "hidden lg:block border-b-2 border-main-blue h-1 grow" />
              <div className="bg-white shadow-md w-10 h-10 p-1.5 rounded-xl ">
                  <Image src={vk} width={100} quality={100} alt={"vk"} />
              </div>
              <div className="bg-white shadow-md w-10 h-10 p-1.5 rounded-xl ">
                  <Image src={telegram} width={100} quality={100} alt={"vk"} />
              </div>
              <div className="bg-white shadow-md w-10 h-10 p-1.5 rounded-xl ">
                  <Image src={viber} width={100} quality={100} alt={"vk"} />
              </div>
              <div className="bg-white shadow-md w-10 h-10 p-1.5 rounded-xl ">
                  <Image src={whatsapp} width={90} quality={100} alt={"vk"} />
              </div>
          </div>
      </footer>
  );
}

import Image from "next/image";
import { Card } from "./card";
import ImagePhonePreview from "../../../public/phone-preview.png";

export const DevicePreview = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-background fixed top-0 left-0 z-[99999] overflow-hidden device-hidden">
      <Card shadow={false}>
        <div className="flex flex-col lg:flex-row max-w-[1100px] mx-auto mt-20">
          <div className="font-extrabold flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="48"
                viewBox="0 0 47 48"
                fill="none"
              >
                <path
                  d="M20.1419 23.7652C20.1419 24.2855 19.7217 24.7072 19.2034 24.7072C18.6851 24.7072 18.2649 24.2855 18.2649 23.7652C18.2649 23.245 18.6851 22.8232 19.2034 22.8232C19.7217 22.8232 20.1419 23.245 20.1419 23.7652Z"
                  fill="#8459FF"
                />
                <path
                  d="M38.7144 21.4102C38.7144 21.9304 38.2942 22.3522 37.7759 22.3522C37.2576 22.3522 36.8374 21.9304 36.8374 21.4102C36.8374 20.8899 37.2576 20.4682 37.7759 20.4682C38.2942 20.4682 38.7144 20.8899 38.7144 21.4102Z"
                  fill="#8459FF"
                />
                <path
                  d="M2.07526 35.0692C4.18694 28.9463 5.3601 27.4155 9.34885 22.3522C4.53889 25.4137 2.77915 24.9427 2.77915 22.7055C2.77915 20.4682 7.11984 17.9954 9.58348 18.8197C14.8627 13.4031 19.6727 9.98836 23.5441 9.51735C23.5441 6.45583 23.3486 5.59232 23.1921 5.27832C24.7172 6.57358 25.5385 8.10434 26.125 9.1641C27.3451 8.31629 28.6669 7.55484 29.1752 7.28009V9.98836L30.935 9.1641V10.5771C33.555 11.3229 38.363 14.6701 41.7281 18.8197C45.8341 23.883 46.1497 31.502 42.0106 34.5321C40.6336 35.5401 38.5098 36.0364 36.1423 36.0364M15.931 31.0216C15.931 33.6749 17.5048 36.4485 19.8387 36.8723C21.5239 37.1784 24.6546 36.976 26.9916 36.0364M26.9916 36.0364C31.1999 34.3444 36.7083 31.1936 36.1423 28.4343C35.3211 24.4307 26.1704 25.726 26.1704 28.9053C26.1704 30.7006 29.3602 33.6155 32.0362 35.0283M26.9916 36.0364L26.1704 44.9194L31.567 42.2111M31.567 42.2111L35.2038 42.7999L36.1423 36.0364M31.567 42.2111L32.0362 35.0283M36.1423 36.0364C35.2038 36.0364 33.5966 35.8521 32.0362 35.0283M20.1419 23.7652C20.1419 24.2855 19.7217 24.7072 19.2034 24.7072C18.6851 24.7072 18.2649 24.2855 18.2649 23.7652C18.2649 23.245 18.6851 22.8232 19.2034 22.8232C19.7217 22.8232 20.1419 23.245 20.1419 23.7652ZM38.7144 21.4102C38.7144 21.9304 38.2942 22.3522 37.7759 22.3522C37.2576 22.3522 36.8374 21.9304 36.8374 21.4102C36.8374 20.8899 37.2576 20.4682 37.7759 20.4682C38.2942 20.4682 38.7144 20.8899 38.7144 21.4102Z"
                  stroke="#8459FF"
                  stroke-width="2.50402"
                  stroke-linecap="round"
                />
              </svg>
              <div className="text-2xl lg:text-[40px] leading-[140%]">
                ДОБРИКИ
              </div>
            </div>
            <div className="text-lg lg:text-[30px] leading-[150%]">
              – это приложение, где пользователи могут конвертировать свою
              физическую активность в деньги на благотворительность. Данное
              приложение поддерживается только <br />
              <span className="text-accent">на мобильных устройствах</span>
            </div>
          </div>
          <Image src={ImagePhonePreview} alt="" height={800} width={400} />
        </div>
      </Card>
    </div>
  );
};

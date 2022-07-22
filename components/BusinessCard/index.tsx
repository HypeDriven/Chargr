import Image from "next/image";
import changingStationIcon from "../../assets/icons/charging-station.svg";
import logoIcon from "../../assets/icons/logo.svg";
import mailIcon from "../../assets/icons/mail.svg";

const BusinessCard = () => (
  <div className="business-card">
    <div className="absolute -left-5 top-10 lg:top-1/4 lg:left-1/4 blur-sm">
      <ChangingStation />
    </div>
    <div className="absolute -right-5 top-5 lg:top-1/3 lg:right-1/4 blur-sm">
      <ChangingStation />
    </div>
    <div className="absolute -left-5 bottom-5 lg:bottom-1/4 lg:left-1/4">
      <ChangingStation />
    </div>
    <div className="absolute -right-5 bottom-12 lg:bottom-1/3 lg:right-1/4">
      <ChangingStation />
    </div>
    <div className="flex w-full h-full">
      <div className="px-6 mx-auto self-center z-10">
        <div className="w-full sm:w-3/4 md:w-auto mx-auto flex gap-14 flex-col justify-center text-center max-w-3xl">
          <Image src={logoIcon} />
          <div className="font-bold text-3xl sm:text-4xl md:text-6xl">
            ... you only need one charge app in the world
          </div>
          <div className="flex gap-2 justify-center">
            <div className="flex self-center">
                <Image src={mailIcon} height="24" width="24"/>
            </div>
            <span className="text-2xl leading-5">biz@chargr.one</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ChangingStation = () => (
  <Image src={changingStationIcon} width="50" height="50" />
);

export default BusinessCard;

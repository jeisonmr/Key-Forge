import IconCheck from "@public/icons/check.png";

export interface BoxInformationProps {
  title: string;
  description: string;
}

const BoxInformation = ({ title, description }: BoxInformationProps) => {
  return (
    <div className="w-full flex justify-start items-center bg-purple-dark/40 border border-pink/20 rounded-md p-2.5 gap-2 group">
      <img 
        src={IconCheck} 
        alt="Icono de verificación" 
        className="w-2 h-2 object-contain" 
        width={16}
        height={16}
        loading="lazy"
      />
      <div className="flex flex-col gap-0.5">
        <h3 className="text-pink text-txt-description3 font-secondary-600 uppercase">
          {title}
        </h3>
        <p className="text-white/80 text-txt-description3 font-secondary-300">
          {description}
        </p>
      </div>
    </div>
  )
}

export default BoxInformation
import { BadgeCheck } from 'lucide-react';

export function ArtistHeader() {
  return (
    <div className="relative w-[70%] h-[300px] rounded-2xl overflow-hidden mb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dwiq4s5ut/image/upload/v1733474858/WhatsApp_Image_2024-12-06_at_14.15.54_359b9252_ewiwyw.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>
      <img 
        src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1733474989/Micle_mil8jh.png"
        alt="Michael Jackson"
        className="absolute right-0 h-full object-contain z-10"
      />
      <div className="absolute bottom-8 left-8 z-20">
        <div className="flex items-center gap-2 mb-2">
          <BadgeCheck className="text-blue-400" />
          <span className="text-sm text-gray-300">Verified Artist</span>
        </div>
        <h1 className="text-4xl font-bold mb-2">Michael Jackson</h1>
        <p className="text-gray-300">27,852,501 monthly listeners</p>
      </div>
    </div>
  );
}
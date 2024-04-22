import {useEffect} from "react";

interface Props {
  open: boolean;
  onTimeout(): void;
  data?: {
    title?: string;
    description?: string;
  }
}

export const Toast = ({ open, onTimeout, data: { title, description } = {} }: Props) => {
  useEffect(() => {
    if(open){
      const t = setTimeout(() => {
        onTimeout();
        clearTimeout(t);
      }, 4000);
    }
  }, [ open, onTimeout ]);
  if(!open) return null;
  return (
    <div className="fixed bottom-0 right-0 p-3 opacity-0 animate-toast">
      <div className="p-3 bg-gray-900 rounded-xl max-w-[16rem]">
        <h3 className="font-bold">
          {title}
        </h3>
        <p className="line-clamp-2 break-all">
          {description}
        </p>
      </div>
    </div>
  );
}
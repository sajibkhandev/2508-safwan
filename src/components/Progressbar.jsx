import React from 'react'

const Progressbar = ({number,text}) => {
  return (
       <div className="w-[270px] h-[282px] shadow-lg flex flex-col items-center justify-center gap-y-6">
          <div className="w-[167px] h-[167px] border-[8px] border-secondary rounded-full flex justify-center items-center">
            <p className="text-[34px] text-secondary font-semibold font-vol">{number}</p>
          </div>
          <p className="text-[26px] text-primary font-semibold font-vol">{text}</p>
        </div>
  )
}

export default Progressbar
export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      {/* Main container*/}
      <div className="relative overflow-hidden bg-white shadow-lg rounded-lg py-8 md:py-12 px-20 md:px-24 lg:px-28 w-full sm:w-[400px] md:w-[550px] lg:w-[700px] max-w-full">
        
        {/* Blue diamond top left */}
        <div className="hidden md:block absolute top-[8%] left-[15%] w-[35px] h-[35px] bg-[#4E5FE1] rotate-45">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-white" />
        </div>

        {/* Small pink square */}
        <div className="hidden md:block absolute top-[5%] left-[52%] w-[16px] h-[16px] bg-[#E84CA0]" />

        {/* Pink square top right */}
        <div className="hidden md:block absolute top-[12%] right-[12%] w-[42px] h-[42px] bg-[#E84CA0]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-white" />
        </div>

        {/* Blue diamond right side */}
        <div className="hidden md:block absolute top-[40%] right-[15%] w-[20px] h-[20px] bg-[#4E5FE1] rotate-45" />

        {/* Red square outline left */}
        <div className="hidden md:block absolute top-[35%] left-[12%] w-[52px] h-[52px] rotate-45">
          <div className="w-full h-full border-[7px] border-[#E74856] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[13px] h-[13px] bg-white" />
          </div>
        </div>

        <div className="text-center z-10 w-full flex flex-col items-center justify-center mx-auto">
          <div className="relative">
            <h1 
              className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] leading-[0.85] font-extrabold text-[#4E5FE1] tracking-tight select-none" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 800 
              }}
            >
              30
            </h1>
          </div>

          <div className="relative mt-[8px] md:mt-[10px] flex flex-col items-center">
            <div 
              className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[58px] leading-[1] font-bold text-black uppercase tracking-tight select-none" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 700 
              }}
            >
              <div className="text-center">HOURS</div>
              <div className="text-left">OF...</div>
            </div>
            
            {/* Yellow circle */}
            <div className="hidden md:block absolute top-[20px] lg:top-[25px] left-[180px] lg:left-[200px] w-[100px] lg:w-[120px] h-[100px] lg:h-[120px] rounded-full border-[11px] lg:border-[13px] border-[#EAB63F] blur-md" />
          </div>

          <div className="mt-[25px] md:mt-[35px] lg:mt-[45px] w-full">
            <p 
              className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px] text-black uppercase tracking-[0.001em] select-none text-justify leading-tight" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 700, 
                textAlignLast: 'justify' 
              }}
            >
              DESIGNING / BUILDING / CODING / HACKING
            </p>

            <p 
              className="text-[7px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-black uppercase tracking-[0.001em] select-none mt-[6px] md:mt-[8px] text-justify leading-tight" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 700, 
                textAlignLast: 'justify' 
              }}
            >
              NETWORKING / FRIENDS / MENTORS / COMPETITIONS
            </p>

            <p 
              className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-[14px] text-black uppercase tracking-[0.001em] select-none mt-[6px] md:mt-[8px] text-justify leading-tight" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600, 
                textAlignLast: 'justify' 
              }}
            >
              COFFEE / TEA / GREEN TEA / FOOD / SNACKS / SWAGS / T-SHIRTS
            </p>

            <p 
              className="text-[5px] sm:text-[7px] md:text-[8px] lg:text-[9px] text-black uppercase tracking-[0.002em] sm:tracking-[0.001em] md:tracking-[0.001em] lg:tracking-[0.001em] select-none mt-[10px] md:mt-[12px] text-justify leading-tight" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600, 
                textAlignLast: 'justify' 
              }}
            >
              SUPER FAST INTERNET / TALKS / DID WE MENTION GREEN TEA ? / PRIZES / BRAND NEW APIs
            </p>

            <div className="mt-[12px] md:mt-[16px] flex items-center justify-between">
              <p 
                className="text-[5px] sm:text-[7px] md:text-[8px] lg:text-[9px] text-black uppercase select-none whitespace-nowrap" 
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 600
                }}
              >
                AND / A WHOLE / LOT MORE
              </p>
              <div className="flex-1 ml-[8px] md:ml-[10px] h-[4px] md:h-[5px] lg:h-[6px] bg-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
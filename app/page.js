'use client'

export default function Home() {
  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        width: '95%',
        maxWidth: '1400px',
        height: '95vh',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <svg viewBox="0 0 1400 800" style={{ width: '100%', height: '100%' }}>
          {/* Garage Background */}
          <rect x="0" y="0" width="1400" height="800" fill="#2c2c2c"/>

          {/* Garage Door Texture */}
          <rect x="0" y="0" width="1400" height="100" fill="#3a3a3a"/>
          <line x1="0" y1="20" x2="1400" y2="20" stroke="#4a4a4a" strokeWidth="2"/>
          <line x1="0" y1="40" x2="1400" y2="40" stroke="#4a4a4a" strokeWidth="2"/>
          <line x1="0" y1="60" x2="1400" y2="60" stroke="#4a4a4a" strokeWidth="2"/>
          <line x1="0" y1="80" x2="1400" y2="80" stroke="#4a4a4a" strokeWidth="2"/>

          {/* Garage Wall Details */}
          <rect x="0" y="100" width="1400" height="700" fill="#3d3d3d"/>

          {/* Tool Board on Wall */}
          <rect x="100" y="150" width="200" height="180" fill="#654321" stroke="#4a3216" strokeWidth="3"/>
          <circle cx="150" cy="200" r="8" fill="#888"/>
          <rect x="170" y="185" width="40" height="30" fill="#c4c4c4" stroke="#888" strokeWidth="2"/>
          <line x1="200" y1="240" x2="250" y2="240" stroke="#888" strokeWidth="4"/>
          <circle cx="180" cy="270" r="12" fill="#666"/>

          {/* Window with light */}
          <rect x="1100" y="150" width="220" height="160" fill="#87ceeb" opacity="0.6"/>
          <line x1="1210" y1="150" x2="1210" y2="310" stroke="#555" strokeWidth="4"/>
          <line x1="1100" y1="230" x2="1320" y2="230" stroke="#555" strokeWidth="4"/>

          {/* Floor */}
          <rect x="0" y="600" width="1400" height="200" fill="#4a4a4a"/>
          <line x1="0" y1="600" x2="1400" y2="600" stroke="#5a5a5a" strokeWidth="3"/>

          {/* Floor cracks/details */}
          <line x1="300" y1="600" x2="320" y2="800" stroke="#3a3a3a" strokeWidth="2" opacity="0.5"/>
          <line x1="800" y1="600" x2="780" y2="800" stroke="#3a3a3a" strokeWidth="2" opacity="0.5"/>

          {/* Bucket */}
          <ellipse cx="450" cy="580" rx="45" ry="15" fill="#e74c3c"/>
          <rect x="405" y="520" width="90" height="60" fill="#c0392b"/>
          <ellipse cx="450" cy="520" rx="45" ry="15" fill="#e74c3c"/>
          <rect x="435" y="500" width="10" height="25" fill="#999" rx="5"/>
          <path d="M 425 505 Q 450 495 475 505" stroke="#999" strokeWidth="8" fill="none" strokeLinecap="round"/>

          {/* Water in bucket - sparkling */}
          <ellipse cx="450" cy="525" rx="38" ry="12" fill="#4a9eff" opacity="0.7"/>
          <circle cx="440" cy="525" r="3" fill="white" opacity="0.9"/>
          <circle cx="460" cy="527" r="2" fill="white" opacity="0.8"/>

          {/* Shampoo Spray Bottle */}
          <rect x="520" y="540" width="35" height="45" fill="#2ecc71" rx="3"/>
          <rect x="530" y="530" width="15" height="15" fill="#27ae60"/>
          <line x1="537" y1="530" x2="537" y2="520" stroke="#333" strokeWidth="3"/>
          <rect x="534" y="517" width="6" height="8" fill="#333"/>
          <text x="527" y="565" fontSize="8" fill="white" fontWeight="bold">SOAP</text>

          {/* Honda 350cc Motorcycle - DBZ style angular design */}
          <defs>
            <linearGradient id="bikeShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ff4444', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#ff0000', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#cc0000', stopOpacity: 1}} />
            </linearGradient>
            <filter id="wetGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Bike Back Wheel */}
          <circle cx="950" cy="520" r="65" fill="#1a1a1a" stroke="#000" strokeWidth="4"/>
          <circle cx="950" cy="520" r="55" fill="#2a2a2a"/>
          <circle cx="950" cy="520" r="25" fill="#444" stroke="#666" strokeWidth="3"/>
          <line x1="950" y1="495" x2="950" y2="545" stroke="#888" strokeWidth="3"/>
          <line x1="925" y1="520" x2="975" y2="520" stroke="#888" strokeWidth="3"/>
          <line x1="932" y1="502" x2="968" y2="538" stroke="#888" strokeWidth="3"/>
          <line x1="968" y1="502" x2="932" y2="538" stroke="#888" strokeWidth="3"/>

          {/* Bike Front Wheel */}
          <circle cx="680" cy="520" r="60" fill="#1a1a1a" stroke="#000" strokeWidth="4"/>
          <circle cx="680" cy="520" r="50" fill="#2a2a2a"/>
          <circle cx="680" cy="520" r="22" fill="#444" stroke="#666" strokeWidth="3"/>
          <line x1="680" y1="498" x2="680" y2="542" stroke="#888" strokeWidth="3"/>
          <line x1="658" y1="520" x2="702" y2="520" stroke="#888" strokeWidth="3"/>

          {/* Bike Frame - angular DBZ style */}
          <polygon points="680,520 750,480 850,460 950,500" fill="url(#bikeShine)" stroke="#990000" strokeWidth="4" filter="url(#wetGlow)"/>
          <polygon points="750,480 800,420 850,460" fill="url(#bikeShine)" stroke="#990000" strokeWidth="4" filter="url(#wetGlow)"/>

          {/* Bike Tank - with sharp angles */}
          <path d="M 750 450 L 850 440 L 900 470 L 820 490 Z" fill="url(#bikeShine)" stroke="#990000" strokeWidth="4" filter="url(#wetGlow)"/>

          {/* Bike Seat */}
          <path d="M 850 450 Q 900 445 950 455 L 940 475 Q 900 470 860 468 Z" fill="#1a1a1a" stroke="#000" strokeWidth="3"/>

          {/* Handlebars */}
          <line x1="680" y1="480" x2="680" y2="430" stroke="#333" strokeWidth="6"/>
          <line x1="650" y1="430" x2="710" y2="430" stroke="#333" strokeWidth="5"/>
          <circle cx="650" cy="430" r="8" fill="#444"/>
          <circle cx="710" cy="430" r="8" fill="#444"/>

          {/* Front Fork */}
          <line x1="680" y1="480" x2="680" y2="520" stroke="#444" strokeWidth="8"/>

          {/* Exhaust */}
          <rect x="900" y="500" width="80" height="15" fill="#6a6a6a" stroke="#4a4a4a" strokeWidth="2" rx="7"/>
          <circle cx="980" cy="507.5" r="7" fill="#333"/>

          {/* Chrome details - shining */}
          <circle cx="800" cy="470" r="5" fill="white" opacity="0.9"/>
          <circle cx="870" cy="465" r="4" fill="white" opacity="0.9"/>
          <circle cx="750" cy="475" r="4" fill="white" opacity="0.8"/>
          <ellipse cx="820" cy="480" rx="15" ry="8" fill="white" opacity="0.6"/>
          <ellipse cx="880" cy="455" rx="12" ry="6" fill="white" opacity="0.7"/>

          {/* Water drops on bike */}
          <circle cx="780" cy="465" r="3" fill="#4a9eff" opacity="0.7"/>
          <circle cx="830" cy="475" r="4" fill="#4a9eff" opacity="0.6"/>
          <circle cx="860" cy="450" r="3" fill="#4a9eff" opacity="0.8"/>
          <circle cx="910" cy="468" r="3" fill="#4a9eff" opacity="0.7"/>
          <ellipse cx="795" cy="485" rx="2" ry="4" fill="#4a9eff" opacity="0.6"/>
          <ellipse cx="845" cy="462" rx="2" ry="5" fill="#4a9eff" opacity="0.7"/>

          {/* Anime Character - DBZ inspired */}
          {/* Legs */}
          <rect x="580" y="480" width="35" height="90" fill="#2e4d8f" stroke="#1e3d7f" strokeWidth="2"/>
          <rect x="540" y="480" width="35" height="95" fill="#2e4d8f" stroke="#1e3d7f" strokeWidth="2"/>
          {/* Shoes */}
          <rect x="535" y="570" width="45" height="25" fill="#1a1a1a" stroke="#000" strokeWidth="2" rx="5"/>
          <rect x="575" y="565" width="45" height="25" fill="#1a1a1a" stroke="#000" strokeWidth="2" rx="5"/>

          {/* Torso - muscular DBZ style */}
          <path d="M 540 480 L 540 380 Q 545 360 565 355 L 595 355 Q 615 360 620 380 L 620 480 Z" fill="#ff8c00" stroke="#e67e00" strokeWidth="3"/>

          {/* Belt */}
          <rect x="540" y="470" width="80" height="15" fill="#1a1a1a" stroke="#000" strokeWidth="2"/>
          <rect x="575" y="470" width="10" height="15" fill="#ffd700"/>

          {/* Arms - left arm extended with cloth */}
          <rect x="475" y="390" width="65" height="25" fill="#ff8c00" stroke="#e67e00" strokeWidth="2" transform="rotate(-20 540 400)"/>
          <rect x="430" y="400" width="50" height="22" fill="#ffa500" stroke="#ff8c00" strokeWidth="2" transform="rotate(-15 455 410)"/>

          {/* Right arm - holding spray */}
          <rect x="620" y="400" width="25" height="70" fill="#ff8c00" stroke="#e67e00" strokeWidth="2"/>
          <rect x="620" y="465" width="25" height="50" fill="#ffa500" stroke="#ff8c00" strokeWidth="2"/>

          {/* Hands */}
          <circle cx="445" cy="415" r="15" fill="#ffb380"/>
          <circle cx="632" cy="515" r="14" fill="#ffb380"/>

          {/* Microfiber cloth in hand */}
          <path d="M 430 405 Q 420 410 425 425 Q 435 430 445 425 Q 450 415 440 405 Z" fill="#4ecca3" opacity="0.8"/>
          <path d="M 435 410 Q 430 420 438 420" stroke="#3dbb92" strokeWidth="1.5" fill="none"/>

          {/* Spray bottle in right hand */}
          <rect x="625" y="510" width="15" height="30" fill="#2ecc71" stroke="#27ae60" strokeWidth="2" rx="2"/>
          <rect x="629" y="505" width="7" height="8" fill="#27ae60"/>
          <line x1="632" y1="505" x2="632" y2="498" stroke="#333" strokeWidth="2"/>

          {/* Spray mist effect */}
          <circle cx="600" cy="470" r="3" fill="#a8e6cf" opacity="0.5"/>
          <circle cx="590" cy="465" r="2" fill="#a8e6cf" opacity="0.4"/>
          <circle cx="610" cy="475" r="2" fill="#a8e6cf" opacity="0.4"/>
          <circle cx="595" cy="480" r="2" fill="#a8e6cf" opacity="0.3"/>

          {/* Neck */}
          <rect x="565" y="350" width="30" height="20" fill="#ffb380"/>

          {/* Head - angular anime style */}
          <ellipse cx="580" cy="320" rx="45" ry="50" fill="#ffb380" stroke="#ff9966" strokeWidth="2"/>

          {/* Hair - spiky DBZ style */}
          <path d="M 540 330 Q 530 310 535 280 Q 540 260 550 255 L 555 265 Q 548 275 545 290 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2"/>
          <path d="M 555 265 Q 560 245 570 235 Q 575 230 580 232 L 580 245 Q 575 255 570 265 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2"/>
          <path d="M 580 245 Q 585 230 595 225 Q 600 223 605 228 L 602 242 Q 598 250 592 258 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2"/>
          <path d="M 602 242 Q 610 235 620 238 Q 625 240 625 250 L 618 260 Q 612 265 608 268 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2"/>
          <path d="M 618 280 Q 625 270 628 260 Q 630 255 625 265 L 620 280 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2"/>

          {/* Face features */}
          {/* Eyes - determined DBZ style */}
          <ellipse cx="565" cy="315" rx="8" ry="10" fill="white"/>
          <ellipse cx="595" cy="315" rx="8" ry="10" fill="white"/>
          <circle cx="566" cy="316" r="5" fill="#2c3e50"/>
          <circle cx="596" cy="316" r="5" fill="#2c3e50"/>
          <circle cx="567" cy="315" r="2" fill="white"/>
          <circle cx="597" cy="315" r="2" fill="white"/>

          {/* Eyebrows - strong */}
          <path d="M 555 305 Q 565 303 573 305" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M 587 305 Q 595 303 605 305" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>

          {/* Nose */}
          <line x1="580" y1="320" x2="580" y2="330" stroke="#ff9966" strokeWidth="2"/>
          <line x1="580" y1="330" x2="585" y2="332" stroke="#ff9966" strokeWidth="2"/>

          {/* Mouth - slight smile */}
          <path d="M 570 340 Q 580 345 590 340" stroke="#ff6347" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          {/* Sweat drops - working hard */}
          <ellipse cx="555" cy="330" rx="4" ry="6" fill="#4a9eff" opacity="0.7"/>
          <ellipse cx="548" cy="345" rx="3" ry="5" fill="#4a9eff" opacity="0.6"/>

          {/* Shading on muscles/clothes */}
          <path d="M 545 380 Q 550 400 545 420" stroke="#e67e00" strokeWidth="3" opacity="0.5" fill="none"/>
          <path d="M 615 380 Q 610 400 615 420" stroke="#e67e00" strokeWidth="3" opacity="0.5" fill="none"/>

          {/* Action lines - DBZ style energy */}
          <line x1="400" y1="380" x2="380" y2="370" stroke="#ffd700" strokeWidth="2" opacity="0.6"/>
          <line x1="405" y1="395" x2="385" y2="390" stroke="#ffd700" strokeWidth="1.5" opacity="0.5"/>
          <line x1="410" y1="410" x2="395" y2="415" stroke="#ffd700" strokeWidth="1.5" opacity="0.5"/>

          {/* More sparkles on bike indicating cleaning */}
          <path d="M 760 455 L 763 460 L 768 458 L 765 463 L 770 468 L 763 466 L 760 471 L 757 466 L 750 468 L 755 463 L 752 458 L 757 460 Z" fill="#ffff00" opacity="0.8"/>
          <path d="M 850 445 L 852 449 L 856 447 L 854 451 L 858 455 L 852 453 L 850 458 L 848 453 L 842 455 L 846 451 L 844 447 L 848 449 Z" fill="#ffff00" opacity="0.9"/>
          <path d="M 900 460 L 902 463 L 905 461 L 903 465 L 907 469 L 902 467 L 900 471 L 898 467 L 893 469 L 897 465 L 895 461 L 898 463 Z" fill="#ffff00" opacity="0.8"/>

          {/* Shadow under character */}
          <ellipse cx="580" cy="595" rx="50" ry="10" fill="#000" opacity="0.3"/>

          {/* Title text */}
          <text x="700" y="780" fontSize="32" fill="#ff4444" fontWeight="bold" fontFamily="Impact, sans-serif" stroke="#990000" strokeWidth="1">
            HONDA 350cc CLEANING TIME!
          </text>
        </svg>
      </div>
    </main>
  )
}

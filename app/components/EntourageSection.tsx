'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5, ease: 'easeOut' },
});

// ─── Style Classes ────────────────────────────────────────────
const groupLabel = "font-['Playfair_Display',serif] text-[#caa687] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-medium";
const groupName  = "font-['Playfair_Display',serif] text-[#253d5b] text-[10px] sm:text-[11px] md:text-xs leading-relaxed";
const callig     = "font-['Great_Vibes',cursive] text-[#caa687]";
const sectionRule = "block h-px bg-gradient-to-r from-transparent via-[#caa687]/25 to-transparent";

// ─── Data ─────────────────────────────────────────────────────

const parentsGroom = [
  'Pastor Samuel Salloman',
  'Mrs. Juvy Salloman',
];

const parentsBride = [
  'Mrs. Ellen Getes',
];

const officiatingMinisters = [
  'Pastor Joer Barlizo',
  'Pastor Nicanor Buo',
  'Pastor Mariano Salloman',
];

const ninongs = [
  'Ptr. Nicolas L. Palarao',
  'Ptr. Bartman M. Barrientos',
  'Ptr. Apolonio A. Pastera',
  'Ptr. Dionie A. Cientos',
  'Ptr. Jacob A. Suarez',
  'Ptr. Isaias Guisando',
  'Ptr. Glen Siega',
  'Ptr. Benjamin Mahinay',
  'Ptr. Nicanor M. Buo',
  'Ptr. Moses Corro',
  'Ptr. Jonathan Muralla',
  'Ptr. Emmanuel Paul C. Barcenas',
  'Ptr. Ricardo B. De Asis',
  'Ptr. Vedasto B. Buctot Jr.',
  'Mr. Elias B. Buctot',
  'Mr. Rudy B. Dadulo',
  'Mr. Gilme Laurito',
  'Mr. Diosdado Balingcos',
  'Mr. Amon Buctot',
  'Mr. Joseph Rago',
  'Mr. Harold Tan',
  'Mr. Jay Estela',
  'Mr. Antonio P. Masin',
  'Mr. Ryan Buenaventura',
  'Mr. Ric Grafil',
];

const ninangs = [
  'Mrs. Charity L. Palarao',
  'Mrs. Rexy Barrientos',
  'Mrs. Gladys Blaine A. Pastera',
  'Mrs. Menchie C. Cientos',
  'Mrs. Nellie L. Suarez',
  'Mrs. Visminda Guisando',
  'Mrs. Marivic M. Siega',
  'Mrs. Edna Celeste',
  'Mrs. Annabelle A. Buo',
  'Mrs. Gercel D. Corro',
  'Mrs. Rizalie Grace Muralla',
  'Mrs. Naresh M. Barcenas',
  'Mrs. Anna Marie R. De Asis',
  'Mrs. Chiqui B. Buctot',
  'Mrs. Jennifer B. Buctot',
  'Mrs. Elsa B. Dadulo',
  'Mrs. Ester B. Laurito',
  'Mrs. Eunice Balingcos',
  'Mrs. Ruth Buctot',
  'Doc. Jenneth Rago',
  'Mrs. Julie Ann Tan',
  'Mrs. Grace Estela',
  'Mrs. Nancy K. Masin',
  'Mrs. Joanne Buenaventura',
  'Mrs. Rodelyn Grafil',
  'Mrs. Loreta Mogueis',
  'Ms. Micah Pusa',
];

const bestMan = 'Mr. Hero Guisando';
const maidOfHonor = 'Ms. Micah Pusa';

const groomsmen = [
  'Mr. Vynz Ramoso',
  'Mr. Gerhardt Celeste',
  'Mr. Van Shinar Salloman',
  'Mr. Clark Ruzshel Buctot',
  'Mr. Josh Miguel Laurito',
  'Mr. Vence Andrey Buctot',
  'Mr. Rafael Abantao',
  'Mr. Rogin Castillo',
  'Mr. Jud Enoir',
];

const bridesmaids = [
  'Ms. Rica Mae Bulingit',
  'Ms. Jellian Jamio',
  'Ms. Jazzel Lincuna',
  'Ms. Yesheen Dawn Poliran',
  'Ms. Zhen Chloe Buctot',
];

const juniorNinongs = [
  'Mr. Elmer Kristoffer Mogueis',
  'Ptr. Jenboy Luston',
  'Ptr. John B. Carillo',
  'Ptr. Jimmy V. Rivera',
  'Ptr. Dixie Rey P. Minardo',
  'Ptr. Jonathan E. Fernandez',
  'Ptr. Jessie M. Garzon',
  'Ptr. Aronry V. Wales',
  'Ptr. Carl Glenn Morta',
  'Mr. Jay Lagan',
  'Mr. Jun Joshua Lucop',
  'Mr. Kevin Cabrera',
  'Mr. Redyl Dadulo',
  'Engr. Jusam Salloman',
  'Mr. Francis Orge',
  'Atty. Sunny Cientos',
  'Mr. Al Anthony Caldona',
  'Mr. David C. Vacunawa Jr.',
];

const juniorNinangs = [
  'Mrs. Joyce Jane Mogueis',
  'Mrs. Zenith Joy Luston',
  'Mrs. Caryn Carillo',
  'Mrs. Pearlie B. Rivera',
  'Mrs. Honey Louraine B. Minardo',
  'Mrs. Ana Fe C. Fernandez',
  'Mrs. Jenive Ryl G. Garzon',
  'Mrs. Dinah P. Wales',
  'Mrs. Mercy Faith Morta',
  'Mrs. Ruth Lagan',
  'Ms. Rima C. Justimbaste',
  'Mrs. Priscila Cabrera',
  'Mrs. Jeralyn Dadulo',
  'Doc. Doraine Faye Salloman',
  'Mrs. Joymae Shiela Orge',
  'Mrs. Faith Cientos',
  'Ms. Jhunna May Celeste',
  'Mrs. Nhycy Lyn M. Vacunawa',
];

const candleLighters = [
  { male: 'Mr. Renyl B. Dadulo', female: 'Mrs. Marianne Joyce Dadulo' },
  { male: 'Mr. Jay Mark Fernandez', female: 'Mrs. Elvie Jae Fernandez' },
  { male: 'Mr. Marjem Libato', female: '' },
];

const penBearer = 'Theo James Buctot';
const bibleBearers = ['Jehoash Ai Errua', 'Yophiel Mattahry Mahinay'];
const contractBearer = 'Zamir Adrian Buctot';
const littleGroom = 'Joaquin Mason Salloman';
const littleBride = 'Raya Ellisse Dadulo';

const flowerGirls = [
  'Xhandrei Wei Tan',
  'Heather Sky Orge',
  'Dreanna Dennisse Logrono',
  'Kirsten Jill Estela',
  'Zara Athalia Carisse Luston',
];

const bannerBearer = 'Spring Fiel / Apple Errua';

const singers = [
  'Jhunna May Celeste',
  'Joyce Jane Mogueis',
  'Elvie Jae Fernandez',
  'Jeralyn Dadulo',
  'Lovely Bayer',
];

const hosts = ['Joyce Jane Mogueis', 'Jeralyn Dadulo'];

// ─── Main Component ──────────────────────────────────────────
export default function EntourageSection() {
  return (
    <section
      id="entourage"
      className="bg-gradient-to-b from-floral-cream to-floral-bg py-16 sm:py-20 flex items-center justify-center"
    >
      <div className="relative w-full max-w-[640px] mx-3 sm:mx-6">
        {/* Outer ornate frame */}
        <div className="absolute inset-0 border border-[#caa687]/25 rounded-sm pointer-events-none" />
        <div className="absolute inset-[6px] border border-[#caa687]/10 rounded-sm pointer-events-none" />

        {/* Subtle background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
          <svg className="w-3/4 h-3/4" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="120" stroke="#253d5b" strokeWidth="0.8" />
            <circle cx="200" cy="200" r="90" stroke="#253d5b" strokeWidth="0.6" />
            <circle cx="200" cy="200" r="60" stroke="#253d5b" strokeWidth="0.4" />
            <path d="M200 80 L200 320" stroke="#253d5b" strokeWidth="0.4" />
            <path d="M80 200 L320 200" stroke="#253d5b" strokeWidth="0.4" />
          </svg>
        </div>

        {/* ─── Watercolor Floral Border SVG ─── */}
        <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden" aria-hidden="true">
          <svg
            className="w-full h-full"
            viewBox="0 0 640 1000"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ── Corner motifs ── */}

            {/* Top-Left corner floral cluster */}
            <g opacity="0.35">
              {/* Main flower */}
              <ellipse cx="42" cy="36" rx="18" ry="12" fill="#caa687" transform="rotate(-20 42 36)" opacity="0.25" />
              <ellipse cx="42" cy="36" rx="14" ry="9" fill="#caa687" transform="rotate(10 42 36)" opacity="0.2" />
              <ellipse cx="42" cy="36" rx="10" ry="6" fill="#caa687" transform="rotate(40 42 36)" opacity="0.15" />
              {/* Leaves */}
              <ellipse cx="24" cy="42" rx="12" ry="5" fill="#a3c4b5" transform="rotate(-30 24 42)" opacity="0.3" />
              <ellipse cx="22" cy="24" rx="10" ry="4" fill="#a3c4b5" transform="rotate(20 22 24)" opacity="0.25" />
              <ellipse cx="58" cy="26" rx="8" ry="3.5" fill="#a3c4b5" transform="rotate(-40 58 26)" opacity="0.2" />
              {/* Small buds */}
              <circle cx="28" cy="18" r="3" fill="#caa687" opacity="0.2" />
              <circle cx="56" cy="48" r="2.5" fill="#caa687" opacity="0.15" />
              <circle cx="18" cy="52" r="2" fill="#caa687" opacity="0.2" />
              {/* Tiny dots */}
              <circle cx="14" cy="34" r="1.5" fill="#caa687" opacity="0.2" />
              <circle cx="34" cy="54" r="1.5" fill="#a3c4b5" opacity="0.2" />
            </g>

            {/* Top-Right corner floral cluster */}
            <g opacity="0.35">
              <ellipse cx="598" cy="36" rx="18" ry="12" fill="#caa687" transform="rotate(20 598 36)" opacity="0.25" />
              <ellipse cx="598" cy="36" rx="14" ry="9" fill="#caa687" transform="rotate(-10 598 36)" opacity="0.2" />
              <ellipse cx="598" cy="36" rx="10" ry="6" fill="#caa687" transform="rotate(-40 598 36)" opacity="0.15" />
              <ellipse cx="616" cy="42" rx="12" ry="5" fill="#a3c4b5" transform="rotate(30 616 42)" opacity="0.3" />
              <ellipse cx="618" cy="24" rx="10" ry="4" fill="#a3c4b5" transform="rotate(-20 618 24)" opacity="0.25" />
              <ellipse cx="582" cy="26" rx="8" ry="3.5" fill="#a3c4b5" transform="rotate(40 582 26)" opacity="0.2" />
              <circle cx="612" cy="18" r="3" fill="#caa687" opacity="0.2" />
              <circle cx="584" cy="48" r="2.5" fill="#caa687" opacity="0.15" />
              <circle cx="622" cy="52" r="2" fill="#caa687" opacity="0.2" />
              <circle cx="626" cy="34" r="1.5" fill="#caa687" opacity="0.2" />
              <circle cx="606" cy="54" r="1.5" fill="#a3c4b5" opacity="0.2" />
            </g>

            {/* Bottom-Left corner floral cluster */}
            <g opacity="0.35">
              <ellipse cx="42" cy="964" rx="18" ry="12" fill="#caa687" transform="rotate(20 42 964)" opacity="0.25" />
              <ellipse cx="42" cy="964" rx="14" ry="9" fill="#caa687" transform="rotate(-10 42 964)" opacity="0.2" />
              <ellipse cx="42" cy="964" rx="10" ry="6" fill="#caa687" transform="rotate(-40 42 964)" opacity="0.15" />
              <ellipse cx="24" cy="958" rx="12" ry="5" fill="#a3c4b5" transform="rotate(30 24 958)" opacity="0.3" />
              <ellipse cx="22" cy="976" rx="10" ry="4" fill="#a3c4b5" transform="rotate(-20 22 976)" opacity="0.25" />
              <ellipse cx="58" cy="974" rx="8" ry="3.5" fill="#a3c4b5" transform="rotate(40 58 974)" opacity="0.2" />
              <circle cx="28" cy="982" r="3" fill="#caa687" opacity="0.2" />
              <circle cx="56" cy="952" r="2.5" fill="#caa687" opacity="0.15" />
              <circle cx="18" cy="948" r="2" fill="#caa687" opacity="0.2" />
              <circle cx="14" cy="966" r="1.5" fill="#caa687" opacity="0.2" />
              <circle cx="34" cy="946" r="1.5" fill="#a3c4b5" opacity="0.2" />
            </g>

            {/* Bottom-Right corner floral cluster */}
            <g opacity="0.35">
              <ellipse cx="598" cy="964" rx="18" ry="12" fill="#caa687" transform="rotate(-20 598 964)" opacity="0.25" />
              <ellipse cx="598" cy="964" rx="14" ry="9" fill="#caa687" transform="rotate(10 598 964)" opacity="0.2" />
              <ellipse cx="598" cy="964" rx="10" ry="6" fill="#caa687" transform="rotate(40 598 964)" opacity="0.15" />
              <ellipse cx="616" cy="958" rx="12" ry="5" fill="#a3c4b5" transform="rotate(-30 616 958)" opacity="0.3" />
              <ellipse cx="618" cy="976" rx="10" ry="4" fill="#a3c4b5" transform="rotate(20 618 976)" opacity="0.25" />
              <ellipse cx="582" cy="974" rx="8" ry="3.5" fill="#a3c4b5" transform="rotate(-40 582 974)" opacity="0.2" />
              <circle cx="612" cy="982" r="3" fill="#caa687" opacity="0.2" />
              <circle cx="584" cy="952" r="2.5" fill="#caa687" opacity="0.15" />
              <circle cx="622" cy="948" r="2" fill="#caa687" opacity="0.2" />
              <circle cx="626" cy="966" r="1.5" fill="#caa687" opacity="0.2" />
              <circle cx="606" cy="946" r="1.5" fill="#a3c4b5" opacity="0.2" />
            </g>

            {/* ── Vine lines connecting corners ── */}

            {/* Top vine */}
            <path
              d="M60 14 Q160 6 320 10 Q480 14 580 14"
              stroke="#a3c4b5"
              strokeWidth="0.8"
              opacity="0.2"
              strokeLinecap="round"
            />
            <path
              d="M60 22 Q160 14 320 18 Q480 22 580 22"
              stroke="#caa687"
              strokeWidth="0.5"
              opacity="0.15"
              strokeLinecap="round"
            />

            {/* Bottom vine */}
            <path
              d="M60 986 Q160 994 320 990 Q480 986 580 986"
              stroke="#a3c4b5"
              strokeWidth="0.8"
              opacity="0.2"
              strokeLinecap="round"
            />
            <path
              d="M60 978 Q160 986 320 982 Q480 978 580 978"
              stroke="#caa687"
              strokeWidth="0.5"
              opacity="0.15"
              strokeLinecap="round"
            />

            {/* Left vine */}
            <path
              d="M14 60 Q10 160 12 320 Q14 480 14 580 Q14 680 12 780 Q10 880 14 940"
              stroke="#a3c4b5"
              strokeWidth="0.8"
              opacity="0.2"
              strokeLinecap="round"
            />
            <path
              d="M22 60 Q18 160 20 320 Q22 480 22 580 Q22 680 20 780 Q18 880 22 940"
              stroke="#caa687"
              strokeWidth="0.5"
              opacity="0.15"
              strokeLinecap="round"
            />

            {/* Right vine */}
            <path
              d="M626 60 Q630 160 628 320 Q626 480 626 580 Q626 680 628 780 Q630 880 626 940"
              stroke="#a3c4b5"
              strokeWidth="0.8"
              opacity="0.2"
              strokeLinecap="round"
            />
            <path
              d="M618 60 Q622 160 620 320 Q618 480 618 580 Q618 680 620 780 Q622 880 618 940"
              stroke="#caa687"
              strokeWidth="0.5"
              opacity="0.15"
              strokeLinecap="round"
            />

            {/* ── Tiny leaves scattered along vines ── */}

            {/* Top edge leaves */}
            <ellipse cx="120" cy="10" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(-10 120 10)" opacity="0.15" />
            <ellipse cx="240" cy="14" rx="5" ry="2" fill="#caa687" transform="rotate(15 240 14)" opacity="0.1" />
            <ellipse cx="380" cy="12" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(5 380 12)" opacity="0.15" />
            <ellipse cx="500" cy="16" rx="5" ry="2" fill="#caa687" transform="rotate(-15 500 16)" opacity="0.1" />

            {/* Bottom edge leaves */}
            <ellipse cx="120" cy="990" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(10 120 990)" opacity="0.15" />
            <ellipse cx="240" cy="986" rx="5" ry="2" fill="#caa687" transform="rotate(-15 240 986)" opacity="0.1" />
            <ellipse cx="380" cy="988" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(-5 380 988)" opacity="0.15" />
            <ellipse cx="500" cy="984" rx="5" ry="2" fill="#caa687" transform="rotate(15 500 984)" opacity="0.1" />

            {/* Left edge leaves */}
            <ellipse cx="12" cy="140" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(80 12 140)" opacity="0.15" />
            <ellipse cx="10" cy="300" rx="5" ry="2" fill="#caa687" transform="rotate(-75 10 300)" opacity="0.1" />
            <ellipse cx="14" cy="460" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(85 14 460)" opacity="0.15" />
            <ellipse cx="12" cy="620" rx="5" ry="2" fill="#caa687" transform="rotate(-80 12 620)" opacity="0.1" />
            <ellipse cx="10" cy="780" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(75 10 780)" opacity="0.15" />
            <ellipse cx="14" cy="900" rx="5" ry="2" fill="#caa687" transform="rotate(-85 14 900)" opacity="0.1" />

            {/* Right edge leaves */}
            <ellipse cx="628" cy="140" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(-80 628 140)" opacity="0.15" />
            <ellipse cx="630" cy="300" rx="5" ry="2" fill="#caa687" transform="rotate(75 630 300)" opacity="0.1" />
            <ellipse cx="626" cy="460" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(-85 626 460)" opacity="0.15" />
            <ellipse cx="628" cy="620" rx="5" ry="2" fill="#caa687" transform="rotate(80 628 620)" opacity="0.1" />
            <ellipse cx="630" cy="780" rx="6" ry="2.5" fill="#a3c4b5" transform="rotate(-75 630 780)" opacity="0.15" />
            <ellipse cx="626" cy="900" rx="5" ry="2" fill="#caa687" transform="rotate(85 626 900)" opacity="0.1" />
          </svg>
        </div>

        {/* ─── CONTENT ─── */}
        <div className="relative px-6 sm:px-8 md:px-10 py-10 sm:py-12 w-full">

          {/* ===== TITLE ===== */}
          <motion.div {...fadeUp()} className="text-center mb-6">
            <h2 className={callig + " text-[#253d5b] text-2xl sm:text-3xl md:text-4xl leading-snug mt-1"}>
              The Entourage
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2 mb-1">
              <span className="block h-px w-8 bg-[#caa687]/25" />
              <svg className="w-3 h-3 text-[#caa687]/40" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="10" r="2" />
                <ellipse cx="10" cy="7" rx="1.5" ry="1" opacity="0.5" />
                <ellipse cx="10" cy="13" rx="1.5" ry="1" opacity="0.5" />
              </svg>
              <span className="block h-px w-8 bg-[#caa687]/25" />
            </div>
          </motion.div>

          {/* ===== PARENTS (2-column) ===== */}
          <motion.div {...fadeUp(0.04)} className="grid grid-cols-2 gap-4 sm:gap-8 max-w-sm mx-auto mb-3">
            <div className="text-center">
              <span className={groupLabel}>Parents of the Groom</span>
              {parentsGroom.map((name, i) => (
                <p key={i} className={groupName + " mt-0.5"}>{name}</p>
              ))}
            </div>
            <div className="text-center">
              <span className={groupLabel}>Parents of the Bride</span>
              {parentsBride.map((name, i) => (
                <p key={i} className={groupName + " mt-0.5"}>{name}</p>
              ))}
            </div>
          </motion.div>

          {/* ===== OFFICIATING MINISTERS ===== */}
          <motion.div {...fadeUp(0.07)} className="text-center mb-4">
            <span className={groupLabel}>Officiating Ministers</span>
            {officiatingMinisters.map((name, i) => (
              <p key={i} className={groupName + " mt-0.5"}>{name}</p>
            ))}
          </motion.div>

          {/* ===== PRINCIPAL SPONSORS ===== */}
          <motion.div {...fadeUp(0.1)}>
            <div className="text-center mb-2">
              <h3 className={callig + " text-lg sm:text-xl leading-tight"}>Principal Sponsors</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-w-md mx-auto">
              <div>
                <p className="font-['Inter',sans-serif] text-[#a3c4b5] text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-medium text-center mb-1.5">Ninongs</p>
                {ninongs.map((name, i) => (
                  <p key={i} className="font-['Playfair_Display',serif] text-[#253d5b] text-[9px] sm:text-[10px] leading-relaxed text-right">{name}</p>
                ))}
              </div>
              <div>
                <p className="font-['Inter',sans-serif] text-[#a3c4b5] text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-medium text-center mb-1.5">Ninangs</p>
                {ninangs.map((name, i) => (
                  <p key={i} className="font-['Playfair_Display',serif] text-[#253d5b] text-[9px] sm:text-[10px] leading-relaxed text-left">{name}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <span className={sectionRule + " my-4 mx-12"} />

          {/* ===== BEST MAN | MAID OF HONOR ===== */}
          <motion.div {...fadeUp(0.13)} className="grid grid-cols-2 gap-4 sm:gap-8 max-w-sm mx-auto mb-3">
            <div className="text-center">
              <span className={groupLabel}>Best Man</span>
              <p className={groupName + " mt-0.5"}>{bestMan}</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Maid of Honor</span>
              <p className={groupName + " mt-0.5"}>{maidOfHonor}</p>
            </div>
          </motion.div>

          {/* ===== GROOMSMEN | BRIDESMAIDS ===== */}
          <motion.div {...fadeUp(0.16)} className="grid grid-cols-2 gap-x-6 gap-y-1 max-w-md mx-auto mb-3">
            <div className="text-center">
              <span className={groupLabel}>Groomsmen</span>
              {groomsmen.map((name, i) => (
                <p key={i} className={groupName + " mt-0.5"}>{name}</p>
              ))}
            </div>
            <div className="text-center">
              <span className={groupLabel}>Bridesmaids</span>
              {bridesmaids.map((name, i) => (
                <p key={i} className={groupName + " mt-0.5"}>{name}</p>
              ))}
            </div>
          </motion.div>

          <span className={sectionRule + " my-4 mx-12"} />

          {/* ===== JUNIOR SPONSORS ===== */}
          <motion.div {...fadeUp(0.19)}>
            <div className="text-center mb-2">
              <h3 className={callig + " text-lg sm:text-xl leading-tight"}>Junior Sponsors</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-w-md mx-auto mb-3">
              <div>
                {juniorNinongs.map((name, i) => (
                  <p key={i} className="font-['Playfair_Display',serif] text-[#253d5b] text-[9px] sm:text-[10px] leading-relaxed text-right">{name}</p>
                ))}
              </div>
              <div>
                {juniorNinangs.map((name, i) => (
                  <p key={i} className="font-['Playfair_Display',serif] text-[#253d5b] text-[9px] sm:text-[10px] leading-relaxed text-left">{name}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <span className={sectionRule + " my-4 mx-12"} />

          {/* ===== CANDLE LIGHTERS ===== */}
          <motion.div {...fadeUp(0.22)} className="text-center mb-3">
            <h3 className={groupLabel}>Candle Lighters</h3>
            {candleLighters.map((pair, i) => (
              <p key={i} className={groupName + " mt-0.5"}>
                {pair.male}{pair.female ? ` & ${pair.female}` : ''}
              </p>
            ))}
          </motion.div>

          {/* ===== BEARERS ===== */}
          <motion.div {...fadeUp(0.24)} className="text-center mb-3">
            <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
              <div>
                <span className={groupLabel}>Pen Bearer</span>
                <p className={groupName + " mt-0.5"}>{penBearer}</p>
              </div>
              <div>
                <span className={groupLabel}>Bible Bearers</span>
                {bibleBearers.map((name, i) => (
                  <p key={i} className={groupName + " mt-0.5"}>{name}</p>
                ))}
              </div>
              <div>
                <span className={groupLabel}>Contract Bearer</span>
                <p className={groupName + " mt-0.5"}>{contractBearer}</p>
              </div>
            </div>
          </motion.div>

          {/* ===== LITTLE GROOM & BRIDE ===== */}
          <motion.div {...fadeUp(0.26)} className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-3">
            <div className="text-center">
              <span className={groupLabel}>Little Groom</span>
              <p className={groupName + " mt-0.5"}>{littleGroom}</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Little Bride</span>
              <p className={groupName + " mt-0.5"}>{littleBride}</p>
            </div>
          </motion.div>

          {/* ===== FLOWER GIRLS ===== */}
          <motion.div {...fadeUp(0.28)} className="text-center mb-3">
            <span className={groupLabel}>Flower Girls</span>
            {flowerGirls.map((name, i) => (
              <p key={i} className={groupName + " mt-0.5"}>{name}</p>
            ))}
          </motion.div>

          {/* ===== BANNER BEARER ===== */}
          <motion.div {...fadeUp(0.3)} className="text-center mb-3">
            <span className={groupLabel}>Here Comes the Bride — Banner Bearer</span>
            <p className={groupName + " mt-0.5"}>{bannerBearer}</p>
          </motion.div>

          {/* ===== SINGERS ===== */}
          <motion.div {...fadeUp(0.32)} className="text-center mb-3">
            <span className={groupLabel}>Singers</span>
            {singers.map((name, i) => (
              <p key={i} className={groupName + " mt-0.5"}>{name}</p>
            ))}
          </motion.div>

          {/* ===== HOSTS ===== */}
          <motion.div {...fadeUp(0.34)} className="text-center mb-4">
            <span className={groupLabel}>Hosts</span>
            {hosts.map((name, i) => (
              <p key={i} className={groupName + " mt-0.5"}>{name}</p>
            ))}
          </motion.div>



        </div>
      </div>
    </section>
  );
}

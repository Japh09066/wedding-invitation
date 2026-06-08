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

        {/* ─── BIG WATERCOLOR FLORAL VINE BORDER ─── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg
            className="w-full h-full"
            viewBox="0 0 640 1200"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Watercolor soft-edge filter */}
              <filter id="watercolor-wash" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0" result="faded" />
                <feMerge>
                  <feMergeNode in="faded" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="watercolor-soft" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
              </filter>
              <filter id="watercolor-bleed" x="-30%" y="-30%" width="160%" height="160%">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" result="displaced" />
                <feGaussianBlur in="displaced" stdDeviation="2" result="blurred" />
                <feMerge>
                  <feMergeNode in="blurred" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="paint-splatter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
              </filter>
            </defs>

            {/* ── BACKGROUND WASH LAYER (soft watercolor pools) ── */}
            <g filter="url(#watercolor-soft)">
              {/* Top-left corner wash */}
              <path d="M10 10 Q40 0 90 20 Q60 50 30 60 Q10 40 10 10Z" fill="#a3c4b5" opacity="0.15" />
              <path d="M20 15 Q50 5 80 25 Q55 55 25 50 Q15 35 20 15Z" fill="#caa687" opacity="0.1" />
              {/* Top-right corner wash */}
              <path d="M630 10 Q600 0 550 20 Q580 50 610 60 Q630 40 630 10Z" fill="#a3c4b5" opacity="0.15" />
              <path d="M620 15 Q590 5 560 25 Q585 55 615 50 Q625 35 620 15Z" fill="#caa687" opacity="0.1" />
              {/* Bottom-left corner wash */}
              <path d="M10 1190 Q40 1200 90 1180 Q60 1150 30 1140 Q10 1160 10 1190Z" fill="#a3c4b5" opacity="0.15" />
              <path d="M20 1185 Q50 1195 80 1175 Q55 1145 25 1150 Q15 1165 20 1185Z" fill="#caa687" opacity="0.1" />
              {/* Bottom-right corner wash */}
              <path d="M630 1190 Q600 1200 550 1180 Q580 1150 610 1140 Q630 1160 630 1190Z" fill="#a3c4b5" opacity="0.15" />
              <path d="M620 1185 Q590 1195 560 1175 Q585 1145 615 1150 Q625 1165 620 1185Z" fill="#caa687" opacity="0.1" />
              {/* Edge washes */}
              <path d="M100 5 Q200 0 320 8 Q440 0 540 5 L540 20 Q440 15 320 22 Q200 15 100 20Z" fill="#a3c4b5" opacity="0.08" />
              <path d="M100 1180 Q200 1200 320 1192 Q440 1200 540 1180 L540 1195 Q440 1205 320 1198 Q200 1205 100 1195Z" fill="#a3c4b5" opacity="0.08" />
              <path d="M5 100 Q0 300 8 500 Q0 700 5 900 L20 900 Q15 700 22 500 Q15 300 20 100Z" fill="#a3c4b5" opacity="0.08" />
              <path d="M635 100 Q640 300 632 500 Q640 700 635 900 L620 900 Q625 700 618 500 Q625 300 620 100Z" fill="#a3c4b5" opacity="0.08" />
            </g>

            {/* ── LARGE CORNER FLORAL CLUSTERS (watercolor-bleed edges for realistic painted look) ── */}

            {/* TOP-LEFT: Deep vine cluster */}
            <g filter="url(#watercolor-bleed)">
              {/* Main flower petals */}
              <path d="M55 28 C60 12 72 10 78 22 C82 32 74 44 60 42 C48 40 50 32 55 28Z" fill="#caa687" opacity="0.5" />
              <path d="M45 35 C38 20 42 8 56 12 C68 14 64 30 54 38 C44 42 42 38 45 35Z" fill="#caa687" opacity="0.4" />
              <path d="M68 30 C78 16 88 22 82 36 C78 46 64 42 60 34 C58 28 62 26 68 30Z" fill="#caa687" opacity="0.35" />
              <path d="M50 22 C48 8 56 2 66 8 C74 14 64 24 56 26 C48 28 48 24 50 22Z" fill="#caa687" opacity="0.3" />
              {/* Main leaves */}
              <path d="M22 28 C8 24 6 38 18 44 C30 48 28 34 22 28Z" fill="#a3c4b5" opacity="0.4" />
              <path d="M30 16 C18 8 16 20 26 26 C36 30 34 20 30 16Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M78 46 C90 42 92 56 80 58 C70 60 72 48 78 46Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M66 10 C72 -2 82 4 78 14 C74 22 64 16 66 10Z" fill="#a3c4b5" opacity="0.25" />
            </g>

            {/* TOP-LEFT: Detail layer (sharper) */}
            <g filter="url(#watercolor-wash)">
              <path d="M52 30 C56 18 66 16 70 24 C72 30 66 38 58 36 C50 34 50 30 52 30Z" fill="#caa687" opacity="0.35" />
              <path d="M62 26 C68 18 74 22 72 30 C70 36 62 34 60 28Z" fill="#e8c4a8" opacity="0.25" />
              <path d="M28 24 C20 20 18 28 24 32 C30 34 32 28 28 24Z" fill="#a3c4b5" opacity="0.3" />
              <circle cx="56" cy="28" r="3" fill="#253d5b" opacity="0.15" />
            </g>

            {/* TOP-RIGHT: Deep vine cluster */}
            <g filter="url(#watercolor-bleed)">
              <path d="M585 28 C580 12 568 10 562 22 C558 32 566 44 580 42 C592 40 590 32 585 28Z" fill="#caa687" opacity="0.5" />
              <path d="M595 35 C602 20 598 8 584 12 C572 14 576 30 586 38 C596 42 598 38 595 35Z" fill="#caa687" opacity="0.4" />
              <path d="M572 30 C562 16 552 22 558 36 C562 46 576 42 580 34 C582 28 578 26 572 30Z" fill="#caa687" opacity="0.35" />
              <path d="M590 22 C592 8 584 2 574 8 C566 14 576 24 584 26 C592 28 592 24 590 22Z" fill="#caa687" opacity="0.3" />
              <path d="M618 28 C632 24 634 38 622 44 C610 48 612 34 618 28Z" fill="#a3c4b5" opacity="0.4" />
              <path d="M610 16 C622 8 624 20 614 26 C604 30 606 20 610 16Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M562 46 C550 42 548 56 560 58 C570 60 568 48 562 46Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M574 10 C568 -2 558 4 562 14 C566 22 576 16 574 10Z" fill="#a3c4b5" opacity="0.25" />
            </g>

            <g filter="url(#watercolor-wash)">
              <path d="M588 30 C584 18 574 16 570 24 C568 30 574 38 582 36 C590 34 590 30 588 30Z" fill="#caa687" opacity="0.35" />
              <path d="M578 26 C572 18 566 22 568 30 C570 36 578 34 580 28Z" fill="#e8c4a8" opacity="0.25" />
              <path d="M612 24 C620 20 622 28 616 32 C610 34 608 28 612 24Z" fill="#a3c4b5" opacity="0.3" />
              <circle cx="584" cy="28" r="3" fill="#253d5b" opacity="0.15" />
            </g>

            {/* BOTTOM-LEFT: Deep vine cluster */}
            <g filter="url(#watercolor-bleed)">
              <path d="M55 1172 C60 1188 72 1190 78 1178 C82 1168 74 1156 60 1158 C48 1160 50 1168 55 1172Z" fill="#caa687" opacity="0.5" />
              <path d="M45 1165 C38 1180 42 1192 56 1188 C68 1186 64 1170 54 1162 C44 1158 42 1162 45 1165Z" fill="#caa687" opacity="0.4" />
              <path d="M68 1170 C78 1184 88 1178 82 1164 C78 1154 64 1158 60 1166 C58 1172 62 1174 68 1170Z" fill="#caa687" opacity="0.35" />
              <path d="M22 1172 C8 1176 6 1162 18 1156 C30 1152 28 1166 22 1172Z" fill="#a3c4b5" opacity="0.4" />
              <path d="M30 1184 C18 1192 16 1180 26 1174 C36 1170 34 1180 30 1184Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M78 1154 C90 1158 92 1144 80 1142 C70 1140 72 1152 78 1154Z" fill="#a3c4b5" opacity="0.3" />
            </g>

            <g filter="url(#watercolor-wash)">
              <path d="M52 1170 C56 1182 66 1184 70 1176 C72 1170 66 1162 58 1164 C50 1166 50 1170 52 1170Z" fill="#caa687" opacity="0.35" />
              <path d="M28 1176 C20 1180 18 1172 24 1168 C30 1166 32 1172 28 1176Z" fill="#a3c4b5" opacity="0.3" />
              <circle cx="56" cy="1172" r="3" fill="#253d5b" opacity="0.15" />
            </g>

            {/* BOTTOM-RIGHT: Deep vine cluster */}
            <g filter="url(#watercolor-bleed)">
              <path d="M585 1172 C580 1188 568 1190 562 1178 C558 1168 566 1156 580 1158 C592 1160 590 1168 585 1172Z" fill="#caa687" opacity="0.5" />
              <path d="M595 1165 C602 1180 598 1192 584 1188 C572 1186 576 1170 586 1162 C596 1158 598 1162 595 1165Z" fill="#caa687" opacity="0.4" />
              <path d="M572 1170 C562 1184 552 1178 558 1164 C562 1154 576 1158 580 1166 C582 1172 578 1174 572 1170Z" fill="#caa687" opacity="0.35" />
              <path d="M618 1172 C632 1176 634 1162 622 1156 C610 1152 612 1166 618 1172Z" fill="#a3c4b5" opacity="0.4" />
              <path d="M610 1184 C622 1192 624 1180 614 1174 C604 1170 606 1180 610 1184Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M562 1154 C550 1158 548 1144 560 1142 C570 1140 568 1152 562 1154Z" fill="#a3c4b5" opacity="0.3" />
            </g>

            <g filter="url(#watercolor-wash)">
              <path d="M588 1170 C584 1182 574 1184 570 1176 C568 1170 574 1162 582 1164 C590 1166 590 1170 588 1170Z" fill="#caa687" opacity="0.35" />
              <path d="M612 1176 C620 1180 622 1172 616 1168 C610 1166 608 1172 612 1176Z" fill="#a3c4b5" opacity="0.3" />
              <circle cx="584" cy="1172" r="3" fill="#253d5b" opacity="0.15" />
            </g>

            {/* ── VINES connecting corners (organic bezier curves with watercolor bleed) ── */}

            {/* Top vine - main */}
            <g filter="url(#watercolor-bleed)">
              <path d="M95 16 C140 8 200 20 260 14 C320 8 380 18 440 12 C500 6 545 14 545 14" stroke="#a3c4b5" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
              <path d="M95 22 C140 14 200 26 260 20 C320 14 380 24 440 18 C500 12 545 20 545 20" stroke="#caa687" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
              <path d="M95 10 C140 2 200 14 260 8 C320 2 380 12 440 6 C500 0 545 8 545 8" stroke="#a3c4b5" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            </g>

            {/* Bottom vine - main */}
            <g filter="url(#watercolor-bleed)">
              <path d="M95 1184 C140 1192 200 1180 260 1186 C320 1192 380 1182 440 1188 C500 1194 545 1186 545 1186" stroke="#a3c4b5" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
              <path d="M95 1178 C140 1186 200 1174 260 1180 C320 1186 380 1176 440 1182 C500 1188 545 1180 545 1180" stroke="#caa687" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
            </g>

            {/* Left vine - main */}
            <g filter="url(#watercolor-bleed)">
              <path d="M16 95 C8 160 22 240 14 320 C6 400 18 480 12 560 C6 640 16 720 10 800 C4 880 14 960 14 960" stroke="#a3c4b5" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
              <path d="M22 95 C14 160 28 240 20 320 C12 400 24 480 18 560 C12 640 22 720 16 800 C10 880 20 960 20 960" stroke="#caa687" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
            </g>

            {/* Right vine - main */}
            <g filter="url(#watercolor-bleed)">
              <path d="M624 95 C632 160 618 240 626 320 C634 400 622 480 628 560 C634 640 624 720 630 800 C636 880 626 960 626 960" stroke="#a3c4b5" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
              <path d="M618 95 C626 160 612 240 620 320 C628 400 616 480 622 560 C628 640 618 720 624 800 C630 880 620 960 620 960" stroke="#caa687" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
            </g>

            {/* ── ORGANIC LEAVES scattered along vines (with watercolor bleed) ── */}

            {/* Top edge leaves */}
            <g filter="url(#watercolor-bleed)">
              <path d="M140 14 C132 6 130 16 140 20 C148 22 146 12 140 14Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M220 18 C214 10 210 20 220 24 C228 26 226 16 220 18Z" fill="#caa687" opacity="0.25" />
              <path d="M310 12 C302 4 300 14 310 18 C318 20 316 10 310 12Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M390 16 C384 8 380 18 390 22 C398 24 396 14 390 16Z" fill="#caa687" opacity="0.2" />
              <path d="M470 10 C462 2 460 12 470 16 C478 18 476 8 470 10Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M520 14 C514 6 510 16 520 20 C528 22 526 12 520 14Z" fill="#caa687" opacity="0.2" />
            </g>

            {/* Bottom edge leaves */}
            <g filter="url(#watercolor-bleed)">
              <path d="M140 1186 C132 1194 130 1184 140 1180 C148 1178 146 1188 140 1186Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M220 1182 C214 1190 210 1180 220 1176 C228 1174 226 1184 220 1182Z" fill="#caa687" opacity="0.25" />
              <path d="M310 1188 C302 1196 300 1186 310 1182 C318 1180 316 1190 310 1188Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M390 1184 C384 1192 380 1182 390 1178 C398 1176 396 1186 390 1184Z" fill="#caa687" opacity="0.2" />
              <path d="M470 1190 C462 1198 460 1188 470 1184 C478 1182 476 1192 470 1190Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M520 1186 C514 1194 510 1184 520 1180 C528 1178 526 1188 520 1186Z" fill="#caa687" opacity="0.2" />
            </g>

            {/* Left edge leaves */}
            <g filter="url(#watercolor-bleed)">
              <path d="M14 160 C6 168 16 170 20 160 C22 152 12 154 14 160Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M18 260 C10 268 20 270 24 260 C26 252 16 254 18 260Z" fill="#caa687" opacity="0.25" />
              <path d="M12 370 C4 378 14 380 18 370 C20 362 10 364 12 370Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M16 480 C8 488 18 490 22 480 C24 472 14 474 16 480Z" fill="#caa687" opacity="0.2" />
              <path d="M10 590 C2 598 12 600 16 590 C18 582 8 584 10 590Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M14 700 C6 708 16 710 20 700 C22 692 12 694 14 700Z" fill="#caa687" opacity="0.25" />
              <path d="M10 810 C2 818 12 820 16 810 C18 802 8 804 10 810Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M20 910 C12 918 22 920 26 910 C28 902 18 904 20 910Z" fill="#caa687" opacity="0.2" />
            </g>

            {/* Right edge leaves */}
            <g filter="url(#watercolor-bleed)">
              <path d="M626 160 C634 168 624 170 620 160 C618 152 628 154 626 160Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M622 260 C630 268 620 270 616 260 C614 252 624 254 622 260Z" fill="#caa687" opacity="0.25" />
              <path d="M628 370 C636 378 626 380 622 370 C620 362 630 364 628 370Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M624 480 C632 488 622 490 618 480 C616 472 626 474 624 480Z" fill="#caa687" opacity="0.2" />
              <path d="M630 590 C638 598 628 600 624 590 C622 582 632 584 630 590Z" fill="#a3c4b5" opacity="0.35" />
              <path d="M626 700 C634 708 624 710 620 700 C618 692 628 694 626 700Z" fill="#caa687" opacity="0.25" />
              <path d="M630 810 C638 818 628 820 624 810 C622 802 632 804 630 810Z" fill="#a3c4b5" opacity="0.3" />
              <path d="M620 910 C628 918 618 920 614 910 C612 902 622 904 620 910Z" fill="#caa687" opacity="0.2" />
            </g>

            {/* ── PAINT SPLATTER / TINY DOTS (watercolor speckles) ── */}
            <g filter="url(#paint-splatter)">
              {/* Top-left area splatter */}
              <circle cx="32" cy="14" r="2" fill="#caa687" opacity="0.3" />
              <circle cx="18" cy="28" r="1.5" fill="#a3c4b5" opacity="0.25" />
              <circle cx="70" cy="12" r="1.2" fill="#caa687" opacity="0.2" />
              <circle cx="22" cy="46" r="1" fill="#caa687" opacity="0.2" />
              <circle cx="80" cy="34" r="1.5" fill="#a3c4b5" opacity="0.2" />
              <circle cx="12" cy="12" r="0.8" fill="#253d5b" opacity="0.15" />
              <circle cx="40" cy="8" r="1" fill="#caa687" opacity="0.15" />

              {/* Top-right area splatter */}
              <circle cx="608" cy="14" r="2" fill="#caa687" opacity="0.3" />
              <circle cx="622" cy="28" r="1.5" fill="#a3c4b5" opacity="0.25" />
              <circle cx="570" cy="12" r="1.2" fill="#caa687" opacity="0.2" />
              <circle cx="618" cy="46" r="1" fill="#caa687" opacity="0.2" />
              <circle cx="560" cy="34" r="1.5" fill="#a3c4b5" opacity="0.2" />
              <circle cx="628" cy="12" r="0.8" fill="#253d5b" opacity="0.15" />

              {/* Bottom-left area splatter */}
              <circle cx="32" cy="1186" r="2" fill="#caa687" opacity="0.3" />
              <circle cx="18" cy="1172" r="1.5" fill="#a3c4b5" opacity="0.25" />
              <circle cx="70" cy="1188" r="1.2" fill="#caa687" opacity="0.2" />
              <circle cx="22" cy="1154" r="1" fill="#caa687" opacity="0.2" />
              <circle cx="12" cy="1188" r="0.8" fill="#253d5b" opacity="0.15" />

              {/* Bottom-right area splatter */}
              <circle cx="608" cy="1186" r="2" fill="#caa687" opacity="0.3" />
              <circle cx="622" cy="1172" r="1.5" fill="#a3c4b5" opacity="0.25" />
              <circle cx="570" cy="1188" r="1.2" fill="#caa687" opacity="0.2" />
              <circle cx="618" cy="1154" r="1" fill="#caa687" opacity="0.2" />
              <circle cx="628" cy="1188" r="0.8" fill="#253d5b" opacity="0.15" />

              {/* Along vines splatter */}
              <circle cx="180" cy="12" r="1" fill="#a3c4b5" opacity="0.2" />
              <circle cx="350" cy="16" r="0.8" fill="#caa687" opacity="0.15" />
              <circle cx="490" cy="10" r="1.2" fill="#a3c4b5" opacity="0.2" />
              <circle cx="180" cy="1188" r="1" fill="#a3c4b5" opacity="0.2" />
              <circle cx="350" cy="1184" r="0.8" fill="#caa687" opacity="0.15" />
              <circle cx="490" cy="1190" r="1.2" fill="#a3c4b5" opacity="0.2" />
              <circle cx="18" cy="210" r="1" fill="#a3c4b5" opacity="0.2" />
              <circle cx="12" cy="410" r="0.8" fill="#caa687" opacity="0.15" />
              <circle cx="16" cy="650" r="1" fill="#a3c4b5" opacity="0.2" />
              <circle cx="14" cy="850" r="0.8" fill="#caa687" opacity="0.15" />
              <circle cx="622" cy="210" r="1" fill="#a3c4b5" opacity="0.2" />
              <circle cx="628" cy="410" r="0.8" fill="#caa687" opacity="0.15" />
              <circle cx="624" cy="650" r="1" fill="#a3c4b5" opacity="0.2" />
              <circle cx="626" cy="850" r="0.8" fill="#caa687" opacity="0.15" />
            </g>

            {/* ── FLOWING ORGANIC DRIPS (watercolor running down) ── */}
            <g filter="url(#watercolor-soft)">
              {/* Left side drips */}
              <path d="M8 95 C8 110 10 120 6 128 C4 132 6 134 8 130 C10 124 10 110 8 95Z" fill="#a3c4b5" opacity="0.08" />
              <path d="M20 320 C20 340 22 350 18 360 C16 364 18 366 20 360 C22 350 22 340 20 320Z" fill="#caa687" opacity="0.06" />
              <path d="M12 560 C12 580 14 590 10 598 C8 602 10 604 12 598 C14 590 14 580 12 560Z" fill="#a3c4b5" opacity="0.08" />
              <path d="M18 800 C18 818 20 826 16 834 C14 838 16 840 18 834 C20 826 20 818 18 800Z" fill="#caa687" opacity="0.06" />

              {/* Right side drips */}
              <path d="M632 95 C632 110 630 120 634 128 C636 132 634 134 632 130 C630 124 630 110 632 95Z" fill="#a3c4b5" opacity="0.08" />
              <path d="M620 320 C620 340 618 350 622 360 C624 364 622 366 620 360 C618 350 618 340 620 320Z" fill="#caa687" opacity="0.06" />
              <path d="M628 560 C628 580 626 590 630 598 C632 602 630 604 628 598 C626 590 626 580 628 560Z" fill="#a3c4b5" opacity="0.08" />
              <path d="M622 800 C622 818 620 826 624 834 C626 838 624 840 622 834 C620 826 620 818 622 800Z" fill="#caa687" opacity="0.06" />
            </g>
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

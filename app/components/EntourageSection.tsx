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
        {/* ─── ORGANIC VINE & FLOWER BORDER ─── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg
            className="w-full h-full"
            viewBox="0 0 640 1200"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ── VINES (organic climbing stems) ── */}

            {/* Top vine — sweeps across with gentle undulation */}
            <path d="M40 36 C100 20 180 38 280 28 C380 18 460 34 540 24 C580 20 600 28 600 28"
              stroke="#5a7a5a" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" fill="none" />
            <path d="M40 36 C100 20 180 38 280 28 C380 18 460 34 540 24 C580 20 600 28 600 28"
              stroke="#6b8f6b" strokeWidth="1" strokeLinecap="round" opacity="0.4" fill="none" />

            {/* Bottom vine */}
            <path d="M40 1164 C100 1180 180 1162 280 1172 C380 1182 460 1166 540 1176 C580 1180 600 1172 600 1172"
              stroke="#5a7a5a" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" fill="none" />
            <path d="M40 1164 C100 1180 180 1162 280 1172 C380 1182 460 1166 540 1176 C580 1180 600 1172 600 1172"
              stroke="#6b8f6b" strokeWidth="1" strokeLinecap="round" opacity="0.4" fill="none" />

            {/* Left vine */}
            <path d="M36 40 C20 120 38 240 28 360 C18 480 34 600 24 720 C18 800 28 900 36 1000 C40 1080 32 1140 36 1164"
              stroke="#5a7a5a" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" fill="none" />
            <path d="M36 40 C20 120 38 240 28 360 C18 480 34 600 24 720 C18 800 28 900 36 1000 C40 1080 32 1140 36 1164"
              stroke="#6b8f6b" strokeWidth="1" strokeLinecap="round" opacity="0.4" fill="none" />

            {/* Right vine */}
            <path d="M604 40 C620 120 602 240 612 360 C622 480 606 600 616 720 C622 800 612 900 604 1000 C600 1080 608 1140 604 1164"
              stroke="#5a7a5a" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" fill="none" />
            <path d="M604 40 C620 120 602 240 612 360 C622 480 606 600 616 720 C622 800 612 900 604 1000 C600 1080 608 1140 604 1164"
              stroke="#6b8f6b" strokeWidth="1" strokeLinecap="round" opacity="0.4" fill="none" />

            {/* ── SECONDARY CURLING TENDRILS ── */}

            {/* Top tendrils */}
            <path d="M100 30 C90 16 78 18 82 28" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M220 34 C230 18 244 20 240 30" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M350 24 C340 8 326 10 330 22" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M470 30 C480 14 494 16 490 26" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M540 22 C532 8 520 10 524 20" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

            {/* Bottom tendrils */}
            <path d="M100 1170 C90 1184 78 1182 82 1172" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M220 1166 C230 1182 244 1180 240 1170" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M350 1176 C340 1192 326 1190 330 1178" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M470 1170 C480 1186 494 1184 490 1174" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M540 1178 C532 1192 520 1190 524 1180" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

            {/* Left tendrils */}
            <path d="M30 100 C16 90 18 78 28 82" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M24 220 C10 230 12 244 22 240" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M32 380 C18 390 20 404 30 400" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M22 520 C8 530 10 544 20 540" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M28 680 C14 690 16 704 26 700" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M24 820 C10 830 12 844 22 840" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M34 960 C20 970 22 984 32 980" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M30 1080 C16 1090 18 1104 28 1100" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

            {/* Right tendrils */}
            <path d="M610 100 C624 90 622 78 612 82" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M616 220 C630 230 628 244 618 240" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M608 380 C622 390 620 404 610 400" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M618 520 C632 530 630 544 620 540" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M612 680 C626 690 624 704 614 700" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M616 820 C630 830 628 844 618 840" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M606 960 C620 970 618 984 608 980" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M610 1080 C624 1090 622 1104 612 1100" stroke="#7a9f7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

            {/* ── LEAVES (sprouting along vines) ── */}

            {/* Top leaves */}
            <path d="M82 34 C70 26 64 32 72 38 C78 42 84 38 82 34Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M160 32 C148 22 142 30 150 36 C158 40 164 36 160 32Z" fill="#5a7a5a" opacity="0.45" />
            <path d="M252 30 C240 20 234 28 242 34 C250 38 256 34 252 30Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M330 26 C318 16 312 24 320 30 C328 34 334 30 330 26Z" fill="#5a7a5a" opacity="0.4" />
            <path d="M415 34 C403 24 397 32 405 38 C413 42 419 38 415 34Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M500 28 C488 18 482 26 490 32 C498 36 504 32 500 28Z" fill="#5a7a5a" opacity="0.45" />
            <path d="M565 26 C553 16 547 24 555 30 C563 34 569 30 565 26Z" fill="#6b8f6b" opacity="0.4" />
            <path d="M130 36 C122 28 116 34 122 40 C128 44 134 40 130 36Z" fill="#7a9f7a" opacity="0.35" />
            <path d="M290 24 C282 16 276 22 282 28 C288 32 294 28 290 24Z" fill="#7a9f7a" opacity="0.35" />
            <path d="M455 30 C447 22 441 28 447 34 C453 38 459 34 455 30Z" fill="#7a9f7a" opacity="0.35" />

            {/* Bottom leaves */}
            <path d="M82 1166 C70 1174 64 1168 72 1162 C78 1158 84 1162 82 1166Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M160 1168 C148 1178 142 1170 150 1164 C158 1160 164 1164 160 1168Z" fill="#5a7a5a" opacity="0.45" />
            <path d="M252 1170 C240 1180 234 1172 242 1166 C250 1162 256 1166 252 1170Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M330 1174 C318 1184 312 1176 320 1170 C328 1166 334 1170 330 1174Z" fill="#5a7a5a" opacity="0.4" />
            <path d="M415 1166 C403 1176 397 1168 405 1162 C413 1158 419 1162 415 1166Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M500 1172 C488 1182 482 1174 490 1168 C498 1164 504 1168 500 1172Z" fill="#5a7a5a" opacity="0.45" />
            <path d="M565 1174 C553 1184 547 1176 555 1170 C563 1166 569 1170 565 1174Z" fill="#6b8f6b" opacity="0.4" />
            <path d="M130 1164 C122 1172 116 1166 122 1160 C128 1156 134 1160 130 1164Z" fill="#7a9f7a" opacity="0.35" />
            <path d="M290 1176 C282 1184 276 1178 282 1172 C288 1168 294 1172 290 1176Z" fill="#7a9f7a" opacity="0.35" />
            <path d="M455 1170 C447 1178 441 1172 447 1166 C453 1162 459 1166 455 1170Z" fill="#7a9f7a" opacity="0.35" />

            {/* Left leaves */}
            <path d="M34 82 C26 70 32 64 38 72 C42 78 38 84 34 82Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M28 160 C20 148 26 142 32 150 C36 158 32 164 28 160Z" fill="#5a7a5a" opacity="0.45" />
            <path d="M24 260 C16 248 22 242 28 250 C32 258 28 264 24 260Z" fill="#6b8f6b" opacity="0.4" />
            <path d="M34 350 C26 338 32 332 38 340 C42 348 38 354 34 350Z" fill="#5a7a5a" opacity="0.5" />
            <path d="M22 460 C14 448 20 442 26 450 C30 458 26 464 22 460Z" fill="#6b8f6b" opacity="0.4" />
            <path d="M30 560 C22 548 28 542 34 550 C38 558 34 564 30 560Z" fill="#5a7a5a" opacity="0.5" />
            <path d="M26 680 C18 668 24 662 30 670 C34 678 30 684 26 680Z" fill="#6b8f6b" opacity="0.45" />
            <path d="M36 780 C28 768 34 762 40 770 C44 778 40 784 36 780Z" fill="#5a7a5a" opacity="0.4" />
            <path d="M24 890 C16 878 22 872 28 880 C32 888 28 894 24 890Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M32 1010 C24 998 30 992 36 1000 C40 1008 36 1014 32 1010Z" fill="#5a7a5a" opacity="0.45" />
            <path d="M28 1120 C20 1108 26 1102 32 1110 C36 1118 32 1124 28 1120Z" fill="#6b8f6b" opacity="0.4" />

            {/* Right leaves */}
            <path d="M606 82 C614 70 608 64 602 72 C598 78 602 84 606 82Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M612 160 C620 148 614 142 608 150 C604 158 608 164 612 160Z" fill="#5a7a5a" opacity="0.45" />
            <path d="M616 260 C624 248 618 242 612 250 C608 258 612 264 616 260Z" fill="#6b8f6b" opacity="0.4" />
            <path d="M606 350 C614 338 608 332 602 340 C598 348 602 354 606 350Z" fill="#5a7a5a" opacity="0.5" />
            <path d="M618 460 C626 448 620 442 614 450 C610 458 614 464 618 460Z" fill="#6b8f6b" opacity="0.4" />
            <path d="M610 560 C618 548 612 542 606 550 C602 558 606 564 610 560Z" fill="#5a7a5a" opacity="0.5" />
            <path d="M614 680 C622 668 616 662 610 670 C606 678 610 684 614 680Z" fill="#6b8f6b" opacity="0.45" />
            <path d="M604 780 C612 768 606 762 600 770 C596 778 600 784 604 780Z" fill="#5a7a5a" opacity="0.4" />
            <path d="M616 890 C624 878 618 872 612 880 C608 888 612 894 616 890Z" fill="#6b8f6b" opacity="0.5" />
            <path d="M608 1010 C616 998 610 992 604 1000 C600 1008 604 1014 608 1010Z" fill="#5a7a5a" opacity="0.45" />
            <path d="M612 1120 C620 1108 614 1102 608 1110 C604 1118 608 1124 612 1120Z" fill="#6b8f6b" opacity="0.4" />

            {/* ── FLOWERS (champagne gold blooms at corners and scattered) ── */}

            {/* TOP-LEFT flower cluster */}
            {/* Main flower - 5 petals */}
            <path d="M40 28 C36 12 28 10 24 20 C22 28 28 36 36 34 C44 32 44 26 40 28Z" fill="#caa687" opacity="0.65" />
            <path d="M32 20 C28 6 20 4 16 14 C14 22 20 30 28 28 C36 26 36 20 32 20Z" fill="#d4b896" opacity="0.55" />
            <path d="M44 18 C48 4 54 2 56 12 C58 20 52 28 46 26 C40 24 40 18 44 18Z" fill="#caa687" opacity="0.5" />
            <path d="M36 12 C40 -2 48 -4 50 6 C52 14 46 22 40 20 C34 18 34 12 36 12Z" fill="#dfc4a2" opacity="0.4" />
            <path d="M28 28 C22 16 16 14 14 24 C12 32 18 40 26 38 C32 36 32 30 28 28Z" fill="#caa687" opacity="0.45" />
            <circle cx="34" cy="22" r="3" fill="#e8d4b8" opacity="0.6" />
            <circle cx="34" cy="22" r="1.5" fill="#f0e0c8" opacity="0.7" />

            {/* Small buds */}
            <circle cx="22" cy="14" r="3" fill="#caa687" opacity="0.4" />
            <circle cx="48" cy="12" r="2.5" fill="#d4b896" opacity="0.35" />

            {/* TOP-RIGHT flower cluster */}
            <path d="M600 28 C604 12 612 10 616 20 C618 28 612 36 604 34 C596 32 596 26 600 28Z" fill="#caa687" opacity="0.65" />
            <path d="M608 20 C612 6 620 4 624 14 C626 22 620 30 612 28 C604 26 604 20 608 20Z" fill="#d4b896" opacity="0.55" />
            <path d="M596 18 C592 4 586 2 584 12 C582 20 588 28 594 26 C600 24 600 18 596 18Z" fill="#caa687" opacity="0.5" />
            <path d="M604 12 C600 -2 592 -4 590 6 C588 14 594 22 600 20 C606 18 606 12 604 12Z" fill="#dfc4a2" opacity="0.4" />
            <path d="M612 28 C618 16 624 14 626 24 C628 32 622 40 614 38 C608 36 608 30 612 28Z" fill="#caa687" opacity="0.45" />
            <circle cx="606" cy="22" r="3" fill="#e8d4b8" opacity="0.6" />
            <circle cx="606" cy="22" r="1.5" fill="#f0e0c8" opacity="0.7" />
            <circle cx="590" cy="14" r="3" fill="#caa687" opacity="0.4" />
            <circle cx="618" cy="12" r="2.5" fill="#d4b896" opacity="0.35" />

            {/* BOTTOM-LEFT flower cluster */}
            <path d="M40 1172 C36 1188 28 1190 24 1180 C22 1172 28 1164 36 1166 C44 1168 44 1174 40 1172Z" fill="#caa687" opacity="0.65" />
            <path d="M32 1180 C28 1194 20 1196 16 1186 C14 1178 20 1170 28 1172 C36 1174 36 1180 32 1180Z" fill="#d4b896" opacity="0.55" />
            <path d="M44 1182 C48 1196 54 1198 56 1188 C58 1180 52 1172 46 1174 C40 1176 40 1182 44 1182Z" fill="#caa687" opacity="0.5" />
            <path d="M36 1188 C40 1202 48 1204 50 1194 C52 1186 46 1178 40 1180 C34 1182 34 1188 36 1188Z" fill="#dfc4a2" opacity="0.4" />
            <circle cx="34" cy="1178" r="3" fill="#e8d4b8" opacity="0.6" />
            <circle cx="34" cy="1178" r="1.5" fill="#f0e0c8" opacity="0.7" />
            <circle cx="22" cy="1186" r="3" fill="#caa687" opacity="0.4" />

            {/* BOTTOM-RIGHT flower cluster */}
            <path d="M600 1172 C604 1188 612 1190 616 1180 C618 1172 612 1164 604 1166 C596 1168 596 1174 600 1172Z" fill="#caa687" opacity="0.65" />
            <path d="M608 1180 C612 1194 620 1196 624 1186 C626 1178 620 1170 612 1172 C604 1174 604 1180 608 1180Z" fill="#d4b896" opacity="0.55" />
            <path d="M596 1182 C592 1196 586 1198 584 1188 C582 1180 588 1172 594 1174 C600 1176 600 1182 596 1182Z" fill="#caa687" opacity="0.5" />
            <path d="M604 1188 C600 1202 592 1204 590 1194 C588 1186 594 1178 600 1180 C606 1182 606 1188 604 1188Z" fill="#dfc4a2" opacity="0.4" />
            <circle cx="606" cy="1178" r="3" fill="#e8d4b8" opacity="0.6" />
            <circle cx="606" cy="1178" r="1.5" fill="#f0e0c8" opacity="0.7" />
            <circle cx="618" cy="1186" r="3" fill="#caa687" opacity="0.4" />

            {/* ── SCATTERED FLOWERS ALONG EDGES ── */}

            {/* Top edge scattered flowers */}
            <circle cx="100" cy="28" r="3.5" fill="#caa687" opacity="0.35" />
            <circle cx="200" cy="32" r="2.5" fill="#d4b896" opacity="0.3" />
            <circle cx="300" cy="24" r="4" fill="#caa687" opacity="0.35" />
            <circle cx="400" cy="30" r="2.5" fill="#d4b896" opacity="0.3" />
            <circle cx="500" cy="26" r="3.5" fill="#caa687" opacity="0.3" />

            {/* Bottom edge scattered flowers */}
            <circle cx="100" cy="1172" r="3.5" fill="#caa687" opacity="0.35" />
            <circle cx="200" cy="1168" r="2.5" fill="#d4b896" opacity="0.3" />
            <circle cx="300" cy="1176" r="4" fill="#caa687" opacity="0.35" />
            <circle cx="400" cy="1170" r="2.5" fill="#d4b896" opacity="0.3" />
            <circle cx="500" cy="1174" r="3.5" fill="#caa687" opacity="0.3" />

            {/* Left edge scattered flowers */}
            <circle cx="28" cy="130" r="3" fill="#caa687" opacity="0.3" />
            <circle cx="22" cy="290" r="3.5" fill="#d4b896" opacity="0.3" />
            <circle cx="34" cy="430" r="2.5" fill="#caa687" opacity="0.35" />
            <circle cx="24" cy="580" r="3" fill="#d4b896" opacity="0.3" />
            <circle cx="30" cy="730" r="3.5" fill="#caa687" opacity="0.3" />
            <circle cx="26" cy="870" r="2.5" fill="#d4b896" opacity="0.35" />
            <circle cx="34" cy="1020" r="3" fill="#caa687" opacity="0.3" />
            <circle cx="28" cy="1140" r="3.5" fill="#d4b896" opacity="0.3" />

            {/* Right edge scattered flowers */}
            <circle cx="612" cy="130" r="3" fill="#caa687" opacity="0.3" />
            <circle cx="618" cy="290" r="3.5" fill="#d4b896" opacity="0.3" />
            <circle cx="606" cy="430" r="2.5" fill="#caa687" opacity="0.35" />
            <circle cx="616" cy="580" r="3" fill="#d4b896" opacity="0.3" />
            <circle cx="610" cy="730" r="3.5" fill="#caa687" opacity="0.3" />
            <circle cx="614" cy="870" r="2.5" fill="#d4b896" opacity="0.35" />
            <circle cx="606" cy="1020" r="3" fill="#caa687" opacity="0.3" />
            <circle cx="612" cy="1140" r="3.5" fill="#d4b896" opacity="0.3" />

            {/* ── GENTLE LEAF STREWN (fallen petals/dots) ── */}
            <circle cx="120" cy="50" r="1.2" fill="#caa687" opacity="0.2" />
            <circle cx="310" cy="42" r="0.8" fill="#6b8f6b" opacity="0.2" />
            <circle cx="440" cy="48" r="1" fill="#caa687" opacity="0.15" />
            <circle cx="120" cy="1152" r="1.2" fill="#caa687" opacity="0.2" />
            <circle cx="310" cy="1158" r="0.8" fill="#6b8f6b" opacity="0.2" />
            <circle cx="440" cy="1152" r="1" fill="#caa687" opacity="0.15" />
            <circle cx="52" cy="150" r="0.8" fill="#caa687" opacity="0.2" />
            <circle cx="46" cy="440" r="1" fill="#6b8f6b" opacity="0.15" />
            <circle cx="56" cy="740" r="0.8" fill="#caa687" opacity="0.2" />
            <circle cx="50" cy="1040" r="1" fill="#6b8f6b" opacity="0.15" />
            <circle cx="588" cy="150" r="0.8" fill="#caa687" opacity="0.2" />
            <circle cx="594" cy="440" r="1" fill="#6b8f6b" opacity="0.15" />
            <circle cx="584" cy="740" r="0.8" fill="#caa687" opacity="0.2" />
            <circle cx="590" cy="1040" r="1" fill="#6b8f6b" opacity="0.15" />
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

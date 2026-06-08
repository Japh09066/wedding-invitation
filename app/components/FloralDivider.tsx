'use client';

import { motion } from 'framer-motion';

interface FloralDividerProps {
  variant?: 'default' | 'small' | 'large';
}

export default function FloralDivider({ variant = 'default' }: FloralDividerProps) {
  const width = variant === 'small' ? 140 : variant === 'large' ? 280 : 200;
  const height = variant === 'small' ? 24 : variant === 'large' ? 48 : 36;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex justify-center py-6 md:py-8"
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Left vine */}
        <path
          d={`M 0 ${height / 2} Q ${width * 0.15} ${height * 0.3} ${width * 0.35} ${height / 2}`}
          stroke="#c9a88e"
          strokeWidth="1"
          strokeOpacity="0.5"
          fill="none"
        />
        {/* Right vine */}
        <path
          d={`M ${width} ${height / 2} Q ${width * 0.85} ${height * 0.3} ${width * 0.65} ${height / 2}`}
          stroke="#c9a88e"
          strokeWidth="1"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* Center flower - rose */}
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {/* Outer petals */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx={0}
              cy={0}
              rx="4"
              ry="7"
              fill="#d4a373"
              fillOpacity="0.6"
              transform={`rotate(${angle}) translate(0, -4)`}
            />
          ))}
          {/* Inner petals */}
          {[30, 90, 150, 210, 270, 330].map((angle) => (
            <ellipse
              key={`inner-${angle}`}
              cx={0}
              cy={0}
              rx="3"
              ry="5"
              fill="#c9a88e"
              fillOpacity="0.5"
              transform={`rotate(${angle}) translate(0, -3)`}
            />
          ))}
          {/* Center */}
          <circle cx="0" cy="0" r="3" fill="#d4a373" fillOpacity="0.8" />
        </g>

        {/* Left small flower */}
        <g transform={`translate(${width * 0.25}, ${height * 0.35})`}>
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(0)" />
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(72)" />
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(144)" />
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(216)" />
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(288)" />
          <circle cx="0" cy="0" r="2" fill="#d4a373" fillOpacity="0.7" />
        </g>

        {/* Right small flower */}
        <g transform={`translate(${width * 0.75}, ${height * 0.35})`}>
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(36)" />
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(108)" />
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(180)" />
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(252)" />
          <ellipse cx="0" cy="-3" rx="2.5" ry="4" fill="#f2d5d5" fillOpacity="0.7" transform="rotate(324)" />
          <circle cx="0" cy="0" r="2" fill="#d4a373" fillOpacity="0.7" />
        </g>

        {/* Light leaves along vines */}
        <ellipse cx={width * 0.12} cy={height * 0.45} rx="4" ry="2" fill="#a3c4b5" fillOpacity="0.5" transform={`rotate(-30, ${width * 0.12}, ${height * 0.45})`} />
        <ellipse cx={width * 0.88} cy={height * 0.45} rx="4" ry="2" fill="#a3c4b5" fillOpacity="0.5" transform={`rotate(30, ${width * 0.88}, ${height * 0.45})`} />
      </svg>
    </motion.div>
  );
}

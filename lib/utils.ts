import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { visit } from "unist-util-visit"; // Utility for traversing AST


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReadTime(ast) {
  let textContent = ""; // Concatenate all text nodes
  visit(ast, "text", (node) => {
    textContent += node.text;

  });

  const wordCount = textContent.split(/\s+/).filter(Boolean).length; // Count non-empty words
  const wordsPerMinute = 100; // Average reading speed
  const readTime = Math.ceil(wordCount / wordsPerMinute); // Round up to the nearest minute

  return `${readTime || 1} min read`; // Ensure at least 1 minute
}


export function getRandomNeoBrutalistColor() {
  const randomHue = Math.floor(Math.random() * 360); // Hue ranges from 0 to 360
  const saturation = 100; // Full saturation for vibrancy
  const lightness = Math.floor(Math.random() * 40) + 60; // Lightness between 60% and 100%

  // Convert to HSL format and then to HEX
  const hsl = `hsl(${randomHue}, ${saturation}%, ${lightness}%)`;
  return hslToHex(randomHue, saturation, lightness);
}

// Convert HSL to HEX
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}